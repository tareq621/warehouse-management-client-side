import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';

const ManageItem = (props) => {
    const { _id, name, img, price, quantity, supplierName, description } = props.item;
    return (
        <div>
            <div>
                <h1>{name}</h1>
            </div>
        </div>
    );
};

export default ManageItem;