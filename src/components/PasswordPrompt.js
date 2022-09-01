import {  useState } from "react";

const PasswordPrompt = (answer) => {
  const [password, setPassword] = useState("")
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [isCorrect, setIsCorrect] = useState(false)


const rightAnswer = "";

 const checkPassword = (e) => {
  e.preventDefault();
  if (password === ""){
    setPasswordErrorMsg("Ni måste fylla i fältet. Det bör inte vara så svårt.")
  }
  else if(password === rightAnswer){
    setPasswordErrorMsg("");
    setIsCorrect(true);
  }
  else {
    setPasswordErrorMsg("Vad puttenuttigt... MEN DET ÄR FEL");
  }
}


  return ( 
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
   );
}
 
export default PasswordPrompt;