import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FooterNavigation from './navigation/FooterNavigation';

// importing Footer components styles
import '../styles/footer.scss';


function Footer() {
	return(
        <footer>
            <Container>
                <Row className="justify-content-between">
                    <Col className="d-none d-lg-block">
                        <Row>
                            <FooterNavigation />
                        </Row>
                    </Col>
                    <Col className="max-width-300">
                        <Row className="justify-content-start justify-content-lg-end">
                            <p>©S-CAR.COM.UA 2020</p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}


export default Footer;
