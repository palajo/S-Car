import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


// importing Mainpage components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function About() {
	return(
		<body>
			<Header />
				<Container>
					<Row>
						<h1>About us</h1>
					</Row>
				</Container>
			<Footer />
		</body>
	);
}

export default About;
