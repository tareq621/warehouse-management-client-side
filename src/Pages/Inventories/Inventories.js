import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const Inventories = () => {
    const { itemId } = useParams();
    const [inventories, setInventories] = useState({});

    const navigate = useNavigate();

    const navigateManageitem = () => {
        navigate('/manageitem')
    }

    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])



    return (
        <div>
            <div className="card mb-3 border-0" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img className='img-fluid rounded-start mt-4 ms-5' src={inventories.img} alt="" />
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="card-body ms-5">
                            <table className="table caption-top">
                                <tbody>
                                    <tr>
                                        <td className='fw-bold'>Id:</td>
                                        <td>{inventories._id}</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bold'>Name:</td>
                                        <td>{inventories.name}</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bold'>Price:</td>
                                        <td>${inventories.price}</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bold'>Quantity:</td>
                                        <td>{inventories.quantity}</td>
                                        <td>Sold:2</td>
                                        <td>
                                            <Button style={{ backgroundColor: '#E21717' }} className='border-0'>Delivered</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bold'>Supplier</td>
                                        <td>{inventories.supplierName}</td>
                                    </tr>
                                    <tr>
                                        <td className='fw-bold'>Description:</td>
                                        <td>{inventories.description}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='d-flex'>
                                <Form.Group className="w-50">
                                    <Form.Control className='border-0 border-bottom border-bottom' name='name' type="number" placeholder="stock" />
                                </Form.Group>
                                <Button style={{ backgroundColor: '#E21717' }} className='border-0 text-light px-3 ms-4' type="submit">Re-stock</Button>
                            </div>
                            <div>
                                <Button style={{ backgroundColor: '#E21717' }} className='my-5 border-0' onClick={() => navigateManageitem()}>Manage Inventories</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventories;