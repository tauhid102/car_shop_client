import React from 'react';
import { Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DashboardHome from './DashboardHome/DashboardHome';
const Dashboard = () => {
    return (
        <div>
            <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand as={Link} to="/dashboard">Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                        <Navbar.Brand as={Link} to="/home">Shop BD</Navbar.Brand>             
                        </Nav>
                        <Row>
                            <Col xs={6} md={4}>
                                <Image className='image' src='' roundedCircle />
                            </Col>
                        </Row>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
            </div>
            <div className=''>
                <div className='row'>
                    <div className='col-sm-12 col-lg-2'>
                    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        
                        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav " /> */}
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto flex-column">
                                <Navbar.Brand as={Link} to="/home">Shop BD</Navbar.Brand>
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/carbazar">Car Bazar</Nav.Link>
                                <Nav.Link as={Link} to="/addservices">Add Services</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>

                </Navbar>
                    </div>
                    <div className='col-sm-12 col-lg-10'>
                            <DashboardHome></DashboardHome>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;