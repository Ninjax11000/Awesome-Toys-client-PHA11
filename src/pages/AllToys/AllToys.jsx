import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])
    return (
        <div className='my-10'>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                           
                            <th>Seller</th>
                            <th>Toy Name </th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        allToys.map(toy=> <tr key={toy._id}>
                            
                            <td>{toy.seller.name}</td>
                            <td>{toy.name}</td>
                            <td>{toy.category}</td>
                            <td>{toy.price}</td>
                            <td>{toy.quantity}</td>
                            <td><Link className='btn btn-primary' to={`/toy/${toy._id}`}>View Details</Link></td>
                        </tr>)
                       }
                      
                    </tbody>
                    <tfoot>
                        <tr>
                        
                            <th>Seller</th>
                            <th>Toy Name </th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </div>
    );
};

export default AllToys;