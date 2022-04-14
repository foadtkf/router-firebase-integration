import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from './../../hooks/useFirebase';

const Header = () => {
    const {user,signoutWithGoogle}=useFirebase()
    return (
        <div>
        <Navbar bg="dark" variant="dark" className='p-4'>
        <Container>
            <nav className="me-auto">
            <span className='text-white'>{user?.displayName && user.displayName}</span>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            {
                user?.uid?
                <button onClick={signoutWithGoogle}>sign out</button>:
                <Link to='/login'>Login</Link>
            }
            <Link to='/register'>Register</Link>
            </nav></Container></Navbar>
        </div>
    );
};

export default Header;