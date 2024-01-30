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
import { FaUser, FaUserGraduate, FaUserMinus, FaSistrix, FaBell } from "react-icons/fa";
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';


function Header() {
    const { user, logOut } = React.useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    
    return (
        <div id='headerOfNav'>
            <Navbar fixed="top" expand="lg" className="bg-body-tertiary py-3">
                <Container fluid> 
                    <Navbar.Brand className='fw-bold'>
                        <Link className='text-decoration-none text-dark' to='/'>
                            Pabna Polytechnic Institute 
                        </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 Navber-Container"
                            style={{ maxHeight: '70px', gap: '30px' }}  
                            navbarScroll
                        > 
                            <Nav className='HomeSection ms-5'><Link className='text-decoration-none text-dark fw-bold' to='/'>Home</Link></Nav>
                            <Nav className='HomeSection ms-2'><Link className='text-decoration-none text-dark fw-bold' to='/about'> <FaBell/> Notice</Link></Nav>
     
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
                        <Nav>
                            <h4 className='text-warning me-2'><FaSistrix /> Search</h4>
                        </Nav>
                        <Nav>
                            {
                                user?.uid ?
                                    <>
                                        <div className='ms-3'>{user?.displayName}</div>
                                        <div>
                                            {user?.photoURL ?
                                                <Image
                                                    style={{ height: '30px' }}
                                                    roundedCircle
                                                    src={user.photoURL}
                                                ></Image>
                                                : <FaUser />
                                            }
                                        </div>
                                        <div onClick={handleLogOut} className='ms-3'>
                                            <button
                                                style={{border: 'none'}}
                                                className='rounded'><FaUserMinus /> SignOut</button>
                                        </div>

                                    </>
                                    :
                                    <>
                                        <Link className='text-decoration-none ms-3 fw-bold text-dark' to='/login'><FaUserGraduate /> Login</Link>
                                    </>
                            }
                        </Nav>
                        {/* <Link className='text-decoration-none ms-3 fw-bold text-dark' to='/login'><FaUserGraduate /> Login</Link> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;