import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Navbar from './Components/Navbar';
import TopNavbar from './Components/TopNavbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
    <TopNavbar/>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
