import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import ToyRow from './ToyRow';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const MyToys = () => {
    const {user}=useContext(AuthContext);
    const [myToys,setMyToys]=useState([]);
    const [updated, setUpdated] =useState(false);
    const navigate=useNavigate();
    useEffect(()=>{
        fetch(`https://toy-market-server-nu.vercel.app/myToys/${user?.email}`,{
            method: 'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(!data.error) setMyToys(data);
            else  navigate('/');
        })
    },[user,updated,navigate]);

    const handleDelete = (id)=>{
        fetch(`https://toy-market-server-nu.vercel.app/allToys/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                const remaining= myToys.filter(toy=> toy._id !==id);
                setMyToys(remaining);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Deleted",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
           
        })

    }

    const handleUpdate = (data,id)=>{
        console.log(data);
        fetch(`https://toy-market-server-nu.vercel.app/allToys/${id}`,{
            method:'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if (data.modifiedCount > 0) {
                setUpdated(!updated);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your toy has been updated!",
                    showConfirmButton: false,
                    timer: 1500
                  });
              }
        })
    }

    return (
        <div>
        <h2 className="text-center text-3xl font-bold my-3">Toys of {user?.displayName}</h2>
        <div className="divider divider-neutral w-1/3 mx-auto"></div>
            <div className="overflow-x-auto my-3">
                <table className="table table-sm md:table-md lg:table-lg">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(toy=><ToyRow
                                key={toy._id}
                                toy={toy}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            ></ToyRow>)
                        }
                        
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default MyToys;