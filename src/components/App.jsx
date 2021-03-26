import React from "react";
import Header from "./Header";
// import Toasty from "./Toast";
import Title from "./Title";
import Carousely from "./Carousel";
import Cardy from "./Card";
import Footer from "./Footer";
import Socialy from "./Social";
import SearchPage from "./SearchBar";

function App() {
  return (
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
    </div>
  );
}

export default App;
