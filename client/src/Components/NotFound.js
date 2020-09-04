import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FaRobot } from "react-icons/fa";

//styling
import "./style/NotFound.scss";
class NotFound extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div className="NotFound">
       
          <FaRobot size={300} color="#fff" />
          <h1>404!</h1>
          <p className="text-white-50">
            Page not found :(
          </p>
          <Button variant="light" onClick={()=>{this.props.history.push("/")}}>Return back</Button>
      </div>
    );
  }
}

export default NotFound;
