import React from 'react';

const Inventory = (props) => {
    const [_id, name, price, supplierName, description] = props.inventory;

    return (
        <div>
            {name}
        </div>
    );
};

export default Inventory;