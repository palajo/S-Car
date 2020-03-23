import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


// importing Benefit icons
import iconDiscount from '../../static/images/benefits/icon-discount.svg';
import iconCalendar from '../../static/images/benefits/icon-calendar.svg';


// setting Benefit parameters
type BenefitProps = {
    benefitPosition: string,
    benefitIcon: string,
    benefitDescription: string
}

export const Benefit = ({ benefitPosition, benefitIcon, benefitDescription }: BenefitProps) =>
    <Col className="align-self-start">
        <Row className={benefitPosition}>
            <div className="z-index-1">
                <img alt="" src={benefitIcon} className="IconIcon" height="84px" />
            </div>
            <div className="HR align-self-center"></div>
        </Row>
        <Row className={benefitPosition}>
            <p className="margin-top-15">{benefitDescription}</p>
        </Row>
    </Col>


function Benefits() {
	return(
		<Container className="margin-bottom-50">
			<Row className="margin-bottom-30 justify-content-center">
				<h2>Why we?!</h2>
			</Row>
			<Row className="IconGraphic">
				<Benefit benefitPosition="justify-content-start" benefitIcon={iconDiscount} benefitDescription="" />
				<Benefit benefitPosition="justify-content-start" benefitIcon={iconDiscount} benefitDescription="" />
				<Benefit benefitPosition="justify-content-center text-center" benefitIcon={iconCalendar} benefitDescription="Any delivery just in time!" />
				<Benefit benefitPosition="justify-content-end" benefitIcon={iconDiscount} benefitDescription="" />
				<Benefit benefitPosition="justify-content-end" benefitIcon={iconDiscount} benefitDescription="" />
			</Row>
		</Container>
    );
}


export default Benefits;
