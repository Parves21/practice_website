// @flow strict

import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';
import { Link } from 'react-router-dom';
import { FaUser, FaUserGraduate, FaUserMinus, FaSistrix, FaBell, FaCalculator } from "react-icons/fa";
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
                            Unofficial PPI 
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
     
                            <Nav className='HomeSection ms-1'><Link  className='text-decoration-none text-dark fw-bold' to='/result'><FaCalculator/> Result</Link></Nav>   
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