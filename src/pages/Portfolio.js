import React from 'react'
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import PortfolioText from "../components/PortfolioText"
import '../App.css';

const Portfolio = ()  => {
    return (
        <Container id="portfolio" className="backPort">
    
        <Row>
          <Col size="md-12">
          <h2 className="text-info">Portfolio</h2>
          <p className="lead">Check out some projects</p>
          <PortfolioText />  
          </Col>
        </Row>
        <div id="blackStyle"></div>

        </Container>
        
    )
}

export default Portfolio
