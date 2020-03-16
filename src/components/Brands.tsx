import React from 'react';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

import brand from '../static/images/brand.svg';


// setting brand parameters
type BrandProps = {
    brandLogo: string,
    brandTitle: string
}


//creating brand block
export const Brand = ({ brandLogo, brandTitle }: BrandProps) =>
<Col className="BrandBackground">
    <Row className="justify-content-center ">
        <img alt="" src={brandLogo} width="24" />
        <div className="margin-left-10 align-self-center">{brandTitle}</div>
    </Row>
</Col>


// creating brands container
function Brands() {
	return(
        <Container className="margin-bottom-50">
            <Row>
				<Brand brandLogo={brand} brandTitle="Volkswagen" />
				<Brand brandLogo={brand} brandTitle="Volkswagen" />
				<Brand brandLogo={brand} brandTitle="Volkswagen" />
                <Brand brandLogo={brand} brandTitle="Volkswagen" />
				<Brand brandLogo={brand} brandTitle="Volkswagen" />
				<Brand brandLogo={brand} brandTitle="Volkswagen" />
            </Row>
            <Row id="reverse">
                <Brand brandLogo={brand} brandTitle="Volkswagen" />
                <Brand brandLogo={brand} brandTitle="Volkswagen" />
                <Brand brandLogo={brand} brandTitle="Volkswagen" />
                <Brand brandLogo={brand} brandTitle="Volkswagen" />
                <Brand brandLogo={brand} brandTitle="Volkswagen" />
                <Brand brandLogo={brand} brandTitle="Volkswagen" />
            </Row>
            <Row>
                <Brand brandLogo={brand} brandTitle="Volkswagen" />
                <Brand brandLogo={brand} brandTitle="Volkswagen" />
                <Brand brandLogo={brand} brandTitle="Volkswagen" />
                <Brand brandLogo={brand} brandTitle="Volkswagen" />
                <Brand brandLogo={brand} brandTitle="Volkswagen" />
                <Brand brandLogo={brand} brandTitle="Volkswagen" />
            </Row>
            <Row id="reverse">
                <Brand brandLogo={brand} brandTitle="Volkswagen" />
                <Brand brandLogo={brand} brandTitle="Volkswagen" />
                <Brand brandLogo={brand} brandTitle="Volkswagen" />
                <Brand brandLogo={brand} brandTitle="Volkswagen" />
                <Brand brandLogo={brand} brandTitle="Volkswagen" />
                <Brand brandLogo={brand} brandTitle="Volkswagen" />
            </Row>
        </Container>
    );
}


export default Brands;
