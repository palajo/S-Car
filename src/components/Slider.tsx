import React from 'react';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

import sliderimage from '../static/images/slider-image.png';

function Slider() {
	return(
        <Container fluid className="Slider">
            <Container className="SliderBackground">
                <Row >
                    <Col lg={4} className="align-self-center">
                        <Row>
                            <h1 className="SliderHeading">
                                Searching for <br />
                                details?
                            </h1>
                            <hr />
                            <p className="SliderText">USE THE SEARCH BOX ON OUR WEBSITE</p>
                            <a className="button">Find details</a>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Slider;
