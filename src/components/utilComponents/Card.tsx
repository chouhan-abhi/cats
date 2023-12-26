import React from 'react';
import { Button, Card } from 'react-bootstrap';

type IGenericCard = {
	title: string; 
	text: string;
	url: string;
}

function GenericCard({title, text, url}: IGenericCard) {
	return (
		<Card style={{ width: '32rem', padding: 'auto', border: '1px solid #bdbdbd', margin: '4px', display: 'flex', justifyContent: 'center' }}>
			<Card.Img variant="top" src={url} style={{width: '32rem', height: '22rem'}}/>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>
					{text}
				</Card.Text>
				<Button variant="primary">{'Like <3'}</Button>
			</Card.Body>
		</Card>
	);
}

export default GenericCard;