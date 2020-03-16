import React from 'react';
import {
    Container,
    Row,
    Col,
    Nav,
    Form,
    InputGroup
} from 'react-bootstrap';

import Sidebar from './Sidebar';


/* images */
import logo from '../static/images/logo.svg';
import mainmenu from '../static/images/main-menu.svg';
import search from '../static/images/search.svg';
import profile from '../static/images/profile.svg';
import cart from '../static/images/cart.svg';

/*
function openNav() {
    document.getElementById("sidenav").style.left = "0px";
    document.getElementById("overlay").style.display = "block";
}
*/
function Header() {
	return(
		<header>
		<Sidebar />
			<Container fluid className="TopNavigation">
				<Container>
					<Row className="justify-content-between">
						<Col>
							<Row>
								<div className="TopNavigation-Menu">
									<Nav>
										<Nav.Link href="#">About us</Nav.Link>
										<Nav.Link href="#">Our office</Nav.Link>
										<Nav.Link href="#">Delivery</Nav.Link>
										<Nav.Link href="#">Payment</Nav.Link>
										<Nav.Link href="#">For clients</Nav.Link>
										<Nav.Link href="#">For business</Nav.Link>
										<Nav.Link href="#">Contacts</Nav.Link>
									</Nav>
								</div>
							</Row>
						</Col>
						<Col>
							<Row className="justify-content-end">
								<div className="TopNavigation-ContactPhone margin-right-40">
									<p>+38 (000) 000 00 00</p>
								</div>
								<div className="TopNavigation-ExchangeRate">
									<p>1 USD = 24,95 UAH ; 1 EUR = 1,10 USD</p>
								</div>
							</Row>
						</Col>
					</Row>
				</Container>
			</Container>
			<Container fluid className="MainNavigation">
				<Container>
					<Row className="justify-content-between">
						<Col xl={3}>
							<Row className="justify-content-start">
								<div className="MainNavigation-Menu align-self-center margin-right-20">
									<img src={mainmenu} className="menuToggle" />
								</div>
								<div className="MainNavigation-Logo">
									<img src={logo} alt="logo" height="50" />
								</div>
							</Row>
						</Col>

						<Col>
							<Row className="justify-content-end">
								<div className="MainNavigation-Search align-self-center margin-right-30">
									<Form.Row>
										<Form.Group as={Col}>
											<InputGroup>
												<Form.Control className="search-input align-self-center"
												type="text"
												placeholder="Search here.."
												/>
												<InputGroup.Prepend className="search-input-button">
													<img src={search} />
												</InputGroup.Prepend>
											</InputGroup>
										</Form.Group>
									</Form.Row>
								</div>
								<div className="MainNavigation-Profile d-flex margin-left-20 margin-right-20">
									<div className="span margin-right-10">
										<img src={profile} />
									</div>
									<div className="span align-self-center">
										<p className="bold-16px">Personal</p>
										<p>profile</p>
									</div>
								</div>
								<div className="MainNavigation-Cart d-flex margin-left-20 margin-right-20">
									<div className="span margin-right-10">
										<img src={cart} />
									</div>
									<div className="span align-self-center">
											<p className="bold-16px">Shopping</p>
											<p>cart</p>
									</div>
								</div>
								<div className="MainNavigation-LanguageSwitcher align-self-center margin-left-20">
									<p className="bold-16px color-red">RU</p>
								</div>
							</Row>
						</Col>
					</Row>
				</Container>
			</Container>
		</header>
	);
}

export default Header;
