import { Link } from "react-router-dom";
const MapFourthStop = () => {

  return ( <div>


    <iframe
      width="600"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
      title="map"
      allowFullScreen=""
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2004.4359631094133!2d17.64154498135663!3d59.841899700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465fcbe2fed1ba85%3A0x54f786f65c2727cc!2sPolacksbackens%20dagvattendamm!5e0!3m2!1ssv!2sse!4v1663084236297!5m2!1ssv!2sse"
      
    />
          <button className="bree"> <Link  to="/fjardeskadetske">Framme? Klicka här!
          </Link></button>
  </div> );
}
 
export default MapFourthStop;