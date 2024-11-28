import { Routes, Route } from 'react-router-dom';
import amanlogo  from '/amanlogo.svg'
import Header from './components/ Header'
import Home from './components/Home/Home'
import About from './components/about/About'
import './components/Styling/header.css'

function App() {
  
  return (
    <>
    <Header />
    <main className="main">
      <Home />
      <About />
    </main>
          <img className="image__logo"
             src={amanlogo}
             width={100}
          />
  </>
);
};


export default App
