import React from 'react';


// importing Mainpage components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OfficeImages from '../../components/office/OfficeImages';


function Office() {
	return(
		<body>
			<Header />
			<OfficeImages />
			<Footer />
		</body>
	);
}

export default Office;
