import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='container'>
            <div>
                <h1 className='text-center mt-4 section-title'>Inventory Items</h1>
            </div>
            <div className='items-container'>
                {
                    items.slice(0, 6).map(item => <Item
                        key={item.id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;