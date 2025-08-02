import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './pages/home.js';
import About from './pages/about.js';
import Testimonial from './pages/testimonial.js';
import Contact from './pages/contact.js';
import Signup from './pages/signup.js';
import NavBar from './components/navbar.js';
import Footer from './components/footer.js';


function App(){
  return(
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about.js" element={<About />}></Route>
          <Route path="/testimonial.js" element={<Testimonial />}></Route>
          <Route path="/contact.js" element={<Contact />}></Route>
          <Route path="/singup.js" element={<Signup />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
