import React, { useEffect, useState } from 'react';
import ToysCard from '../ToyCard/ToysCard';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';

const Home = () => {
    
    const [sportsCar, setsportsCar] = useState([]);
    const [policeCar, setpoliceCar] = useState([]);
    const [regularCar, setregularCar] = useState([]);
    const [truck, setTruck] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allToys/sportsCar')
            .then(res => res.json())
            .then(data => setsportsCar(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/allToys/policeCar')
            .then(res => res.json())
            .then(data => setpoliceCar(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/allToys/regularCar')
            .then(res => res.json())
            .then(data => setregularCar(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/allToys/truck')
            .then(res => res.json())
            .then(data => setTruck(data))
    }, [])

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <h2 className='text-4xl font-bold text-center my-7'> Shop by Categories</h2>
            <div className='w-75 mx-auto text-center'>
            <Tabs > 
                <TabList>
                    <Tab>Sports Car</Tab>
                    <Tab>Police Car</Tab>
                    <Tab>Regular Car</Tab>
                    <Tab>Truck</Tab>
                </TabList>

                <TabPanel>
                    <h2> number of items: {sportsCar.length}</h2>
                    {
                        sportsCar.map(toy => <ToysCard
                            key={toy._id}
                            toy={toy}

                        ></ToysCard>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2> number of items:{policeCar.length}</h2>
                    {
                        policeCar.map(toy => <ToysCard
                            key={toy._id}
                            toy={toy}

                        ></ToysCard>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>number of items: {regularCar.length}</h2>
                    {
                        regularCar.map(toy => <ToysCard
                            key={toy._id}
                            toy={toy}

                        ></ToysCard>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2> number of items:{truck.length}</h2>
                    {
                        truck.map(toy => <ToysCard
                            key={toy._id}
                            toy={toy}

                        ></ToysCard>)
                    }
                </TabPanel>
            </Tabs>
            </div>

           
        </div>
    );
};

export default Home;