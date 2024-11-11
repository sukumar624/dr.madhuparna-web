import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './header.css';

const Header = ({ onAppointmentClick }) => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const handleNavLinkClick = () => {
        setExpanded(false); // Close the menu when a link is clicked
    };

    return (
        <header className='header'>
            <Navbar expand="lg" expanded={expanded} onToggle={handleToggle}>
                <Container>
                    {/* Use NavLink instead of href for the brand link */}
                    <NavLink to="/" className="navbar-brand" onClick={handleNavLinkClick}>
                        <div className="logo_area">
                            <img src={Logo} alt="logo" />
                            <div className="designation">
                                <h6>Dr. Madhuparna Paul</h6>
                                <span>Consultant Neurologist</span>
                            </div>
                        </div>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="header_wrap">
                            <Nav className="ms-auto">
                                <NavLink to="/" onClick={handleNavLinkClick}>Home</NavLink>
                                <NavLink to="/about" onClick={handleNavLinkClick}>About</NavLink>
                                <NavLink to="/gallery" onClick={handleNavLinkClick}>Gallery</NavLink>
                                <NavLink to="/publications" onClick={handleNavLinkClick}>Publications</NavLink>
                                <NavLink to="/blog" onClick={handleNavLinkClick}>Blog</NavLink>
                                <NavLink to="/contact" onClick={handleNavLinkClick}>Contact</NavLink>
                            </Nav>
                            <div className="header_appointment">
                                <a href="javascript:void(0)" className="custom_btn" onClick={() => { handleNavLinkClick(); onAppointmentClick(); }}>
                                    Book Appointment
                                </a>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
