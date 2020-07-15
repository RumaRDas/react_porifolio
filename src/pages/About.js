import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import AboutText from "../components/AboutText"
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (


<Container className="background-color">
<Row>
  <Col size="md-12">
  <AboutText />  
  </Col>
</Row>
</Container>

    

  );
}

export default About;
