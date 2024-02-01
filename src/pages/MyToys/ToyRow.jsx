import React from 'react';
import UpdateModal from './UpdateModal';

const ToyRow = ({ toy, handleDelete , handleUpdate}) => {
    const { _id, name, category, price, picture, quantity } = toy;

    return (
        <tr>

            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={picture} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>

                    </div>
                </div>
            </td>
            <td>
                {category}
                <br />

            </td>
            <td>{price}</td>
            <td>{quantity}</td>
            <th>
                <button className="btn btn-outline mx-2" onClick={() => document.getElementById('my_modal_1').showModal()}>Update</button>
                <dialog id="my_modal_1" className="modal">
                    <UpdateModal 
                    handleUpdate={handleUpdate}
                    toy={toy}
                    ></UpdateModal>
                    
                </dialog>
                <button onClick={() => handleDelete(_id)} className="btn btn-error">Delete</button>
            </th>
        </tr>
    );
};

export default ToyRow;