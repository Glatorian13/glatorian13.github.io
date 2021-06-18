import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Wrapper from "./components/Wrapper";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Portfolio" component={Portfolio} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/About" component={About} />
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}
