import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Item.css'

const Item = (props) => {
    const { _id, name, img, price, quantity, supplierName, description } = props.item;
    const navigate = useNavigate();

    const navigateInventory = id => {
        navigate(`/item/${id}`)
    }

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
                    <Button onClick={() => navigateInventory(_id)} className='button border-0 pe-auto'>Update</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Item;