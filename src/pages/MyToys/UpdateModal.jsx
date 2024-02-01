import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const UpdateModal = ({toy, handleUpdate}) => {
    const { _id, name, category, price, picture, quantity,seller,rating,detail } = toy;
    const {user}=useContext(AuthContext);
    const handleConfirm = (event) => {
        
        const form = event.target;
        const name = form.toyName.value;
        const picture = form.photo.value;
        const email = form.email.value;
        const storeName = form.storeName.value;
        const category = form.category.value;
        const price = parseFloat(form.price.value);
        const rating = parseFloat(form.rating.value);
        const quantity = parseInt(form.quantity.value);
        const detail = form.details.value;
        const seller = {
            name: storeName,
            email: email
        }
        const toyData = { picture, name, seller, category, price, rating, quantity, detail };
        handleUpdate(toyData,_id);

    }

    return (
        <div className="modal-box">

            <div className="modal-action">

                <form onSubmit={handleConfirm} className="card-body" method="dialog">
                    <h2 className="text-3xl">Update a Toy</h2>
                    <div className='grid grid-cols-1 gap-6'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy name</span>
                            </label>
                            <input type="text" placeholder=" Toy name" name='toyName' className="input input-bordered" defaultValue={name} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Photo</span>
                            </label>
                            <input type="url" placeholder="photo URL" name='photo' className="input input-bordered" defaultValue={picture} required />
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
                            <input type="text" placeholder="store name" name='storeName' className="input input-bordered" defaultValue={seller.name} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Categoty</span>
                            </label>
                            <select defaultValue={category} name="category" id="" className='border border-slate-400 rounded-lg text-center py-3'>
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
                            <input type="text" name='price' placeholder="price" defaultValue={price} className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name='rating' defaultValue={rating} placeholder="Rating" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="text" name='quantity' defaultValue={quantity} placeholder="Quantity" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <textarea name='details' defaultValue={detail} className='border border-slate-400 rounded-lg text-left py-3 px-2' placeholder='details' rows={3} cols={60}></textarea>

                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-outline btn-primary font-bold" type="submit" value="Update Toy" />
                    </div>

                   
                </form>
            </div>
        </div>
    );
};

export default UpdateModal;