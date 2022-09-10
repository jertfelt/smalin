import { Link } from "react-router-dom";
import { useState } from "react";


const cluesArray = [
  {id: 1,
  clue: "Ledtråd 1: Finns på två ställen."},
  {id: 2,
    clue:"Ledtråd 2: Här finns det bakelser"},
  {id: 3,
    clue:"Ledtråd 3: En butik för de snabba ärendena, samt en finare sittplats för adeln."},
  {id: 4,
    clue:"Ledtråd 4: Om du väljer att sitta utomhus kan du se både ån, bilar, broar och glass."},
  {id: 5,
  clue: "Ledtråd 5: Hörnet och konditoriet ligger exakt 54 meter ifrån varandra."},
  {id: 6,
  clue: "Ledtråd 6: Man kan nästan tro att det är en tysk som äger det här stället!"}
]

const Startpage = () => {

  const bgColors = [{
    value: 1,
    label:"lavenderblush",
  },
  { value: 2,
  label: "lightcoral"},
  { value: 3, 
  label: "pink"}
  ]

  const [bgColor, setBgColor] = useState(bgColors[0].label)

  const [firstAnswerValue, setFirstAnswerValue] = useState("");
  const [tries, setTries] = useState(1)
  const [isHidden, setIsHidden] = useState(true);
  const [isCounter, setIsCounter] = useState("");
  const [isResponse, setIsResponse] = useState("");
  const [clue, setClue] = useState(["Ledtråd 1: Finns på två ställen."])
  const [revealLink, setRevealLink] = useState(false);

  const rightAnswer= "Güntherska"

 
  const checkFirstAnswer = (event) => {
    event.preventDefault();

        if(firstAnswerValue !== rightAnswer) {
          setTries(tries + 1)
                    
        cluesArray.forEach(item => {
          if (item.id === tries+1){
            setClue(item.clue)
          }
        })
        
        let amountLeft = 5 - tries;
        setIsCounter(` Försök kvar: ${amountLeft}`)

          switch(firstAnswerValue){
            case "Gunterska": 
              setIsResponse("Det var fel! Stavade ni rätt?")
            break;
            case "günterska":
              setIsResponse("Det var fel! Stavade ni med stor bokstav?")
            break;
            case "gunterska":
              setIsResponse("Det var fel! Stavade ni med stor bokstav? Och är U:et rätt?")
            break;
            default:
          setIsResponse(`Det var fel!`)
          }
          
          if(tries === 5){
            setIsResponse(`Attans! Ni kom inte på det! Messa Tova och fråga vart ni ska!`)
            setIsHidden(false)
            setBgColor(bgColors[1].label)
          }
        }
        else if(firstAnswerValue === rightAnswer){
          setTries(tries +1)
          setIsResponse("Rätt svar! Ses på Güntherska klockan 12.10. Klicka på knappen nedan för att gå till nästa steg! OBS: Ni får bara klicka på knappen när ni är på plats.")
          setRevealLink(true);
       
          setIsHidden(false)
          if(tries === 6){
            setIsResponse("Rätt svar! På sista försöket? Najs. Ses där klockan 12.10.OBS: Ni får bara klicka på knappen nedan när ni är på plats.")
          }
          setBgColor(bgColors[2].label)
        }
     
      }
   


  return ( 
  <div className="welcome "
  style={{ backgroundColor: bgColor, width: "100%", height: "100%"}}>
    <h1 className="pacifico really-big-text">Välkomna!</h1>
    <div className="welcome--txt bree normal-text">
      <img src="https://scontent-arn2-2.xx.fbcdn.net/v/t31.18172-8/18076700_10154425240715069_8532404569105354063_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EC-zFmWbtlkAX-AFvoO&_nc_ht=scontent-arn2-2.xx&oh=00_AT8S3siac24omVeGREKGwMl61QrgXy7FKtEvEgApznpNLg&oe=63350907"
      alt="Simon och Malin firar jul"
      className="
      img--round"></img>
      <div>
      <p>Malin & Simon, härmed kallade 'brudparet' eller 'Smailon', 'Smalin', 'Malimon' eller 'Malon', är inbjudna till att delta i en högst oklar affär.</p>
      <div className="welcome--wrapper">
      <article className="welcome--details">
      <span className="">
        <span className="">
          <h3>När?</h3>
          <p>25:e september</p>
        </span>
        <span className="">
          <h3>Hur?</h3>
          <p>Ta med er mobil, glatt humör. Färda er kollektivt, alternativt cykel. Ingen bil!</p>
        </span>
        
      </span>
      </article>
      <div className="input-svar">
     
      <form
      className="form--start"
       onSubmit={checkFirstAnswer}>
        {isHidden ? <>
        <span className="form--startclue">
        <h3 className="pacifico">Var?</h3>
        <p className="clue">{clue}</p>
        </span>
       <h3>Vad heter stället dit ni ska?</h3>
      <label>Skriv in vad ni tror att det är, ni har fem försök på er:</label>
      </> 
      : null }
      <div className="revealAnswer--start">
          <p>{isResponse}</p>
        {revealLink ? <button>
          <Link to="/first-quest">Gå vidare 
          </Link>
        </button> :null}
        {isHidden ?
        <h2 className="pacifico">
          {isCounter}
        </h2> :null }
        </div>
        {isHidden ?
      <span>
        

      <input type="text"
      placeholder="Skriv ert svar här.."
      value= {firstAnswerValue}
      onChange={(e) => setFirstAnswerValue(e.target.value)}
      >
      </input>
      <input type="submit"
      className="sendButton"
      value="SVARA!"
      >
      </input>
      
      </span>
      : null }
      </form>
  

      </div>
      </div>
      </div>
   </div>  
  </div> );
}
 
export default Startpage;