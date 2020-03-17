import React from 'react';

// importing Mainpage components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageContacts from '../../components/contacts/PageContacts';


function ContactsPage() {
	return(
		<body>
			<Header />
			<PageContacts />
			<Footer />
		</body>
	);
}

export default ContactsPage;
