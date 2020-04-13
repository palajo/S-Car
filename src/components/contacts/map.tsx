import React, { useState } from 'react';
import { Container, Col ,Row } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';

import '../../styles/contacts/map.scss';

type MarkerProps = {
    lat: number,
    lng: number,
}

type InfoProps = {
	show: string,
	id: string,
	city: string,
	phone: string,
	questionMail: string,
	partnersMail: string,
	officeAdress: string,
	warehouseWorkingTime: string,
	officeWorkingTime: string,
	managerSkype: string
}

export const BlueMarker = ({ lat, lng}: MarkerProps) => {
    return (
        <>
            <div
                className="bluemarker"
            />
        </>
    );
};

export const RedMarker = ({ lat, lng}: MarkerProps) => {
    return (
        <>
            <div
                className="redmarker"
            />
        </>
    );
};

export const InfoBlock = ({ show, id, city, phone, questionMail, partnersMail, officeAdress, warehouseWorkingTime, officeWorkingTime, managerSkype}: InfoProps) => {
    return (
		<>
		<div className={show} id={id}>
			<Row className="margin-bottom-20">
				<h2 className="text-uppercase">{city}</h2>
			</Row>
			<Row className="margin-bottom-10">
				<p><b>{phone}</b></p>
			</Row>
			<Row className="ContactInfo">
				<Col>
					<Row>
						<div className="span">
							<div className="contacticon" id="iconMessage"></div>
						</div>
						<div className="span margin-left-15 align-self-center">
							<p className="gray-12px">Ask a question:</p>
							<p>{questionMail}</p>
						</div>
					</Row>
					<Row>
						<div className="span">
							<div className="contacticon" id="iconMessage"></div>
						</div>
						<div className="span margin-left-15 align-self-center">
							<p className="gray-12px">For partners:</p>
							<p>{partnersMail}</p>
						</div>
					</Row>
					<Row>
						<div className="span">
							<div className="contacticon" id="iconLocation"></div>
						</div>
						<div className="span margin-left-15 align-self-center">
							<p className="gray-12px">Address:</p>
							<p>{officeAdress}</p>
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
							<p>{warehouseWorkingTime}</p>
						</div>
					</Row>
					<Row>
						<div className="span">
							<div className="contacticon" id="iconClock"></div>
						</div>
						<div className="span margin-left-15 align-self-center">
							<p className="gray-12px">Ask a question:</p>
							<p>{officeWorkingTime}</p>
						</div>
					</Row>
					<Row>
						<div className="span">
							<div className="contacticon" id="iconSkype"></div>
						</div>
						<div className="span margin-left-15 align-self-center">
							<p className="gray-12px">Skype:</p>
							<p>{managerSkype}</p>
						</div>
					</Row>
				</Col>
			</Row>
		</div>
		</>
    );
};

const Map = (props: any) => {
    const [center] = useState({lat: 49, lng: 31 });
    const [zoom] = useState(6);
    return (
        <Container>
			<Row>
				<Col>
					<Row className="margin-bottom-10">
						<div className="d-flex">
							<div className="bluemarker small"></div>
							<p className="margin-left-10 align-self-center">Склады</p>
						</div>
						<div className="d-flex margin-left-50">
							<div className="redmarker small"></div>
							<p className="margin-left-10 align-self-center">Представительства</p>
						</div>
					</Row>
		            <Row style={{ height: '450px' }}>
		                <GoogleMapReact
		                    bootstrapURLKeys={{ key: 'AIzaSyDzOjrwcI1rI0qh3SbWNVWQ0Yf-Lxu9ezE' }}
		                    defaultCenter={center}
		                    defaultZoom={zoom}
		                >
		                    <BlueMarker
		                        lat={48.4563344}
		                        lng={35.0102654}
		                    />
		                    <BlueMarker
		                        lat={50.4193642}
		                        lng={30.4387041}
		                    />
		                    <RedMarker
		                        lat={49.6021346}
		                        lng={34.487199}
		                    />
		                    <RedMarker
		                        lat={50.9007528}
		                        lng={34.7441745}
		                    />
		                    <RedMarker
		                        lat={47.8563742}
		                        lng={35.035271}
		                    />
		                    <RedMarker
		                        lat={49.2348249}
		                        lng={28.3995944}
		                    />
		                    <RedMarker
		                        lat={46.460123}
		                        lng={30.5717048}
		                    />
		                </GoogleMapReact>
		            </Row>
				</Col>
				<Col className="margin-top-30 margin-left-50">
					<InfoBlock
						show="markerinfo active"
						id="marker1"
						city="KIEV"
						phone="+38 (063) 03 16 565"
						questionMail="info@s-car.com"
						partnersMail="partner@s-car.com"
						officeAdress="28 Park Road London WC36 7MB"
						warehouseWorkingTime="Mn. - Fr.: 9:00 - 18:00"
						officeWorkingTime="Mn. - Fr.: 9:00 - 18:00"
						managerSkype="@scarmanager"
					/>
					<InfoBlock
						show="markerinfo"
						id="marker2"
						city="KHARKIV"
						phone="+38 (063) 03 16 565"
						questionMail="info@s-car.com"
						partnersMail="partner@s-car.com"
						officeAdress="28 Park Road London WC36 7MB"
						warehouseWorkingTime="Mn. - Fr.: 9:00 - 18:00"
						officeWorkingTime="Mn. - Fr.: 9:00 - 18:00"
						managerSkype="@scarmanager"
					/>
					<InfoBlock
						show="markerinfo"
						id="marker3"
						city="LVIV"
						phone="+38 (063) 03 16 565"
						questionMail="info@s-car.com"
						partnersMail="partner@s-car.com"
						officeAdress="28 Park Road London WC36 7MB"
						warehouseWorkingTime="Mn. - Fr.: 9:00 - 18:00"
						officeWorkingTime="Mn. - Fr.: 9:00 - 18:00"
						managerSkype="@scarmanager"
					/>
					<InfoBlock
						show="markerinfo"
						id="marker4"
						city="DNIPRO"
						phone="+38 (063) 03 16 565"
						questionMail="info@s-car.com"
						partnersMail="partner@s-car.com"
						officeAdress="28 Park Road London WC36 7MB"
						warehouseWorkingTime="Mn. - Fr.: 9:00 - 18:00"
						officeWorkingTime="Mn. - Fr.: 9:00 - 18:00"
						managerSkype="@scarmanager"
					/>
					<InfoBlock
						show="markerinfo"
						id="marker5"
						city="DNIPRO"
						phone="+38 (063) 03 16 565"
						questionMail="info@s-car.com"
						partnersMail="partner@s-car.com"
						officeAdress="28 Park Road London WC36 7MB"
						warehouseWorkingTime="Mn. - Fr.: 9:00 - 18:00"
						officeWorkingTime="Mn. - Fr.: 9:00 - 18:00"
						managerSkype="@scarmanager"
					/>
					<InfoBlock
						show="markerinfo"
						id="marker6"
						city="DNIPRO"
						phone="+38 (063) 03 16 565"
						questionMail="info@s-car.com"
						partnersMail="partner@s-car.com"
						officeAdress="28 Park Road London WC36 7MB"
						warehouseWorkingTime="Mn. - Fr.: 9:00 - 18:00"
						officeWorkingTime="Mn. - Fr.: 9:00 - 18:00"
						managerSkype="@scarmanager"
					/>
				</Col>
			</Row>
        </Container>
    );
}

export default Map;
