import React from 'react';

// importing Mainpage components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Map from '../../components/map/map';
import Breadcrumbs from '../../components/navigation/Breadcrumbs';
import Offices from '../../components/contactspage/offices';


function ContactsPage() {
	return(
		<body>
			<Header />
			<Breadcrumbs />
			<Map />
			<Offices />
			<Footer />
		</body>
	);
}

export default ContactsPage;
