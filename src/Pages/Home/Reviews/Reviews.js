import React from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const reviews = [
        {
            "id": "10",
            "title": "Awesome! Loving It",
            "name": "Saiful Sarder",
            "job": "Engineer",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est veniam, repellat laudantium nostrum possimus non iusto earum itaque mollitia libero",
            "img": ""
        },
        {
            "id": "11",
            "title": "Done In 3Month!",
            "name": "Ariful Islam",
            "job": "CTO Albana Tech",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est veniam, repellat laudantium nostrum possimus non iusto earum itaque mollitia libero",
            "img": ""
        },
        {
            "id": "12",
            "title": "Just Fabulous",
            "name": "Ovi Ahmed",
            "job": "Developer",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est veniam, repellat laudantium nostrum possimus non iusto earum itaque mollitia libero",
            "img": ""
        }

    ];
    return (
        <div>
            <h2 className='text-center section-title fw-bold mb-5'>Expert Review Feedback</h2>
            <div className='reviews-container'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;