import React from 'react';
import { Container, Row, Col, Form, InputGroup, Dropdown} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

// importing Header components styles
import '../styles/sidebar.scss';
import '../styles/header.scss';
import '../styles/language-switcher.scss';
import '../styles/margins.scss';

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
                        <Col lg={7} className="d-none d-lg-block">
                            <Row >
                                <HeaderNavigation />
                            </Row>
                        </Col>
                        <Col>
                            <Row className="justify-content-center justify-content-lg-end">
                                <div className="margin-right-40 font-medium d-none d-md-block d-lg-block">
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
                        <Col className="max-width-300">
                            <Row className="justify-content-start">
                                <div className="MainNavigation-Menu align-self-center margin-right-20">
                                    <img alt="" src={mainmenu} className="menuToggle icon margin-right-mobile-10" onClick={openNav} />
                                </div>
                                <div className="MainNavigation-Logo">
                                    <Link to="/"><img alt="" src={logo} height="50" className="logo" /></Link>
                                </div>
                            </Row>
                        </Col>
                        <Col>
                            <Row className="justify-content-end">
                                <div className="MainNavigation-Search align-self-center margin-right-30 d-none d-lg-block">
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <InputGroup>
                                                <Form.Control className="search-input align-self-center" type="text" placeholder="Search here.." />
                                                <InputGroup.Prepend className="search-input-button">
                                                    <img alt="" src={search} className="icon" />
                                                </InputGroup.Prepend>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                </div>
								<div className="MainNavigation-SearchToggle d-flex margin-left-20 margin-right-20 d-lg-none">
									<div className="span margin-right-10">
										<img alt="" src={search} className="icon" />
									</div>
								</div>
								<div className="MainNavigation-Profile d-flex margin-left-20 margin-right-20">
                                    <div className="span margin-right-10">
                                        <NavLink to="/profile">
											<img alt="" src={profile} className="icon" />
										</NavLink>
                                    </div>
                                    <div className="span align-self-center d-none d-lg-block">
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
                                        <NavLink to="/cart">
											<img alt="" src={cart} className="icon" />
										</NavLink>
                                    </div>
                                    <div className="span align-self-center d-none d-lg-block">
										<NavLink to="/cart">
	                                        <b className="bold-16px">
											Shopping
											</b>
											<br />
	                                        cart
										</NavLink>
                                    </div>
                                </div>

                                <div className="MainNavigation-LanguageSwitcher align-self-center margin-left-20 d-none d-xl-block">
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
