import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// importing Mainpage components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageContacts from '../../components/contacts/PageContacts';
import Map from '../../components/contacts/map';
import Breadcrumbs from '../../components/navigation/Breadcrumbs';


function ContactsPage() {
	return(
		<body>
			<Header />
			<Breadcrumbs />
			<Map />
			<Footer />
		</body>
	);
}

export default ContactsPage;
