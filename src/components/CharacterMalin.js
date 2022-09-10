import { useState,useEffect } from "react";


const CharacterMalin = ({arr}) => {

const [showStats, setShowStats] = useState(false);
  // console.log("malin", arr)
  const [healthM, setHealthM] = useState("");
  const [intellM, setIntellM] = useState("");
  const [streetsmartnessM, setStreetSmartnessM] = useState("")
  const [humorM, sethumorM] = useState("");
  const [malinArr, setMalinArr] = useState(arr);
  const [styrkaM, setstyrkaM] = useState("");
  const [healthS, setHealthS] = useState("");
  const [intellS, setIntellS] = useState("");
  const [streetsmartnessS, setStreetSmartnessS] = useState("")
  const [humorS, sethumorS] = useState("");
  const [styrkaS, setstyrkaS] = useState("");
  
  useEffect(() => {

    const newHealthM = Math.floor(Math.random() * 10)+34;
    setHealthM(newHealthM);

    const newHealthS = Math.floor(Math.random() * 10)+24;
    setHealthS(newHealthS);

    const newStyrkaM = Math.floor(Math.random() * 10)+101;
    setstyrkaM(newStyrkaM);

    const newStyrkaS = Math.floor(Math.random() * 10)+11;
    setstyrkaS(newStyrkaS);

    
    switch (Math.floor(Math.random() * 5)){
      case 0:
        setIntellS("Jag är ett troll. 0/5")
        break;
      case 1:
        setIntellS("Äh vem behöver hjärna? 1/5")
        break;
        case 2: 
        setIntellS("2/5")
        break;
        case 3:
          setIntellS("Jag klarar mig. 3/5");
          break;
        case 4:
          setIntellS("Nästan bara MVG. 4/5");
          break;
        case 5:
          setIntellS("Jag är supersmart. 5/5");
          break;
          default:
            setIntellS("Jag är okej. 2/5")
    }
    

    switch (Math.floor(Math.random() * 5)){
        case 0:
          setIntellM("Jag är dummare än klockor som stannat. 0/5")
          break;
        case 1:
          setIntellM("Det är ändå bara skönheten som räknas 1/5")
          break;
          case 2: 
          setIntellM("Intelliva? 2/5")
          break;
          case 3:
            setIntellM("Jag är inte dum, det är smart. 3/5");
            break;
          case 4:
            setIntellM("Jag är väl hyffsat intelligent. 4/5");
            break;
          case 5:
            setIntellM("Jag är supersmart.5/5");
            break;
            default:
              setIntellM("Jag är okej. 2/5")
      }

      switch (Math.floor(Math.random() * 3)){
        case 0:
        setStreetSmartnessS("Oh yeah, jag har sett många gator i mitt liv 3/10")
        break;
        case 1:
        setStreetSmartnessS("Jag bor på gatan 10/10")
        break;
        default:
        setStreetSmartnessS("Trottoar? What on earth is that? 0/10")
      }

      switch (Math.floor(Math.random() * 3)){
      case 0:
      setStreetSmartnessM("Oh yeah, jag har sett många gator i mitt liv 3/10")
      break;
      case 1:
      setStreetSmartnessM("Jag bor på gatan 10/10")
      break;
      default:
      setStreetSmartnessM("Trottoar? What on earth is that? 0/10")
    }

    switch(Math.floor(Math.random() * 2)){
      case 0:
        sethumorS("Humor är mitt levebröd. 10/10" )
      break;
      case 2:
        sethumorS("Jag är JÄTTEROLIG. -1/10")
        break;
      default:
        sethumorS("Ångest är mitt levebröd. 0/10");
      }
    
    switch(Math.floor(Math.random() * 2)){
      case 0:
        sethumorM("Jag skrattar till och med döden rakt upp i ansiktet!!!!!!! 10/10" )
      break;
      case 2:
        sethumorM("Klassens clown var jag. 10/10")
        break;
      default:
        sethumorM("Jag kanske kan dra ett pappaskämt om jag måste. 3/10");
      }
   
  }, [])

  const updateState = () => {  
    const newArr = arr.map(item => {
    if(item.id === 2){

      return {...item, styrka: styrkaM, intelligens: intellM , hälsa: healthM , streetsmartness: streetsmartnessM, humor: humorM }
    }
    if(item.id === 1){
      return {...item, styrka: styrkaS, intelligens: intellS , hälsa: healthS , streetsmartness: streetsmartnessS, humor: humorS  }
    }
    return item;
  })
  setMalinArr(newArr)
  
  setShowStats(true);

}




  return ( 
  <div>
    <button onClick={updateState}>Klicka här!</button>
     
    <span className="container">
   
      <div className="character__grid">
      {showStats && <>
      {malinArr.map((item)=> (
        <article className="character__sheet"
      key={item.id}>
      <h2>{item.name}</h2>
      <h3>Hälsa: {item.hälsa}</h3>
      <h3>Intelligens: {item.intelligens}</h3>
      <h3>Styrka: {item.styrka}</h3>
      <h3>Humor: {item.humor}</h3>
      <h3>Streetsmartness: {item.streetsmartness}</h3>
      </article>
      ))}
      </>
      }
      </div>
  </span>

  </div>  );
}
 
export default CharacterMalin;