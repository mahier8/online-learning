import React from "react";

import JumboTron from "../Jumbotron";
import SearchBar from "../SearchBar";
import Carousel from "../Carousel";
import Card from "../Card";

import Social from "../Social";

import "../styles.css";

function Home() {
  return (
    <div>
      <JumboTron />
      <SearchBar />
      <Carousel />
      <Card />
      <Social />
    </div>
  );
}

export default Home;
