import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";





export default function App() {
  return (
    <Router>
      <div>
       <Header />
       <Switch>
         <Route exact path={["/"]}>
           <Home />
         </Route>
         <Route exact path={["/Home"]}>
           <Home />
         </Route>
         <Route exact path={["Portfolio"]}>
           <Portfolio />
         </Route>
         <Route exact path={["Contact"]}>
           <Contact />
         </Route>
       </Switch>
        <Footer />
      </div>
    </Router>
  );
}