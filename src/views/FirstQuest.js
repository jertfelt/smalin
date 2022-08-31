import { Link } from "react-router-dom";
import { useState, useEffect} from "react";

const FirstQuest = () => {
  const [showResults, setShowResults] = useState(false);
 
  const svar1 = " FONT"
  const svar3= "ÄN är synonym till fortfarande"
  const svar2img = require("../assets/amb_VW_Crafter_-2020_UL.jpg");


  
  const restart = () => {
    setShowResults(false);
  }

  
  return ( 
  <div className="first-quest-container">
    <h1 className="really-big-text" >Första etappen:</h1>
    <span>
      <p className="Bree font--20">Ni ska träffa en speciell person på Güntherska. Denna person kommer ge er ett uppdrag. När ni är färdiga med uppdraget, fyll i nedan formulär: </p>
    </span>

    <div className="resultat">
      <h1>De rätta svaren är:</h1>
      <span className="column">
        <h3>1.{svar1}</h3>
        <h3>2. {svar3}</h3>
        <div className="row">
        <h3>3.</h3>
          <img src={svar2img}
          className="smallImg"
          alt="Ambulans"></img></div>
      </span>
      <p className="Bree font--20">Kan ni lista ut vart ni ska nu? Annars så hittar er följeslagare vägen.</p>
    </div>
   
    <form className="first-quest-form column">
    <h2>Hoppas ni svarar rätt! </h2>
    <label>Vad heter typsnitt på engelska?</label>
    <input type="text"
    placeholder="JA, VAD HETER DET?"></input>
    <label>Välj ett fordon:</label>
    <select>
    <option value="Bil">En vanlig Volvo</option>
    <option value="Polisbil">Flygplan</option>
    <option value="Flygplan">Flygplan</option>
    <option value="Ambulans">Ambulans</option>
    <option value="Cykel">Cykel</option>
    <option value="Häst">Häst</option>
    <option value="Brandbil">Brandbil</option>
    </select>
    <label>Vad är synonym för ordet fortfarande?</label>
    <select>
      <option value="Snabb">Snabb</option>
      <option value="Pågå">Pågå</option>
      <option value="Ännu">Än</option>
      <option value="Fortsätta">Fortsätta</option>
    </select>
    <input type="submit" 
    value="Smäll iväg svaren"></input>
    </form>
    <button onClick={{restart}} classname="restart">Gör om</button>
    
  </div> );
}
 
export default FirstQuest;