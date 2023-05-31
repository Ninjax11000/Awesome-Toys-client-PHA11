import React from 'react';

const Banner = () => {
    return (
        <div className='my-5 '>
            <div className="carousel w-full rounded-lg">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="/sliderImg-3 (1).jpg" className="w-full" />
                    <div className='absolute '>
                        <h2 className="md:text-6xl text-4xl font-bold my-2 mx-2 text-yellow-400">Get Affordable Toys</h2>
                        <p className='text-white my-2 mx-2'>Toys are the keys to the kingdom of imagination, where dreams come to life and childhood memories are built.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="/sliderImg-2 (1).jpg" className="w-full" />
                    <div className='absolute text-white'>
                        <h2 className="md:text-6xl text-4xl font-bold my-2 mx-2">Get Awesome Toys</h2>
                        <p className='mx-2 my-2'>A toy is not just an object; it is a portal to a world of wonder, where creativity knows no bounds.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="/sliderImg-1 (1).jpg" className="w-full" />
                    <div className='absolute'>
                        <h2 className="md:text-6xl text-4xl font-bold my-2 mx-2 text-yellow-400">Get Latest Toys</h2>
                        <p className='text-white mx-2 my-2'>In the hands of a child, a simple toy becomes a mighty tool for exploration, growth, and endless possibilities.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="/sliderImg-4 (1).jpg" className="w-full" />
                    <div className='absolute '>
                        <h2 className="md:text-6xl text-4xl font-bold my-2 mx-2 text-yellow-400">Get Amazing Toys</h2>
                        <p className='text-white mx-2 my-2'>Toys are not just playthings; they are the building blocks of a child's development, fostering curiosity, problem-solving, and a sense of joy.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;