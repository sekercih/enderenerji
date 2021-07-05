import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import Image from "react-bootstrap/Image";
import "./Galeri.css";

const Galeri = () => {
  return (
    <div>
      <Container className="galeri container-fluid">
        <Row>
          <Col xs={6} md={4}>
            <Image src="https://via.placeholder.com/480x480" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://via.placeholder.com/480x480" rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src="https://via.placeholder.com/480x480" rounded />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Galeri;
