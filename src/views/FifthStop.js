import { useState } from "react";
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
      <h3 className="bree">Simon får +{randomAmount} i Styrka. Det kommer han behöva tror vi.</h3>
      <h3 className="bree">Malin får {randomAmount+3 } i Styrka, för obvious reasons.</h3>
      <h3 className="really-big-text uncial">Nu ska ni hit:</h3>
    </div>
    :null}
    {showSecondChoice ?
     <div className="fifthStop__content">
      <h3 className="bree">Malin får två tredjedelar av {randomAmount} att fördela till exakt vad hon vill. </h3>
      <h3 className="bree">Simon får {randomAmount+2} i HP.</h3>
      <h3 className="really-big-text uncial">Nu ska ni hit:</h3>
     </div>
  :null}
  <div className="fifthStop__quest">
    <h3 className="normal-text uncial">Ledtråd:</h3>
    <p>Sten + Kroppslig vätska</p>

    
  </div>
  {showMap ? 
  <MapStudio></MapStudio>
  :null}
  </div>  );
}
 
export default FifthStop;