import React from 'react';


// importing Mainpage components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageContacts from '../../components/contacts/PageContacts';
import Breadcrumbs from '../../components/navigation/Breadcrumbs';


function ContactsPage() {
	return(
		<body>
			<Header />
			<Breadcrumbs />
			<PageContacts />
			<Footer />
		</body>
	);
}

export default ContactsPage;
