import React from 'react';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
const auth=getAuth(app)
const Products = () => {
    const [user]=useAuthState(auth)
    return (
        <div>
            <img src={user.photoURL} alt=''></img>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default Products;