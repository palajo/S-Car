import React from 'react';

import Overlay from '../components/Overlay';
import Slider from '../components/Slider';
import Brands from '../components/Brands';
import IconGraphic from '../components/IconGraphic';
import News from '../components/News';
import Contacts from '../components/Contacts';
import Description from '../components/Description';

function Mainpage() {
	return(
		<body className="AppBody">
			<Overlay />
			<Slider />
			<Brands />
			<IconGraphic />
			<News />
			<Contacts />
			<Description />
		</body>
	);
}

export default Mainpage;
