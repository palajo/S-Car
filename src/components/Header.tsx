import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


// importing Header components styles
import '../styles/header.scss';
import '../styles/language/language-switcher.scss';
import '../styles/margins.scss';


// importing Header components
import Sidebar from './Sidebar';
import HeaderNavigation from './navigation/HeaderNavigation';
import Overlay from './Overlay';
import Search from './search/search-form';
import SearchMobile from './search/search-form-mobile';
import LanguageSwitcher from './language/language-switcher';


// importing Header images
import logo from '../static/images/logo.svg';

function openNav() {
	(document.getElementById("sidenav") as HTMLInputElement).style.left = "0px";
	(document.getElementById("overlay") as HTMLInputElement).style.display = "block";
}
function openSearch() {
	var search = (document.getElementById("searchmobile") as HTMLInputElement);
	search.style.left = (search.style.left === '-400px') ? '20px' : '-400px';
}

function Header() {
	return(
        <header>
			<Overlay />
            <Sidebar />
			<SearchMobile />
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
                                <div className="font-medium d-none d-md-block d-lg-block TopNavigation-Hover">
                                    <p>+38 (000) 000 00 00</p>
                                </div>
                                <div className="TopNavigation-Hover">
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
                                <div className="margin-right-20 margin-right-mobile-10">
									<div className="newicon mainmenu" onClick={openNav}>
									</div>
                                </div>
                                <div>
                                    <Link to="/">
										<img
											alt=""
											src={logo}
											className="logo"
										/>
									</Link>
                                </div>
                            </Row>
                        </Col>
						<Col className="align-self-center">
							<Row className="justify-content-center">
								<div className="d-none d-lg-block">
									<Search />
								</div>
							</Row>
						</Col>
                        <Col>
                            <Row className="justify-content-end">
								<div className="d-flex margin-right-10 d-lg-none">
									<div className="newicon search" onClick={openSearch}>
									</div>
								</div>

								<NavLink to="/profile">
									<div className="d-flex margin-left-20 margin-right-20 hover-icon-text">
	                                    <div className="span padding-right-10">
											<div className="newicon profile">
											</div>
	                                    </div>
	                                    <div className="span align-self-center d-none d-lg-block">
											<b className="bold-16px">Personal</b>
											<br />profile
	                                    </div>
	                                </div>
								</NavLink>

								<NavLink to="/cart">
	                                <div className="d-flex margin-left-20 margin-right-20 hover-icon-text">
	                                    <div className="span padding-right-10">
											<div className="newicon cart">
											</div>
	                                    </div>
	                                    <div className="span align-self-center d-none d-lg-block">
	                                        <b className="bold-16px">Shopping</b>
											<br />cart
	                                    </div>
	                                </div>
								</NavLink>


                                <div className="align-self-center margin-left-20 d-none d-xl-block">
									<LanguageSwitcher />
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
