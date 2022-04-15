import React from 'react';
// import useFirebase from './../../hooks/useFirebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from './../../firebase.init';
const auth=getAuth(app)
const Home = () => {
    const [user]=useAuthState(auth)
    return (
        <div>
            <h2>This is home</h2>
            <h4>Name: {user? user.displayName:'no name'}</h4>
        </div>
    );
};

export default Home;