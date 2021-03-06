import React, { useState } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Header.css";
import logo from "../images/logo.png";
import { Icon } from "semantic-ui-react";
//import Banner from "../banner/Banner";
const Header = () => {
  return (
    <div className="nav-container">
      <Container fluid className="nav-top-fluid">
        <Container className="nav-top">
          <Row>
            <Col className="d-none d-md-block">
              <TopNav />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="nav-middle">
        <Row>
          <Col>
            <img className="nav-logo" src={logo} alt="logo" />
          </Col>
          <Col className="d-flex align-items-center justify-content-end">
            <MiddleNav />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <NavBottom />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
const TopNav = () => {
  const history = useHistory();
  const handleNavClick = (eventKey) => {
    history.push(`/${eventKey}`);
  };
  return (
    <div>
      <Nav
        variant="tabs"
        defaultActiveKey="advantage"
        onSelect={handleNavClick}
      >
        <Nav.Item>
          <Nav.Link eventKey="advantage">Advantage</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="mobile">Mobile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="signin">Sign In</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="register">Register</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
const MiddleNav = () => {
  return (
    <div>
      <Nav clasName="d-flex justify-content-end">
        <Nav.Item className="me-4">
          <Nav.Link bsPrefix="middle-navbar">
            <Icon
              name="user"
              circular
              size="large"
              className="d-block mb-2"
            ></Icon>
            Sign In
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link bsPrefix="middle-navbar">
            <Icon
              name="unlock alternate"
              circular
              size="large"
              className="d-block mb-2 ms-2"
            ></Icon>
            Register
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
const NavBottom = () => {
  const history = useHistory();
  const [activeKey, setActiveKey] = useState("home");
  const handleItemClick = (eventKey) => {
    eventKey === "home" ? history.push(`/`) : history.push(`/${eventKey}`);
    setActiveKey(eventKey);
  };
  return (
    <Navbar expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="mr-auto"
          activeKey={activeKey}
          onSelect={handleItemClick}
        >
          <Nav.Link className="nav-bottom-links" eventKey="home">
            Anasayfa
          </Nav.Link>
          <Nav.Link className="nav-bottom-links" eventKey="about">
            Hakk??nda
          </Nav.Link>
          <Nav.Link className="nav-bottom-links" eventKey="package">
            Solar Panel
          </Nav.Link>
          <Nav.Link className="nav-bottom-links" eventKey="location">
            Solar Jel Ak??ler
          </Nav.Link>
          <Nav.Link className="nav-bottom-links" eventKey="contact">
            ??leti??im
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
