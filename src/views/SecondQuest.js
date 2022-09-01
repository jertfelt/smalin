import { useEffect, useState } from "react";
import PasswordPrompt from "../components/PasswordPrompt";

const SecondQuest = (props) => {
  const [revealSecondPage, setRevealSecondPage]= useState(false);
  const [hidePasswordPrompt, setPasswordPrompt] = useState(true);
  


  setRevealSecondPage(true);

  return ( <div className="second-quest">
    <div>
      <article>
        <h1 className="really-big-text" >Andra etappen:</h1>
        {hidePasswordPrompt ?
        <span>
        
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