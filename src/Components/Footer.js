import React from 'react';
import "./Style/Footer.scss"
import { Container, Row, Col } from 'react-bootstrap';


function Footer() {
    let currentYear = new Date().getFullYear();
    return (
        <footer id="copyright" className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">

                    <Col className="p-0 d-flex justify-content" md={3}>
                        © Copyright {currentYear}
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;