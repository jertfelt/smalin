const MapFountain = () => {

  return ( 
  <div>
    <h1 className="bree">KOLLA VAD FUSKIGT, EN KARTA!?</h1>
    <p className="normal-text bree">Aja, ni ska hit:</p>
    <iframe
      
      style={{ border: 0 }}
      loading="lazy"
      title="map"
      allowFullScreen=""
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.0365684182902!2d17.63645881574481!3d59.8518723097712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465fcb23d74b0de5%3A0xb8761c5f8cdc1931!2zRm9udMOkbg!5e0!3m2!1ssv!2sse!4v1661939820364!5m2!1ssv!2sse"
      
    />
  
  </div> );
}
 
export default MapFountain;