import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function SidebarNavigation() {
	return(
        <div>
			<Nav className="flex-column SidebarMenu">
				<NavLink to="/catalog" className="nav-link">Catalog</NavLink>
				<NavLink to="/profile" className="nav-link">My profile</NavLink>
				<NavLink to="/cart" className="nav-link">Cart</NavLink>
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

export default SidebarNavigation;
