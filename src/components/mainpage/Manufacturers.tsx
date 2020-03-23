import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


// importing Manufacturer components styles
import '../../styles/mainpage/manufacturers.scss';


// importing Manufacturers logos
import volkswagen from '../../static/images/manufacturers/volkswagen.svg';


// setting Manufacturer parameters
type ManufacturerProps = {
    manufacturerLogo: string,
    manufacturerTitle: string
}

export const Manufacturer = ({ manufacturerLogo, manufacturerTitle }: ManufacturerProps) =>
    <Col className="BrandBackground">
        <Row className="justify-content-center ">
            <img alt="" src={manufacturerLogo} width="24" />
            <div className="margin-left-10 align-self-center">{manufacturerTitle}</div>
        </Row>
    </Col>


// creating brands container
function Manufacturers() {
	return(
        <Container className="margin-bottom-50">
            <Row>
				<Manufacturer manufacturerLogo={volkswagen} manufacturerTitle="Volkswagen" />
				<Manufacturer manufacturerLogo={volkswagen} manufacturerTitle="Volkswagen" />
				<Manufacturer manufacturerLogo={volkswagen} manufacturerTitle="Volkswagen" />
                <Manufacturer manufacturerLogo={volkswagen} manufacturerTitle="Volkswagen" />
				<Manufacturer manufacturerLogo={volkswagen} manufacturerTitle="Volkswagen" />
				<Manufacturer manufacturerLogo={volkswagen} manufacturerTitle="Volkswagen" />
            </Row>
            <Row id="reverse">
                <Manufacturer manufacturerLogo={volkswagen} manufacturerTitle="Volkswagen" />
                <Manufacturer manufacturerLogo={volkswagen} manufacturerTitle="Volkswagen" />
                <Manufacturer manufacturerLogo={volkswagen} manufacturerTitle="Volkswagen" />
                <Manufacturer manufacturerLogo={volkswagen} manufacturerTitle="Volkswagen" />
                <Manufacturer manufacturerLogo={volkswagen} manufacturerTitle="Volkswagen" />
                <Manufacturer manufacturerLogo={volkswagen} manufacturerTitle="Volkswagen" />
            </Row>
            <Row>
				<Manufacturer manufacturerLogo={volkswagen} manufacturerTitle="Volkswagen" />
				<Manufacturer manufacturerLogo={volkswagen} manufacturerTitle="Volkswagen" />
				<Manufacturer manufacturerLogo={volkswagen} manufacturerTitle="Volkswagen" />
                <Manufacturer manufacturerLogo={volkswagen} manufacturerTitle="Volkswagen" />
				<Manufacturer manufacturerLogo={volkswagen} manufacturerTitle="Volkswagen" />
				<Manufacturer manufacturerLogo={volkswagen} manufacturerTitle="Volkswagen" />
            </Row>
            <Row id="reverse">
                <Manufacturer manufacturerLogo={volkswagen} manufacturerTitle="Volkswagen" />
                <Manufacturer manufacturerLogo={volkswagen} manufacturerTitle="Volkswagen" />
                <Manufacturer manufacturerLogo={volkswagen} manufacturerTitle="Volkswagen" />
                <Manufacturer manufacturerLogo={volkswagen} manufacturerTitle="Volkswagen" />
                <Manufacturer manufacturerLogo={volkswagen} manufacturerTitle="Volkswagen" />
                <Manufacturer manufacturerLogo={volkswagen} manufacturerTitle="Volkswagen" />
            </Row>
        </Container>
    );
}


export default Manufacturers;
