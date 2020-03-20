import React from 'react';
import { Container } from 'react-bootstrap';


// importing Mainpage components
import Header from '../components/Header';
import Footer from '../components/Footer';


function Cart() {
	return(
		<body>
			<Header />
				<Container>
					<h1>Cart</h1>
				</Container>
			<Footer />
		</body>
	);
}

export default Cart;
