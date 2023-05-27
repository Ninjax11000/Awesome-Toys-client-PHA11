import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const SignUp = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { createUser, setProfile } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSignUP = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);
        setError('');
        setSuccess('');
        if (password.length < 6) {
            setError('password should be atleast 6 digit long');
            return;

        }
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setProfile(name, photo);
                setSuccess('user registration is succesfull');
                setError('');
                navigate('/');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold my-3">Signup now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSignUP}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name="photo" placeholder="URL" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="Signup" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already have an account? <Link className='font-bold ' to='/login'>Log In</Link></p>
                        <p className='text-red-600'>{error}</p>
                        <p className='text-green-600'>{success}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;