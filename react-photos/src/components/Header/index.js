import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Test App
            </a>
          </Col>
          <Col xs="auto">
             <NavLink className={({isActive})=>(isActive?'header__link--active':'') + "header__link"} to="/photos">Photo App</NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
