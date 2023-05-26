import React, { useEffect, useState } from 'react';
import ToysCard from '../ToyCard/ToysCard';

const SportsCar = () => {
     const [toys,setToys]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allToys/sportsCar')
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])
    return (
        <div>
              {
                toys.map(toy=> <ToysCard
                key={toy._id}
                toy={toy}
                
                ></ToysCard>)
            }
        </div>
    );
};

export default SportsCar;