import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleToy = () => {
    const [toy, setToy] = useState({});
    const { id } = useParams();
    //    console.log(id);

    useEffect(() => {
        fetch(`http://localhost:5000/toys/${id}`)
            .then(res => res.json())
            .then(data => setToy(data))
    }, [])
    return (
        <div>
            <h2>Toy Details</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={toy?.picture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{toy?.name}</h1>
                        <p className="py-6 text-2xl">Seller name: {toy?.seller?.name} </p>
                        <p className="py-6">Seller email: {toy?.seller?.email} </p>
                        <h2 className='py-3 font-bold'>Price: {toy?.price}</h2>
                        <h2 className='py-3 font-bold'>Rating: {toy?.rating}</h2>
                        <h2 className='py-3 font-bold'>Rating: {toy?.rating}</h2>
                        <h2 className='py-3 font-bold'>Category: {toy?.category}</h2>
                        <h2 className='py-3 font-bold' >Available Quantity: {toy?.quantity}</h2>
                        <p> <span className='font-bold'>Details:</span>  {toy?.detail}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;