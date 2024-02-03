import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import './Navbar.css';

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
            .then(()=>{
                
                navigate('/');
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
           
            <div className="navbar justify-around pt-9 bg-white text-black">
                <div className="navbar-start">
                    <div className="dropdown relavtive">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black z-20">
                            <li><Link to='/'>Home</Link></li>

                            <li><Link to='/blog'>Blogs</Link></li>
                            <li><Link to='/toys'>All Toys</Link></li>
                            {user && <li><Link to='/addToy'>Add a Toy</Link></li>}
                            {user && <li><Link to='/myToys' >My Toys</Link></li>}
                           
                        </ul>
                    </div>
                    <Link to='/'><img className='w-14 h-14' src="/logo.png" alt="" /></Link>
                    <Link to='/' className="btn btn-ghost normal-case text-3xl">Awesome Toys</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        <li><Link to='/'>Home</Link></li>

                        <li><Link to='/blog'>Blogs</Link></li>
                        <li><Link to='/toys'>All Toys</Link></li>
                        {user && <li><Link to='/addToy'>Add a Toy</Link></li>}
                        {user && <li><Link to='/myToys' >My Toys</Link></li>}
                       
                    </ul>
                </div>
                <div className="navbar-end">
               
                        {user && isHovering && <h5 className='text-black mx-2 mt-1 '>{user.displayName}</h5>}
                        {user && <img className='hidden lg:block' onMouseOver={handleName} onMouseOut={hideName} style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'white', margin: '5px' }} src={user.photoURL} alt="" />}
                        {user ? <button className='btn btn-warning' onClick={handleLogOut}>Logout</button> : <Link className='btn btn-warning' to='/login'>Login</Link>}
                </div>
            </div>



        </div>
    );
};

export default Navbar;