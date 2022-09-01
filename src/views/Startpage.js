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
         
              // console.log(cluesArray)
        cluesArray.forEach(item => {
          if (item.id === tries+1){
            console.log(item.clue)
            
            setClue(item.clue)
          }
         
        })

          let amountLeft = 5 - tries;
          
          setIsResponse(`Det var fel!
          `)
          setIsCounter(` Försök kvar: ${amountLeft}`)
    
    
          if(tries === 5){
            setIsResponse(`Messa Tova och fråga vart ni ska!`)
            setIsCounter(`Game over!`)
            setIsHidden(false)
          }
        }
        else if(firstAnswerValue === rightAnswer){
          setTries(tries +1)
          setIsResponse("Rätt svar! Ses där klockan ..")
          setRevealLink(true);
       
          setIsHidden(false)
          if(tries === 6){
            setIsResponse("Rätt svar! På sista försöket? Najs. Ses där klockan ..")
          }
        }
     
      }
   


  return ( 
  <div className="welcome">
    <h1 className="really-big-text welcomeheader">Välkomna!</h1>
    <div className="welcome--txt">
      <img src="https://scontent-arn2-2.xx.fbcdn.net/v/t31.18172-8/18076700_10154425240715069_8532404569105354063_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EC-zFmWbtlkAX-AFvoO&_nc_ht=scontent-arn2-2.xx&oh=00_AT8S3siac24omVeGREKGwMl61QrgXy7FKtEvEgApznpNLg&oe=63350907"
      alt="Simon och Malin firar jul"
      className="img_welcome
      img--round"></img>
      <span>
      <p>Malin & Simon, härmed kallade 'brudparet' eller 'Smailon', 'Smalin', 'Malimon' eller 'Malon', är inbjudna till att delta i en högst oklar affär.</p>
      <div className="column">
        <div className="row">
        <h3>När?</h3>
      <p>25:e september</p>
        </div>
        <div className="row">
      <h3>Hur?</h3>
      <p>Ta med er mobil, glatt humör. Färda er kollektivt, alternativt cykel. Ingen bil!</p>
      </div>
      <div className="row space-between">
      <h3>Var?</h3>
      <p>{clue}</p>
      </div>
      <div className="input-svar">
      {isHidden ?
      <form onSubmit={checkFirstAnswer}>
       <h3>Vad heter stället dit ni ska?</h3>
      <label>Skriv in vad ni tror att det är, ni har fem försök på er:</label> 
      <div className="row">

      <input type="text"
      placeholder="JA VAD KAN DET VARA"
      value= {firstAnswerValue}
      onChange={(e) => setFirstAnswerValue(e.target.value)}
      >
      </input>
      <input type="submit"
      className="sendButton"
      value="SVARA!"
      >
      </input>
      
      </div>
       
      </form>
      : null }
      <div className="revealAnswer">
        <div className="response">
          <p>{isResponse}</p>
        
        {revealLink ? <button>
          <Link to="/first-quest">Gå vidare 
          </Link>
        </button> :null}
        </div>
        {isHidden ?
        <h2 className="counter">
          {isCounter}
        </h2> :null }
        </div>
      </div>
      </div>
      </span>
    </div>
  </div> );
}
 
export default Startpage;