import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

export const RedMarker = (props: any) => {
  return (
		<div className="redmarker"/>
  );
}

const MainpageMap = (props: any) => {
	const [center] = useState({lat: 49.6021346, lng: 34.487199 });
	const [zoom] = useState(11);
	return (
		<GoogleMapReact
			bootstrapURLKeys={{ key: 'AIzaSyDzOjrwcI1rI0qh3SbWNVWQ0Yf-Lxu9ezE' }}
			defaultCenter={center}
			defaultZoom={zoom}
		>
			<RedMarker lat={49.6021346} lng={34.487199} />
		</GoogleMapReact>

	);
}

export default MainpageMap;
