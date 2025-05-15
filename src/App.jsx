
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Sponsor from "./pages/Sponsor.jsx";
import About from "./pages/About.jsx";
import Thanks from "./Takker.jsx";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import './App.css'

 
function App() {
 
 
  return (
    <>
      <Router>
         <Header/>
        <Navbar />
       
  
        <Routes>
         
          <Route path="/" element={<Home />} />
           <Route path="/om-os" element={<About />} />
         <Route path="/sponsor" element={<Sponsor />} />
   <Route path="/tak" element={<Thanks />} />
         
        </Routes>
     
        <Footer />
      </Router>
    </>
     
  )
}
 
export default App