import React from 'react';

type MarkerProps = {
    lat: number,
    lng: number,
	color: string,
    onClick: () => void,
}

export const Marker = ({lat, lng, color, onClick}: MarkerProps) => {
    return (
        <div
            onClick={onClick}
            className="marker"
			id={color}
        />
    );
};

export default Marker;
