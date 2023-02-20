import './App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import NavLinks from './NavBar/NavLinks';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
// import Newsletter from './pages/NewsLetter';

function App() {
  return (
    <div className="App">
    <h4>Popup - GeeksforGeeks</h4>
      <Popup trigger=
          {<button> Click to open popup </button>}
          position="right center">
          <div>GeeksforGeeks</div>
          <button>Click here</button>
      </Popup>
    </div>
  );
}
export default App;
