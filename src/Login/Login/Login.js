// @flow strict

import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';
 
function Login() {
    return (
        <div id='LoginBody'> 
            <h2 style={{ marginTop: '0px'}} className='StyleAdd'>Login With Email Address & Password .! </h2>   
             <div className='d-flex justify-content-center align-items-center'>
                <Form id='LoginPage' className='w-50 mt-4'> 
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><p className='mb-1 text-light fw-bold'> <FaEnvelope/> Email</p></Form.Label>  
                        <Form.Control type="email" placeholder="Enter email" required /> 
                        <Form.Text className="text-muted">
                            <p className='text-light'>We'll never share your Email.</p> 
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-1 text-light fw-bold" controlId="formBasicPassword"> 
                        <Form.Label> <FaLock/> Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                        <div className='mt-3 d-flex justify-content-around'>
                            <p className='text-light fw-normal'>Don't have an Account !!</p> 
                            <Link className='text-info fw-bold' to='/register'><small>SignUp</small></Link>  
                        </div>
                    </Form.Group>
                    <Button className='px-5 text-light fw-bold' variant="outline-success" type="submit"> 
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;