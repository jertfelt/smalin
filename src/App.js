import Startpage from "./views/Startpage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
  <Router>
    <div className="App">
     <Routes>
      <Route exact path="/" element={<Startpage />}></Route>
     </Routes>
    </div>
  </Router>
  );
}

export default App;
