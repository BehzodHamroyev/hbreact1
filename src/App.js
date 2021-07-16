import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar/navbar';
import Home from './home/Home';
import Features from './Features/Features'
import About from './About/About'
import Menu from './menu/menu'
import Market from './Market/Market'
import Testimonial from './Testimonial/Testimonial';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import './App.css';
function App() {
  return (
    <div className="d-flex flex-column">
      <Navbar />
      <Home />
      <Features />
      <About />
      <Menu />
      <Market />
      <Testimonial />
      <Contact />
      <Footer/>
    </div>

  );
}

export default App;
