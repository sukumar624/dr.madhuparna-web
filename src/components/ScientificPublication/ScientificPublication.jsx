import React, { useState } from 'react';
import './ScientificPublication.css';
import ScientificPublicationData from './ScientificPublicationData.js';
import { Col, Container, Row, Modal, Button } from 'react-bootstrap';

const ScientificPublication = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedPublication, setSelectedPublication] = useState(null);

    const handleShowModal = (publication) => {
        setSelectedPublication(publication);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedPublication(null);
    };

    return (
        <div className='publication'>
            <Container>
                <Row>
                    <Col sm={6}>
                        <div className="subheading">
                            <h2>Scientific <span>Publications</span></h2>
                            <div className="line"></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="publication_wrapper mt-5">
                        {
                            ScientificPublicationData.map((data) => (
                                <div className='publication_item' key={data.id}>
                                    <div className="publication_img">
                                        <img src={data.img} alt={data.title} />
                                    </div>
                                    <div className="publication_info">
                                        <a href="#" onClick={(e) => { e.preventDefault(); handleShowModal(data); }}>
                                            <h4>{data.title}</h4>
                                        </a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Row>

                {/* Modal for displaying publication details */}
                <Modal show={showModal} onHide={handleCloseModal} id="PublicationModal">
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedPublication?.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img src={selectedPublication?.img} alt={selectedPublication?.title} style={{ width: '100%', marginBottom: '15px' }} />
                        <p dangerouslySetInnerHTML={{ __html: selectedPublication?.des }}></p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>
    );
}

export default ScientificPublication;
