import React from "react";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const TestimonialsCard = ({rating, description, profile_user, user_name, designation }) => {
   
    return (
        <div className="testimonial">
            <div className="stars"><Rating style={{ maxWidth: 70 }} value={rating} readOnly/></div>
            <p>{description}</p>
            <div className="user-info">
                <img src={profile_user} alt="User Image" />
                <div className="user-details">
                    <h4>{user_name}</h4>
                    <p>{designation}</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsCard;