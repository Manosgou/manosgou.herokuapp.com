import React from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

import Axios from "axios";

//styling
import "./style/Contact.scss";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      subject: "",
      message: "",
      validated: false,
      visible: false,
    };
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  onShowAlert = () => {
    this.setState({ visible: true }, () => {
      window.setTimeout(() => {
        this.setState({ visible: false });
      }, 2000);
    });
  };

  handleInputChange = (inputName, inputValue) => {
    this.setState((state) => ({
      ...state,
      [inputName]: inputValue,
    }));
  };

  handleSumbit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      let message = {
        fullName: this.state.fullName,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message,
      };
      Axios.post("/api/send", message)
        .then((res) => {
          console.log(res);
        })
        .then(() => {
          this.onShowAlert();
          this.setState({
            fullName: "",
            email: "",
            subject: "",
            message: "",
          });
          this.setState({ validated: false });
        });
        
    }
   
    this.setState({ validated: true });
    
  };

  render() {
    return (
      <div className="Contact">
        <div className="p-5">
          <div className="p-5">
            <p>
              On the chance that you might want to contact with me don't
              hesitate to send me a message or an email.
            </p>
          </div>
          <Container>
            <Alert variant="success" show={this.state.visible}>
              Email sent!
            </Alert>
            <Form
              noValidate
              validated={this.state.validated}
              onSubmit={this.handleSumbit}
            >
              <Form.Group>
                <Form.Label style={{ color: "white" }}>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.fullName}
                  onChange={(value) =>
                    this.handleInputChange("fullName", value.target.value)
                  }
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your full name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label style={{ color: "white" }}>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={this.state.email}
                  onChange={(value) =>
                    this.handleInputChange("email", value.target.value)
                  }
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your email.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ color: "white" }}>Subject</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.subject}
                  onChange={(value) =>
                    this.handleInputChange("subject", value.target.value)
                  }
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your email subject.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group>
                <Form.Label style={{ color: "white" }}>Message</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="..."
                  as="textarea"
                  rows="5"
                  value={this.state.message}
                  onChange={(value) =>
                    this.handleInputChange("message", value.target.value)
                  }
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a message.
                </Form.Control.Feedback>
              </Form.Group> 
              <Button variant="light" type="submit">
                Submit
              </Button>
            </Form>

            <hr />
            <ul className="list-unstyled list-inline text-center">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/manos.gouvrikos">
                  <FaFacebook
                    style={{ height: 40, width: 40, color: "white" }}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/manos_gouv">
                  <FaInstagram
                    style={{ height: 40, width: 40, color: "white" }}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://t.me/Manosgou">
                  <FaTelegram
                    style={{ height: 40, width: 40, color: "white" }}
                  />
                </a>
              </li>
            </ul>

            <p style={{ textAlign: "center" }} className="text-white-50">
              -OR-
            </p>
            <p style={{ textAlign: "center" }}>
              <a href="mailto:manolisgouvrikos@gmail.com">
                Email me!
              </a>
            </p>
          </Container>
        </div>
      </div>
    );
  }
}

export default Contact;
