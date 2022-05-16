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
            "description": "Buying experience is awesome and Dealer also helped us to find the correct model as per requirement. The riding experience is just freaking fantastic and ride quality is awesome as well.",
        },
        {
            "id": "11",
            "title": "Done In 3Month!",
            "name": "Ariful Islam",
            "job": "CTO Albana Tech",
            "description": "Looks are very aggressive, in each and every model there is LED taillights which are cool and not like other cars in base model there are only halogen and in top there is LED. ",
        },
        {
            "id": "12",
            "title": "Just Fabulous",
            "name": "Ovi Ahmed",
            "job": "Developer",
            "description": "Excellent in terms of Safety, Handling and Performance in comparison with other hatchbacks. I have used i20 as well but its not even near to VW. Now using Altroz , which is at par with VW.",
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