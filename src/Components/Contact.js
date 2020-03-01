import React from 'react';
import { Row } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import './Style/Contact.scss';














class Contact extends React.Component {
  render() {
    return (
      <div className="Contact">
        <Row id="title-container" className="border-bottom justify-content-center p-5">
          <div className="border-bottom border-top justify-content-center p-3" >
            <h4>Contact</h4>
          </div>
        </Row>
        <div className="p-5">
          <div className="p-5">
            <p>
              On the chance that you might want to contact with me don't hesitate to send me a message or an email.
         </p>
          </div>

          <div className="social-icons">

            <SocialIcon url="https://www.facebook.com/manos.gouvrikos" network="facebook" bgColor="#fff" style={{ height: 50, width: 50 }} />
            <SocialIcon url="https://www.instagram.com/manos_gouv" network="instagram" bgColor="#fff" style={{ height: 50, width: 50 }} />
            <SocialIcon url="https://t.me/Manosgou" bgColor="#fff" style={{ height: 50, width: 50 }} />
            <SocialIcon url="mailto:manolisgouvrikos@gmail.com" bgColor="#fff" style={{ height: 50, width: 50 }} />

          </div>

        </div>
      </div>
    );
  }
}

export default Contact;