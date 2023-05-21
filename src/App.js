//Packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Websites
import Home from './Websites/Home'


function App() {
  return (
    <Router>
      <div className="App"> 
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
