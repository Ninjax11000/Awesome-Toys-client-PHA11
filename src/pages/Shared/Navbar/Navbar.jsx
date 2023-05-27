import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;