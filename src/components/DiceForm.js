import { useState } from "react";
import MapForest from "./Mapforest";
import { Link } from "react-router-dom";
const DiceForm = () => {
  const [message, setMessage] = useState("")
  const [gym, setGymValue] = useState("")
  const [forestry, setForestryValue] = useState("")
  const [show, setShow] =useState(false)
  const [showForest, setShowForest] = useState(false);
  const checkAnswer = (e) => {
    e.preventDefault();
    setShow(true);
    console.log(gym)
    console.log(forestry)
    if (gym === "" || forestry === ""){
      setMessage("Hallå, ni måste svara")
    }
    if (gym === "Klockan"){
      setMessage(`Ni valde: ${gym}. Det var väl kanske ärligt talat inte det mest kreativa svaret. -1 i humor till Malin.`)
    }
    if (gym === "gårman"){
      setMessage(`Ni valde: ${gym}. Visst är det synd om övergångs-gubben? Du får medlidande för gubben. -1 i intelligens till Simon.`)
    }
    if (gym === "Crosstrain"){
      setMessage(`Ni valde: ${gym}er-idioten. Bra svar! 10/10 i gåtgissning! +1 i styrka till er båda`)
    }
    
  }
  return (  <>
    <form onSubmit={checkAnswer} className="dice__forms">
      <label>
        <h3 className="bree">Vad går och går och kommer aldrig fram till dörren?</h3>
      </label>
      <select 
      onChange={e => setGymValue(e.target.value)}
      name="gym"
      className="bree">
        <option value="">Välj något</option>
        <option value="Klockan">Klockan</option>
        <option value="gårman">Herr gårman</option>
        <option value="Crosstrain">Crosstrainer-idioten</option>
        
      </select>
      <label>
        <h3 className="bree">Hur långt in i skogen kan man springa?</h3>
      </label>
      <select 
      onChange={e => setForestryValue(e.target.value)} className="bree"
      name="gym">
        <option value="">Välj något</option>
        <option value="mitten">Till mitten, sedan springer man ju ut igen.</option>
      </select>
      <input type="submit" 
      className="bree"
      value="Gissa!"/>
    </form>
      <div className="dice--msg">
      <p>{message}</p>
     
      </div>
      {show?
      <div className="dice__forest">
        <h2 className="uncial normal-text">Nu har ni fått ledtrådar:</h2>
        <span className="dice__forest--h3">
        <h3>1</h3></span>
        <img src="https://www.uppsala.se/globalassets/bildspel/kultur-och-fritid/friluftsomraden/stadsskogens-naturreservat/stadsskogens-naturreservat_01.jpg?format=webp&width=600&quality=80" alt="Skog"></img>
        <span className="dice__forest--h3">
        <h3>2</h3></span>
        <img src ="https://c.tenor.com/RWhrJC3cCaIAAAAd/combal-la-grande-incruste.gif" alt="Aerobics"
        ></img>
        <span className="dice__forest--h3">
        <h3>3</h3></span>
        <img src="https://www.skistar.com/globalassets/bilder-nya-skistar.com/experium/gym.jpg?maxwidth=1400&quality=80" alt="Gym"></img>
        <article className="dice__forest--guess">
        <h2 className="uncial normal-text">Vet ni vart ni ska?</h2>
        <button onClick={() => setShowForest(true)}>JA</button>
        <button onclick={() => setShowForest(true)}>NEJ</button>
        </article>
        <div className="dice__last">
          {showForest ? 
          <>
          <MapForest/>
          <button className="bree"> <Link to="/femtesmaller">Framme? Klicka här!
          </Link></button>
          </>
          :null}
        </div>
      </div>
      :null}
      </>
  );
}
 
export default DiceForm;