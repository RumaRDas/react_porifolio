import React from 'react';
import Hero from "../components/Hero";
import Row from "../components/Row";
import Col from "../components/Col";

function Home() {
  return (
    <Row>
      <Col size="md-12">
        <Hero />
      </Col>
    </Row>

  )
}

export default Home;
