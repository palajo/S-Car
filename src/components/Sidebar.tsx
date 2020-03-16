import React from 'react';
import {
    Container,
    Row,
    Col,
    Nav,
} from 'react-bootstrap';
import logowhite from '../static/images/logo-white.svg';
import mainmenuwhite from '../static/images/main-menu-white.svg';

/*
function closeNav() {
    document.getElementById('overlay').style.display = "none";
    document.getElementById('sidenav').style.left = "-340px";
}
*/

function Sidebar() {
	return(

        <div className="sidenav" id="sidenav">

            <Container fluid>
                <Row className="margin-bottom-30 padding-left-right-20">
                    <Col>
                        <img alt="" src={mainmenuwhite} height="50px" className="menuToggle margin-right-20" />
                        <img alt="" src={logowhite} height="50px" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Nav className="flex-column SidebarMenu">
                            <Nav.Link href="#">Catalog</Nav.Link>
                            <Nav.Link href="#">My profile</Nav.Link>
                            <Nav.Link href="#">Cart</Nav.Link>
                            <Nav.Link href="#">About us</Nav.Link>
                            <Nav.Link href="#">Our office</Nav.Link>
                            <Nav.Link href="#">Delivery</Nav.Link>
                            <Nav.Link href="#">Payment</Nav.Link>
                            <Nav.Link href="#">For clients</Nav.Link>
                            <Nav.Link href="#">For business</Nav.Link>
                            <Nav.Link href="#">Contacts</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
		</div>
    );
}

export default Sidebar;
