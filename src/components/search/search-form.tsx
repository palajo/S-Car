import React from 'react';
import { Col, Form, InputGroup } from 'react-bootstrap';

// importing css
import '../../styles/search/search-form.scss';


function showHistory(){
	var history = (document.getElementById("history") as HTMLInputElement);
	history.style.display = (history.style.display === 'none') ? 'block' : 'none';

}


function searchForm() {
	return(
		<Form.Row>
			<Form.Group as={Col}>
				<InputGroup>
					<Form.Control className="search-input align-self-center" type="text" placeholder="Search here.." />
					<InputGroup.Prepend className="search-input-button">
						<div className="newicon search">
						</div>
					</InputGroup.Prepend>
					<div className="search-history-icon d-none d-xl-block d-lg-block" onClick={showHistory}></div>
				</InputGroup>
			</Form.Group>
		</Form.Row>
    );
}

export default searchForm;
