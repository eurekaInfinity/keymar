import React from "react";
import "./styles.css";
import Navbar from "./Components/Navbars/Navbars";
import About from "./Secction/About/AboutSection";
import Footer from "./Secction/Footer/Footer";
import Books from "./Secction/Books/Books";
import { Wraper } from "./Styles/globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import GlobalStyle from './Styles/globalStyles';
export default function App() {
  return (
    <div className="App">
      <Router>
        <Wraper>
          <Navbar />
          <About />
          <Books />
          <Footer />
        </Wraper>
      </Router>
    </div>
  );
}
