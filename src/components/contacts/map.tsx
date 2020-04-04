import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}: any) => <div>{text}</div>;

const Warehouse = (props: any) => {
  return (
	  <div className="warehouse"></div>
  );
}

const Representation = (props: any) => {
  return (
	  <div className="representation"></div>
  );
}

const Map = (props: any) => {
    const [center] = useState({lat: 49, lng: 31 });
    const [zoom] = useState(6);
    return (
        <Container>
			<Row className="justify-content-end margin-bottom-20 margin-right-20">
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
					<Warehouse lat={48.4563344} lng={35.0102654} text="My Marker" />
					<Warehouse lat={50.4193642} lng={30.4387041} text="My Marker" />

					<Representation lat={49.6021346} lng={34.487199} text="My Marker" />
					<Representation lat={50.9007528} lng={34.7441745} text="My Marker" />
					<Representation lat={47.8563742} lng={35.035271} text="My Marker" />
					<Representation lat={49.2348249} lng={28.3995944} text="My Marker" />
					<Representation lat={46.460123} lng={30.5717048} text="My Marker" />

				</GoogleMapReact>
			</Row>
      </Container>
    );
}

export default Map;
