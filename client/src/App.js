import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//styling
import "./App.scss";

//Components
import NavBar from "./Components/NavBar.js";
import Home from "./Components/Home.js";
import Projects from "./Components/Projects.js";
import Contact from "./Components/Contact.js";
import Footer from "./Components/Footer.js";
import Workspace from "./Components/Workspace.js";
import NotFound from "./Components/NotFound.js";

const PublicRoute = ({ cartState, exact, path, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) => (
      <div>
        <NavBar cartState={cartState} />
        <Component {...props} />
        <Footer />
      </div>
    )}
  />
);

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div id="App">
          
          <Switch>
            <PublicRoute
              path="/"
              exact
              component={(props) => <Home {...props} />}
            />
            <PublicRoute
              path="/projects"
              exact
              component={() => <Projects />}
            />
            <PublicRoute
              path="/workspace"
              exact
              component={() => <Workspace />}
            />
            <PublicRoute path="/contact" exact component={() => <Contact />} />
            <Route path="*" name="Not Found" component={(props) => <NotFound {...props} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
