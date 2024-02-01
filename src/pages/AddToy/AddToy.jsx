import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';

const AddToy = () => {

    const { user } = useContext(AuthContext);
    const handleConfirm = (event) => {
        event.preventDefault();
        const form=event.target;
        const name=form.toyName.value;
        const picture=form.photo.value;
        const email=form.email.value;
        const storeName=form.storeName.value;
        const category=form.category.value;
        const price=parseFloat(form.price.value);
        const rating=parseFloat(form.rating.value);
        const quantity=parseInt(form.quantity.value);
        const detail=form.details.value;
        const seller={
            name: storeName,
            email: email
        }
        const toyData={picture,name,seller,category,price,rating,quantity,detail};
        console.log(toyData);
        fetch('https://toy-market-server-nu.vercel.app/addToy',{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(toyData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId)
            {
                form.reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your toy has been added!",
                    showConfirmButton: false,
                    timer: 1500
                  });
                

            }
        })

    }

    return (
        <form onSubmit={handleConfirm} className="card-body">
            <h2 className="text-3xl">Add a Toy</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy name</span>
                    </label>
                    <input type="text" placeholder=" Toy name" name='toyName' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy Photo</span>
                    </label>
                    <input type="url" placeholder="photo URL" name='photo' className="input input-bordered" required />
                </div>
               
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller email</span>
                    </label>
                    <input type="email" defaultValue={user?.email} placeholder="email" name='email' className="input input-bordered" required readOnly />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Store name</span>
                    </label>
                    <input type="text" placeholder="store name" name='storeName' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Categoty</span>
                    </label>
                    <select name="category" id="" className='border border-slate-400 rounded-lg text-center py-3'>
                        <option value={"Toy Cars"}>Toy Cars</option>
                        <option value={"Action Figures"}>Action Figures</option>
                        <option value={"Animal Toys"}>Animal Toys</option>
                        <option value={"Disney Toys"}>Disney Toys</option>
                    </select>
                </div>
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name='price' placeholder="price" className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" name='rating' placeholder="Rating" className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input type="text" name='quantity' placeholder="Quantity" className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <textarea name='details' className='border border-slate-400 rounded-lg text-left py-3 px-2' placeholder='details' rows={3} cols={60}></textarea>

                </div>
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-warning" type="submit" value="Add Toy" />
            </div>
        </form>
    );
};

export default AddToy;