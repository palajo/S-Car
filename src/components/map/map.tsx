import React, {useState} from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';

import '../../styles/contacts/map.scss';
import Marker from './marker';
import InfoBlock from './infoblock';




const Map = (props: any) => {
    const [center] = useState({lat: 49, lng: 31});
    const [state, setState] = useState({
        data: {
            show: "markerinfo active",
            city: "KHARKIV",
            phone: "+38 (063) 03 16 565",
            questionMail: "info@s-car.com",
            partnersMail: "partner@s-car.com",
            officeAdress: "28 Park Road London",
            warehouseWorkingTime: "Mn. - Fr.: 9:00 - 18:00",
            officeWorkingTime: "Mn. - Fr.: 9:00 - 18:00",
            managerSkype: "@scarmanager",
        },
        isPressedMarker: true,
    });

    const toggleMarker = (data: any) => {
        setState({
            data,
            isPressedMarker: state.isPressedMarker,
        });
    };

    return (
        <Container>
            <Row>
				<Col lg={6} md={12} xs={12}>
					{
						state.isPressedMarker ? (
							<InfoBlock
								data={state.data}
							/>
						) : null
					}
				</Col>
                <Col lg={6} md={12} xs={12} className="margin-top-50-mobile">
                    <Row className="margin-bottom-15">
                        <div className="d-flex">
                            <div className="marker small" id="blue"></div>
                            <p className="margin-left-10 align-self-center">Склады</p>
                        </div>
                        <div className="d-flex margin-left-50">
                            <div className="marker small" id="red"></div>
                            <p className="margin-left-10 align-self-center">Представительства</p>
                        </div>
                    </Row>
                    <Row style={{height: '450px'}}>
                        <GoogleMapReact
                            bootstrapURLKeys={{key: 'AIzaSyDzOjrwcI1rI0qh3SbWNVWQ0Yf-Lxu9ezE'}}
                            defaultCenter={center}
                            defaultZoom={5.6}
                        >
							<Marker
								lat={49.931709}
								lng={36.267136}
								color="blue"
								onClick={() => {
									toggleMarker({
										show: "markerinfo active",
										city: "KHARKIV",
										phone: "+38 (063) 03 16 125",
										questionMail: "info@s-car.com",
										partnersMail: "partner@s-car.com",
										officeAdress: "28 Park Road London",
										warehouseWorkingTime: "Mn. - Fr.: 9:00 - 18:00",
										officeWorkingTime: "Mn. - Fr.: 9:00 - 18:00",
										managerSkype: "@scarmanager",
									});
								}}
							/>
							<Marker
                                lat={48.456331}
                                lng={35.012457}
								color="blue"
                                onClick={() => {
                                    toggleMarker({
                                        show: "markerinfo active",
                                        city: "DNIPRO",
                                        phone: "+38 (063) 03 16 125",
                                        questionMail: "info@s-car.com",
                                        partnersMail: "partner@s-car.com",
                                        officeAdress: "28 Park Road London",
                                        warehouseWorkingTime: "Mn. - Fr.: 9:00 - 18:00",
                                        officeWorkingTime: "Mn. - Fr.: 9:00 - 18:00",
                                        managerSkype: "@scarmanager",
                                    });
                                }}
                            />
							<Marker
								lat={50.419360}
		                        lng={30.441049}
								color="blue"
								onClick={() => {
									toggleMarker({
										show: "markerinfo active",
										city: "KIEV",
										phone: "+38 (063) 03 16 565",
										questionMail: "info@s-car.com",
										partnersMail: "partner@s-car.com",
										officeAdress: "28 Park Road London",
										warehouseWorkingTime: "Mn. - Fr.: 9:00 - 18:00",
										officeWorkingTime: "Mn. - Fr.: 9:00 - 18:00",
										managerSkype: "@scarmanager",
									});
								}}
							/>
							<Marker
								lat={49.6021346}
		                        lng={34.487199}
								color="red"
								onClick={() => {
									toggleMarker({
										show: "markerinfo active",
										city: "POLTAVA",
										phone: "+38 (063) 03 16 343",
										questionMail: "info@s-car.com",
										partnersMail: "partner@s-car.com",
										officeAdress: "28 Park Road London",
										warehouseWorkingTime: "Mn. - Fr.: 9:00 - 18:00",
										officeWorkingTime: "Mn. - Fr.: 9:00 - 18:00",
										managerSkype: "@scarmanager",
									});
								}}
							/>
							<Marker
								lat={50.9007528}
		                        lng={34.7441745}
								color="red"
								onClick={() => {
									toggleMarker({
										show: "markerinfo active",
										city: "KHERSON",
										phone: "+38 (063) 03 16 132",
										questionMail: "info@s-car.com",
										partnersMail: "partner@s-car.com",
										officeAdress: "28 Park Road London",
										warehouseWorkingTime: "Mn. - Fr.: 9:00 - 18:00",
										officeWorkingTime: "Mn. - Fr.: 9:00 - 18:00",
										managerSkype: "@scarmanager",
									});
								}}
							/>
							<Marker
								lat={47.8563742}
		                        lng={35.035271}
								color="red"
								onClick={() => {
									toggleMarker({
										show: "markerinfo active",
										city: "ZAPORIZHYA",
										phone: "+38 (063) 03 16 756",
										questionMail: "info@s-car.com",
										partnersMail: "partner@s-car.com",
										officeAdress: "28 Park Road London",
										warehouseWorkingTime: "Mn. - Fr.: 9:00 - 18:00",
										officeWorkingTime: "Mn. - Fr.: 9:00 - 18:00",
										managerSkype: "@scarmanager",
									});
								}}
							/>
							<Marker
								lat={49.2348249}
		                        lng={28.3995944}
								color="red"
								onClick={() => {
									toggleMarker({
										show: "markerinfo active",
										city: "VINNITSYA",
										phone: "+38 (063) 03 16 442",
										questionMail: "info@s-car.com",
										partnersMail: "partner@s-car.com",
										officeAdress: "28 Park Road London",
										warehouseWorkingTime: "Mn. - Fr.: 9:00 - 18:00",
										officeWorkingTime: "Mn. - Fr.: 9:00 - 18:00",
										managerSkype: "@scarmanager",
									});
								}}
							/>
							<Marker
								lat={46.460123}
		                        lng={30.5717048}
								color="red"
								onClick={() => {
									toggleMarker({
										show: "markerinfo active",
										city: "ODESSA",
										phone: "+38 (063) 03 16 333",
										questionMail: "info@s-car.com",
										partnersMail: "partner@s-car.com",
										officeAdress: "28 Park Road London",
										warehouseWorkingTime: "Mn. - Fr.: 9:00 - 18:00",
										officeWorkingTime: "Mn. - Fr.: 9:00 - 18:00",
										managerSkype: "@scarmanager",
									});
								}}
							/>
                    	</GoogleMapReact>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Map;
