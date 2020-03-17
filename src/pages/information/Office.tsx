import React from 'react';


// importing Mainpage components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OfficeImages from '../../components/office/OfficeImages';
import Breadcrumbs from '../../components/Breadcrumbs';


function Office() {
	return(
		<body>
			<Header />
			<Breadcrumbs />
			<OfficeImages />
			<Footer />
		</body>
	);
}

export default Office;
