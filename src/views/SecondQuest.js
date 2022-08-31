import { useState } from "react";

const SecondQuest = () => {
  const [password, setPassword] =useState("")
  const checkPassword = () => {

  }

  return ( <div className="second-quest">
    <div>
      <article>
        <h1 className="really-big-text" >Andra etappen:</h1>
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
            
          </form>
        </span>
      </article>
    </div>
  </div> );
}
 
export default SecondQuest;