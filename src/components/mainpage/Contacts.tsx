import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


// importing Contact components styles
import '../../styles/mainpage/contacts.scss';


// importing Contact icons
import iconClock from '../../static/images/icon-clock.svg';
import iconLocation from '../../static/images/icon-location.svg';
import iconMessage from '../../static/images/icon-message.svg';


// importing Map image (instead of iframe for now) !!!
import Map from '../../static/images/google-map.png';


// setting Contact parameters
type ContactProps = {
    contactIcon: string,
    contactTitle: string,
    contactText: string
}

export const Contact = ({ contactIcon, contactTitle, contactText }: ContactProps) =>
    <Row>
        <div className="span">
            <img alt="" width="64px" src={contactIcon} />
        </div>
        <div className="span margin-left-15 align-self-center">
            <p className="gray-12px">{contactTitle}</p>
            <p>{contactText}</p>
        </div>
    </Row>


function Contacts() {
	return(
		<Container className="margin-bottom-50">
			<Row className="margin-bottom-30 justify-content-center">
				<h2>Contacts</h2>
			</Row>
			<Row className="ContactsBlock">
				<Col xs={12} lg={true}>
					<Row>
						<p className="ContactPhone margin-bottom-20">+38 (000) 000 00 00</p>
					</Row>
					<Row className="ContactInfo">
						<Col xs={12} md={6} lg={true}>
							<Contact contactIcon={iconMessage} contactTitle="Ask a question:" contactText="info@s-car.com" />
							<Contact contactIcon={iconMessage} contactTitle="For partners:" contactText="partners@s-car.com" />
							<Contact contactIcon={iconLocation} contactTitle="Address:" contactText="28 Park Road London" />
						</Col>
						<Col xs={12} md={6} lg={true}>
							<Contact contactIcon={iconClock} contactTitle="Warehouse:" contactText="Mn. - Fr.: 9:00 - 18:00" />
							<Contact contactIcon={iconClock} contactTitle="Working hours:" contactText="Mn. - Fr.: 9:00 - 18:00" />
							<Contact contactIcon={iconMessage} contactTitle="Skype:" contactText="@scarmanager" />
						</Col>
					</Row>
				</Col>
				<Col xs={12} lg={true}>
					<img alt="" src={Map} width="100%" className="margin-top-20-mobile"/>
				</Col>
			</Row>
		</Container>
    );
}


export default Contacts;
