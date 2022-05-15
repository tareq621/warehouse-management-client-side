import React from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';

const AddItem = () => {
    return (
        <div className='mx-auto w-50'>
            <h1 className='fw-bold mt-2 text-center section-title'>Add Product</h1>
            <form className='container mt-4'>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' type="name" placeholder="" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name='email' type="email" placeholder="" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridProductName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control name='productName' type="text" placeholder="Product Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridProductPrice">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control name='productPrice' type="number" placeholder="Price" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridImgUrl">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control name='imgUrl' type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridQuantity">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control name='quantity' type="number" placeholder="Quantity" />
                    </Form.Group>
                </Row>
                <>
                    <Form.Label>Description</Form.Label>
                    <FloatingLabel controlId="floatingTextarea2" label="Product Description">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '150px' }}
                        />
                    </FloatingLabel>
                </>
                <div className='text-center'>
                    <Button style={{ backgroundColor: '#E21717' }} className='my-2 mb-4 border-0'>Add new item</Button>
                </div>
            </form>
        </div>
    );
};

export default AddItem;