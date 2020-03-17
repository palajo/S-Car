import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


// importing Mainpage components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Contacts() {
	return(
		<body>
			<Header />
				<Container>
					<Row>
						<h1>Contacts</h1>
					</Row>
				</Container>
			<Footer />
		</body>
	);
}

export default Contacts;
