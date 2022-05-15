import React from 'react';
import useItems from '../../Hooks/useItems';

const MyItem = () => {
    const [items, setItems] = useItems();
    return (
        <div>
            <h2>my item</h2>
        </div>
    );
};

export default MyItem;