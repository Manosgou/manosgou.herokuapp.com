import React, { Component } from "react";
import { Row, Image, Button, Container, Col } from "react-bootstrap";
import profilePic from "./assets/profile_pic.jpg";

//styling
import "./style/Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Home">
        <Container>
          <div className="title">
            <h1>Manos Gouvrikos</h1>
            <p style={{ textAlign: "center" }} className="text-white-50">
              Computer Engineer Student
            </p>

            <div
              className="arrows"
              onClick={() => {
                var about = document.getElementById("about");
                about.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                  inline: "nearest",
                });
              }}
            >
            </div>
          </div>

          <div className="gap" />

          <Container id="about">
            <Row className="border-bottom justify-content-center p-10">
              <h3>About</h3>
            </Row>
            <div className="image">
              <Image src={profilePic} width="22%" height="22%" roundedCircle />
            </div>
            <p>
              My name is Manos Gouvrikos and i'm a Computer Science student from
              Greece. I am studying on the Department of Informatics at the
              International Hellenic University located in Kavala.Apart of my
              studies i am working on various side projects,focused on
              programming.Feel free to explore them...
            </p>
          </Container>
          <Container className="skills">
            <h1>My skills</h1>
            <p className="text-black-50">
              The following list is a set of skills that i gained from my
              studies in the university and from my own research and
              experimentation.Some of these technologies are part of my workflow
              and some others are just technologies that i got familiarized and
              worked with them.
            </p>
            <Container className="languages">
              <Row>
                <Col>
                  <ul>
                    Programming Languages
                    <li>C/C++</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>Javascript</li>
                  </ul>
                </Col>
                <Col>
                  <ul>
                    Frontend Development
                    <li>HTML</li>
                    <li>CSS/SCSS</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                  </ul>
                </Col>
                <Col>
                  <ul>
                    Backend Development
                    <li>NodeJS</li>
                    <li>Express</li>
                  </ul>
                </Col>
                <Col>
                  <ul>
                    Mobile App Development
                    <li>Java</li>
                    <li>React Native</li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </Container>

          <div className="m-5">
            <ul className="list-unstyled list-inline text-center m-3">
              <li className="list-inline-item">
                <Button
                  variant="light"
                  onClick={() => {
                    this.props.history.push("/projects");
                  }}
                >
                  Projects
                </Button>
              </li>
              <li className="list-inline-item">
                <Button
                  variant="light"
                  onClick={() => {
                    this.props.history.push("/contact");
                  }}
                >
                  Contact
                </Button>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
