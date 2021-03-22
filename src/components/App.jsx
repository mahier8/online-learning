import React from "react";
import Header from "./Header";
// import Toasty from "./Toast";
import Title from "./Title";
import Carousely from "./Carousel";
import Cardy from "./Card";
import Footer from "./Footer";
import Socialy from "./Social";

function App() {
  return (
    <div>
      <Header />
      <Title />
      <Socialy />
      <Carousely />
      <Cardy />
      {/* <Toasty /> */}
      <br />
      <Footer />
    </div>
  );
}

export default App;

