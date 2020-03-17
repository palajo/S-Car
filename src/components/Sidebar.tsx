import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


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
                        <img alt="" src={mainmenuwhite} height="50px" className="menuToggle margin-right-20" onClick={closeNav} />
                        <img alt="" src={logowhite} height="50px" />
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
