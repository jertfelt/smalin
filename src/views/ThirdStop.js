import { useEffect, useState } from "react";
import MapFourthStop from "../components/MapFourthStop";

const ThirdStop = () => {
  const [rightAnswer, setRightAnswer] = useState("");
  const [showPrompt, setPrompt] = useState(true);
  const [showThirdMap, setThirdMap] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [errBackground, setErrBackground] = useState(false)
  const [ErrMsg, setErrMsg] = useState("");

  const options = [
    {value: "", text:"Välj färg", style: ""},
    {value: "röd", text: "Jättemycket Röd"},
    {value: "nattsvart", text: "Nattsvart"},
    {value: "turkos", text: "Turkos"},
    {value: "grisrosa", text: "Grisrosa"},
    {value: "vinröd", text: "Vinröd"},
    {value: "kornblå", text: "Kornblå"},
    {value: "guld", text: "Guld"}
   ];

  const [selected, setSelected] = useState(options[0].value);

  const handleMouseOver = () => {
    setIsHovering(true);
   }
   const handleMouseOut = () => {
    setIsHovering(false);
   }

   const handleChange = e => {
    console.log(e.target.value);
    setSelected(e.target.value);
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
    backgroundColor: errBackground ? ["salmon"] : "",
    
    color: errBackground ? "black" : "",
  }}>
    <h1 className="really-big-text">Tredje stoppet:</h1>
    {showPrompt ?
        <>
        <span>
        <h2 className="denied bree normal-text">Access denied!</h2>
        <form onSubmit={checkPassword}
        className="thirdStop__form">
          <select value={selected} onChange={handleChange}>
            {options.map(option => (
              <option key={option.value}
              value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
          <input type="submit"
            className="bree"
            value="Skicka"></input>
        </form>

          <div>
          <h2 className="really-big-text"> {ErrMsg}</h2> 
          </div>
        </span>
        </> :null}
        {showThirdMap ? 
        <article className="mapcontainer bree">
          <MapFourthStop />

        </article>:null}
  </div> );
}
 
export default ThirdStop;