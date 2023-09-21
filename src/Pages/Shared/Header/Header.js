// @flow strict

import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';
import { Link } from 'react-router-dom';
import { FaUserGraduate } from "react-icons/fa";



function Header() {
    return (
        <div id='headerOfNav'>
            <Navbar fixed="top" expand="lg" className="bg-body-tertiary py-3">
                <Container fluid>
                    <Navbar.Brand className='fw-bold'>
                        <Link className='text-decoration-none text-dark' to='/'>
                            Cyclone of Programming
                        </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 Navber-Container"
                            style={{ maxHeight: '100px', gap: '30px' }}
                            navbarScroll
                        >
                            <Nav className='HomeSection ms-5'><Link className='text-decoration-none text-dark' to='/'>Home</Link></Nav>
                            <Nav className='ClassSection'><Link className='text-decoration-none text-dark' to='/class'>Class</Link></Nav>
                            <Nav className='ClassSection'><Link className='text-decoration-none text-dark' to='/about'>About</Link></Nav>
                            <NavDropdown className='fw-bold' title="Department Course" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action1">
                                    All Courses
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><Link className='text-decoration-none' to='/computer'>Computer Department</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link className='text-decoration-none' to='/civil'>Civil Department</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link className='text-decoration-none' to='/electronice'>Electronice Department</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link className='text-decoration-none' to='/electrical'>Electrical Department</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link className='text-decoration-none' to='/macanical'>Macanical Department</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link className='text-decoration-none' to='/rac'>Rac Department</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link className='text-decoration-none' to='/power'>Power Department</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-primary">Search</Button>
                        </Form>
                        <Nav><Link className='text-decoration-none ms-3 fw-bold text-dark' to='/login'><FaUserGraduate /> Login</Link></Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;