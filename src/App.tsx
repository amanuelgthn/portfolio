import { Routes, Route } from 'react-router-dom';
import amanlogo from '/amanlogo.svg';
import Header from './components/ Header';
import Home from './components/Home/Home';
import About from './components/about/About';
import './components/Styling/header.css';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Add more routes here if needed */}
        </Routes>
      </main>
      <img 
        className="image__logo"
        src={amanlogo}
        width={100}
        alt="Aman logo"
      />
    </>
  );
}

export default App;
