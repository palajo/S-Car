import React from 'react';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import newsimage from '../static/images/news.jpg';


// setting brand parameters
type NewsBlockProps = {
    newsImage: string,
    newsDescription: string
}


//creating brand block
export const NewsBlock = ({ newsImage, newsDescription }: NewsBlockProps) =>
<Col>
    <Row>
        <img src={newsImage} width="100%" />
    </Row>
    <Row>
        <p className="NewsHeading">{newsDescription}</p>
    </Row>
</Col>


function News() {
	return(
		<Container className="margin-bottom-50">
			<Row className="margin-bottom-30 justify-content-center">
				<h2>Latest news</h2>
			</Row>
			<Row className="NewsBlock">
				<NewsBlock newsImage={newsimage} newsDescription="Some news over here." />
				<NewsBlock newsImage={newsimage} newsDescription="Some news over here." />
				<NewsBlock newsImage={newsimage} newsDescription="Some news over here." />
				<NewsBlock newsImage={newsimage} newsDescription="Some news over here." />
			</Row>
		</Container>
    );
}

export default News;
