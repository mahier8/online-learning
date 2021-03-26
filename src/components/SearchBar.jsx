import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import { Button } from "react-bootstrap";

const SearchPage = () => {
  return (
    <div className="search">
      <MDBCol md="6" className="searchbar">
        <div className="input-group md-form form-sm form-1 pl-0">
          <div className="input-group-prepend">
            <span
              className="input-group-text purple lighten-3"
              id="basic-text1"
            >
              <MDBIcon className="text-white" icon="search" />
            </span>
          </div>
          <input
            className="form-control my-0 py-1"
            type="text"
            placeholder="Search our 1000+ courses"
            aria-label="Search"
          />
        </div>
      </MDBCol>
      <h6 className="message">
        Search through our amazing library of courses or register now to find
        out more.
      </h6>
      <Button
        variant="primary"
        size="lg"
        className="btn btn-primary btn-lg register-button"
      >
        Register
      </Button>{" "}
    </div>
  );
};

export default SearchPage;
