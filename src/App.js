// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Results from './components/Results/Results';
import Services from './components/Services/Services';
import ServicesCarousel from './components/Services/ServicesCarousel';
import Advantages from './components/Advantages/Advantages';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';
import Videos from './components/Videos/Videos';
import Clients from './components/Clients/Clients';
import Footer from './components/Footer/Footer';
import Anchor from './components/Anchor/Anchor';

import './App.css';

function App() {
  return (
    <div className="App">

      <header>
        <Navbar />
        <Hero />
      </header>
      
      <div className="content">
        <div className="container">
          <About />
          <Results />
          <Services />
        </div>
          <ServicesCarousel />
        <div className="container">
          <Advantages />
          <Projects />
        </div>
        <Contacts />
        <div className="container">
          <Videos />
          <Clients/>
        </div>
      </div>

      <Footer />

      <Anchor />

    </div>
  );
}

export default App;
