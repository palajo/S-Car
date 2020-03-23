import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


// importing Mainpage components
import '../styles/category.scss';


// importing Mainpage components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/navigation/Breadcrumbs';


// import Category images
import categoryImage from '../static/images/category-image.jpg';
import categoryBack from '../static/images/back.png';

// setting Category parameters
type categoryProps = {
    categoryIcon: string,
    categoryTitle: string,
	categoryLink: string
}

export const Category = ({ categoryIcon, categoryTitle, categoryLink }: categoryProps) =>
	<Col xl={2} className="category">
        <NavLink to={categoryLink} >
            <Row className="categoryBlock align-self-center">
                <Col className="align-self-center">
                    <Row>
                        <img src={categoryIcon} alt="" className="category-image" />
                    </Row>
                    <Row className="categoryTitle">
                        {categoryTitle}
                    </Row>
                </Col>
            </Row>
        </NavLink>
	</Col>


// get back to categories
export const CategoryBack = ({ categoryIcon, categoryTitle, categoryLink }: categoryProps) =>
	<Col xl={2} className="category">
        <NavLink to={categoryLink} >
            <Row className="categoryBlock categoryBack align-self-center">
                <Col className="align-self-center">
                    <Row>
                        <img src={categoryIcon} alt="" className="category-image" />
                    </Row>
                    <Row className="categoryTitle">
                        {categoryTitle}
                    </Row>
                </Col>
            </Row>
        </NavLink>
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
						<CategoryBack categoryLink="#" categoryIcon={categoryBack} categoryTitle="Get back!" />
					</Row>
				</Container>
			<Footer />
		</body>
	);
}

export default Catalog;
