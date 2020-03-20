import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

// importing Mainpage components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/navigation/Breadcrumbs';


// import Category images
import categoryImage from '../static/images/category-image.jpg';
import categoryBack from '../static/images/back.png';

// setting News parameters
type categoryProps = {
    categoryIcon: string,
    categoryTitle: string,
	categoryLink: string
}

export const Category = ({ categoryIcon, categoryTitle, categoryLink }: categoryProps) =>
	<Col className="categoryBlock align-self-center">
        <Row className="justify-content-center">
            <NavLink to={categoryLink} ><img src={categoryIcon} alt="" className="margin-bottom-20" /></NavLink>
        </Row>
        <Row className="justify-content-center">
		      <NavLink to={categoryLink} >{categoryTitle}</NavLink>
        </Row>
	</Col>


function Catalog() {
	return(
		<body>
			<Header />
			<Breadcrumbs />
                <Container className="categoryBlocks">
					<Row>
						<Category categoryLink="/table" categoryIcon={categoryImage} categoryTitle="Accessories" />
						<Category categoryLink="/table" categoryIcon={categoryImage} categoryTitle="Engine" />
						<Category categoryLink="/table" categoryIcon={categoryImage} categoryTitle="Accessories" />
						<Category categoryLink="/table" categoryIcon={categoryImage} categoryTitle="Accessories" />
						<Category categoryLink="/table" categoryIcon={categoryImage} categoryTitle="Accessories" />
						<Category categoryLink="/table" categoryIcon={categoryImage} categoryTitle="Accessories" />
						<Category categoryLink="/table" categoryIcon={categoryImage} categoryTitle="Accessories" />
						<Category categoryLink="/table" categoryIcon={categoryImage} categoryTitle="Accessories" />
						<Category categoryLink="/table" categoryIcon={categoryImage} categoryTitle="Accessories" />
						<Category categoryLink="/table" categoryIcon={categoryImage} categoryTitle="Accessories" />
						<Category categoryLink="/table" categoryIcon={categoryImage} categoryTitle="Accessories" />
						<Category categoryLink="#" categoryIcon={categoryBack} categoryTitle="Get back!" />
					</Row>
				</Container>
			<Footer />
		</body>
	);
}

export default Catalog;
