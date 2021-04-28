import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";




export default function App() {
  return (
    <Router>
      <div>
       <Navbar />
       <Home />
        <Footer />
      </div>
    </Router>
  );
}