import React from 'react';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

import IconClock from '../static/images/icon-clock.svg';
import IconLocation from '../static/images/icon-location.svg';
import IconMessage from '../static/images/icon-message.svg';

import Map from '../static/images/google-map.png';


// setting brand parameters
type ContactProps = {
    contactIcon: string,
    contactTitle: string,
    contactText: string
}


//creating brand block
export const Contact = ({ contactIcon, contactTitle, contactText }: ContactProps) =>
<Row>
    <div className="span">
        <img width="64px" src={contactIcon} />
    </div>
    <div className="span margin-left-15 align-self-center">
        <p className="gray-12px">{contactTitle}</p>
        <p>{contactText}</p>
    </div>
</Row>


function Contacts() {
	return(
		<Container>
			<Row className="margin-bottom-30 justify-content-center">
				<h2>Contacts</h2>
			</Row>
			<Row className="ContactsBlock">
				<Col className="">
					<Row>
						<p className="ContactPhone margin-bottom-20">+38 (000) 000 00 00</p>
					</Row>
					<Row className="ContactInfo">
						<Col>
							<Contact contactIcon={IconMessage} contactTitle="Ask a question:" contactText="info@s-car.com" />
							<Contact contactIcon={IconMessage} contactTitle="For partners:" contactText="partners@s-car.com" />
							<Contact contactIcon={IconLocation} contactTitle="Address:" contactText="28 Park Road London WC36 7MB" />

						</Col>
						<Col>
							<Contact contactIcon={IconClock} contactTitle="Warehouse:" contactText="Mn. - Fr.: 9:00 - 18:00" />
							<Contact contactIcon={IconClock} contactTitle="Working hours:" contactText="Mn. - Fr.: 9:00 - 18:00" />
							<Contact contactIcon={IconMessage} contactTitle="Skype:" contactText="@scarmanager" />
						</Col>
					</Row>
				</Col>
				<Col>
					<img src={Map} width="100%" height="300"/>
				</Col>
			</Row>
		</Container>
    );
}

export default Contacts;
