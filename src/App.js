import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import About from './pages/About';
import Contact from'./pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Wrapper>
        <About />
        <Portfolio />
        <Skills /> 
        <Contact /> 
        <Footer /> 
      </Wrapper>
    

    </div>
  );
}

export default App;
