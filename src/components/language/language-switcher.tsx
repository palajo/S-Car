import React from 'react';
import { Dropdown } from 'react-bootstrap';


function languageSwitcher() {
	return(
		<Dropdown>
			<Dropdown.Toggle id="dropdown-custom-components">
				RU
			</Dropdown.Toggle>

			<Dropdown.Menu>
				<Dropdown.Item>RU</Dropdown.Item>
				<Dropdown.Item>EN</Dropdown.Item>
				<Dropdown.Item>DE</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
    );
}


export default languageSwitcher;
