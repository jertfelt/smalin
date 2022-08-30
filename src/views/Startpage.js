import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const Startpage = () => {
  const [firstAnswerValue, setFirstAnswerValue] = useState("");
  const [tries, setTries] = useState(1)
  const [isHidden, setIsHidden] = useState(false);
  const [isResponse, setIsResponse] = useState("");

  const rightAnswer= "Güntherska"
 
  const checkFirstAnswer = (event) => {
    event.preventDefault();
   
    if(firstAnswerValue !== rightAnswer) {
      setTries(tries + 1)
      console.log(tries)
      let amountLeft = 5 - tries;
      console.log(amountLeft)
      setIsResponse(`Ni svarade ${firstAnswerValue}. Det är fel!
      Försök kvar: ${amountLeft}`)
      if(tries === 5){
        console.log("Stop!")
      }
    }
    else if(firstAnswerValue === rightAnswer){
      setTries(tries +1)
      console.log("Rätt svar")
      setIsHidden(true)
      if(tries === 5){
        console.log("På sista försöket? Najs.")
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
      <p>Malin & Simon, härmed kallade 'brudparet' eller 'Smailon' eller 'Malon', är inbjudna till att delta i en högst oklar affär.</p>
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
      <p>Ledtråd:</p>
      </div>
      <div className="input-svar">
      <h3>Har ni löst ledtråden?</h3>
      <form onSubmit={checkFirstAnswer}>
      <label>Skriv in vad ni tror att det är:</label>
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
      <div className="revealAnswer">
        <p className="response">
        {isResponse}
        </p>
        <p className="tries">

        </p>
        Om ni inte löser det på fem försök så messa Tova.</div>
      </div>
      </div>
      </span>
    </div>
  </div> );
}
 
export default Startpage;