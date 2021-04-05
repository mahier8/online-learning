import React from "react";
import Header from "./Header";
// import Toasty from "./Toast";
import Title from "./Title";
import Carousely from "./Carousel";
import Cardy from "./Card";
import Footer from "./Footer";
import Socialy from "./Social";
import SearchPage from "./SearchBar";
import Registration from "./Registration";
import Python from "./Python";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Title />
        <SearchPage />
        <Carousely />
        <Cardy />
        <Socialy />
        {/* <Toasty /> */}
        <br />
        <Footer />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/registration" component={Registration} />
          <Route path="/python" component={Python} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
