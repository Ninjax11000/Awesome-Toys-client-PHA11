import React from 'react';
import { Link } from 'react-router-dom';

import bg6 from '/bg2.jpg'

const ToysCard = ({toy}) => {
    const {name,price,picture,rating,_id}=toy;
    return (
        <div className='mx-auto my-5'>
            <div className="card w-96 bg-base-200 shadow-xl border-2 border-cyan-600"  >
                <figure><img className='h-96 w-full' src={picture} alt="Shoes" /></figure>
                <div className="card-body font-bold text-left">
                    <h2 className="card-title font-extrabold">{name}</h2>
                    <p>Price:${price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/toy/${_id}`} className="btn btn-warning">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToysCard;