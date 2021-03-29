import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";

function Socialy() {
  return (
    <section className="social-section">
      <Container>
        <Row className="row-divider">
          <Col className="icon-divider" xs={6} md={3}>
            <Image
              src="https://img.icons8.com/color/48/000000/facebook.png"
              roundedCircle
              alt="facebook-logo"
            />
          </Col>
          <Col xs={6} md={3}>
            <Image
              src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
              roundedCircle
              alt="instagram-logo"
            />
          </Col>
          <Col xs={6} md={3}>
            <Image
              src="https://img.icons8.com/fluent/48/000000/linkedin.png"
              roundedCircle
              alt="linkedin-logo"
            />
          </Col>
          <Col xs={6} md={3}>
            <Image
              src="https://img.icons8.com/color/48/000000/reddit.png"
              roundedCircle
              alt="reddit-logo"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Socialy;
