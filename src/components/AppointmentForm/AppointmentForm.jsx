import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Button, Modal, Form, Container, FloatingLabel } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AppointmentForm.css'; // Import your custom CSS file
import doctor from '../../assets/img/appointment-img.jpg';

const AppointmentForm = forwardRef((props, ref) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    useImperativeHandle(ref, () => ({
        showForm() {
            handleShow();
        }
    }));

    const validateForm = (form) => {
        const name = form.elements.floatingName.value.trim();
        const email = form.elements.floatingEmail.value.trim();
        const phone = form.elements.floatingPhone.value.trim();
        const message = form.elements.floatingMessage.value.trim();

        const emailTestFunction = (emildata) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(emildata);
        };

        const phoneTestFunction = (phonedata) => {
            const phoneRegex = /^[0-9]{10}$/; // Example for a 10-digit phone number
            return phoneRegex.test(phonedata);
        };

        if (!name) {
            toast.warn("Please Enter your Name", {
                position: "top-right"
            });
            return false;
        }

        if (!email) {
            toast.warn("Please Enter your Email", {
                position: "top-right"
            });
            return false;
        }

        if (!emailTestFunction(email)) {
            toast.warn("Please Enter a valid Email", {
                position: "top-right"
            });
            return false;
        }

        if (!phone || !phoneTestFunction(phone)) {
            toast.warn("Please Enter 10 digit Phone Number", {
                position: "top-right"
            });
            return false;
        }

        if (!message) {
            toast.warn("Please Enter your message", {
                position: "top-right"
            });
            return false;
        }

        return true;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        if (validateForm(form)) {
            handleClose();
            toast.success("Appointment booked successfully!", {
                position: "top-right"
            });
        }
    };

    return (
        <div id="appointment_form">
            <Container>
                <div className="modal-box">
                    <Modal show={show} onHide={handleClose} centered id='appointForm'>
                        <div className="modal_wrap">
                            <div className="modal-img">
                                <img src={doctor} alt="Appointment" />
                            </div>
                            <div className="modal_content">
                                <Modal.Header closeButton>
                                    <Modal.Title>Book an Appointment</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <FloatingLabel
                                            controlId="floatingName"
                                            label="Name"
                                            className="mb-3"
                                        >
                                            <Form.Control type="text" name="floatingName" placeholder="Name" />
                                        </FloatingLabel>

                                        <FloatingLabel
                                            controlId="floatingEmail"
                                            label="Email address"
                                            className="mb-3"
                                        >
                                            <Form.Control type="text" name="floatingEmail" placeholder="name@example.com" />
                                        </FloatingLabel>

                                        <FloatingLabel
                                            controlId="floatingPhone"
                                            label="Phone Number"
                                            className="mb-3"
                                        >
                                            <Form.Control type="tel" name="floatingPhone" placeholder="Phone Number" />
                                        </FloatingLabel>

                                        <FloatingLabel
                                            controlId="floatingMessage"
                                            label="Message"
                                            className="mb-3"
                                        >
                                            <Form.Control
                                                as="textarea"
                                                name="floatingMessage"
                                                placeholder="Leave a message here"
                                                style={{ height: '100px' }}
                                            />
                                        </FloatingLabel>

                                        <Button
                                            variant="primary"
                                            type="submit"
                                            className="w-100" // Ensure the button takes full width
                                        >
                                            Submit
                                        </Button>
                                    </Form>
                                </Modal.Body>
                            </div>
                        </div>
                    </Modal>
                </div>
                <ToastContainer />
            </Container>
        </div>
    );
});

export default AppointmentForm;
