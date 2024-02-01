import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <img className='mx-auto rounded-lg' src="/404.gif" alt="" />
           <div className='text-center'>
           <Link to='/'><button className='btn btn-warning '>Return Home</button></Link>
           </div>
        </div>
    );
};

export default ErrorPage;