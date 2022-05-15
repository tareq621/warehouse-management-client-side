import React from 'react';
import { useForm } from "react-hook-form";
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';

const AddItem = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className='mx-auto w-50'>
            <h1 className='fw-bold mt-2 text-center section-title'>Add Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='container mt-4'>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control {...register("userName")} placeholder="" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control {...register("email")} placeholder="" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridProductName">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control {...register("name")} placeholder="Product Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridProductPrice">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control {...register("price")} placeholder="Price" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridImgUrl">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control {...register("img")} placeholder="" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridQuantity">
                        <Form.Label>Quantity</Form.Label>
                        <Form.Control {...register("quantity")} placeholder="Quantity" />
                    </Form.Group>
                </Row>
                <>
                    <Form.Label>Description</Form.Label>
                    <FloatingLabel {...register("description")} controlId="floatingTextarea2" label="Product Description">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '150px' }}
                        />
                    </FloatingLabel>
                </>
                <div className='text-center'>
                    <Button type='submit' style={{ backgroundColor: '#E21717' }} className='my-2 mb-4 border-0'>Add new item</Button>
                </div>
            </form>
        </div>
    );
};

export default AddItem;