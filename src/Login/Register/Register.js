// @flow strict

import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaEye, FaUserSecret } from "react-icons/fa";
import '../Login/Login.css';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className='mb-5'>
            <h2 style={{ marginTop: '80px' }} className='App'><FaUserSecret /> Register Account: </h2>
            <div className='d-flex justify-content-center align-items-center'>
                <Form id='LoginPage' className='w-50 mt-5'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><h3>Full Name</h3></Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
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
                            <Link className='text-success' to='/login'>Already have an Account</Link>
                        </div>
                    </Form.Group>
                    <Button variant="outline-success" type="submit">
                        Register
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Register;