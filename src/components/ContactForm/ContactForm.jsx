import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import './ContactForm.css'
const ContactForm = () => {
    return (
        <Form>
            <Row className='g-2'>
                <Col sm={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Enter Your Name</Form.Label>
                        <Form.Control type="text" placeholder="your name" />
                    </Form.Group>
                </Col>
                <Col sm={6}>
                    <Form.Group className="mb-3">
                        <Form.Label>Phone No.</Form.Label>
                        <Form.Control type="number" placeholder="Phone No." />
                    </Form.Group>
                </Col>
                <Col sm={12}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="your email" />
                    </Form.Group>
                </Col>

                <Col sm={12}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Col>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Row>
        </Form>
    )
}

export default ContactForm