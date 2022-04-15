import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from './../../firebase.init';
import { Navigate, useLocation } from 'react-router-dom';
// eta current state ta ke mone rakhe ar jetae nite bola hoise setae gele o current state hisebe child route ta ke set kore dey ar jei page e nise oitar kaj hoye gele children page e niye ashe
const auth=getAuth(app)
const RequireAuth = ({children}) => {
    const [user]=useAuthState(auth)
    let location = useLocation();
    if(!user){
    return <Navigate to="/login" state={{ from: location }} replace />
}
    return children;
};

export default RequireAuth;