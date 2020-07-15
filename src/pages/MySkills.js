import React from 'react';
import Container from "../components/Container";
import Skills from "../components/Skills"
import Row from "../components/Row";
import Col from "../components/Col";
import '../App.css';

const MySkills = () => {
    return (
        <Container className="skillBack">
      
        <Row>
          <Col size="md-12">
          <div className="info-book">
          <h2 className="display-4 text-info">My Skills</h2>
          <p className="lead mt-3">My programming language and tools </p>
          <div className="d-flex flex-row justify-content-center text-info ">
              <div className="icon">
                  <i className="fa fa-html5"></i>               
              </div>
              <div className="icon">
                  <i className="fa fa-css3 "></i>      
              </div>
              <div className="icon">
                  <i className="fa fa-github "></i>
              </div>
              <div className="icon">
                  <i className="fab fa-js-square"></i>
              </div>
          </div>
      </div>
          <Skills />  
          </Col>
        </Row>
 
        </Container>
    )
}

export default MySkills;
