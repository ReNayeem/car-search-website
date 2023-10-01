// CarCard.js
import React from 'react';

const CarCard = ({ car }) => {
    return (
        <div className="car-card">
            <h3>{car.name}</h3>
            <p>Brand: {car.brand}</p>
            {/* Add more details and styling */}
        </div>
    );
};

export default CarCard;
