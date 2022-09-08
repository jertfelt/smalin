import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import MapThirdStop from "../components/MapThirdStop";

const SecondQuest = (props) => {
  const [hidePasswordPrompt, setPasswordPrompt] = useState(true);
  const [showSecondPage, setShowSecondPage] = useState(false);
  const [password, setPassword] = useState("")
  const [rightAnswer, setRightAnswer] = useState("")
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
   }
   const handleMouseOut = () => {
    setIsHovering(false);
   }

  useEffect(() => {
    fetch("../data/passwords.json", {
      method:"GET",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((data) => {
      
    let newData = data.passwords; 
    newData.forEach(item => {
      if(item.id === 2){
        setRightAnswer(item.word)
      }
    })
    
    
  })
    .catch((err) => {
      console.log(err.message)
    })
  }, [])

  // console.log("Rätt svar är:" + rightAnswer)
  

  const checkPassword = (e) => {
  e.preventDefault();
  
  if (password.toUpperCase() === ""){
     setPasswordErrorMsg("Ni måste fylla i fältet. Det bör inte vara så svårt.")
  }
  else if(password.toUpperCase() === rightAnswer){
     setPasswordErrorMsg("");
     setShowSecondPage(true);
     setPasswordPrompt(false);
     console.log("Är det rätt svar?")
  }
  else {
     setPasswordErrorMsg("Vad puttenuttigt... MEN DET ÄR FEL");
  }
 }


  return ( <div className="secondQuest">
    <div>
      <article>
        <h1 className="really-big-text" >Andra etappen:</h1>
        {hidePasswordPrompt ?
        <>
        <span>
        <h2 className="denied bree">Access denied!</h2>
          <p className="bree">
            Vad är lösenordet?
          </p>
          <form onSubmit={checkPassword}
          className="secondQuest__password">
            <input type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Gissa? Pfft.">
            </input>
            <input type="submit"
            className="sendFirst bree"
            value="Skicka"></input>
          </form>
          <div>
          <h3> {passwordErrorMsg}</h3> 
          </div>
        </span>
        
        </> :null}
     

      {showSecondPage ?
      <article className="secondQuest__revealed">
        <div className="secondQuest__revealed--container">
          <div className="secondQuest__revealed--ozelot">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Ocelot_%28Leopardus_pardalis%29-8.jpg"
          alt="En ozelot!"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          />
          {isHovering && (
            <div className="ozelot--wrapper">
            <div className="ozelot">
              <h2>Mwrello!</h2>
         
              </div>
              </div>
          )}
          </div>
        <div className="mapcontainer bree">
          <MapThirdStop />
        </div>
        </div>
      </article> :null}
      </article>
    </div>
  </div> );
}
 
export default SecondQuest;