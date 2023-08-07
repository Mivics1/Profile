import NavBar from './components/navbar';
import Home from './components/home';
import {Routes, Route} from "react-router-dom";
import About from './components/about';
import Services from './components/services';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
    </div>
  );
}

export default App;
