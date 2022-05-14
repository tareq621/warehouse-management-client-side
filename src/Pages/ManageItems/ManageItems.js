import React from 'react';
import { Button } from 'react-bootstrap';
import useItems from '../../Hooks/useItems';
import ManageItem from '../ManageItem/ManageItem';

const ManageItems = () => {
    const [items] = useItems();
    return (
        <div>
            <h2 className='section-title my-4 text-center'>Manage Inventory</h2>
            <div className='text-center'>
                <Button style={{ backgroundColor: '#E21717' }} className='my-2 mb-4 border-0'>Add new item</Button>
            </div>
            {
                items.map(item => <ManageItem
                    key={item._id}
                    item={item}
                ></ManageItem>)
            }
        </div >
    );
};

export default ManageItems;