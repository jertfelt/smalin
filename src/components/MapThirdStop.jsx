import { Link } from "react-router-dom";
const MapThirdStop = () => {

const tigerFacts = [{
  id:1,
  fact: "Tigrar är för fan de STÖRSTA katterna"
},
 {id:2,
  fact: "Tigrar käkar BARA kött."},
  {id:3,
  fact: "Tigrar jagar ensamma. Alltså inte som ni."},
  {id: 4,
  fact: "Tigrar simmar fan FANTASTISKT. Så passarej om du ska bada i ån."},
  {id: 5,
    fact: "Man kan höra ett tigervrål upp till 3 km avstånd. Med andra ord: en tiger TIGER inte."
  },
{id: 6,
fact: "Tigerjäveln kan fan springa i 65 km/h. Hur fort är inte det i Vasaloppet?"},
{id: 7,
fact: "Ingen tiger har samma mönster som någon annan. Alla är unika snöfling-sorry, tigrar."} ]

  return ( <div>
   
    <iframe
      width="600"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
      title="map"
      allowFullScreen=""
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d587.5144445000468!2d17.62800097187939!3d59.85023685768732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465fcbee5e93e655%3A0xffba15e77846bd71!2sTropiska%20v%C3%A4xthuset!5e0!3m2!1ssv!2sse!4v1662037035212!5m2!1ssv!2sse"
      
    />
          <button className="bree"> <Link  to="/third-stop">Framme? Klicka här!
          </Link></button>
          <div>
            <h2 className="uncial really-big-text">Visste ni att:</h2>
            <ul className="bree fact">
             {tigerFacts.map((fact => (
              <li className="bree normal-text" key={fact.id}>
                <h3 className="uncial normal-text">{fact.id}</h3> {fact.fact}
              </li>
             )))}
            </ul>
          </div>
  </div> );
}
 
export default MapThirdStop;