import React, {useState} from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';

import '../../styles/contacts/map.scss';

type MarkerProps = {
    lat: number,
    lng: number,
	color: string,
    onClick: () => void,
}

type InfoProps = {
    data: any
}

export const Marker = ({lat, lng, color, onClick}: MarkerProps) => {
    return (
        <div
            onClick={onClick}
            className="marker"
			id={color}
        />
    );
};

export const InfoBlock = ({data}: InfoProps) => {
    return (
        <>
            <div className={data.show} id={data.id}>
                <Row className="margin-bottom-20">
                    <h2 className="text-uppercase">{data.city}</h2>
                </Row>
                <Row className="margin-bottom-10">
                    <p><b>{data.phone}</b></p>
                </Row>
                <Row className="ContactInfo">
                    <Col>
                        <Row>
                            <div className="span">
                                <div className="contacticon" id="iconMessage"></div>
                            </div>
                            <div className="span margin-left-15 align-self-center">
                                <p className="gray-12px">Ask a question:</p>
                                <p>{data.questionMail}</p>
                            </div>
                        </Row>
                        <Row>
                            <div className="span">
                                <div className="contacticon" id="iconMessage"></div>
                            </div>
                            <div className="span margin-left-15 align-self-center">
                                <p className="gray-12px">For partners:</p>
                                <p>{data.partnersMail}</p>
                            </div>
                        </Row>
                        <Row>
                            <div className="span">
                                <div className="contacticon" id="iconLocation"></div>
                            </div>
                            <div className="span margin-left-15 align-self-center">
                                <p className="gray-12px">Address:</p>
                                <p>{data.officeAdress}</p>
                            </div>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <div className="span">
                                <div className="contacticon" id="iconClock"></div>
                            </div>
                            <div className="span margin-left-15 align-self-center">
                                <p className="gray-12px">Warehouse:</p>
                                <p>{data.warehouseWorkingTime}</p>
                            </div>
                        </Row>
                        <Row>
                            <div className="span">
                                <div className="contacticon" id="iconClock"></div>
                            </div>
                            <div className="span margin-left-15 align-self-center">
                                <p className="gray-12px">Ask a question:</p>
                                <p>{data.officeWorkingTime}</p>
                            </div>
                        </Row>
                        <Row>
                            <div className="span">
                                <div className="contacticon" id="iconSkype"></div>
                            </div>
                            <div className="span margin-left-15 align-self-center">
                                <p className="gray-12px">Skype:</p>
                                <p>{data.managerSkype}</p>
                            </div>
                        </Row>
					</Col>
                </Row>
            </div>
        </>
    );
};

const Map = (props: any) => {
    const [center] = useState({lat: 49, lng: 31});
    const [state, setState] = useState({
        data: {
            show: "markerinfo active",
            city: "KIEV",
            phone: "+38 (063) 03 16 565",
            questionMail: "info@s-car.com",
            partnersMail: "partner@s-car.com",
            officeAdress: "28 Park Road London WC36 7MB",
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
                    <Row className="margin-bottom-10">
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
                            defaultZoom={6}
                        >
                            <Marker
                                lat={48.4563344}
                                lng={35.0102654}
								color="blue"
                                onClick={() => {
                                    toggleMarker({
                                        show: "markerinfo active",
                                        city: "DNIPRO",
                                        phone: "+38 (063) 03 16 565",
                                        questionMail: "info@s-car.com",
                                        partnersMail: "partner@s-car.com",
                                        officeAdress: "28 Park Road London WC36 7MB",
                                        warehouseWorkingTime: "Mn. - Fr.: 9:00 - 18:00",
                                        officeWorkingTime: "Mn. - Fr.: 9:00 - 18:00",
                                        managerSkype: "@scarmanager",
                                    });
                                }}
                            />
							<Marker
								lat={50.4193642}
		                        lng={30.4387041}
								color="blue"
								onClick={() => {
									toggleMarker({
										show: "markerinfo active",
										city: "KIEV",
										phone: "+38 (063) 03 16 565",
										questionMail: "info@s-car.com",
										partnersMail: "partner@s-car.com",
										officeAdress: "28 Park Road London WC36 7MB",
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
										phone: "+38 (063) 03 16 565",
										questionMail: "info@s-car.com",
										partnersMail: "partner@s-car.com",
										officeAdress: "28 Park Road London WC36 7MB",
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
										phone: "+38 (063) 03 16 565",
										questionMail: "info@s-car.com",
										partnersMail: "partner@s-car.com",
										officeAdress: "28 Park Road London WC36 7MB",
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
										phone: "+38 (063) 03 16 565",
										questionMail: "info@s-car.com",
										partnersMail: "partner@s-car.com",
										officeAdress: "28 Park Road London WC36 7MB",
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
										phone: "+38 (063) 03 16 565",
										questionMail: "info@s-car.com",
										partnersMail: "partner@s-car.com",
										officeAdress: "28 Park Road London WC36 7MB",
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
										phone: "+38 (063) 03 16 565",
										questionMail: "info@s-car.com",
										partnersMail: "partner@s-car.com",
										officeAdress: "28 Park Road London WC36 7MB",
										warehouseWorkingTime: "Mn. - Fr.: 9:00 - 18:00",
										officeWorkingTime: "Mn. - Fr.: 9:00 - 18:00",
										managerSkype: "@scarmanager",
									});
								}}
							/>
                    	</GoogleMapReact>
                    </Row>
                </Col>
                <Col lg={6} md={12} xs={12} className="margin-top-30 padding-left-70">
                    {
                        state.isPressedMarker ? (
                            <InfoBlock
                                data={state.data}
                            />
                        ) : null
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Map;
