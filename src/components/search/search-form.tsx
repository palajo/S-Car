import React, {useState} from 'react';
import { Col, Form, InputGroup } from 'react-bootstrap';

// importing css
import '../../styles/search/search-form.scss';

const SearchForm = (props: any) => {

	const [state, setState] = useState({
		isPressedShowHistory: false,
    });

	const toggleHistory = () => {
        setState({
            isPressedShowHistory: !state.isPressedShowHistory,
        });
    };

	return(
		<Form.Row>
			<Form.Group as={Col}>
				<InputGroup>
					<Form.Control className="search-input align-self-center" type="text" placeholder="Search here.." />
					<InputGroup.Prepend className="search-input-button">
						<div className="newicon search">
						</div>
					</InputGroup.Prepend>
					<div className="search-history-icon d-none d-xl-block d-lg-block" onClick={toggleHistory}></div>

					{
						state.isPressedShowHistory ? (
							<div className="search-history" id="history">
								<li>Audi breaks</li>
								<li>Volkswagen wheel</li>
								<li>BMW vipers</li>
								<li>Niva mirror</li>
								<li>JDM seats</li>
							</div>
						) : null
					}

				</InputGroup>
			</Form.Group>
		</Form.Row>
    );
}

export default SearchForm;
