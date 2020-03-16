import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function FooterNavigation() {
	return(
        <div>
            <Nav>
                <NavLink to="/about" className="nav-link">About us</NavLink>
                <NavLink to="/office" className="nav-link">Our office</NavLink>
                <NavLink to="/delivery" className="nav-link">Delivery</NavLink>
                <NavLink to="/payment" className="nav-link">Payment</NavLink>
                <NavLink to="/clients" className="nav-link">For clients</NavLink>
                <NavLink to="/business" className="nav-link">For business</NavLink>
                <NavLink to="/contacts" className="nav-link">Contacts</NavLink>
            </Nav>
        </div>
    );
}

export default FooterNavigation;
