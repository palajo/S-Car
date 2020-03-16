import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FooterNavigation from './navigation/FooterNavigation';

function Footer() {
	return(
        <footer>
            <Container>
                <Row className="justify-content-between">
                    <Col>
                        <Row>
                            <FooterNavigation />
                        </Row>
                    </Col>
                    <Col>
                        <Row className="justify-content-end">
                            <p>©S-CAR.COM.UA 2020</p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}


export default Footer;
