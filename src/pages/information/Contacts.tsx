import React from 'react';

// importing Mainpage components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
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
