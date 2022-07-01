
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/layout/Navbar';
// import User from?? './components/User';
import User from './components/User';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Layout
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
      
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/Contact" element={<Contact/>}/>
          <Route exact path="/:id" element={<User/>}/>

        
        </Routes>
     
    </Router>
  );
}

export default App;
