import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const FeedBack = () => {
    return (
        <div className='my-5' >
          

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[ Autoplay,Pagination, Navigation]}
            >
                <SwiperSlide>
                    <div className='h-[50vh] bg-gradient-to-r from-[#f12711] to-[#f5af19]  rounded-md flex items-center'>
                        <div className='flex items-center justify-center gap-2 '>
                            <div className='w-1/3 text-center'>
                                <img className=' mx-auto w-40 h-40 rounded-full border-2 border-yellow-500' src="https://i.ibb.co/Yb6d0Hx/person11.jpg" alt="" />
                                <h3 className="text-2xl font-bold">Emma Thompson</h3>
                                <p>Web developer</p>
                            </div>
                            <p className='w-1/2 mx-auto text-2xl'>The colorful and kid-friendly design of the app appealed to my children, making the whole shopping experience a delight for them as well. It's not just a store for parents; it's a playground for kids too!</p>

                        </div>

                    </div></SwiperSlide>
                <SwiperSlide>
                    <div className='h-[50vh] bg-gradient-to-r from-[#40E0D0] via-[#FF8C00] to-[#FF0080]  rounded-md flex items-center'>
                    <div className='flex items-center justify-center gap-2 '>
                            <div className='w-1/3 text-center'>
                                <img className=' mx-auto w-40 h-40 rounded-full border-2 border-yellow-500' src=" https://i.ibb.co/Q8nkxFd/person22.jpg" alt="" />
                                <h3 className="text-2xl font-bold">Emma Thompson</h3>
                                <p>Web developer</p>
                            </div>
                            <p className='w-1/2 mx-auto text-2xl'>The colorful and kid-friendly design of the app appealed to my children, making the whole shopping experience a delight for them as well. It's not just a store for parents; it's a playground for kids too!</p>

                        </div>


                    </div></SwiperSlide>
                <SwiperSlide>
                    <div className='h-[50vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-md flex items-center'>
                    <div className='flex items-center justify-center gap-2 '>
                            <div className='w-1/3 text-center'>
                                <img className=' mx-auto w-40 h-40 rounded-full border-2 border-yellow-500' src="https://i.ibb.co/Yb6d0Hx/person11.jpg" alt="" />
                                <h3 className="text-2xl font-bold">Emma Thompson</h3>
                                <p>Web developer</p>
                            </div>
                            <p className='w-1/2 mx-auto text-2xl'>The colorful and kid-friendly design of the app appealed to my children, making the whole shopping experience a delight for them as well. It's not just a store for parents; it's a playground for kids too!</p>

                        </div>
                       


                    </div></SwiperSlide>
                <SwiperSlide>
                    <div className='h-[50vh] bg-gradient-to-r from-[#a8ff78] to-[#78ffd6] rounded-md flex items-center'>
                    <div className='flex items-center justify-center gap-2 '>
                            <div className='w-1/3 text-center'>
                                <img className=' mx-auto w-40 h-40 rounded-full border-2 border-yellow-500' src=" https://i.ibb.co/Q8nkxFd/person22.jpg" alt="" />
                                <h3 className="text-2xl font-bold">Emma Thompson</h3>
                                <p>Web developer</p>
                            </div>
                            <p className='w-1/2 mx-auto text-2xl'>The colorful and kid-friendly design of the app appealed to my children, making the whole shopping experience a delight for them as well. It's not just a store for parents; it's a playground for kids too!</p>

                        </div>

                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default FeedBack;