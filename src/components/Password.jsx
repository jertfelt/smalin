import { useEffect, useState } from "react";
import useErrorHandler from "./ErrorHandler";
import ErrorMessage from "./Errormsg";
import { passwords } from "../data/passwords.json";



const Password = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const {error, showError} = useErrorHandler(null);
  const [showData, setShowData] = useState([]);

  const url = "../data/passwords.json";

  const getData= () => {
    fetch(url ,{
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(function(res){
      console.log(res)
      return res.json();
    })
    .then(function(myJson){
      console.log(myJson)
      setShowData(myJson);
    })
  }
  useEffect(() => {
    getData()
  }, [])

  // const authHandler = async () => {
  //   try {
  //     setLoading(true);
      
  //   }
  // }


  return ( 
    <div>
     <div className="App">

     {

showData && showData.length>0 && showData.map((item)=><p>{item.about}</p>)

     }

    </div>
    <form
    onSubmit = {e => {
      e.preventDefault();
    }}>
      <h2>Lösenordet tack:</h2>
      <input
          type="text"
          name="password"
          value={password}
          placeholder="lösenord"
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading} block={true}>
          {loading ? "Laddar..." : "Skicka iväg"}</button>
    </form>
    </div>
   );
}

export default Password;