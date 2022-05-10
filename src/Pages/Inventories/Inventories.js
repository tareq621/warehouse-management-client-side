import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Inventory from './Inventory/Inventory';

const Inventories = () => {
    const { itemId } = useParams();
    const [inventories, setInventories] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])

    return (
        <div>
            <div className='inventory-container'>
                {
                    inventories.map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    ></Inventory>)
                }
            </div>
        </div>
    );
};

export default Inventories;