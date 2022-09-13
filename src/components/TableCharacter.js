const TableCharacter = ({array}) => {
  console.log(array)
  return ( 
    <>{array.map((item)=> (
    <div className="character__sheet"
    key={item.id}>
      <>
    <th>{item.name}</th>
    <tbody>
      <tr>
        <td>Hälsa</td>
        <td> {item.hälsa}</td>
      </tr>
      <tr>
        <td>Styrka</td>
        <td>{item.styrka} </td>
      </tr>
      <tr>
        <td>Intelligens</td>
        <td>{item.intelligens}</td>
      </tr>
      <tr>
        <td>Humor</td>
        <td>{item.humor}</td>
      </tr>
      <tr>
        <td>Streetsmartness</td>
        <td>{item.streetsmartness}</td>
      </tr>
    </tbody>
    </>
    
    </div>
    
    ))}
    <div className="characterRenderStats__meddelande">
      <h2 className="uncial">När ni fått era stats ovan:</h2>
      <img src="https://media0.giphy.com/media/3oFyCYNrra8qo1Cv8Q/200.gif" alt="Gandalf"></img>
      <p>1. Skriv ner dem. Keep them safe. Ni kommer inte få tillbaka dem om ni förlorar dem.</p>
      <p>2.Nu ska ni lösa följande gåta:</p>
      
    </div></>  );
}
 
export default TableCharacter;