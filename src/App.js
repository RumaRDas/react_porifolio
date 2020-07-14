import React from 'react';

import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import About from './pages/About';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Wrapper>
        <About />
        <ContactForm/>
      </Wrapper>
      <Footer />

    </div>
  );
}

export default App;
