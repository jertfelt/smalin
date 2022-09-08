import {Link} from "react-router-dom";
import { useEffect, useState } from "react";


const ThirdStop = () => {
  const [rightAnswer, setRightAnswer] = useState("");
  const [showPrompt, setPrompt] = useState(true);
  const [showThirdMap, setThirdMap] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [errBackground, setErrBackground] = useState(false)
  const [ErrMsg, setErrMsg] = useState("");
  const [selected, setSelected] = useState("");

  const handleMouseOver = () => {
    setIsHovering(true);
   }
   const handleMouseOut = () => {
    setIsHovering(false);
   }

  useEffect(() => {
    fetch("../data/passwords.json", {
      method:"GET",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((data) => {
      
    let newData = data.passwords; 
    newData.forEach(item => {
      if(item.id === 3){
        setRightAnswer(item.word)
      }
    })
  })
    .catch((err) => {
      console.log(err.message)
    })
  }, [])

  const checkPassword = (e) => {
    e.preventDefault();
    console.log(`Event: '${e.target.value}'`)
   
    console.log(selected)
    if (selected.toUpperCase() === rightAnswer){
      setErrBackground(false);
      setErrMsg("");
      setThirdMap(true);
      setPrompt(false);
    }
    else {
      setErrBackground(true)
      setErrMsg("Fel svar")
      
    }
   
  }

  return ( 
  <div className="thirdStop"
  style={{
    backgroundColor: errBackground ? "salmon" : "", 
    color: errBackground ? "black" : "",
  }}>
    <h1 className="really-big-text">Tredje stoppet:</h1>
    {showPrompt ?
        <>
        <span>
        <h2 className="denied bree normal-text">Access denied!</h2>
          
          <form onSubmit={checkPassword}
          className="thirdStop__form">
          <label className="bree normal-text"> Vad är lösenordet? </label>
          <select 
          value= {selected}
          onChange={e =>setSelected(e.target.value)}
          name="pickColor">
            <option 
            style ={{backgroundColor:"rgb(84, 28, 28)",
            color:"white"}}
            value="Vinröd">Vinröd</option>
            <option onChange={e =>setSelected(e.target.value)}
            style ={{backgroundColor:"aqua",
            color:"black"}}
            value="Turkos">Turkos</option>
            <option onChange={e =>setSelected(e.target.value)}
             style ={{backgroundColor:"peachpuff",
             color:"black"}}value="Grisrosa">Grisrosa</option>
            <option onChange={e =>setSelected(e.target.value)}
            style ={{backgroundColor:"purple",
            color:"white"}}
            value="Lila">Lila</option>
            <option onChange={e =>setSelected(e.target.value)}
            style ={{backgroundColor:"black",
            color:"white"}}
            value="Svart">Svart</option>
            <option onChange={e =>setSelected(e.target.value)}
            style ={{backgroundColor:"red",
            color:"white"}}
             value="Röd">Röd</option>
              <option onChange={e=>setSelected(e.target.value) }
            style ={{backgroundColor:"goldenrod",
            color:"black"}}
             value="Guld">Guld</option>
          </select>
          <input type="submit"
            className="bree"
            value="Skicka"></input>
          </form>
          <div>
          <h3> {ErrMsg}</h3> 
          </div>
        </span>
        
        </> :null}
  </div> );
}
 
export default ThirdStop;