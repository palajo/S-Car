import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


// importing css
import '../styles/sidebar.scss';

// importing Sidebar components
import SidebarNavigation from './navigation/SidebarNavigation';
import LanguageSwitcher from './language/language-switcher';


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

							<div className="newicon mainmenu-blue margin-right-20" onClick={closeNav}>
							</div>
							<h3 className="align-self-center white">
								INTERNET-SHOP
							</h3>
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
