import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Newsletter from './pages/Newsletter';
import AdminPage from './pages/AdminPage';
import Confirmation from './pages/Confirmation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/adminpage' element={<AdminPage />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
