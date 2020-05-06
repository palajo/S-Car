import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ContactBlock from './contactblock';

function Offices() {
	return(
		<Container className="margin-top-70">
			<Row className="margin-bottom-50">
				<ContactBlock
					phone="+38 (000) 00 00 000"
					city="KIEV"
					questionMail="info@s-car.com"
					partnersMail="partner@s-car.com"
					officeAdress="28 Park Road London"
					warehouseWorkingTime="Mn. - Fr.: 9:00 - 18:00"
					officeWorkingTime="Mn. - Fr.: 9:00 - 18:00"
					managerSkype="@scarmanager"
				/>
				<ContactBlock
				phone="+38 (000) 00 00 000"
					city="KHARKIV"
					questionMail="info@s-car.com"
					partnersMail="partner@s-car.com"
					officeAdress="28 Park Road London"
					warehouseWorkingTime="Mn. - Fr.: 9:00 - 18:00"
					officeWorkingTime="Mn. - Fr.: 9:00 - 18:00"
					managerSkype="@scarmanager"
				/>
			</Row>
			<Row className="margin-bottom-50">
				<ContactBlock
					phone="+38 (000) 00 00 000"
					city="POLTAVA"
					questionMail="info@s-car.com"
					partnersMail="partner@s-car.com"
					officeAdress="28 Park Road London"
					warehouseWorkingTime="Mn. - Fr.: 9:00 - 18:00"
					officeWorkingTime="Mn. - Fr.: 9:00 - 18:00"
					managerSkype="@scarmanager"
				/>
				<ContactBlock
				phone="+38 (000) 00 00 000"
					city="SUMI"
					questionMail="info@s-car.com"
					partnersMail="partner@s-car.com"
					officeAdress="28 Park Road London"
					warehouseWorkingTime="Mn. - Fr.: 9:00 - 18:00"
					officeWorkingTime="Mn. - Fr.: 9:00 - 18:00"
					managerSkype="@scarmanager"
				/>
			</Row>
			<Row className="margin-bottom-50">
				<ContactBlock
					phone="+38 (000) 00 00 000"
					city="ZHAPORIZHZHYA"
					questionMail="info@s-car.com"
					partnersMail="partner@s-car.com"
					officeAdress="28 Park Road London"
					warehouseWorkingTime="Mn. - Fr.: 9:00 - 18:00"
					officeWorkingTime="Mn. - Fr.: 9:00 - 18:00"
					managerSkype="@scarmanager"
				/>
				<ContactBlock
				phone="+38 (000) 00 00 000"
					city="VINNITSYA"
					questionMail="info@s-car.com"
					partnersMail="partner@s-car.com"
					officeAdress="28 Park Road London"
					warehouseWorkingTime="Mn. - Fr.: 9:00 - 18:00"
					officeWorkingTime="Mn. - Fr.: 9:00 - 18:00"
					managerSkype="@scarmanager"
				/>
			</Row>
			<Row className="margin-bottom-50">
				<ContactBlock
					phone="+38 (000) 00 00 000"
					city="ODESSA"
					questionMail="info@s-car.com"
					partnersMail="partner@s-car.com"
					officeAdress="28 Park Road London"
					warehouseWorkingTime="Mn. - Fr.: 9:00 - 18:00"
					officeWorkingTime="Mn. - Fr.: 9:00 - 18:00"
					managerSkype="@scarmanager"
				/>
				<Col></Col>
			</Row>

		</Container>
    );
}


export default Offices;
