import React, { useEffect, useState } from 'react';
import ToysCard from '../ToyCard/ToysCard';
import { Link } from 'react-router-dom';

const Home = () => {
   
    return (
        <div>
            <h2 className='text-3xl font-bold'> Toy Categories</h2>
          

            {/* 1st category */}
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Sports Car</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"> <Link to='/sportsCar'>See All</Link>  </button>
                    </div>
                </div>
            </div>

            {/* 2nd category */}
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Police Car</h2>
                
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to='/sportsCar'>See All</Link></button>
                    </div>
                </div>
            </div>
            {/* 3rd category */}
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Truck</h2>
                
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to='/allToys/sportsCar'>See All</Link> </button>
                    </div>
                </div>
            </div>

            {/* 4th category */}
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Regular Car</h2>
                    
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to='/allToys/sportsCar'>See All</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;