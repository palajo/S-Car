import React, { useState, Fragment } from 'react';
import { Container, Col ,Row } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';

import '../../styles/contacts/map.scss';

type MarkerProps = {
	lat: number,
    lng: number
}

export const BlueMarker = ({ lat, lng }: MarkerProps) => {
  return (
	<Fragment>
		<div className="bluemarker"></div>
		<InfoWindow />
	</Fragment>
  );
}

export const RedMarker = ({ lat, lng }: MarkerProps) => {
  return (
	<Fragment>
		<div className="redmarker"/>
		<InfoWindow />
	</Fragment>
  );
}

export const InfoWindow = (props: any) => {
	return(
		<div className="someinfo">
			<Row>
				<Col>
					<Row>
						<div className="span">
							<p className="gray-12px">Ask a question:</p>
							<p><b>info@s-car.com</b></p>
						</div>
					</Row>
					<Row>
						<div className="span">
							<p className="gray-12px">For partners:</p>
							<p><b>partners@s-car.com</b></p>
						</div>
					</Row>
					<Row>
						<div className="span">
							<p className="gray-12px">Address:</p>
							<p><b>28 Park Road London</b></p>
						</div>
					</Row>
				</Col>
				<Col>
					<Row>
						<div className="span">
							<p className="gray-12px">Warehouse:</p>
							<p><b>Mn. - Fr.: 9:00 - 18:00</b></p>
						</div>
					</Row>
					<Row>
						<div className="span">
							<p className="gray-12px">Working hours:</p>
							<p><b>Mn. - Fr.: 9:00 - 18:00</b></p>
						</div>
					</Row>
					<Row>
						<div className="span">
							<p className="gray-12px">Skype:</p>
							<p><b>@scarmanager</b></p>
						</div>
					</Row>
				</Col>
			</Row>
			<Row className="margin-top-20">
				<p>24005, Укриана, Киев, ул. Какая-то 23</p>
			</Row>
		</div>
	);
}




const Map = (props: any) => {
    const [center] = useState({lat: 49, lng: 31 });
    const [zoom] = useState(6);
    return (
        <Container>
			<Row className="justify-content-end margin-bottom-20 margin-right-10">
				<Row>
					<div className="warehouse small"></div>
					<p className="margin-left-10 align-self-center">Склады</p>
				</Row>
				<Row className="margin-left-50">
					<div className="representation small"></div>
					<p className="margin-left-10 align-self-center">Представительства</p>
				</Row>
			</Row>
			<Row className="margin-bottom-50" style={{ height: '600px' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: 'AIzaSyDzOjrwcI1rI0qh3SbWNVWQ0Yf-Lxu9ezE' }}
					defaultCenter={center}
					defaultZoom={zoom}
				>
					<BlueMarker lat={48.4563344} lng={35.0102654} />
					<BlueMarker lat={50.4193642} lng={30.4387041} />

					<RedMarker lat={49.6021346} lng={34.487199} />
					<RedMarker lat={50.9007528} lng={34.7441745} />
					<RedMarker lat={47.8563742} lng={35.035271} />
					<RedMarker lat={49.2348249} lng={28.3995944} />
					<RedMarker lat={46.460123} lng={30.5717048} />

				</GoogleMapReact>
			</Row>
      </Container>
    );
}

export default Map;
