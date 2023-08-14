import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function ThankYou({user}) {
    return (
        <div className="container">
            <h3>Thank You {user.email}</h3>
        <p>
            We appreciate your comments: {user.comment}
        </p>
          
        </div>
    );
}