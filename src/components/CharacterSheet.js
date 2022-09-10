import { useEffect, useState } from "react";
import RollDice from "./RollDice";
const CharacterSheet = () => {
  const [talangValue, setTalangValue] = useState("");
  const [talangValue2, setTalangValue2] = useState("");
  const [str, setStr] = useState("");
  const [humor, setHumor] = useState("");
  const [streetsmart, setStreetsmart] = useState("");
  const [int, setInt] = useState("")
  const [str2, setStr2] = useState("");
  const [humor2, setHumor2] = useState("");
  const [streetsmart2, setStreetsmart2] = useState("");
  const [int2, setInt2] = useState("")
  const [health1, setHealth1] = useState("");
  const [hpvalue, setHPValue] = useState("1")
  const [health2, setHealth2] = useState("");

  useEffect(() => {
  
    const getRandomHealthPoints =(min, max) => {
      min = Math.ceil(11);
      max = Math.floor(25);
      return Math.floor(Math.random()* (max-min + 2) + min)
    }
  
    setHealth1(getRandomHealthPoints)
    
   
    const getRandomHealthPoints2 =(min, max) => {
      min = Math.ceil(15);
      max = Math.floor(25);
      return Math.floor(Math.random()* (max-min + 5) + min)
    }
  
    setHealth2(getRandomHealthPoints2)
    
  
  },[])
  return ( 
    <div>
    <form id="CharacterOne"> 
    
    <h2>Fyll i nu genast:</h2>
      <label>Namn:</label>
      <input type="text"
      
      placeholder="Namn"></input>
      <label>Kännetecken:</label>
      <input type="textarea"
      >
      </input>
      <label>Mål i livet:</label>
      <input type="text" 
      placeholder="">
      </input>
      <span>
      <h3>
        Grundegenskaper
      </h3>
      
      <label>Styrka</label>
      <select>
        <option value=""
         onChange={e => setStr(e.target.value)}>Välj:</option>
        <option value="1"
         onChange={e => setStr(e.target.value)}>1/5</option>
        <option value="2"
         onChange={e => setStr(e.target.value)}>2/5</option>
        <option value="3"
         onChange={e => setStr(e.target.value)}>3/5</option>
        <option value="4"
         onChange={e => setStr(e.target.value)}>4/5</option>
        <option value="5"
        onChange={e => setStr(e.target.value)}>5/5</option>
      </select>
      <label>Intelligens</label>
      <select>
        <option value=""
        onChange={e => setInt(e.target.value)}>Va?</option>
        <option value="1"
        onChange={e => setInt(e.target.value)}>1/5</option>
        <option value="2"
        onChange={e => setInt(e.target.value)}>2/5</option>
        <option value="3"
        onChange={e => setInt(e.target.value)}>3/5</option>
        <option value="4"
        onChange={e => setInt(e.target.value)}>4/5</option>
        <option value="5"
        onChange={e => setInt(e.target.value)}>5/5</option>
      </select>
      <label>Humor</label>
      <select>
        <option value=""
        onChange={e => setHumor(e.target.value)}>Har ingen lol</option>
        <option value="1"
        onChange={e => setHumor(e.target.value)}>1/5</option>
        <option value="2"
        onChange={e => setHumor(e.target.value)}>2/5</option>
        <option value="3"
        onChange={e => setHumor(e.target.value)}>3/5</option>
        <option value="4"
        onChange={e => setHumor(e.target.value)}>4/5</option>
        <option value="5"
        onChange={e => setHumor(e.target.value)}>5/5</option>
      </select>
      <label>Streetsmartness</label>
      <select>
        <option value=""
        onChange={e => setStreetsmart(e.target.value)}>Bor på gatan</option>
        <option value="1"
        onChange={e => setStreetsmart(e.target.value)}>1/5</option>
        <option value="2"
        onChange={e => setStreetsmart(e.target.value)}>2/5</option>
        <option value="3"
        onChange={e => setStreetsmart(e.target.value)}>3/5</option>
        <option value="4"
        onChange={e => setStreetsmart(e.target.value)}>4/5</option>
        <option value="5"
        onChange={e => setStreetsmart(e.target.value)}>5/5</option>
      </select>
      </span>
       <span>
        <h3>Din special-talang</h3>
        <span>
        <input 
        id="cykla1" 
        type="radio" 
        name="talang" 
        value="cykel" 
        onChange={e => setTalangValue(e.target.value)}/>
        Cykla JÄTTEFORT
        </span>
        <span>
        <input 
        id="karaoke1" 
        type="radio" 
        name="talang" 
        value="karaoke" 
        onChange={e => setTalangValue(e.target.value)}/>
        Sjunga karaoke
        </span>
        <span>
        <input 
        id="handstand1" 
        type="radio" 
        name="talang" 
        value="handstand" 
        onChange={e => setTalangValue(e.target.value)}/>
        Stå på händer
        </span>
      </span> 
      <span>
        <h3>Vapen:</h3>
        <input type="textarea"></input>
      </span>
      <span>
        <h2>Hälsa:
       
        {health1}</h2>
        <p></p>
      </span>
    </form>
    <form id="CharacterOne"> 
    
    <h2>Fyll i nu genast:</h2>
      <label>Namn:</label>
      <input type="text"
      
      placeholder="Namn"></input>
      <label>Kännetecken:</label>
      <input type="textarea"
      >
      </input>
      <label>Mål i livet:</label>
      <input type="text" 
      placeholder="">
      </input>
      <span>
      <h3>
        Grundegenskaper
      </h3>
      
      <label>Styrka</label>
      <select>
        <option value=""
         onChange={e => setStr2(e.target.value)}>Välj:</option>
        <option value="1"
         onChange={e => setStr2(e.target.value)}>1/5</option>
        <option value="2"
         onChange={e => setStr2(e.target.value)}>2/5</option>
        <option value="3"
         onChange={e => setStr2(e.target.value)}>3/5</option>
        <option value="4"
         onChange={e => setStr2(e.target.value)}>4/5</option>
        <option value="5"
        onChange={e => setStr2(e.target.value)}>5/5</option>
      </select>
      <label>Intelligens</label>
      <select>
        <option value=""
        onChange={e => setInt2(e.target.value)}>Va?</option>
        <option value="1"
        onChange={e => setInt2(e.target.value)}>1/5</option>
        <option value="2"
        onChange={e => setInt2(e.target.value)}>2/5</option>
        <option value="3"
        onChange={e => setInt2(e.target.value)}>3/5</option>
        <option value="4"
        onChange={e => setInt2(e.target.value)}>4/5</option>
        <option value="5"
        onChange={e => setInt2(e.target.value)}>5/5</option>
      </select>
      <label>Humor</label>
      <select>
        <option value=""
        onChange={e => setHumor2(e.target.value)}>Har ingen lol</option>
        <option value="1"
        onChange={e => setHumor2(e.target.value)}>1/5</option>
        <option value="2"
        onChange={e => setHumor2(e.target.value)}>2/5</option>
        <option value="3"
        onChange={e => setHumor2(e.target.value)}>3/5</option>
        <option value="4"
        onChange={e => setHumor2(e.target.value)}>4/5</option>
        <option value="5"
        onChange={e => setHumor2(e.target.value)}>5/5</option>
      </select>
      <label>Streetsmartness</label>
      <select>
        <option value=""
        onChange={e => setStreetsmart2(e.target.value)}>Bor på gatan</option>
        <option value="1"
        onChange={e => setStreetsmart2(e.target.value)}>1/5</option>
        <option value="2"
        onChange={e => setStreetsmart2(e.target.value)}>2/5</option>
        <option value="3"
        onChange={e => setStreetsmart2(e.target.value)}>3/5</option>
        <option value="4"
        onChange={e => setStreetsmart2(e.target.value)}>4/5</option>
        <option value="5"
        onChange={e => setStreetsmart2(e.target.value)}>5/5</option>
      </select>
      </span>
       <span>
        <h3>Din special-talang</h3>
        <span>
        <input 
        id="cykla1" 
        type="radio" 
        name="talang" 
        value="cykel" 
        onChange={e => setTalangValue2(e.target.value)}/>
        Cykla JÄTTEFORT
        </span>
        <span>
        <input 
        id="karaoke1" 
        type="radio" 
        name="talang" 
        value="karaoke" 
        onChange={e => setTalangValue2(e.target.value)}/>
        Sjunga karaoke
        </span>
        <span>
        <input 
        id="handstand1" 
        type="radio" 
        name="talang" 
        value="handstand" 
        onChange={e => setTalangValue2(e.target.value)}/>
        Stå på händer
        </span>
      </span> 
      <span>
        <h3>Vapen:</h3>
        <input type="textarea"></input>
      </span>
      <span>
        <h2>Hälsa:
       
        {health2}</h2>
        <p></p>
      </span>
    </form>
    </div>
   );
}
 
export default CharacterSheet;
