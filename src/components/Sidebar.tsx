import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


// importing css
import '../styles/sidebar.scss';

// importing Sidebar components
import SidebarNavigation from './navigation/SidebarNavigation';
import LanguageSwitcher from './language/language-switcher';


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

							<img
								alt=""
								src={mainmenuwhite}
								className="icon menuToggle margin-right-20"
								onClick={closeNav}
							/>

							<Link to="/">
								<img
									alt=""
									src={logowhite}
									className="icon"
								/>
							</Link>

							<div className="MainNavigation-LanguageSwitcher align-self-center margin-left-20 d-block d-xl-none">
								<LanguageSwitcher />
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
