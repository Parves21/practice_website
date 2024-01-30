// @flow strict

import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaUserSecret, FaEnvelope, FaLock, FaNimblr, FaFileImage } from "react-icons/fa";
import '../Register/Register.css'; 
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div id='RegisterBody' className='mb-5'> 
            <h2 style={{ marginTop: '0px' }} className='App'><FaUserSecret /> Register Account: </h2>
            <div className='d-flex justify-content-center align-items-center'>
                <Form id='LoginPage' className='w-50 mt-5'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><h4 className='mb-1 text-light fw-bold'>Full Name</h4></Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" required />
                    </Form.Group> 
                    <Form.Group className="mb-3 text-light fw-bold" controlId="formBasicEmail">
                        <Form.Label><FaEnvelope /> Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            <p className='text-light fw-normal'>We'll never share your Email.</p>
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-1text-light fw-bold " controlId="formBasicPassword">
                        <Form.Label><FaLock /> Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                        <div className='d-flex justify-content-around'>
                            <p className='text-light fw-normal'>Already have an Account !!</p> 
                            <Link className='text-danger' to='/login'><small>SignIn</small></Link>
                        </div>
                    </Form.Group>
                    <Button className='text-light fw-bold' variant="outline-success" type="submit">
                        Register 
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Register;