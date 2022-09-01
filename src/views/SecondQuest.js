import { useState } from "react";


const SecondQuest = (props) => {
  const [revealSecondPage, setRevealSecondPage]= useState(false);
  const [hidePasswordPrompt, setPasswordPrompt] = useState(true);
  const [password, setPassword] = useState("")
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");

  const rightAnswer = "";

  const checkPassword = (e) => {
  e.preventDefault();
  if (password === ""){
     setPasswordErrorMsg("Ni måste fylla i fältet. Det bör inte vara så svårt.")
  }
  else if(password === rightAnswer){
     setPasswordErrorMsg("");
     setRevealSecondPage(true);
  }
  else {
     setPasswordErrorMsg("Vad puttenuttigt... MEN DET ÄR FEL");
  }
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
      </article>
      {revealSecondPage ?
      <article className="revealedSecond">
        <div className="second-quest-container">
          
        </div>
      </article>:null}
    </div>
  </div> );
}
 
export default SecondQuest;