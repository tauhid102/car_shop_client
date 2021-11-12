import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, details, price,img,_id } = service;
    return (
        <div class="col">
            <div class="card">
                <img src={img} class="card-img-top" alt="..."/>
                <div class ="card-body">
                <h4 class ="card-title">{name}</h4>
                <h5>Price: <span className='text-danger'>${price}</span></h5>
                <p class ="card-text">{details}</p>
                <Link to={`/purchase/${_id}`}><button className='btn btn-dark'>Purchase</button></Link>               
                </div>
            </div>
        </div>
    );
};

export default Service;