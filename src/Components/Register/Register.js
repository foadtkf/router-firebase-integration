import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Register = () => {
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const [name,setName]=useState('')
    console.log(email,pass)
    const handleNameblur=event=>{
        setName(event.target.value)
        console.log(name)
    }
    const handleEmailblur=event=>{
        setEmail(event.target.value)
          }
          const handlePassblur=event=>{
        setPass(event.target.value)
          }
    return (
        <div>
            <h2>This is register page</h2>
            <Form className='container w-50'>
            <Form.Label>Name</Form.Label>
            <Form.Control onBlur={handleNameblur} type="text" placeholder="Name" />
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailblur} type="email" placeholder="Enter email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePassblur} type="password" placeholder="Password" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    );
};

export default Register;