import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../assets/img/madhuparna_img.png';
// import { FaUserDoctor } from "react-icons/fa6";
import Accordion from 'react-bootstrap/Accordion';
const About = () => {
  window.scrollTo(0, 0);
  return (
    <div className="about_area" id='about_page'>
      <Container>
        <div className="designation_area">
          <div className="about_img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about_info pl-0">
            <div className="subheading mb-5">
              <h2>About the <span>Doctor</span></h2>
              <div className="line"></div>
            </div>
            <div className="designation mb-4">
              <h4>Dr.Madhuparna Paul</h4>
              <span>Consultant Neurologist</span>
            </div>
            {/* <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>professional credentials</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <span>Area of Specialization</span>
                      <p>DM (Neurology) DNB (General Medicine)</p>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>educational qualifications</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <span>MBBS  ( 2000-2005 )  </span>
                    </li>
                    <li>
                      <span>DNB (General Medicine) (2008-2011) </span>
                      <p>Vivekananda Institute of Medical Sciences</p>
                      <p>Ramakrishna Mission Seva Pratisthan, Kolkata</p>
                      <p>Burdwan Medical College, West Bengal</p>
                    </li>
                    <li>
                      <span>DM (Neurology) (2014-2017)</span>
                      <p>S M S Medical College, Jaipur</p>
                    </li>
                    <li>
                      <span>MRCP (UK) (2018)</span>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>work experience</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <span>Senior resident (General Medicine)</span>
                      <p>Ramakrishna Mission Seva Pratisthan</p>
                    </li>
                    <li>
                      <span>Senior resident (Neuro Medicine)</span>
                      <p>Institute of Neuro-Sciences (INK), Kolkata</p>
                    </li>
                    <li>
                      <span>Senior resident (Neuro Medicine)</span>
                      <p>Bangur Institute of Neuro-Sciences, Kolkata</p>
                    </li>
                    <li>
                      <span>Senior resident (Neuro Medicine)</span>
                      <p>S M S Medical College, Jaipur</p>
                    </li>
                    <li>
                      <span>Consultant Neurologist</span>
                      <p>Metro Mas Heart and Multispecialty Hospital, Jaipur</p>
                    </li>
                    <li>
                      <span>Consultant Neurologist</span>
                      <p>Narayana Multispecialty Hospital, Jaipur</p>
                    </li>
                    <li>
                      <span>Consultant Neurologist</span>
                      <p>Narayana Multispeciality Hospital, Kolkata</p>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Present attachment</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      <span>Consultant Neurologist	</span>
                      <p>Manipal Hospitals — Mukundapur, Kolkata, WB	</p>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion> */}
            <Row>
              <Col sm={6}>
                <div className='about_wrapper'>
                  <div className="about_cradential_item">
                    <h4>professional credentials</h4>
                    <div className="about_listing">
                      <p>Area of Specialization</p>
                      <ul>
                        <li>DM (Neurology)</li>
                        <li>DNB (General Medicine)</li>
                      </ul>
                    </div>
                  </div>
                  <div className="about_cradential_item">
                    <h4>educational qualifications</h4>
                    <div className="about_listing">
                      <p>MBBS  ( 2000-2005 )</p>
                      <p>DNB (General Medicine) (2008-2011)</p>
                      <ul>
                        <li>Vivekananda Institute of Medical Sciences</li>
                        <li>Ramakrishna Mission Seva Pratisthan, Kolkata</li>
                        <li>Burdwan Medical College, West Bengal</li>
                      </ul>
                      <p>DM (Neurology) (2014-2017)</p>
                      <ul>
                        <li>Vivekananda Institute of Medical Sciences</li>
                      </ul>
                    </div>
                  </div>
                  <div className="about_cradential_item">
                    <h4>present attachment</h4>
                    <div className="about_listing">
                      <p>Consultant Neurologist	</p>
                      <ul>
                        <li>Manipal Hospitals — Mukundapur, Kolkata, WB</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </Col>
              <Col sm={6}>
                <div className='about_wrapper'>
                  <div className="about_cradential_item">
                    <h4>work experience </h4>
                    <div className="about_listing">
                      <p>Senior resident (General Medicine)</p>
                      <ul>
                        <li>Ramakrishna Mission Seva Pratisthan</li>
                      </ul>
                      <p>Senior resident (Neuro Medicine)</p>
                      <ul>
                        <li>Institute of Neuro-Sciences (INK), Kolkata</li>
                      </ul>
                      <p>Senior resident (Neuro Medicine)</p>
                      <ul>
                        <li>Bangur Institute of Neuro-Sciences, Kolkata</li>
                      </ul>
                      <p>Senior resident (Neuro Medicine)</p>
                      <ul>
                        <li>S M S Medical College, Jaipur</li>
                      </ul>
                      <p>Consultant Neurologist</p>
                      <ul>
                        <li>Metro Mas Heart and Multispecialty Hospital, Jaipur</li>
                      </ul>
                      <p>Consultant Neurologist</p>
                      <ul>
                        <li>Narayana Multispecialty Hospital, Jaipur</li>
                      </ul>
                      <p>Consultant Neurologist</p>
                      <ul>
                        <li>Narayana Multispeciality Hospital, Kolkata</li>
                      </ul>
                    </div>
                  </div>
                </div></Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About