import React from 'react';
import './AboutComponent.css';
import { Col, Container, Row } from 'react-bootstrap';
import AboutImg from '../../assets/img/madhuparna_img.png';
import { useNavigate } from "react-router-dom";

const AboutComponent = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/about"); // This will redirect to the About page
  };

  // Scroll to top when the component mounts


  return (
    <div className='about'>
      <Container>
        <Row className='align-items-center'>
          <Col sm={5}>
            <div className="about_img">
              <img src={AboutImg} alt="Dr. Madhuparna Paul" />
            </div>
          </Col>
          <Col sm={7}>
            <div className="about_info">
              <div className="subheading mb-4">
                <h2>About The <span>Doctor</span></h2>
                <div className="line"></div>
              </div>
              <div className="about_designation">
                {/* <h4>Dr. Madhuparna Paul</h4> */}
              </div>
              <div className="about_content">
                <p>
                  <strong>Dr Madhuparna Paul</strong> (MBBS, DNB-Medicine, DM-Neurology, MRCP) is a senior renowned Consultant Neurologists in Kolkata with experience of more than 10 years in these fields of Neurological diseases.
                </p>
                <p>
                  Dr. Madhuparna Paul practices at Manipal Hospitals at Mukundapur, Kolkata.
                </p>
                <p>
                  She is highly qualified and experienced to deal with complicated Neurological disorders like <strong>Autoimmune Neurological Disorders,  Stroke Treatment, Epilepsy, Migraine, Back pain, and Dementia</strong>. She has specialized training to deal with complicated Epilepsy or seizure disorder.
                </p>
                <button className="custom_btn" onClick={handleReadMore}>Read More</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutComponent;
