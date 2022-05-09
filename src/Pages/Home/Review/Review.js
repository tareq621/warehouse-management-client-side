import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Review.css'
import { Card } from 'react-bootstrap';

const Review = (props) => {
    const { title, name, job, description } = props.review;
    return (
        <div className='container text-center'>
            <Card style={{ width: '18rem' }} className="border-0 container review-shadow">
                <Card.Body>
                    <Card.Title className='fw-bold'>{title}</Card.Title>
                    <Card.Text className='lh-sm'>
                        {description}
                    </Card.Text>
                    <h5>{name}</h5>
                    <p>{job}</p>
                    <div>
                        <FontAwesomeIcon icon={faStar} style={{ color: '#F4BE2C' }}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} style={{ color: '#F4BE2C' }}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} style={{ color: '#F4BE2C' }}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} style={{ color: '#F4BE2C' }}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} style={{ color: '#F4BE2C' }}></FontAwesomeIcon>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;