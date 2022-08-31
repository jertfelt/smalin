import Startpage from "./views/Startpage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SecondQuest from "./views/SecondQuest";

function App() {
  return (
  <Router basename="/smalin">
    <div className="App">
     <Routes>
      <Route exact path="/start" element={<Startpage />}></Route>
      <Route exact path="/second-quest" element={<SecondQuest />}></Route>
     </Routes>
    </div>
  </Router>
  );
}

export default App;
