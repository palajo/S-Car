import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// importing Contact components styles
import '../../styles/mainpage/contacts.scss';


// importing Map image (instead of iframe for now) !!!
import MainpageMap from './MainpageMap';

// setting Contact parameters
type ContactProps = {
	contactIcon: string,
    contactTitle: string,
    contactText: string
}

export const Contact = ({ contactIcon, contactTitle, contactText }: ContactProps) =>
    <Row>
        <div className="span">
            <div className="contacticon" id={contactIcon}></div>
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
							<Contact
								contactIcon="iconMessage"
								contactTitle="Ask a question:"
								contactText="info@s-car.com"
							/>
							<Contact
								contactIcon="iconMessage"
								contactTitle="For partners:"
								contactText="partners@s-car.com"
							 />
							<Contact
								contactIcon="iconLocation"
								contactTitle="Address:"
								contactText="28 Park Road London"
							 />
						</Col>
						<Col xs={12} md={6} lg={true}>
							<Contact
								contactIcon="iconClock"
								contactTitle="Warehouse:"
								contactText="Mn. - Fr.: 9:00 - 18:00"
							 />
							<Contact
								contactIcon="iconClock"
								contactTitle="Working hours:"
								contactText="Mn. - Fr.: 9:00 - 18:00"
							/>
							<Contact
								contactIcon="iconSkype"
								contactTitle="Skype:"
								contactText="@scarmanager"
							 />
						</Col>
					</Row>
				</Col>
				<Col className="mainpage-map" xs={12} lg={true}>
					<MainpageMap />
				</Col>
			</Row>
		</Container>
    );
}


export default Contacts;
