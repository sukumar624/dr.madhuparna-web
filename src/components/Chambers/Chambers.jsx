import React from 'react'
import './Chambers.css'
import { Col, Container, Row } from 'react-bootstrap'
import { MdPhone } from "react-icons/md";
import { LuClock } from "react-icons/lu";
const Chambers = () => {
    window.scrollTo(0, 0);
    return (
        <div className='chambers_section'>
            <Container>
                <div class="subheading">
                    <h2>Medical  <span>Chambers</span></h2>
                    <div class="line"></div>
                </div>
                <Row className='mt-4 g-4'>
                    <Col sm={4}>
                        <div className="sheldue-item">
                            <h4>AMRI Hospital, Mukundapur</h4>
                            <p><MdPhone /> 033 6680 0000 / +919147096309</p>
                            <span><LuClock /> Opening Hour</span>
                            <ul>
                                <li>
                                    <p>Monday - Saturday</p>
                                    <p>From 9 AM to 5 PM</p>
                                </li>
                                <li>
                                    <p>Wednesday</p>
                                    <p>From 9 AM to 1 PM</p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="sheldue-item">
                            <h4>RX Vital Healthcare, Kalikapur, Gitanjali Park, Near Croma Electronics</h4>
                            <p><MdPhone /> +919147096309 / +919433021015 / 1800 572 9297</p>
                            <span><LuClock /> Opening Hour</span>
                            <ul>
                                <li>
                                    <p>Monday & Thursday</p>
                                    <p>From 6 PM to 7 PM</p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="sheldue-item">
                            <h4>Suraksha Diagnostics, Jadavpur,  Near Ekta Heights, 56, Raja Subodh Chandra Mallick Road.</h4>
                            <p><MdPhone /> +919147096309 / +919433021015 / 033 6619 1000</p>
                            <span><LuClock /> Opening Hour</span>
                            <ul>
                                <li>
                                    <p>Tuesday & Friday</p>
                                    <p>From 6 PM to 7 PM</p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="sheldue-item">
                            <h4>Madhyamgram, Jessore Road Mark Diagnostics, Madhyamgram</h4>
                            <p><MdPhone /> +919147096309 / +919433021015 / 098305 77693</p>
                            <span><LuClock /> Opening Hour</span>
                            <ul>
                                <li>
                                    <p>Wednesday</p>
                                    <p>From 3 PM to 4 PM</p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="sheldue-item">
                            <h4>Apollo Clinic Madhyamgram</h4>
                            <p><MdPhone /> +919147096309 / +919433021015 / 072785 00000</p>
                            <span><LuClock /> Opening Hour</span>
                            <ul>
                                <li>
                                    <p>Wednesday</p>
                                    <p>From 4 PM to 5 PM</p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="sheldue-item">
                            <h4>Suraksha Diagnostics, Barasat</h4>
                            <p><MdPhone /> +919147096309 / +919433021015 / 033 6619 1000</p>
                            <span><LuClock /> Opening Hour</span>
                            <ul>
                                <li>
                                    <p>Wednesday</p>
                                    <p>From 5 PM to 6 PM</p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Chambers