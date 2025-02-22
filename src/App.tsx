import { Routes, Route } from 'react-router-dom';
import amanlogo from '/amanlogo.svg';
import Header from './components/ Header';
import Home from './components/Home/Home';
import About from './components/about/About';
import './components/Styling/header.css';
import Skills from './components/skills/Skills';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="blog" element={<blog />} */}
          <Route path="/about" element={<About />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Projects' element={<Projects />} />
          {/* Add more routes here if needed */}
        </Routes>
      </main>
      {/* <img 
        className="image__logo"
        src={amanlogo}
        width={100}
        alt="Aman logo"
      /> */}
    </>
  );
}

export default App;
