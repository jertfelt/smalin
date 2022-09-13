
import CharacterMalin from "./CharacterMalin";


const Characters = () => {
  let statsArr = [
    {
    "id": 1,
    "name": "Simon",
    "intelligens": "0",
    "streetsmartness": "0",
    "hälsa": 0,
    "humor": "0",
    "styrka": 0
  },
  {
    "id": 2,
    "name": "Malin",
    "intelligens": "0",
    "streetsmartness": "0",
    "hälsa": 0,
    "humor": "0",
    "styrka": 0,
  },

];
  

  return (

    <div className="characterRenderStats">
    
    <CharacterMalin
    arr={statsArr}>
    </CharacterMalin>
    
  </div>  );
}
 
export default Characters;