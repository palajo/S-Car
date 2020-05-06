import React from 'react';
import { Row, Col } from 'react-bootstrap';


type ContactBlockProps = {
    phone: string,
    city: string,
	questionMail: string,
    partnersMail: string,
	officeAdress: string,
	warehouseWorkingTime: string,
	officeWorkingTime: string,
	managerSkype: string
}

export const ContactBlock = ({phone, city, questionMail, partnersMail, officeAdress, warehouseWorkingTime, officeWorkingTime, managerSkype}: ContactBlockProps) =>
	<Col xs={12} md={6} lg={6} className="ContactBlock">
		<Row className="margin-bottom-20">
			<h2 className="text-uppercase">{city}</h2>
		</Row>
		<Row className="margin-bottom-10">
			<p><b>{phone}</b></p>
		</Row>
		<Row className="ContactInfo">
			<Col xs={12} md={12} lg={6}>
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
			<Col xs={12} md={12} lg={6}>
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
						<p className="gray-12px">Working time:</p>
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
	</Col>

export default ContactBlock;
