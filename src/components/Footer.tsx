import React from 'react';
import {
    Container,
    Row,
    Col,
    Nav,
} from 'react-bootstrap';
function Footer() {
	return(
		<footer>
			<Container>
				<Row className="justify-content-between">
					<Col>
						<Row>
							<div className="TopNavigation-Menu justify-content-start">
								<Nav>
									<Nav.Link href="#">About us</Nav.Link>
									<Nav.Link href="#">Our office</Nav.Link>
									<Nav.Link href="#">Delivery</Nav.Link>
									<Nav.Link href="#">Payment</Nav.Link>
									<Nav.Link href="#">For clients</Nav.Link>
									<Nav.Link href="#">For business</Nav.Link>
									<Nav.Link href="#">Contacts</Nav.Link>
								</Nav>
							</div>
						</Row>
					</Col>
					<Col>
						<Row className="justify-content-end">
							<p>©S-CAR.COM.UA 2020</p>
						</Row>
					</Col>
				</Row>
			</Container>
		</footer>
    );
}

export default Footer;
