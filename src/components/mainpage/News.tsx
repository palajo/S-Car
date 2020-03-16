import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


// importing News images
import newsimage from '../../static/images/news/example.jpg';


// setting News parameters
type NewProps = {
    newImage: string,
    newDescription: string
}

export const New = ({ newImage, newDescription }: NewProps) =>
    <Col>
        <Row>
            <img alt="" src={newImage} width="100%" />
        </Row>
        <Row>
            <p className="NewsHeading">{newDescription}</p>
        </Row>
    </Col>


function News() {
	return(
		<Container className="margin-bottom-50">
			<Row className="margin-bottom-30 justify-content-center">
				<h2>Latest news</h2>
			</Row>
			<Row className="NewsBlock">
				<New newImage={newsimage} newDescription="Some news over here." />
				<New newImage={newsimage} newDescription="Some news over here." />
				<New newImage={newsimage} newDescription="Some news over here." />
				<New newImage={newsimage} newDescription="Some news over here." />
			</Row>
		</Container>
    );
}


export default News;
