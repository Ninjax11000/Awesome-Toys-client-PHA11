import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Navbar = () => {
    const [isHovering, setIsHovering] = useState(false);
    const handleName = () => {
        setIsHovering(true);
    }
    const hideName = () => {
        setIsHovering(false);
    }

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
        navigate('/');
    }
    return (
        <div>
            <div className="navbar bg-cyan-600 text-neutral-content">
                <div className="flex-1">
                    <Link to='/'><img className='w-14 h-14' src="/public/soccer-ball-42427.png" alt="" /></Link>
                    <Link className="btn btn-ghost normal-case text-xl">Awesome Toys</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>

                        <li><Link to='/blog'>Blogs</Link></li>
                        <li><Link to='/allToys'>All Toys</Link></li>
                        {user && <li><Link to='/addToy'>Add a Toy</Link></li>}
                        {user && <li><Link to='/myToy' >My Toys</Link></li>}
                        {user && isHovering && <h5 className='text-white mx-2 mt-3'>{user.displayName}</h5>}
                        {user && <img onMouseOver={handleName} onMouseOut={hideName} style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'white', margin: '5px' }} src={user.photoURL} alt="" />}
                        {user ? <button className='btn btn-primary' onClick={handleLogOut}>Logout</button> : <Link className='btn btn-primary' to='/login'>Login</Link>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;