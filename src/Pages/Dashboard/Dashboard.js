import React from 'react';
import { Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { Link,Switch, Route,useRouteMatch } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import MyOrder from './MyOrder/MyOrder';
import Pay from './Pay/Pay';
import Review from './Review/Review';

const Dashboard = () => {
    const { user, logout } = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/dashboard">Dashboard</Navbar.Brand>

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

                                <Navbar.Toggle aria-controls="responsive-navbar-nav " />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="me-auto flex-column">
                                        <Navbar.Brand as={Link} to="/home">Shop BD</Navbar.Brand>
                                        <Nav.Link as={Link} to={`${url}/pay`}>Pay</Nav.Link>
                                        <Nav.Link as={Link} to={`${url}/myorder`}>My Order</Nav.Link>
                                        <Nav.Link as={Link} to={`${url}/review`}>Review</Nav.Link>
                                        <Nav.Link as={Link} to={`${url}/makeadmin`}>Make Admin</Nav.Link>
                                        {
                                            user?.email ?
                                                <button className="btn btn-dark logout-button" onClick={logout}>Logout</button>
                                                :
                                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                        }
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>

                        </Navbar>
                    </div>
                    <div className='col-sm-12 col-lg-10'>
                        <DashboardHome></DashboardHome>
                        <Switch>
                            <Route path={`${url}/pay`}>
                                <Pay></Pay>
                            </Route>
                            <Route path={`${url}/myorder`}>
                                <MyOrder></MyOrder>
                            </Route>
                            <Route path={`${url}/review`}>
                                <Review></Review>
                            </Route>
                            <Route path={`${url}/makeadmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                            {/* <AdminRoute path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute path={`${path}/addAdmin`}>
                                <AddDoctor></AddDoctor>
                            </AdminRoute> */}
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;