import { useState, useEffect } from "react";

const Dice = ({handleDiceResult}) => {
  const [firstDie, setDiceResult] = useState(2)
  const [secondDie, setSecondDiceResult] = useState(1);

  const firstDieImg = require(`../assets/dice/${firstDie}.png`)
  const secondDieImg = require(`../assets/dice/${secondDie}.png`)

  const rulla = () => {
    setDiceResult(Math.floor(Math.random()*6)+1);
    setSecondDiceResult(Math.floor(Math.random()*6)+1);
  } 



  return ( 
    <div className="dicecontent">

    <button className="dice__button"
    onClick={rulla}>Rulla tärningarna!</button>
  
    <article className="content__dice">
    <img src={firstDieImg} alt="Tärning 1" className="tarning" />
    <img src={secondDieImg} alt="Tärning 2" className="tarning" />
    </article>

    <p className="result__dice">
    Det blir...{firstDie + secondDie}</p>
  </div>
   );
}
 
export default Dice;