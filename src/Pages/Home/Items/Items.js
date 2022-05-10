import React, { useEffect, useState } from 'react';
import useItems from '../../../Hooks/useItems';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items] = useItems();
    return (
        <div className='container'>
            <div>
                <h1 className='text-center mt-4 mb-4 section-title'>Inventory Items</h1>
            </div>
            <div className='items-container'>
                {
                    items.slice(0, 6).map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;