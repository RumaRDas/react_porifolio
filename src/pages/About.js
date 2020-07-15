import React from "react";
import Container from "../components/Container";
import AboutText from "../components/AboutText"
import Row from "../components/Row";
import Col from "../components/Col";
import '../App.css';

function About() {
  return (


<Container className="Aboutback">

<Row>
  <Col size="md-12">
  <AboutText />  
  </Col>
</Row>

</Container>

    

  );
}

export default About;
