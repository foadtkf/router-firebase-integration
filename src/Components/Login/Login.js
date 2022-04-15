
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
// import useFirebase from './../../hooks/useFirebase';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth';
import app from './../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
const auth=getAuth(app)
const Login = () => {
//     const {signinWithGoogle}=useFirebase()
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    console.log(email,user,pass)
    let location = useLocation();
    let navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    const handleSignIn =()=>{
      signInWithGoogle()
      .then(()=>navigate(from, { replace: true }))
    }
    const handleEmailblur=event=>{
        setEmail(event.target.value)
          }
          const handlePassblur=event=>{
        setPass(event.target.value)
          }
    return (
        <div>
            <h2>This is login page</h2>
            <Form className='container w-50'>
            <Button onClick={handleSignIn} variant="success" type="button">
    Sign in with google
  </Button>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailblur} type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePassblur} type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="button">
    Submit
  </Button>
</Form>
        </div>
    );
};

export default Login;