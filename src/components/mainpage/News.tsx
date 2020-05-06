import React from 'react';
import { Row, Col } from 'react-bootstrap';


// importing News components styles
import '../../styles/mainpage/news.scss';

// setting News parameters
type NewsProps = {
    newsTitle: string,
    newsContent: string
}

export const News = ({ newsTitle, newsContent }: NewsProps) =>
	<Row>
		<Col className="news-headline">
			<h3 className="margin-bottom-5">{newsTitle}</h3>
			<p>
				{newsContent}
			</p>
		</Col>
	</Row>

export default News;
