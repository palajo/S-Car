import React from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


// importing Sidebar components
import SidebarNavigation from './navigation/SidebarNavigation';


// importing Sidebar images
import logowhite from '../static/images/logo-white.svg';
import mainmenuwhite from '../static/images/main-menu-white.svg';


function closeNav() {
	(document.getElementById("sidenav") as HTMLInputElement).style.left = "-340px";
	(document.getElementById("overlay") as HTMLInputElement).style.display = "none";
}


function Sidebar() {
	return(
        <div className="sidenav" id="sidenav">
            <Container fluid>
                <Row className="margin-bottom-30 padding-left-right-20">
                    <Col>
						<Row className="no-margin-row">
							<img alt="" src={mainmenuwhite} className="icon menuToggle margin-right-20" onClick={closeNav} />
							<Link to="/"><img alt="" src={logowhite} className="icon" /></Link>
							<div className="MainNavigation-LanguageSwitcher align-self-center margin-left-20 d-block d-xl-none">
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
                <Row>
                    <Col>
                        <SidebarNavigation />
                    </Col>
                </Row>
            </Container>
		</div>
    );
}


export default Sidebar;
