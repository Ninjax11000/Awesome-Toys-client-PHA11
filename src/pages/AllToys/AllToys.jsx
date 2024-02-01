import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ToysCard from '../Shared/ToyCard/ToysCard';
import search from './search.json';
import Lottie from 'lottie-react';

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    
    const options = [5, 10, 15];
    const handleSelectChange = event => {
        setItemsPerPage(parseInt(event.target.value));
        setCurrentPage(1);
    }
    const { totalCount } = useLoaderData();
    const totalPages = Math.ceil(totalCount / itemsPerPage);


    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);


    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    useEffect(() => {
        fetch(`https://toy-market-server-nu.vercel.app/allToys?page=${currentPage}&limit=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [currentPage, itemsPerPage]);

    const handlesearch = e=>{
        e.preventDefault();
        const searchText=e.target.searchText.value;
        if(!searchText) return;
        fetch(`https://toy-market-server-nu.vercel.app/search/${searchText}`)
        .then(res=>res.json())
        .then(data=>{
            setAllToys(data);
        })
    }
    return (
        <div>
            <div className=' flex flex-col md:flex-row justify-center items-center'>
                <h2 className="text-3xl font-bold">Get your favourite toys!</h2>
                <Lottie animationData={search} style={{ width: 300, height: 300 }}></Lottie>

            </div>
            <h2 className="text-5xl font-bold text-center">All Toys</h2>
            
                <form onSubmit={handlesearch} >
                    <div className='flex items-center justify-center my-3'>
                    <input type="text" name='searchText' placeholder="Search" className="input input-bordered input-info w-full max-w-xs " />
                    <input className='mx-3 btn btn-circle btn-outline' type="submit" value="Go" />
                    </div>
                </form>
        
            <div className="divider divider-neutral w-1/3 mx-auto"></div>

            <div className='grid md:grid-cols-3 gap-3'>
                {
                    allToys.map(toy => <ToysCard
                        key={toy._id}
                        toy={toy}
                    ></ToysCard>)
                }
            </div>
            {/* pagination */}
            <div className='text-center my-3'>
                <div className='join '>
                    {pageNumbers.map(pageNumber =>
                        //     
                        <input
                            key={pageNumber}
                            className={`join-item btn btn-square  `}
                            type="radio"
                            name="options"
                            aria-label={pageNumber}
                            checked={pageNumber === currentPage}
                            onChange={() => handlePageChange(pageNumber)}
                        />
                    )}
                </div>
                <select className='ms-5 bg-slate-300 px-3 py-3 rounded-md' value={itemsPerPage} onChange={handleSelectChange}>
                    {
                        options.map(option => (<option
                            key={option} value={option}
                        >{option}</option>))
                    }

                </select>
            </div>
        </div>
    );
};

export default AllToys;