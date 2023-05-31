import React from 'react';
import { Link } from 'react-router-dom';

const ToysCard = ({toy}) => {
    const {name,price,picture,rating,_id}=toy;
    return (
        <div className='ms-3 my-5'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/toy/${_id}`} className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToysCard;