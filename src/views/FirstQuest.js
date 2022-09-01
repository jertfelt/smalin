import { Link } from "react-router-dom";
import { useState} from "react";
import MapFountain from "../components/MapFountain";
const FirstQuest = () => {
  const [showResults, setShowResults] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const [fordon, setFordonValue] = useState("");
  const [fontValue, setFontValue] = useState("");
  const [synonym, setSynonymValue] = useState("");
  const [errormessage, setErrorMessage] = useState("")
  

  const svar1 = "FONT"
  const svar3= "ÄN "
  const svar2 = "Ambulans"
  

  const checkForAnswers = (e) => {
    e.preventDefault();
    
    if (fordon === "" || fontValue === "" || synonym === "" ){
     setErrorMessage("Hallå, ni har glömt något av fälten.")
    }
    else {
      if (fordon === svar2) {
        setShowResults(true);
        setErrorMessage("")
      }
      else {
        setErrorMessage("Hm. Vilket fordon var det nu igen som ni skulle välja?")
      }
    }
   
  }

  const revealMap = () => {
    setShowMap(true)
  }
  const closeMap = () => {
    setShowMap(false)
  }
  
  const restart = () => {
    setShowResults(false);
  }

  const ambulans = require("../assets/amb_VW_Crafter_-2020_UL.jpg");
  
  return ( 
  <div className="first-quest-container">
    <h1 className="really-big-text" >Första etappen:</h1>
    <span>
      <p className="Bree font--20">Ni ska träffa en speciell person på Güntherska. Denna person kommer ge er ett uppdrag. När ni är färdiga med uppdraget, fyll i nedan formulär: </p>
    </span>
    {showResults ?
    <div className="resultat above">
      <h2>Ni svarade: </h2>
      <h3>
        {fordon}, {fontValue}, {synonym}
      </h3>
      <h2>De rätta svaren är:
      </h2>
      <span className="column">
        <h3>1. Typsnitt:  {svar1}</h3>
        <h3>2. Synonym: {svar3}</h3>
        <div className="row">
        <h3>3.</h3>
          <img src={ambulans}
          className="smallImg"
          alt="Ambulans"></img></div>
      </span>
      <p className="Bree font--20">Kan ni lista ut vart ni ska nu? Annars kika här:</p>
      <button onClick={revealMap} className="Bree" >Kolla kartan</button>
      {showMap ? 
      <div className="Bree">
        <MapFountain />
        <button onClick={closeMap}> Stäng kartan!</button>
        <button className="next Bree"> <Link  to="/second-quest">Framme? Klicka här!
          </Link></button>
       
      </div> :null }
      <button className="next Bree "> 
          <Link to="/second-quest">Här är nästa steg!
          </Link>
        </button>
        <button onClick={restart} className="restart Bree">Gör om testet</button>
    </div>:null}
   
    <form onSubmit={checkForAnswers}
    className="first-quest-form ">
      <div>
      <label>Vad är synonym för FORTFARANDE?</label>
    <select 
    onChange={e => setSynonymValue(e.target.value)}
    name="synonym">
      <option value="Snabb">Snabb</option>
      <option value="Pågå">Pågå</option>
      <option value="Ännu">Än</option>
      <option value="Fortsätta">Fortsätta</option>
    </select>
    <label >Vad heter typsnitt på engelska?</label>
    <input type="text"
    name="typsnitt"
    value = {fontValue}
    onChange={(e) => setFontValue(e.target.value)}
    placeholder="JA, VAD HETER DET?"></input> 

    <label >Välj ett fordon:</label>
  
    <select 
    name="fordon"
    onChange={e => setFordonValue(e.target.value)}>
    <option value="Bil">En vanlig volvo</option>
    <option value="Ambulans">Ambulans</option>
    <option value="Cykel">Cykel</option>
    <option value="Häst">Häst</option>
    <option value="Brandbil">Brandbil</option>
    </select>

    
    <input type="submit" 
    className="sendFirst"
    value="Smäll iväg svaren">

    </input>
    
     
   
      </div>
      </form>
      <p className="center Bree font--20">{errormessage}</p>
  
    
  </div> );
}
 
export default FirstQuest;