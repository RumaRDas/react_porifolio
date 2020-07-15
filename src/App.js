import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import About from './pages/About';
import ContactForm from './components/ContactForm';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import MySkills from './pages/MySkills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Wrapper>
        <About />
        <Portfolio />
        <MySkills />
        <ContactForm />
   
      </Wrapper>
      <Footer />

    </div>
  );
}

export default App;
