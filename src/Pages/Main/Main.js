// @flow strict

import * as React from 'react';
import Header from '../Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Shared/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';
import RightNav from '../Shared/RightNav/RightNav';
import Footer from '../Shared/Footer/Footer';

function Main() {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col  lg="2"><LeftNav></LeftNav></Col>
                    <Col lg="7"><Outlet></Outlet></Col>
                    <Col lg="3"><RightNav></RightNav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;