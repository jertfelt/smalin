
import MapFourthStop from "../components/MapFourthStop";
import { useEffect, useState } from "react";
import { textSpanOverlap } from "typescript";



const GuessNextStep3 = () => {
  const [showThirdMap, setThirdMap] = useState(false);
  const [first, setFirst] = useState(false);
  const [second, setScnd] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [tease, setTease] = useState(false);
  const [areyouSure, setAreYouSure] = useState(false);

  return (
    <div className="thirdStop__treasure">
      <h2 className="really-big-text uncial">Gissa vart ni ska!</h2>
      <img src="https://media2.giphy.com/media/fUZHXuE94BN2wtSbUS/200.gif" alt="doggo" ></img>
      <div>
        <div className="thirdStop__clues">
        <h3 className="bree normal-text">Ledtrådar:</h3>
        <div >
        <p className="bree">Något som är vått</p>
        <button onClick={()=> setFirst(true)}>Ledtråd #1</button>
        {first ?
        <>
        <p className="bree">Ytbehandling + uppförs </p>
        <button onClick={()=> setScnd(true)}>Ledtråd #2</button>
        </>
        :null }
        {second ?
        <>
        <p className="bree">Bävrar bör bo här, men gör det inte, för det är vi som byggt.</p>
        <button onClick={()=> setThird(true)}>Ledtråd #3</button>
        </>
        :null }
        {third ?
        <>
        <p className="bree">Finns här alla tider om dygnet, trots sitt namn.</p>
        <button onClick={()=> setFourth(true)}>Ledtråd #4</button>
        </>
        :null }
        {fourth ?
        <>
        <p className="bree"> Visste du att vattnet på gatan oftast rinner ut i vår fina Fyrisån? Skräp och smuts kan följa med, det vill vi inte!</p>
        
        <button onClick={() => setTease(true)}>
        Vet ni vart ni ska?
        </button>
        {tease ?
        <>
        <p>Är ni säkra?</p>
        <button onClick={() => setAreYouSure(true)}>JA</button>
        {areyouSure ? 
        <>
        <p>Ni vill inte ha en karta då, just to be safe?</p>
        <button onClick={() => setThirdMap(true)}>Okej då, när du säger det på DET sättet...</button>
        </>:null}
        </>:null}
        </>
        :null }
       
        </div>
      

      </div>
      </div>

        {showThirdMap ? 
        <>
         <article className="mapcontainer thirdStop__map">
          <MapFourthStop />
        </article>
        </>
        :null}
      
    </div>
    );
}
 
export default GuessNextStep3;