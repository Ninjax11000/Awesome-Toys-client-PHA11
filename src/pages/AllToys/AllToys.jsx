import React, { useEffect, useState } from 'react';

const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])
    return (
        <div>
            <h2 className='text-5xl text-center font-bold my-5'> All Toys</h2>
            <p className='text-center font-bold text-2xl'>{allToys.length}</p>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>Blue</td>
                            <td>Blue</td>
                            <td>Blue</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllToys;