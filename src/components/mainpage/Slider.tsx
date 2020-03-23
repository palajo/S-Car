import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


// importing Slider components styles
import '../../styles/mainpage/slider.scss';


function Slider() {
	return(
        <Container fluid className="Slider margin-bottom-50">
            <Container className="SliderBackground">
                <Row>
                    <Col lg={4} className="align-self-center">
                        <Row>
                            <h1 className="SliderHeading">
                                Searching for <br />
                                details?
                            </h1>
                            <hr />
                            <p className="SliderText">USE THE SEARCH BOX ON OUR WEBSITE</p>
                            <button className="button">Find details</button>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}


export default Slider;
