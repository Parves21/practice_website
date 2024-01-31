// @flow strict

import * as React from 'react';
import './RightNav.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaFacebook, FaGithub, FaTwitch, FaGoogle, FaCreditCard, FaLandmark } from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel';
import Asset1 from '../../../Assets/Banner-3.png';
import Asset2 from '../../../Assets/Banner-1.png';
import Asset3 from '../../../Assets/Banner-2.png'; 
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

function RightNav() {
    const { providerLogin } = React.useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(crror => console.error(crror));
    }
 
    return (
        <div className='App'>

            <div className='mb-3'>
                <h3>Sign With</h3>
                <ListGroup className='gap-3'>
                    <ListGroup.Item onClick={handleGoogleSignIn} action variant='primary'><FaGoogle /> Google</ListGroup.Item>

                    <ListGroup.Item action variant='dark'><a className='text-decoration-none text-dark' href="https://github.com/Parves21" target='_blank'><FaGithub /> Github</a></ListGroup.Item>
                </ListGroup>
            </div>

            <br/> 

            <div id='RightNav'>
                <h3>Find us With</h3>
                <ListGroup className='gap-3'>
                    <ListGroup.Item action variant='success'><a className='text-decoration-none text-success' href="/payment"><FaCreditCard /> Payment</a></ListGroup.Item>
                    <ListGroup.Item href="https://www.facebook.com/10minuteindiploma" action variant='primary' target='_blank'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item action variant='danger'><a className='text-decoration-none text-danger' href="/stipend"><FaLandmark /> Stipend</a></ListGroup.Item>
                    <ListGroup.Item action variant='info'><a className='text-decoration-none text-info' href="#" target='_blank'><FaTwitch /> Twitch</a></ListGroup.Item>
                </ListGroup>
            </div>

            <br/> 

            <h3 className='mt-5'>Institute Summary.!</h3>
            <div>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Asset1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Asset2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Asset3}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div> 

        </div>
    );
};

export default RightNav;