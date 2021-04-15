import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function JumboTron() {
  return (
    <div>
      <Jumbotron className="Hero-styles container-fluid">
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Link to="/registration">
            <Button variant="primary">Register</Button>
          </Link>
        </p>
      </Jumbotron>
    </div>
  );
}
export default JumboTron;
