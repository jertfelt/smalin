import { useState} from "react";
import DiceForm from "./DiceForm"
const Dice = () => {
  const [firstDie, setDiceResult] = useState(2)
  const [secondDie, setSecondDiceResult] = useState(1);
  const [success, setSuccess] = useState(false);
  const [dieMsg, setDieMsg] = useState("");

  const firstDieImg = require(`../assets/dice/${firstDie}.png`)
  const secondDieImg = require(`../assets/dice/${secondDie}.png`)

  const rulla = () => {
    setDiceResult(Math.floor(Math.random()*6)+1);
    setSecondDiceResult(Math.floor(Math.random()*6)+1);

    switch(firstDie + secondDie) {
        case 2: 
        console.log("resultat", firstDie + secondDie)
        setDieMsg("rulla igeeeeeeeen")
        break;
        case 3:
          console.log("resultat", firstDie + secondDie)
          setDieMsg("Rulla igen")
        break;
        case 4:
          console.log("resultat", firstDie + secondDie)
          setSuccess(true);
              setDieMsg("Perfekt resultat!")
        break;
        case 5:
          console.log("resultat", firstDie + secondDie)
          setDieMsg("Rulla igen")
        break;
        case 6:
          console.log("resultat", firstDie + secondDie)
          setDieMsg("Rulla igen")
          break;
        case 7:
            console.log("resultat", firstDie + secondDie)
            setDieMsg("Rulla igen")
          break;
        case 8:
              console.log("resultat", firstDie + secondDie)
              setSuccess(true);
              setDieMsg("Perfekt resultat!")
              break;
        case 9:
                console.log("resultat", firstDie + secondDie)
                setDieMsg("Rulla igen")
                break;
        case 10:
                  console.log("resultat", firstDie + secondDie)
                  setDieMsg("Rulla igen")
                  break;
        case 11:
                    console.log("resultat", firstDie + secondDie)
                    setSuccess(true);
              setDieMsg("Perfekt resultat!")
                    break;
        case 12:
                      console.log("resultat", firstDie + secondDie)
                      setDieMsg("Rulla igen")
                      break;
                      default:

    }
  } 

  return ( 
    <div className="dice__content">
 {!success ? 
 <>
    <button className="dice__button"
    onClick={rulla}>Rulla tärningarna!</button>
   
    <article className="dice__container">
    <img src={firstDieImg} alt="Tärning 1" className="tarning" />
    <img src={secondDieImg} alt="Tärning 2" className="tarning" />
    </article>
    </>
    :null }
    <p className="bree normal-text">
    Det blir...{firstDie + secondDie}</p>
    <div>
    <h2 className="really-big-text dice__diceresult bree">{dieMsg}</h2>
    {success ? 
    <div className="dice__result">
      <h2 className="bree">Simon får +{firstDie} i HP, Maling får +{secondDie} i HP.</h2>
      <h2 className="bree">Skriv i ovan resultat och gå vidare:</h2>
      <DiceForm/>
    </div>:null}
  </div>
  </div>
 
   );
}
 
export default Dice;