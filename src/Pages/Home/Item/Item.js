import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Item = (props) => {
    const { name, img, price, Quantity } = props.item;
    return (
        <div>
            <Card style={{ width: '22rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Update</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;