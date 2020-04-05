import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

 
// importing News components styles
import '../../styles/mainpage/news.scss';


// importing News images
import newsimage from '../../static/images/news/example.jpg';


// setting News parameters
type NewProps = {
    newImage: string,
    newDescription: string
}

export const New = ({ newImage, newDescription }: NewProps) =>
    <Col lg={3} md={6} xs={12} className="padding-15-mobile">
        <Row>
            <Col>
                <Row>
                    <img alt="" src={newImage} width="100%" className="newsImage" />
                </Row>
                <Row className="NewsDescription">
                    <h3 className="NewsHeading">{newDescription}</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur elit,
						sed do eiusmod tempor incididunt ut labore.
					</p>
				</Row>
            </Col>
        </Row>
    </Col>


function News() {
	return(
		<Container className="margin-bottom-50">
			<Row className="margin-bottom-30 justify-content-center">
				<h2>Latest news</h2>
			</Row>
			<Row className="NewsBlock">
				<New
					newImage={newsimage}
					newDescription="Some news over here."
				/>
				<New
					newImage={newsimage}
					newDescription="Some news over here."
				/>
				<New
					newImage={newsimage}
					newDescription="Some news over here."
				/>
				<New
					newImage={newsimage}
					newDescription="Some news over here."
				/>
			</Row>
		</Container>
    );
}


export default News;
