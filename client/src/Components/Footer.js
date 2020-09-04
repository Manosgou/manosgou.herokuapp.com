import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RiHeartLine } from "react-icons/ri";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

//styling
import "./style/Footer.scss";

function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <div className="mt-5 pt-5 pb-5 footer">
      <Container>
        <div className="links">
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <a className="btn-floating btn-fb mx-1" href="/">
                HOME
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-tw mx-1" href="/projects">
                PROJECTS
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-gplus mx-1" href="/workspace">
                WORKSPACE
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-li mx-1" href="/contact">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <p style={{ textAlign: "center" }} className="text-white-50">
            STAY IN TOUCH
          </p>
          
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <a href="https://www.facebook.com/manos.gouvrikos">
                <FaFacebook style={{ height: 25, width: 25, color: "white" }} />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.instagram.com/manos_gouv/">
                <FaInstagram
                  style={{ height: 25, width: 25, color: "white" }}
                />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://t.me/Manosgou">
                <FaTelegram style={{ height: 25, width: 25, color: "white" }} />
              </a>
            </li>
          </ul>
        </div>
        <Row className="mt-5">
          <Col className="copyright">
            <p className="text-white-50">
              <small className="text-white-50">
                ©<strong>{currentYear}.</strong> All Rights Reserved.
              </small>
            </p>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="d-flex justify-content-center">
            <p className="text-white-50">
              <small>
                Created by Manos Gouvrikos with <RiHeartLine color='#990F02'/>
              </small>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
