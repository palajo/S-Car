import React from 'react';

// importing Mainpage components
import Header from '../components/Header';
import Slider from '../components/mainpage/Slider';
import Manufacturers from '../components/mainpage/Manufacturers';
import Benefits from '../components/mainpage/Benefits';
import News from '../components/mainpage/News';
import Contacts from '../components/mainpage/Contacts';
import Description from '../components/mainpage/Description';
import Footer from '../components/Footer';

function Mainpage() {
	return(
		<body>
			<Header />
			<Slider />
			<Manufacturers />
			<Benefits />
			<News />
			<Contacts />
			<Description />
			<Footer />
		</body>
	);
}

export default Mainpage;
