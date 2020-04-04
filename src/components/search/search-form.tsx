import React from 'react';
import { Col, Row, Form, InputGroup } from 'react-bootstrap';

// importing css
import '../../styles/search/search-form.scss';



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
					<div className="search-history-icon" onClick={openHistory}></div>
					<div className="search-history" id="sh">
						<Row>
							<Col>
								<li>Audi breaks</li>
								<li>Volkswagen wheel</li>
								<li>BMW vipers</li>
								<li>Niva mirror</li>
								<li>JDM seats</li>
							</Col>
						</Row>
					</div>
				</InputGroup>
			</Form.Group>
		</Form.Row>
    );
}

function openHistory(){
	(document.getElementById("sh") as HTMLInputElement).style.display = "none";
}

export default searchForm;
