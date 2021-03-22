import React from "react";
import { Navbar } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://img.icons8.com/cotton/64/000000/saving-book--v1.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          University of Online
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
export default Header;
