//Packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Websites
import Home from './Websites/Home'
import Four04 from "./Websites/404";


function App() {
  return (
    <Router>
      <div className="App"> 
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="*" element={<Home />} /> */}
            <Route path="*" element={<Four04 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
