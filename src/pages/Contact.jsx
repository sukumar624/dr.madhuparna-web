import React from 'react';// Adjust the import path as necessary
import ContactForm from '../components/ContactForm/ContactForm';
import { Col, Container, Row } from 'react-bootstrap';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  window.scrollTo(0, 0);
  return (
    <div className='contact_area'>
      <Container>
        <Row className='justify-content-center'>
          <Col sm={6}>
            <div className="getintouch">
              <div className="subheading mb-4">
                <h2>Get In <span>Touch</span></h2>
                <div className="line"></div>
              </div>
              <p>
                We're here to help. Fill up the form our Team will get back to you within 24 hours.
              </p>
              <div className="cta_link">
                <ul>
                  <li>
                    <a href="">
                      <div className="cta_icon">
                        <FaMapMarkerAlt />
                      </div>
                      <div className="cta_info">
                        <h5>Attached In</h5>
                        <a href='javascript:void()'>Manipal Hospitals — Mukundapur, Kolkata, WB</a>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="cta_icon">
                        <MdEmail />
                      </div>
                      <div className="cta_info">
                        <h5>Write Email</h5>
                        <a href='mailto:dr.mpaulneuro@gmail.com'>dr.mpaulneuro@gmail.com</a>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <div className="cta_icon">
                        <FaMapMarkerAlt />
                      </div>
                      <div className="cta_info">
                        <h5>Contact</h5>
                        <a href='javascript:void()'>
                          <ul className='phone_link'>
                            <li><a href="tel:+9194330 21015">+9194330 21015</a></li>
                            <li><a href="tel:+919147096309">+919147096309</a></li>
                          </ul>
                        </a>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
