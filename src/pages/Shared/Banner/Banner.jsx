import React from 'react';
import bg from '/banner6.png';
import './Banner.css'

const Banner = () => {
    const text='Welcome to Awesome Toys!'
    return (
        <div className='relative md:h-[90vh] h-[50vh]'  >
            <h2 id='title' className="text-3xl md:text-5xl font-bold absolute left-1/3 right-1/3 top-10 z-10 ">{text}</h2>
            <img className='absolute top-0 w-full rounded-b-md' src="/banner5.jpg" alt="" />
           
        </div>
    );
};

export default Banner;