import React, { useEffect, useState } from 'react';
// import ToysCard from '../ToyCard/ToysCard';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Gallery from '../Gallery/Gallery';
import Banner from '../../Shared/Banner/Banner';
import ToysCard from '../../Shared/ToyCard/ToysCard';
import Lottie from "lottie-react";
import gallery from './Animation1.json';
import FeedBack from '../FeedBack/FeedBack';

const Home = () => {

    const [toys, setToys] = useState([]);
    const [showAll, setShowAll]=useState(false);

    const [category, setCategory] = useState('Action Figures');


    useEffect(() => {
        fetch(`https://toy-market-server-nu.vercel.app/allToys/${category}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data);
            })
    }, [category])
    const handleShowAll = ()=>{
        setShowAll(true);
    }

    return (
        <div>
            <Banner></Banner>
            <div className='flex flex-col md:flex-row justify-center items-center'> 
                <h2 className="text-4xl font-bold my-9">Gallery</h2>
                <Lottie animationData={gallery} style={{ height: 300, width: 300, }}></Lottie>
            </div>
            <Gallery></Gallery>
            <h2 className='text-4xl font-bold text-center m-4 p-4'> Shop by Categories</h2>
            <div className='w-75 mx-auto text-center'>
                <Tabs >
                    <TabList>
                        <Tab onClick={() => {
                            setCategory('Action Figures');
                            setShowAll(false); 
                            }}><span className='font-bold'>Action Figures</span></Tab>
                        <Tab onClick={() =>{
                            setCategory('Toy Cars');
                            setShowAll(false);
                        } }><span className='font-bold'>Toy Cars</span></Tab>
                        <Tab onClick={() => {
                            setCategory('Animal Toys');
                            setShowAll(false);
                        }}><span className='font-bold'>Animal Toys</span></Tab>
                        <Tab onClick={() => {
                            setCategory('Disney Toys');
                            setShowAll(false);
                        }}><span className='font-bold'>Disney Toys</span></Tab>
                    </TabList>

                    <TabPanel>
                        <h2 className='text-2xl'>Total Items: {toys.length}</h2>
                        <div className='grid md:grid-cols-3 gap-6'>
                            {
                                toys.slice(0, showAll? toys.length:6).map(toy => <ToysCard
                                    key={toy._id}
                                    toy={toy}

                                ></ToysCard>)
                            }
                        </div>
                        {
                            (!showAll && toys.length>6) ? <><button onClick={handleShowAll} className='btn btn-error font-bold my-3'>Show All</button></>:<></>
                        }

                    </TabPanel>
                    <TabPanel>
                        <h2 className='text-2xl'>Total Items: {toys.length}</h2>
                        <div className='grid grid-cols-3 gap-6'>
                        {
                                toys.slice(0, showAll? toys.length:6).map(toy => <ToysCard
                                    key={toy._id}
                                    toy={toy}

                                ></ToysCard>)
                            }
                        </div>
                        {
                            (!showAll && toys.length>6) ? <><button onClick={handleShowAll} className='btn btn-error font-bold my-3'>Show All</button></>:<></>
                        }

                    </TabPanel>
                    <TabPanel>
                        <h2 className='text-2xl'>Total Items: {toys.length}</h2>
                        <div className='grid grid-cols-3 gap-6'>
                        {
                                toys.slice(0, showAll? toys.length:6).map(toy => <ToysCard
                                    key={toy._id}
                                    toy={toy}

                                ></ToysCard>)
                            }
                        </div>
                        {
                            (!showAll && toys.length>6) ? <><button onClick={handleShowAll} className='btn btn-error font-bold my-3'>Show All</button></>:<></>
                        }

                    </TabPanel>
                    <TabPanel>
                        <h2 className='text-2xl'>Total Items: {toys.length}</h2>
                        <div className='grid grid-cols-3 gap-6'>
                        {
                                toys.slice(0, showAll? toys.length:6).map(toy => <ToysCard
                                    key={toy._id}
                                    toy={toy}

                                ></ToysCard>)
                            }
                        </div>
                        {
                            (!showAll && toys.length>6) ? <><button onClick={handleShowAll} className='btn btn-error font-bold my-3'>Show All</button></>:<></>
                        }

                    </TabPanel>
                </Tabs>
            </div>

            <FeedBack></FeedBack>


        </div>

    );
};

export default Home;