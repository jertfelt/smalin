import { Link } from "react-router-dom";
const MapThirdStop = () => {

  return ( <div>
    <h2 className="really-big-text bree">Ledtråd: <br/>Nära rosor </h2>
   
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
  </div> );
}
 
export default MapThirdStop;