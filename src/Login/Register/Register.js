// @flow strict

import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaUserSecret, FaEnvelope, FaLock, FaNimblr, FaFileImage } from "react-icons/fa";
import '../Login/Login.css';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className='mb-5'>
            <h2 style={{ marginTop: '80px' }} className='App'><FaUserSecret /> Register Account: </h2>
            <div className='d-flex justify-content-center align-items-center'>
                <Form id='LoginPage' className='w-50 mt-5'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><h4 className='mb-1'><FaNimblr /> Full Name</h4></Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><FaFileImage />Photo</Form.Label>
                        <Form.Control name='photoURL' type="text" placeholder="Photo URL" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><FaEnvelope /> Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            <p className='text-success'>We'll never share your Email.</p>
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicPassword">
                        <Form.Label><FaLock /> Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                        <div className='d-flex justify-content-around'>
                            <p className='text-success'>Already have an Account !!</p>
                            <Link className='text-danger' to='/login'><small>SignIn</small></Link>
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