import React from "react";
import { Button } from "react-bootstrap";

function Title() {
  return (
    <div className="container-fluid register-section">
      <div className="mb-2">
        <Button
          variant="primary"
          size="lg"
          className="btn btn-primary btn-lg register"
        >
          Register
        </Button>{" "}
      </div>
    </div>
  );
}

export default Title;
