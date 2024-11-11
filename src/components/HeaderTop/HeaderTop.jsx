import React from 'react'
import { Container } from 'react-bootstrap'
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import './HeaderTop.css';

const HeaderTop = () => {
    return (
        <div className='header_top'>
            <Container>
                <div className="header_top_wrap">
                    <div className="header_top_item">
                        <div className="header_top_icon">
                            <div className="icon">
                                <MdCall />
                            </div>
                        </div>
                        <div className="header_top_content">
                            <ul>
                                <li>
                                    <a href="tel:+919433021015">+919433021015</a>
                                </li>
                                <li>
                                    <a href="tel:+919147096309">+919147096309</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="header_top_item">
                        <div className="header_top_icon">
                            <div className="icon">
                                <MdEmail />
                            </div>
                        </div>
                        <div className="header_top_content">
                            <ul>
                                <li>
                                    <a href="mailto:dr.mpaulneuro@gmail.com">dr.mpaulneuro@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HeaderTop