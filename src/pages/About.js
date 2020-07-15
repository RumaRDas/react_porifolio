import React from "react";
import Container from "../components/Container";
import AboutText from "../components/AboutText"
import Row from "../components/Row";
import Col from "../components/Col";
import '../App.css';

function About() {
  return (


<Container className="Aboutback">
<div >
<Row>
  <Col size="md-12">
  <AboutText />  
  </Col>
</Row>
</div>
</Container>

    

  );
}

export default About;
