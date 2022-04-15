import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
// import useFirebase from './../../hooks/useFirebase';
import { getAuth , signOut} from 'firebase/auth';
import app from './../../firebase.init';
const auth=getAuth(app)
const Header = () => {
    const [user]=useAuthState(auth)
    // const {user,signoutWithGoogle}=useFirebase()
    return (
        <div>
        <Navbar bg="dark" variant="dark" className='p-4'>
        <Container>
            <nav className="me-auto">
            <span className='text-white'>{user?.displayName && user.displayName}</span>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/orders'>Orders</Link>
            <Link to='/products'>Products</Link>
            {
                user?.uid?
                <button onClick={()=>signOut(auth)}>sign out</button>:
                <Link to='/login'>Login</Link>
            }
            <Link to='/register'>Register</Link>
            </nav></Container></Navbar>
        </div>
    );
};

export default Header;