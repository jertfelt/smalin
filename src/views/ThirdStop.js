import { useEffect, useState } from "react";

import GuessNextStep3 from "../components/GuessNextStep3";

const ThirdStop = () => {
  const [rightAnswer, setRightAnswer] = useState("");
  const [showPrompt, setPrompt] = useState(true);
  const [showThirdMap, setThirdMap] = useState(false);

  const [errBackground, setErrBackground] = useState(false)
  const [ErrMsg, setErrMsg] = useState("");

  const options = [
    {value: "", text:"Välj färg", color: "white"},
    {value: "röd", text: "Jättemycket Röd", color:"red", txtcolor: "white"},
    {value: "nattsvart", text: "Nattsvart", color: "midnightblue", txtcolor: "white"},
    {value: "turkos", text: "Turkos", color: "turqoise", txtcolor: "black"},
    {value: "vinröd", text: "Vinröd", color: "darkred", txtcolor: "white"},
    {value: "kornblå", text: "Kornblå", color: "blue", txtcolor: "white"},
    {value: "guld", text: "Guld", color:"gold", txtcolor: "black"}
   ];

   const [selected, setSelected] = useState(options[0].value);


   const handleChange = e => {
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
  
    if (selected.toUpperCase() === rightAnswer){
      setErrBackground(false);
      setErrMsg("");
      setThirdMap(true);
      setPrompt(false);
    }
    else {
      setErrBackground(true)
      switch(selected.toUpperCase()){
        case "KORNBLÅ":
       setErrMsg("Konstigt namn va? Kornblått. Vad har korn med det blåa att göra? Gissa igen.")
        break;
        case "GULD":
          setErrMsg("Nästan rätt!")

        break;
        case "RÖD":
          setErrMsg("Rött är rätt förutom när det är fel. Try again.")
        break;
        case "NATTSVART":
          setErrMsg("Ja så är känslan efter valet iallafall, men det är FEL SVAR")
        break;
        case "VINRÖD":
          setErrMsg("Detta är ju DANIELS favoritfärg")
        break;
        default:
        setErrMsg("Hallå? Varför har ni inte valt något?")
      }
      
   
    }
   
  }

  return ( 
  <div className="thirdStop"
  style={{
    backgroundColor: errBackground ? "salmon" : "antiquewhite",
    
    color: errBackground ? "black" : "",
  }}>
    <h1 className="really-big-text uncial">Tredje stoppet:</h1>
    {showPrompt ?
        <>
        <span>
        <h2 className="denied bree normal-text">Access denied!</h2>
        <form onSubmit={checkPassword}
        className="thirdStop__form">
          <select value={selected} onChange={handleChange}>
            {options.map(option => (
              <option key={option.value}
              className={`thirdoption--${option.color}`} 
              value={option.value}
              >
                {option.text}
              </option>
            ))}
          </select>
          <input type="submit"
            className="bree"
            value="Skicka"></input>
        </form>

          <div>
          <h2 className="really-big-text bree"> {ErrMsg}</h2> 
          </div>
        </span>
        </> :null}
        {showThirdMap ? 
        <>
        <GuessNextStep3/>
        </>
       :null}
  </div> );
}
 
export default ThirdStop;