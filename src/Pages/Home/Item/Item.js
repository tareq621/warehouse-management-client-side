import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Item.css'

const Item = (props) => {
    const { name, img, price, quantity, supplierName, description } = props.item;
    return (
        <div>
            <Card className=' card-shadow col-12 col-md-6 col-sm-6' style={{ width: '22rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body className='gy-5'>
                    <h4>{name}</h4>
                    <div className='d-flex justify-content-between'>
                        <p>Price:$ {price}</p>
                        <p>Quantity: {quantity}</p>
                    </div>
                    <h4>Supplier Name: {supplierName}</h4>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button className='button border-0' variant="primary">Update</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;