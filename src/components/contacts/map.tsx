import React, { useState, Fragment } from 'react';
import { Container, Col ,Row } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';

import '../../styles/contacts/map.scss';

type MarkerProps = {
	lat: number,
    lng: number,

	markerRegularQuestions: string,
	markerForPartners: string,
	markerSalesTime: string,
	markerWarehouseTime: string,
	markerSkype: string,
	markerPhone: string,
	markerText: string
}

export const BlueMarker = ({ lat, lng, markerRegularQuestions, markerForPartners, markerSalesTime, markerWarehouseTime, markerSkype, markerPhone, markerText}: MarkerProps) => {
  return (
	<Fragment>
		<div className="bluemarker"></div>
		<InfoWindow
			regularQuestions={markerRegularQuestions}
			forPartners={markerForPartners}
			salesTime={markerSalesTime}
			warehouseTime={markerWarehouseTime}
			skype={markerSkype}
			phone={markerPhone}
			text={markerText}
		/>
	</Fragment>
  );
}

export const RedMarker = ({ lat, lng, markerRegularQuestions, markerForPartners, markerSalesTime, markerWarehouseTime, markerSkype, markerPhone, markerText}: MarkerProps) => {
  return (
	<Fragment>
		<div className="redmarker" onClick={showInfo} />
		<InfoWindow
			regularQuestions={markerRegularQuestions}
			forPartners={markerForPartners}
			salesTime={markerSalesTime}
			warehouseTime={markerWarehouseTime}
			skype={markerSkype}
			phone={markerPhone}
			text={markerText}
		/>
	</Fragment>
  );
}

type InfoWindowProps = {
	regularQuestions: string,
	forPartners: string,
	salesTime: string,
	warehouseTime: string,
	skype: string,
	phone: string,
	text: string
}

export const InfoWindow = ({ regularQuestions, forPartners, salesTime, warehouseTime, skype, phone, text } :InfoWindowProps ) => {
	return(
		<div className="someinfo">
			<Row>
				<Col>
					<Row>
						<div className="span">
							<p className="gray-12px">Общие вопросы:</p>
							<p><b>{regularQuestions}</b></p>
						</div>
					</Row>
					<Row>
						<div className="span">
							<p className="gray-12px">Партнерам:</p>
							<p><b>{forPartners}</b></p>
						</div>
					</Row>
					<Row>
						<div className="span">
							<p className="gray-12px">Отдел продаж:</p>
							<p><b>{salesTime}</b></p>
						</div>
					</Row>
				</Col>
				<Col>
					<Row>
						<div className="span">
							<p className="gray-12px">Склад:</p>
							<p><b>{warehouseTime}</b></p>
						</div>
					</Row>
					<Row>
						<div className="span">
							<p className="gray-12px">Skype:</p>
							<p><b>{skype}</b></p>
						</div>
					</Row>
					<Row>
						<div className="span">
							<p className="gray-12px">Телефон:</p>
							<p><b>{phone}</b></p>
						</div>
					</Row>
				</Col>
			</Row>
			<Row className="margin-top-20">
				<p>{text}</p>
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
					<BlueMarker
						lat={48.4563344}
						lng={35.0102654}

						markerRegularQuestions="info@s-car.com.ua"
						markerForPartners="partner@s-car.com.ua"
						markerSalesTime="пн - пт с 09:00 до 18:00"
						markerWarehouseTime="пн - пт с 09:00 до 18:00"
						markerSkype="@scarmanager"
						markerPhone="+38 (000) 000 00 01"

						markerText="24005, Укриана, Киев, ул. Какая-то 23"
					/>
					<BlueMarker
						lat={50.4193642}
						lng={30.4387041}

						markerRegularQuestions="info@s-car.com.ua"
						markerForPartners="partner@s-car.com.ua"
						markerSalesTime="пн - пт с 09:00 до 18:00"
						markerWarehouseTime="пн - пт с 09:00 до 18:00"
						markerSkype="@scarmanager"
						markerPhone="+38 (000) 000 00 02"

						markerText="24005, Укриана, Киев, ул. Какая-то 23"
					/>
					<RedMarker
						lat={49.6021346}
						lng={34.487199}

						markerRegularQuestions="info@s-car.com.ua"
						markerForPartners="partner@s-car.com.ua"
						markerSalesTime="пн - пт с 09:00 до 18:00"
						markerWarehouseTime="пн - пт с 09:00 до 18:00"
						markerSkype="@scarmanager"
						markerPhone="+38 (000) 000 00 03"

						markerText="24005, Укриана, Киев, ул. Какая-то 23"
					/>
					<RedMarker
						lat={50.9007528}
						lng={34.7441745}

						markerRegularQuestions="info@s-car.com.ua"
						markerForPartners="partner@s-car.com.ua"
						markerSalesTime="пн - пт с 09:00 до 18:00"
						markerWarehouseTime="пн - пт с 09:00 до 18:00"
						markerSkype="@scarmanager"
						markerPhone="+38 (000) 000 00 04"

						markerText="24005, Укриана, Киев, ул. Какая-то 23"
					/>
					<RedMarker
						lat={47.8563742}
						lng={35.035271}

						markerRegularQuestions="info@s-car.com.ua"
						markerForPartners="partner@s-car.com.ua"
						markerSalesTime="пн - пт с 09:00 до 18:00"
						markerWarehouseTime="пн - пт с 09:00 до 18:00"
						markerSkype="@scarmanager"
						markerPhone="+38 (000) 000 00 05"

						markerText="24005, Укриана, Киев, ул. Какая-то 23"
					/>
					<RedMarker
						lat={49.2348249}
						lng={28.3995944}

						markerRegularQuestions="info@s-car.com.ua"
						markerForPartners="partner@s-car.com.ua"
						markerSalesTime="пн - пт с 09:00 до 18:00"
						markerWarehouseTime="пн - пт с 09:00 до 18:00"
						markerSkype="@scarmanager"
						markerPhone="+38 (000) 000 00 06"

						markerText="24005, Укриана, Киев, ул. Какая-то 23"
					/>
					<RedMarker
						lat={46.460123}
						lng={30.5717048}

						markerRegularQuestions="info@s-car.com.ua"
						markerForPartners="partner@s-car.com.ua"
						markerSalesTime="пн - пт с 09:00 до 18:00"
						markerWarehouseTime="пн - пт с 09:00 до 18:00"
						markerSkype="@scarmanager"
						markerPhone="+38 (000) 000 00 07"

						markerText="24005, Укриана, Киев, ул. Какая-то 23"
					/>
				</GoogleMapReact>
			</Row>
      </Container>
    );
}

export default Map;
