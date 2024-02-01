import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const SignUp = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [cerror, setCError] = useState("");
    const { createUser, setProfile, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();


    const handlePassword = (event) => {
        const passwordInput = event.target.value;
        setPassword(passwordInput);
        if (passwordInput.length < 6) {
            setError('Password must be 6 characters long!')
        }
        else {
            setError("");
        }
    }

    const handleConfirm = (event) => {
        const inputConfirm = event.target.value;

        if (inputConfirm !== password) {
            setCError('Passwords don not match!')
        }
        else {
            setCError("");
        }
    }


    const handleSignUP = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);

        if (error || cerror) {
            
            return;

        }
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setProfile(name, photo);
                
                navigate('/');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);

                navigate('/');

            })
            .catch(error => {
                setError('error ', error.message);
            })
    }
    return (
        <div>
            <div className="hero mt-3 bg-white">
                <div className="hero-content md:w-1/2 sm:w-3/4 ">

                    <div className="card shrink-0 w-full border border-gray-700 rounded-md  bg-white">

                        <form onSubmit={handleSignUP} className="card-body text-black">
                            <h3 className="text-2xl font-bold">Create an account</h3>
                            <div className="form-control border-b border-slate-400">

                                <input type="text" name='name' placeholder="Name" className="input text-sm focus:outline-none border-none bg-transparent text-gray-800 placeholder-black " required />
                            </div>
                            <div className="form-control border-b border-slate-400">

                                <input type="url" name='photo' placeholder="Photo Link(optional)" className="input text-sm focus:outline-none border-none bg-transparent text-gray-800 placeholder-black "  />
                            </div>
                            <div className="form-control border-b border-slate-400">

                                <input type="email" name='email' placeholder="Your email" className="input text-sm focus:outline-none border-none bg-transparent text-gray-800 placeholder-black " required />
                            </div>
                            <div className="form-control border-b border-slate-400">

                                <input
                                    type="password"
                                    name='password'
                                    placeholder="Your Password"
                                    value={password}
                                    onChange={handlePassword}
                                    className="input text-sm focus:outline-none border-none bg-transparent text-gray-800 placeholder-black " required />
                            </div>
                            {
                                error && <p className="text-red-700">{error}</p>
                            }
                            <div className="form-control border-b border-slate-400">

                                <input
                                    type="password"
                                    name='confirmpassword'
                                    placeholder="Confirm Password"

                                    onChange={handleConfirm}
                                    className="input text-sm focus:outline-none border-none bg-transparent text-gray-800 placeholder-black " required />
                            </div>
                            {
                                cerror && <p className='text-red-700'>{cerror}</p>
                            }

                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Create an account</button>
                            </div>
                            <p className='text-center my-3'>Already have an account? <Link to='/login' className='text-warning underline'>Login</Link></p>
                        </form>
                        
                    </div>
                </div>
            </div>
            <div className="divider divider-neutral w-1/3 mx-auto">OR</div>
            <div className='flex flex-col items-center'>
                <div className='border border-slate-400 rounded-[30px] flex items-center   sm:w-3/4 md:w-1/3 my-3 px-2'>
                    <img className='w-[50px] py-2 px-2' src="/fb.png" alt="" /> <p>Continue with Facebook</p>
                </div>
                <div onClick={handleGoogleSignIn} className='border border-slate-400 rounded-[30px] flex items-center cursor-pointer  sm:w-3/4 md:w-1/3  my-3 px-2'>
                    <img className='w-[50px] py-2 px-2' src="/google.png" alt="" /> <p>Continue with Google</p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;