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
import mainmenu from '../static/images/main-menu.svg';
import profile from '../static/images/profile.svg';
import cart from '../static/images/cart.svg';
import search from '../static/images/search.svg';


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


                                <div className="margin-right-20">
                                    <img
										alt=""
										src={mainmenu}
										className="menuToggle icon margin-right-mobile-10"
										onClick={openNav}
									/>
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
                        <Col>
                            <Row className="justify-content-end">


                                <div className="align-self-center margin-right-30 d-none d-lg-block">
									<Search />
								</div>
								<div className="d-flex margin-right-10 d-lg-none">
									<img
										alt=""
										src={search}
										className="icon"
										onClick={openSearch}
									/>
								</div>


								<div className="d-flex margin-left-20 margin-right-20 hover-icon-text">
                                    <div className="span margin-right-10">
                                        <NavLink to="/profile">
											<img
												alt=""
												src={profile}
												className="icon"
											/>
										</NavLink>
                                    </div>
                                    <div className="span align-self-center d-none d-lg-block">
										<NavLink to="/profile">
											<b className="bold-16px">Personal</b>
											<br />profile
										</NavLink>
                                    </div>
                                </div>


                                <div className="d-flex margin-left-20 margin-right-20 hover-icon-text">
                                    <div className="span margin-right-10">
                                        <NavLink to="/cart">
											<img
												alt=""
												src={cart}
												className="icon"
											 />
										</NavLink>
                                    </div>
                                    <div className="span align-self-center d-none d-lg-block">
										<NavLink to="/cart">
	                                        <b className="bold-16px">Shopping</b>
											<br />cart
										</NavLink>
                                    </div>
                                </div>


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
