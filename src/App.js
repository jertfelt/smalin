import Startpage from "./views/Startpage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Helmet} from "react-helmet"
import FirstQuest from "./views/FirstQuest";
import SecondQuest from "./views/SecondQuest";
import Favicon from "react-favicon"
import ThirdStop from "./views/ThirdStop";
import "./App.scss";

function App() {
  return (
  <Router basename="/smalin">
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
        name="Quest of Simon and Malin"
        content="A website for setting out on a journey together"
        />
        <title>The quest of SMALIN</title>
        <link rel="canonical" href="www.tovajertfelt.com/smalin"></link>
        <Favicon url="./public/favicon.ico"></Favicon>
      </Helmet>
     <Routes>
      <Route exact path="/" element={<Startpage />}></Route>
      <Route path="/first-quest" element={<FirstQuest />} ></Route>
      <Route path="/second-quest" element={<SecondQuest />} >
      </Route>
      <Route path="/third-stop" element={<ThirdStop />} >
      </Route>
   
     </Routes>
    </div>
  </Router>
  );
}

export default App;
