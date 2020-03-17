import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


// importing News images
import placeholder from '../../static/images/office/office-placeholder.jpg';


// setting News parameters
type OfficeProps = {
    officeImage: string
}

export const Office = ({ officeImage }: OfficeProps) =>
    <Col className="m-2">
        <Row>
            <img src={officeImage} width="100%" alt="something" />
        </Row>
    </Col>


function OfficeImages() {
	return(
		<Container>
            <Row className="margin-bottom-20">
                <Office officeImage={placeholder} />
                <Office officeImage={placeholder} />
                <Office officeImage={placeholder} />
                <Office officeImage={placeholder} />
                <Office officeImage={placeholder} />
                <Office officeImage={placeholder} />
            </Row>
            <Row className="margin-bottom-20">
                <Office officeImage={placeholder} />
                <Office officeImage={placeholder} />
                <Office officeImage={placeholder} />
                <Office officeImage={placeholder} />
                <Office officeImage={placeholder} />
                <Office officeImage={placeholder} />
            </Row>
		</Container>
    );
}


export default OfficeImages;
