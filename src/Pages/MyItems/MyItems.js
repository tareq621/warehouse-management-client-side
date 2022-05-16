import React from 'react';
import useItems from '../../Hooks/useItems';

const MyItems = () => {
    const [items, setItems] = useItems();
    return (
        <div>
            <h2 className='text-center section-title'>My Item</h2>
        </div>
    );
};

export default MyItems;