import React from 'react';
import Container from "../components/Container";
import Skills from "../components/Skills"
import Row from "../components/Row";
import Col from "../components/Col";
import '../App.css';

const MySkills = () => {
    return (
        <Container className="Aboutback">
      
        <Row>
          <Col size="md-12">
          <Skills />  
          </Col>
        </Row>
 
        </Container>
    )
}

export default MySkills;
