import React from 'react';
import { Link } from 'react-router-dom';

const Car = ({ service }) => {
    const { name, img, details, price,_id } = service;
    return (
        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h5 className="card-title">Price: <span className='text-danger'> ${price}</span></h5>
                    <p className="card-text">{details}</p>
                    <Link to={`/purchase/${_id}`}><button className='btn btn-dark'>Purchase</button></Link> 
                </div>
            </div>
        </div>
    );
};

export default Car;