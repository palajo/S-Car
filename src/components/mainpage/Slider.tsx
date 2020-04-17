import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


// importing Slider components styles
import '../../styles/mainpage/slider.scss';


function Slider() {
	return(
        <Container fluid className="Slider margin-bottom-50">
            <Container>
                <Row>
                    <Col lg={8} className="SliderBackground align-self-center">
                        <h1 className="SliderHeading">
                            Searching for <br />
                            details?
                        </h1>
                        <div className="line" />
                        <p className="SliderText">USE THE SEARCH BOX ON OUR WEBSITE</p>
                        <button className="button">Find details</button>
                    </Col>
					<Col lg={4} className="padding-left-50 padding-right-50 news align-self-center">
						<Row className="margin-bottom-10 padding-left-20 padding-right-20">
							<Col lg={12}>
								<h2>Новости:</h2>
							</Col>
						</Row>
						<Row>
							<Col lg={12} className="news-block">
								<Row>
									<Col className="news-headline">
										<h3 className="margin-bottom-5">Sensation! -50% sale.</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur elit,
											sed do eiusmod tempor incididunt ut labore.
										</p>
									</Col>
								</Row>
								<Row>
									<Col className="news-headline">
										<h3 className="margin-bottom-5">Sensation! -50% sale.</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur elit,
											sed do eiusmod tempor incididunt ut labore.
										</p>
									</Col>
								</Row>
								<Row>
									<Col className="news-headline">
										<h3 className="margin-bottom-5">Sensation! -50% sale.</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur elit,
											sed do eiusmod tempor incididunt ut labore.
										</p>
									</Col>
								</Row>
								<Row>
									<Col className="news-headline">
										<h3 className="margin-bottom-5">Sensation! -50% sale.</h3>
										<p>
											Lorem ipsum dolor sit amet, consectetur elit,
											sed do eiusmod tempor incididunt ut labore.
										</p>
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
                </Row>
            </Container>
        </Container>
    );
}


export default Slider;
