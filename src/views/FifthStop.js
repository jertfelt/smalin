
import {  useState } from "react";
import MapStudio from "../components/MapStudio";

const FifthStop = () => {
  const [firstButt, setFirstButt] = useState(true);
  const [secondButt, setSecondButt] = useState(true);
  const [firstButtValue, setFirstButtValue] = useState("Klicka på mig!")
  const [secondButtValue, setSecondButtValue] = useState("Nej, på mig!")
  const [showFirstChoice, setShowFirstChoice] = useState(false);
  const [showSecondChoice, setShowSecondChoice] = useState(false);
  const [randomAmount, setRandomAmount] = useState("1")
  const [showMap, setShowMap] = useState(false)
  const [showActualMap, setShowActualMap] = useState(false);
  const [clue, setClue] = useState("...")
  const initialCounterValue = 1;
  const [counter, setCount] = useState(initialCounterValue)
  const [ledtradButt, setLedtradButt] = useState("Visa ledtråd")
  const clues =[{id:1, clue: "Sten"}, {id:2, clue: "Kroppslig vätska"}, {id:3, clue: "Tova"}, {id:4, clue:"Lego"}, {id:5, clue:"Målarfärg"}];
 
  const firstButtFunc= () => {
    setSecondButt(false);
    setFirstButtValue("MUCHAS GRACIAS")
    setShowFirstChoice(true);
    let newAmount = Math.floor(Math.random() * 4)
    setRandomAmount(newAmount)
    setShowMap(true)
  }

  const secondButtFunc = () => {
    setFirstButt(false);
    setSecondButtValue("Hurra du klickade på mig <3")
    setShowSecondChoice(true)
    let newAmount = Math.floor(Math.random() * 8)
    setRandomAmount(newAmount)
    setShowMap(true)
  }

  const showclue = () => {
    setCount(counter + 1)
    switch(counter) {
      case 0:
      setLedtradButt("Visa ledtråd")
      break;
      case 1 :
      setLedtradButt("Klicka!")
      break;
      case 2: 
      setLedtradButt("En till ledtråd")
      break;
      case 3:
        setLedtradButt("EN TILL TACK")
      break;
      case 4:
        setLedtradButt("En sista ledtråd?")
        break;
      default:
        setLedtradButt("Slut på nya ledtrådar!")
    }
    const filteredClue = clues.map(item => {
      if (item.id === counter){
        setClue(item.clue);
      }
    })
  }

  return (
  <div className="fifthStop">
    <h1 className="really-big-text uncial">Stopp #5</h1>
    <h3 className="bree">Nu har ni två val:</h3>
    {firstButt ? 
    <button onClick={firstButtFunc}>{firstButtValue}</button>
    :null}
    {secondButt ? 
    <button onClick={secondButtFunc}>{secondButtValue}</button>
  :null }
    {showFirstChoice ? 
    <div className="fifthStop__content">
      <h3 className="bree">Simon får -{randomAmount+1} i Styrka. Det kommer han behöva tror vi.</h3>
      <h3 className="bree">Malin får +{randomAmount+3 } i Styrka, för obvious reasons.</h3>
      <h3 className="really-big-text uncial">Nu ska ni hit:</h3>
    </div>
    :null}
    {showSecondChoice ?
     <div className="fifthStop__content">
      <h3 className="bree">Malin får {randomAmount+1} poäng att fördela till exakt vad hon vill. </h3>
      <h3 className="bree">Simon får + {randomAmount+4} HP.</h3>
      <h3 className="really-big-text uncial">Nu ska ni hit:</h3>
     </div>
  :null}
  {showMap ? 
  <div className="fifthStop__quest">
    <h3 className="normal-text uncial">Ledtråd: {clue}</h3>
    <button 
    onClick={showclue}>{ledtradButt}</button>
    <button onClick={() => setShowActualMap(true)}> Tror ni att ni vet vart ni ska?</button>
    
  </div>
   :null}
  {showActualMap ? <div>
  <MapStudio></MapStudio>
  <h2 className="really-big-text uncial">
    Kom ihåg:
  </h2>
  <h3 className="bree">Har ni alla items?</h3>
  <h3 className="bree">Har ni fyllt i alla poäng?</h3>
  <h3 className="bree">Ni närmar er..</h3>
  <img src="https://media3.giphy.com/media/TcdpZwYDPlWXC/200.gif"
  alt="Gandalf digs"></img>
  <h3 className="really-big-text uncial">Point of no return</h3>
 
  </div>
  :null}
  </div>  );
}
 
export default FifthStop;