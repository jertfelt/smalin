import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import MapThirdStop from "../components/MapThirdStop";

const SecondQuest = (props) => {
  const [hidePasswordPrompt, setPasswordPrompt] = useState(true);
  const [showSecondPage, setShowSecondPage] = useState(false);
  const [password, setPassword] = useState("")
  const [rightAnswer, setRightAnswer] = useState("")
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");

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
  if (password === ""){
     setPasswordErrorMsg("Ni måste fylla i fältet. Det bör inte vara så svårt.")
  }
  else if(password === rightAnswer){
     setPasswordErrorMsg("");
     setShowSecondPage(true);
     setPasswordPrompt(false);
     console.log("Är det rätt svar?")
  }
  else {
     setPasswordErrorMsg("Vad puttenuttigt... MEN DET ÄR FEL");
  }
 }
 
 const closeMap = () => {

 }

  return ( <div className="second-quest">
    <div>
      <article>
        <h1 className="really-big-text" >Andra etappen:</h1>
        {hidePasswordPrompt ?
        <span>
           <span>
        <h2>Access denied!</h2>
          <p className="Bree font--20">
            Vad är lösenordet?
          </p>
          <form onSubmit={checkPassword}
          className="password">
            <input type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Gissa? Pfft.">
            </input>
            <input type="submit"
            className="sendFirst Bree"
            value="Skicka"></input>
          </form>
          <div>
          <h2> {passwordErrorMsg}</h2> 
          </div>
    </span>
        
        </span> :null}
     

      {showSecondPage ?
      <article className="revealedSecond">
        <h2 className="Bree">Dags att bli farliga</h2>  
        <div className="second-quest-container">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Ocelot_%28Leopardus_pardalis%29-8.jpg"
          alt="En ozelot!"
          className="img--round"></img>
        <div className="mapContainer--notabove Bree">
          <MapThirdStop />
        <button onClick={closeMap}> Stäng kartan!</button>
        <button className="next Bree"> <Link  to="/third-stop">Framme? Klicka här!
          </Link></button>

        </div>
      
        </div>
      </article> :null}
      </article>
    </div>
  </div> );
}
 
export default SecondQuest;