import React from 'react';
import './Style/Home.scss'
import { SocialIcon } from 'react-social-icons';
import { Row, Image, Button } from 'react-bootstrap';
import profilePic from './assets/profile_pic.jpg'




function Home() {
  return (
    <div className="Home">
      <div className="title">
        <h1>Manos Gouvrikos</h1>

        <h2>Computer Engineer Student</h2>
        <div className="arrows" onClick={() => {
          var about = document.getElementById("about");
          about.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        }}></div>
      </div>

      <div className="gap"></div>

      <div id="about" className="container">
        <Row className="border-bottom justify-content-center p-10">
          <h3>About</h3>
        </Row>
        <div class="image">
          <Image src={profilePic} width="20%" height="20%" roundedCircle />
        </div>
        <p>
          Hello!My name is Manos Gouvrikos and i'm a Computer Science student from Greece.I am studying on
          the Department of Informatics at the International Hellenic University located in Kavala.
          Chronologically i'm on the second year of my studies.I am just a newbie working on various
          projects,focused on programming.You can find all of my projects in my Github page and also feel
          free to contact me.
        </p>
        <div className="social-icons">
          <SocialIcon url="https://www.facebook.com/manos.gouvrikos" network="facebook" bgColor="#fff" style={{ height: 50, width: 50 }} />
          <SocialIcon url="https://www.instagram.com/manos_gouv" network="instagram" bgColor="#fff" style={{ height: 50, width: 50 }} />
          <SocialIcon url="https://t.me/Manosgou" bgColor="#fff" style={{ height: 50, width: 50 }} />
          <SocialIcon url="mailto:manolisgouvrikos@gmail.com" bgColor="#fff" style={{ height: 50, width: 50 }} />
          <SocialIcon url="https://github.com/Manosgou" network="github" bgColor="#fff" style={{ height: 50, width: 50 }} />
        </div>
        <div className="row justify-content-center">
          <div className="border-top justify-content-center p-4">
            <div className="buttons-panel">
              <a href="/projects"><Button variant="light">Projects</Button></a>
              <a href="/contact"><Button variant="light">Contact</Button></a>
              </div>
          </div>


        </div>
      </div>



    </div>

  );
}

export default Home;