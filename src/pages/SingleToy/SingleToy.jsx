import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const SingleToy = () => {
   
    const toy=useLoaderData();

    return (
        <div>
             <h2 className="text-center text-3xl font-bold my-3">Toy Details</h2>
             <div className="divider divider-neutral w-1/3 mx-auto"></div>

            <div className="hero min-h-screen bg-base-200 my-5 rounded-md">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={toy?.picture} className="max-w-sm rounded-lg shadow-2xl border-2 border-cyan-600" />
                    <div>
                        <h1 className="text-5xl ">{toy?.name}</h1>
                        <p className="py-6 text-2xl"><span className='font-bold'>Seller name:</span> {toy?.seller?.name} </p>
                        <p className="py-6"><span className='font-bold'>Seller email:</span> {toy?.seller?.email} </p>
                        <h2 className='py-3 '><span className='font-bold'>Price:</span> {toy?.price}</h2>
                        <h2 className='py-3 '><span className='font-bold'>Rating:</span> {toy?.rating}</h2>
                        <h2 className='py-3 '><span className='font-bold'>Rating:</span> {toy?.rating}</h2>
                        <h2 className='py-3 '><span className='font-bold'>Category:</span> {toy?.category}</h2>
                        <h2 className='py-3 ' ><span className='font-bold'>Available Quantity:</span> {toy?.quantity}</h2>
                        <p> <span className='font-bold'>Details:</span>  {toy?.detail}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;