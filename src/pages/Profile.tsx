import React from 'react';
import { Container } from 'react-bootstrap';

// importing Mainpage components
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
	return(
		<body>
			<Header />
				<Container>
					<h1>Profile</h1>
				</Container>
			<Footer />
		</body>
	);
}

export default Profile;
