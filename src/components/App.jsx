import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Python from "./pages/Python";
import Javascript from "./pages/Javascript";
import Css from "./pages/Css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        {/* <Toasty /> */}
        <br />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/registration" component={Registration} />
          <Route path="/python" component={Python} />
          <Route path="/javascript" component={Javascript} />
          <Route path="/css" component={Css} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
