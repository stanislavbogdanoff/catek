// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Results from './components/Results/Results';
import Services from './components/Services/Services';
import Advantages from './components/Advantages/Advantages';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';
import Videos from './components/Videos/Videos';
import Clients from './components/Clients/Clients';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Results />
      <Services />
      <Advantages />
      <Projects />
      <Contacts />
      <Videos />
      <Clients/>
      <Footer />
    </div>
  );
}

export default App;
