import React from 'react';
import { Container, Row, Col, Form, InputGroup, Dropdown} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


// importing Header components
import Sidebar from './Sidebar';
import HeaderNavigation from './navigation/HeaderNavigation';
import Overlay from './Overlay';


// importing Header images
import logo from '../static/images/logo.svg';
import mainmenu from '../static/images/main-menu.svg';
import search from '../static/images/search.svg';
import profile from '../static/images/profile.svg';
import cart from '../static/images/cart.svg';


function openNav() {
	(document.getElementById("sidenav") as HTMLInputElement).style.left = "0px";
	(document.getElementById("overlay") as HTMLInputElement).style.display = "block";
}


function Header() {
	return(
        <header>
			<Overlay />
            <Sidebar />
            <Container fluid className="TopNavigation">
                <Container>
                    <Row className="justify-content-between">
                        <Col>
                            <Row>
                                <HeaderNavigation />
                            </Row>
                        </Col>
                        <Col>
                            <Row className="justify-content-end">
                                <div className="margin-right-40 font-medium">
                                    <p>+38 (000) 000 00 00</p>
                                </div>
                                <div>
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
                                    <img alt="" src={mainmenu} className="menuToggle" onClick={openNav} />
                                </div>
                                <div className="MainNavigation-Logo">
                                    <Link to="/"><img alt="" src={logo} height="50" /></Link>
                                </div>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="justify-content-end">
                                <div className="MainNavigation-Search align-self-center margin-right-30">
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <InputGroup>
                                                <Form.Control className="search-input align-self-center" type="text" placeholder="Search here.." />
                                                <InputGroup.Prepend className="search-input-button">
                                                    <img alt="" src={search} />
                                                </InputGroup.Prepend>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                </div>
								<div className="MainNavigation-Profile d-flex margin-left-20 margin-right-20">
                                    <div className="span margin-right-10">
                                        <NavLink to="/profile"><img alt="" src={profile} /></NavLink>
                                    </div>
                                    <div className="span align-self-center">
										<NavLink to="/profile">
											<b className="bold-16px">
											Personal
											</b>
											<br />
											profile
										</NavLink>
                                    </div>
                                </div>
                                <div className="MainNavigation-Cart d-flex margin-left-20 margin-right-20">
                                    <div className="span margin-right-10">
                                        <NavLink to="/cart"><img alt="" src={cart} /></NavLink>
                                    </div>
                                    <div className="span align-self-center">
										<NavLink to="/cart">
	                                        <b className="bold-16px">
											Shopping
											</b>
											<br />
	                                        cart
										</NavLink>
                                    </div>
                                </div>

                                <div className="MainNavigation-LanguageSwitcher align-self-center margin-left-20">
									<Dropdown>
										<Dropdown.Toggle id="dropdown-custom-components">
											RU
										</Dropdown.Toggle>

										<Dropdown.Menu>
											<Dropdown.Item href="#/action-1">RU</Dropdown.Item>
											<Dropdown.Item href="#/action-2">EN</Dropdown.Item>
											<Dropdown.Item href="#/action-3">DE</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
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
