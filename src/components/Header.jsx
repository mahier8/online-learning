import React from "react";
import { Navbar, NavDropdown } from "react-bootstrap";

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
          UO
        </Navbar.Brand>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    </div>
  );
}
export default Header;
