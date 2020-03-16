import React from 'react';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

import icondiscount from '../static/images/icon-discount.svg';
import iconcalendar from '../static/images/icon-calendar.svg';


// setting brand parameters
type IconProps = {
    iconPosition: string,
    iconImage: string,
    iconDescription: string
}


//creating brand block
export const Icon = ({ iconPosition, iconImage, iconDescription }: IconProps) =>
<Col className="align-self-start">
    <Row className={iconPosition}>
        <div className="IconImage">
            <img src={iconImage} className="IconIcon" height="84px" />
        </div>
        <div className="HR align-self-center"></div>
    </Row>
    <Row className={iconPosition}>
        <p className="margin-top-15">{iconDescription}</p>
    </Row>
</Col>


function IconGraphic() {
	return(
		<Container className="margin-bottom-50">
			<Row className="margin-bottom-30 justify-content-center">
				<h2>Why we?!</h2>
			</Row>
			<Row className="IconGraphic">
				<Icon iconPosition="justify-content-start" iconImage={icondiscount} iconDescription="" />
				<Icon iconPosition="justify-content-start" iconImage={icondiscount} iconDescription="" />
				<Icon iconPosition="justify-content-center text-center" iconImage={iconcalendar} iconDescription="Any delivery just in time!" />
				<Icon iconPosition="justify-content-end" iconImage={icondiscount} iconDescription="" />
				<Icon iconPosition="justify-content-end" iconImage={icondiscount} iconDescription="" />
			</Row>

		</Container>
    );
}

export default IconGraphic;
