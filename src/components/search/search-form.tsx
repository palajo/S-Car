import React from 'react';
import { Col, Form, InputGroup } from 'react-bootstrap';

// importing css
import '../../styles/search/search-form.scss';


// importing searchForm images
import search from '../../static/images/search.svg';


function searchForm() {
	return(
		<Form.Row>
			<Form.Group as={Col}>
				<InputGroup>
					<Form.Control className="search-input align-self-center" type="text" placeholder="Search here.." />
					<InputGroup.Prepend className="search-input-button">
						<img
							alt=""
							src={search}
							className="icon"
						/>
					</InputGroup.Prepend>
				</InputGroup>
			</Form.Group>
		</Form.Row>
    );
}


export default searchForm;
