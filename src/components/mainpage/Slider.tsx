import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


// importing Slider components styles
import '../../styles/mainpage/slider.scss';
import MainSlider from './benefits-slider';

import News from './News';

function Slider() {
	return(
        <Container fluid className="Slider margin-bottom-50">
            <Container>
                <Row>
                    <Col lg={8} className="SliderBackground align-self-center">
						<MainSlider />
                    </Col>
					<Col lg={4} className="padding-left-50 padding-right-50 news align-self-center">
						<Row className="margin-bottom-10 padding-left-20 padding-right-20">
							<Col lg={12}>
								<h2>Новости:</h2>
							</Col>
						</Row>
						<Row>
							<Col lg={12} className="news-block">
								<News
									newsTitle="Sensation! -50% sale."
									newsContent="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore."
								/>
								<News
									newsTitle="Sensation! -50% sale."
									newsContent="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore."
								/>
								<News
									newsTitle="Sensation! -50% sale."
									newsContent="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore."
								/>
								<News
									newsTitle="Sensation! -50% sale."
									newsContent="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore."
								/>
							</Col>
						</Row>
					</Col>
                </Row>
				<Row>
					<Col>
					</Col>
				</Row>
            </Container>
        </Container>
    );
}


export default Slider;
