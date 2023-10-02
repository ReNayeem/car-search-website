// CarCard.js
import React from 'react';
import './CarCard.css'

const CarCard = ({ car }) => {
    return (
        <div className="car-card">
            <div className='car-card-2'>
                <img src={car.img} />
                <div className='first-section'>
                    <h3>{car.name}</h3>
                    <h5>{car.year}</h5>
                </div>
                <div className='second-section'>
                    <h5><i className="fa-solid fa-person"></i>{car.seat}</h5>
                    <h5><i className="fa-solid fa-gas-pump"></i>{car.type}</h5>
                </div>
                <div className='third-section'>
                    <h5><i className="fa-solid fa-gauge"></i>{car.mileage}</h5>
                    <h5><i className="fa-solid fa-car"></i>{car.drive}</h5>
                </div>
                <hr className='hr'></hr>
                <div className='fourth-section'>
                    <h3>{car.cost} <span>/month</span></h3>
                    <div>
                        <i className="fa-solid fa-heart"></i>
                        <button>Rent now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
