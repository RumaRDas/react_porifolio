import React from "react";
import Container from "../components/Container";
import ContactForm from "../components/ContactForm"
import Row from "../components/Row";
import Col from "../components/Col";
import '../App.css';

const Contact = () => {
    return (
        <Container id="contact" className="contactBack" >
            <Row>
                <Col size="md-12">
              
                </Col>
                <ContactForm />
            </Row>

        </Container>

    )
}

export default Contact
