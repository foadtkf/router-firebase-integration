import React from 'react';
import useFirebase from './../../hooks/useFirebase';

const Home = () => {
    const {user}=useFirebase()
    return (
        <div>
            <h2>This is home</h2>
            <h4>Name: {user? user.displayName:'no name'}</h4>
        </div>
    );
};

export default Home;