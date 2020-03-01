import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

//Components
import Header from './Components/Header.js';
import Home from './Components/Home.js';
import Projects from './Components/Projects.js';
import Contact from './Components/Contact.js';
import Footer from './Components/Footer.js'
import Workspace from './Components/Workspace.js'

function App() {
  return (
    <Router>
      <div id="App">

        <Header />
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" name="Projects" component={Projects} />
          <Route path="/workspace" name="Workspace" component={Workspace} />
          <Route path="/contact" name="Contact" component={Contact} />
          

        </Switch>
        <Footer/>



      </div>

    </Router>

  );
}

export default App;
