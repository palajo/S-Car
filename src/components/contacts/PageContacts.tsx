import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


// importing Contact icons
import iconClock from '../../static/images/icon-clock.svg';
import iconLocation from '../../static/images/icon-location.svg';
import iconMessage from '../../static/images/icon-message.svg';
import iconSkype from '../../static/images/icon-skype.svg';


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

function PageContacts() {
	return(
		<Container>
            <Row className="margin-bottom-50">
                <Col xs={12} lg={true}>
                    <Row className="margin-bottom-20">
                        <h2 className="text-uppercase">Kiev</h2>
                    </Row>
                    <Row className="ContactsBlock">
                        <Col>
                            <Row>
                                <p><b>+38 (000) 000 00 00</b></p>
                            </Row>
                            <Row className="ContactInfo">
                                <Col xs={12} md={6} lg={true}>
                                    <Contact
										contactIcon={iconMessage}
										contactTitle="Ask a question:"
										contactText="info@s-car.com"
									/>
                                    <Contact
										contactIcon={iconMessage}
										contactTitle="For partners:"
										contactText="partners@s-car.com"
									/>
                                    <Contact
										contactIcon={iconLocation}
										contactTitle="Address:"
										contactText="28 Park Road London WC36 7MB"
									/>
                                </Col>
                                <Col xs={12} md={6} lg={true}>
                                    <Contact
										contactIcon={iconClock}
										contactTitle="Warehouse:"
										contactText="Mn. - Fr.: 9:00 - 18:00"
									/>
                                    <Contact
										contactIcon={iconClock}
										contactTitle="Working hours:"
										contactText="Mn. - Fr.: 9:00 - 18:00"
									/>
                                    <Contact
										contactIcon={iconSkype}
										contactTitle="Skype:"
										contactText="@scarmanager"
									/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} lg={true}>
                    <Row className="margin-bottom-20">
                        <h2 className="text-uppercase">Kharkiv</h2>
                    </Row>
                    <Row className="ContactsBlock">
                        <Col>
                            <Row>
                                <p><b>+38 (000) 000 00 00</b></p>
                            </Row>
                            <Row className="ContactInfo">
                                <Col xs={12} md={6} lg={true}>
                                    <Contact
										contactIcon={iconMessage}
										contactTitle="Ask a question:"
										contactText="info@s-car.com"
									/>
                                    <Contact
										contactIcon={iconMessage}
										contactTitle="For partners:"
									 	contactText="partners@s-car.com"
								 	/>
                                    <Contact
										contactIcon={iconLocation}
										contactTitle="Address:"
										contactText="28 Park Road London WC36 7MB"
									/>
                                </Col>
                                <Col xs={12} md={6} lg={true}>
                                    <Contact
										contactIcon={iconClock}
										contactTitle="Warehouse:"
										contactText="Mn. - Fr.: 9:00 - 18:00"
								 	/>
                                    <Contact
										contactIcon={iconClock}
										contactTitle="Working hours:"
										contactText="Mn. - Fr.: 9:00 - 18:00"
								 	/>
                                    <Contact
										contactIcon={iconSkype}
										contactTitle="Skype:"
										contactText="@scarmanager"
								 	/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="margin-bottom-50">
                <Col xs={12} lg={true}>
                    <Row className="margin-bottom-20">
                        <h2 className="text-uppercase">Lviv</h2>
                    </Row>
                    <Row className="ContactsBlock">
                        <Col>
                            <Row>
                                <p><b>+38 (000) 000 00 00</b></p>
                            </Row>
                            <Row className="ContactInfo">
								<Col xs={12} md={6} lg={true}>
									<Contact
										contactIcon={iconMessage}
										contactTitle="Ask a question:"
										contactText="info@s-car.com"
									/>
									<Contact
										contactIcon={iconMessage}
										contactTitle="For partners:"
										contactText="partners@s-car.com"
									/>
									<Contact
										contactIcon={iconLocation}
										contactTitle="Address:"
										contactText="28 Park Road London WC36 7MB"
									/>
								</Col>
								<Col xs={12} md={6} lg={true}>
									<Contact
										contactIcon={iconClock}
										contactTitle="Warehouse:"
										contactText="Mn. - Fr.: 9:00 - 18:00"
									/>
									<Contact
										contactIcon={iconClock}
										contactTitle="Working hours:"
										contactText="Mn. - Fr.: 9:00 - 18:00"
									/>
									<Contact
										contactIcon={iconSkype}
										contactTitle="Skype:"
										contactText="@scarmanager"
									/>
								</Col>
                        	</Row>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} lg={true}>
                    <Row className="margin-bottom-20">
                        <h2 className="text-uppercase">Dnipro</h2>
                    </Row>
                    <Row className="ContactsBlock">
                        <Col>
                            <Row>
                                <p><b>+38 (000) 000 00 00</b></p>
                            </Row>
                            <Row className="ContactInfo">
								<Col xs={12} md={6} lg={true}>
									<Contact
										contactIcon={iconMessage}
										contactTitle="Ask a question:"
										contactText="info@s-car.com"
									/>
									<Contact
										contactIcon={iconMessage}
										contactTitle="For partners:"
										contactText="partners@s-car.com"
									/>
									<Contact
										contactIcon={iconLocation}
										contactTitle="Address:"
										contactText="28 Park Road London WC36 7MB"
									/>
								</Col>
								<Col xs={12} md={6} lg={true}>
									<Contact
										contactIcon={iconClock}
										contactTitle="Warehouse:"
										contactText="Mn. - Fr.: 9:00 - 18:00"
									/>
									<Contact
										contactIcon={iconClock}
										contactTitle="Working hours:"
										contactText="Mn. - Fr.: 9:00 - 18:00"
									/>
									<Contact
										contactIcon={iconSkype}
										contactTitle="Skype:"
										contactText="@scarmanager"
									/>
								</Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
		</Container>
    );
}


export default PageContacts;
