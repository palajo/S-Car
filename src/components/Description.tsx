import React from 'react';
import {
    Container,
    Row,
} from 'react-bootstrap';

function Description() {
	return(
		<Container className="DescriptionBlock margin-bottom-50">
			<Row className="margin-bottom-10">
				<h2>Spare parts for cars from S-Car</h2>
			</Row>
			<Row>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
					fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</Row>
		</Container>
    );
}

export default Description;
