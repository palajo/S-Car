import React from 'react';
import {Row, Col} from 'react-bootstrap';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

import Professional from '../../static/images/slider/professional.png';
import Details from '../../static/images/slider/details.png';

class MainSlider extends React.Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
	  arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
		<Slider {...settings} className="main-slider">
			<div className="h-100">
				<Row>
					<Col xl={7} className="align-self-center">
						<h1 className="SliderHeading">
							Профессионализм персонала
						</h1>
						<div className="line" />
						<p className="SliderText"></p>
						<button className="button">Find details</button>
					</Col>
					<Col className="align-self-center">
						<img src={Professional} width="100%" alt="something" />
					</Col>
				</Row>
			</div>
			<div className="h-100">
				<Row>
					<Col xl={7} className="align-self-center">
						<h1 className="SliderHeading">
							Надежность партнёрства
						</h1>
						<div className="line" />
						<p className="SliderText"></p>
						<button className="button">Find details</button>
					</Col>
					<Col className="align-self-center">
						<img src={Details} width="100%" alt="something" />
					</Col>
				</Row>
			</div>
			<div className="h-100">
				<Row className="justify-content-between">
					<Col xl={7} className="align-self-center">
						<h1 className="SliderHeading">
							Индивидуальный подход к покупателю
						</h1>
						<div className="line" />
						<p className="SliderText"></p>
						<button className="button">Find details</button>
					</Col>
					<Col className="align-self-center">
						<img src={Professional} width="100%" alt="something" />
					</Col>
				</Row>
			</div>
		</Slider>
    );
  }
}

export default MainSlider;
