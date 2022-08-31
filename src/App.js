import Startpage from "./views/Startpage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Helmet} from "react-helmet"
import FirstQuest from "./views/FirstQuest";
import SecondQuest from "./views/SecondQuest";


function App() {
  function HTML () {
    const htmlAttrs = Helmet.htmlAttributes.toComponent();
    const bodyAttrs = Helmet.bodyAttributes.toComponent();
  }

  return (
  <Router basename="/smalin">
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>The quest of SMALIN</title>
        <link rel="canonical" href="www.tovajertfelt.com/smalin"></link>
      </Helmet>
     <Routes>
      <Route exact path="/" element={<Startpage />}></Route>
      <Route path="/first-quest" element={<FirstQuest />} ></Route>
      <Route path="/second-quest" element={<SecondQuest />} >
       </Route>
     </Routes>
    </div>
  </Router>
  );
}

export default App;
