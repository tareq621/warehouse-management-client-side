import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ManageItem = (props) => {
    const navigate = useNavigate();

    const { _id, name, img, price, quantity, supplierName, description } = props.item;

    const navigateInventory = () => {
        navigate(`/item/${_id}`)
    }
    return (
        <div className='container '>
            <div className="card mb-3 py-2 border-0 rounded">
                <div className="row g-2">
                    <div className="col-md-4">
                        <img className='img-fluid rounded-start py-1' src={img} alt="" />
                    </div>
                    <div className="col-md-8 d-flex">
                        <div className="card-body d-flex justify-content-around align-items-center">
                            <h5 className="card-title">Name: {name}</h5>
                            <h6 >Price: {price}</h6>
                            <h6>Stock: {quantity}</h6>
                        </div>
                        <div className='d-flex align-items-center'>
                            <div>
                                <button type="button" className="button border-0 rounded text-light px-2 py-1 me-2" onClick={navigateInventory}>Update</button>
                            </div>
                            <div>
                                <button type="button" className="button border-0 rounded text-light px-2 py-1">
                                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ManageItem;