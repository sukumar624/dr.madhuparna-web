import React from 'react';
import './Footer.css';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import { NavLink } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className='footer'>
                <Container>
                    <Row className='gy-3'>
                        <Col sm={5}>
                            <div className="footer_item">
                                <div className="footer_logo">
                                    <NavLink to="/">
                                        <img src={logo} alt="" />
                                        <div className="designation">
                                            <h6>Dr.Madhuparna Paul</h6>
                                            <span>Consultant Neurologist</span>
                                        </div>
                                    </NavLink>
                                    <p>
                                        Dr Madhuparna Paul (MBBS, DNB-Medicine, DM-Neurology, MRCP) is a senior renowned Consultant Neurologists in Kolkata with experience of more than 10 years in these fields of Neurological diseases.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className="footer_item">
                                <div className="footer_title">
                                    <h4>Quick Links</h4>
                                </div>
                                <div className="quick_links">
                                    <ul>
                                        <li>
                                            <NavLink to="/">Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/about">About</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/gallery">Gallery</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/publications">Publications</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/blog">Blog</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="footer_item">
                                <div className="footer_title">
                                    <h4>Reach Us</h4>
                                </div>
                                <div className="reach_links">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <div className="reach_icon">
                                                    <FaMapMarkerAlt />
                                                </div>
                                                <div className="reach_info">
                                                    <p>
                                                        Manipal Hospitals — Mukundapur, Kolkata, WB
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            <a href="#"></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="reach_icon">
                                                    <MdEmail />
                                                </div>
                                                <div className="reach_info">
                                                    <p>
                                                        dr.mpaulneuro@gmail.com
                                                    </p>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="reach_icon">
                                                    <MdCall />
                                                </div>
                                                <div className="reach_info">
                                                    <ul>
                                                        <li>
                                                            <a href="tel:+9194330 21015">+9194330 21015</a>
                                                        </li>
                                                        <li>
                                                            <a href="tel:+919147096309">+919147096309</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>

            <section className="copyright">
                <div className="container">
                    <p>© {currentYear} Designed & Developed by <a href="https://www.microbaseinfotech.com/" target="_blank">Microbase Infotech Pvt. Ltd.</a></p>
                </div>
            </section>
        </>
    )
}

export default Footer
