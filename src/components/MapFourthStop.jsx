import { Link } from "react-router-dom";
const MapFourthStop = () => {

  return ( <div>
    <h2 className="bree">Ledtråd: <br/>Också något med rosor</h2>

    <iframe
      width="600"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
      title="map"
      allowFullScreen=""
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2715.32329043869!2d17.630847379017712!3d59.83202882728759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465fcbda020eafcf%3A0x234922b9042de6c9!2sBlomsterlandet%20Uppsala%20Rosendal!5e0!3m2!1ssv!2sse!4v1662653071446!5m2!1ssv!2sse"
      
    />
          <button className="bree"> <Link  to="/fjardeskadetske">Framme? Klicka här!
          </Link></button>
  </div> );
}
 
export default MapFourthStop;