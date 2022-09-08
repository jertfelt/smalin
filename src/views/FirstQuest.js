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
  const svar3= "Än"
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
  <div>
    <h1 className="really-big-text" >Första etappen:</h1>
    <span className="firstQuest--firstSpan">
      <p className="bree normal-text">Ni ska träffa en speciell person på Güntherska. Denna person kommer ge er ett uppdrag. När ni är färdiga med uppdraget, fyll i nedan formulär: </p>
    </span>
    {showResults ?
    <div className="reveal--answer reveal--right above">
      <h2 className="really-big-text">Ni svarade: </h2>
      <h3 className="normal-text">
        {fordon}, {fontValue}, {synonym}
      </h3>
      <h2 className="really-big-text">De rätta svaren är:
      </h2>
      <span>
        <h3>1. Typsnitt: {svar1}</h3>
        <h3>2. Synonym: {svar3}</h3>
        <span className="rightambulans">
        <h3>3.</h3>
          <img src={ambulans}
          className="smallImg"
          alt="Ambulans"></img>
          </span>
      </span>
      <span className="reveal__buttonList">
      <h3 className="bree">Kan ni lista ut vart ni ska nu? Annars kika här:</h3>
      <button onClick={revealMap} className="bree" >Kolla kartan</button>
      {showMap ? 
      <div className="bree reveal__map">
        <MapFountain />
        <button onClick={closeMap}
        className="bree"> Stäng kartan!</button>
        <button className="next bree"> <Link to="/second-quest"
          className="bree">
          Framme? Klicka här!
          </Link>
        </button>
       
      </div> :null }
      <button className="next bree"> 
          <Link to="/second-quest"
          className="bree">Här är nästa steg!
          </Link>
        </button>
        <button onClick={restart} className="bree">Gör om testet</button>
        </span>
    </div>
    :null}
   
    <form onSubmit={checkForAnswers}
    className="firstQuest--form pacifico">
      <span>
      <label>
        <h3>Vad är synonymt för ordet FORTFARANDE?</h3></label>
      <select 
      onChange={e => setSynonymValue(e.target.value)}
      name="synonym">
        <option value="Snabb">Snabb</option>
        <option value="Pågå">Pågå</option>
        <option value="Ännu">Än</option>
        <option value="Fortsätta">Fortsätta</option>
      </select>
    </span>

    <span>
    <label><h3>Vad är typsnitt på engelska egentligen?</h3></label>
    <input type="text"
    name="typsnitt"
    value = {fontValue}
    onChange={(e) => setFontValue(e.target.value)}
    placeholder="JA, VAD HETER DET?"></input> 
    </span>
    <span>


    <div className="cc-selector">
      <h3>Välj ett fordon:</h3>
      <div className="grid--fordon">
        <span>
        <input 
        id="volvo" 
        type="radio" 
        name="fordon" 
        value="volvo"
        onChange={e => setFordonValue(e.target.value)} />
        <label 
        className="drinkcard-cc 
        volvo" 
        htmlFor="volvo">
        </label>
        </span>
        <span>
        <input 
        id="ambulans" 
        type="radio" 
        name="fordon" 
        value="Ambulans" 
        onChange={e => setFordonValue(e.target.value)}/>
        <label className="drinkcard-cc ambulans"
        htmlFor="ambulans">

        </label>
        </span>
        <span>
        <input 
        id="cykel" 
        type="radio" 
        name="fordon" 
        value="cykel" 
        onChange={e => setFordonValue(e.target.value)}/>
        <label className="drinkcard-cc cykel"
        htmlFor="cykel">
        </label>
        </span>
        <span>
        <input 
        id="horse" 
        type="radio" 
        name="fordon" 
        value="häst"
        onChange={e => setFordonValue(e.target.value)} />
        <label 
        className="drinkcard-cc horse"
        htmlFor="horse">
        </label>
        </span>
        <span>
        <input 
        id="brandbil" 
        type="radio" 
        name="fordon" 
        value="brandbil" 
        onChange={e => setFordonValue(e.target.value)}/>
        <label className="drinkcard-cc brandbil"
        htmlFor="brandbil">
        </label>
        </span>
        </div>
    </div>

    </span>    
    <input type="submit" 
    value="Smäll iväg svaren"/>
  </form>
  <div class="reveal--answer">
  <p className="bree error">{errormessage}</p>
  </div>
  
  
    
  </div> );
}
 
export default FirstQuest;