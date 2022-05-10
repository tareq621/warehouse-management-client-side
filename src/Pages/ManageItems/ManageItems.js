import React from 'react';
import useItems from '../../Hooks/useItems';
import Item from '../Home/Item/Item';
import ManageItem from '../ManageItem/ManageItem';

const ManageItems = () => {
    const [items] = useItems();
    return (
        <div>
            <h2>manage inventory</h2>
            {
                items.slice(0, 6).map(item => <ManageItem
                    key={item._id}
                    item={item}
                ></ManageItem>)
            }
        </div>
    );
};

export default ManageItems;