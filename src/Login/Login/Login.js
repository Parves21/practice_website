// @flow strict

import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';
import { FaEye, FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div>
            <h2 style={{ marginTop: '80px' }} className='App'><FaUserCircle /> Login With Email Address & Password: </h2>
            <div className='d-flex justify-content-center align-items-center'>
                <Form id='LoginPage' className='w-50 mt-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><h3>Email</h3></Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            <p className='text-success'>We'll never share your email with anyone else.</p>
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                        <div id='password-eye'>
                            <FaEye />
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <div className='d-flex justify-content-between'>
                            <Form.Check type="checkbox" label="Check me out" required />
                            <Link className='text-success' to='/register'>Do not have an Account</Link>
                        </div>
                    </Form.Group>
                    <Button variant="outline-success" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;