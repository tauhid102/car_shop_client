import React from 'react';
import { Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Shop BD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/carbazar">Car Bazar</Nav.Link>
                            {
                                user?.email && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                            }
                            {
                                user?.email ?
                                    <button className="btn btn-dark logout-button" onClick={logout}>Logout</button>
                                    :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                        <Navbar.Text className="me-2">
                            {user?.displayName}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>

            </Navbar>

        </div>
    );
};

export default Header;