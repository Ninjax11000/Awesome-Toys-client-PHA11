import React, { useContext } from 'react';
import { AuthContext } from '../src/providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import loadingAnimation from './loading.json';
import Lottie from 'lottie-react';

const PrivateRoutes = ({children}) => {
    const {user,loading} =useContext(AuthContext);
    const location= useLocation();
    if(loading) return <Lottie animationData={loadingAnimation} style={{ width: 300, height: 300 }}></Lottie>;
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoutes;