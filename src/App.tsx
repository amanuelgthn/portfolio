import { useState } from 'react'
import amanicon from '/amanicon.svg'
import './components/Styling/header.css'
import amanlogo  from '/amanlogo.svg'
import Header from './components/ Header'
import { Button } from './components/ui/button'
import Home from './components/Home/Home'

function App() {
  
  return (
    <>
    <Header />
    <main className="main">
      <Home />
    </main>
          <img className="image__logo"
             src={amanlogo}
             width={100}
          />
  </>
);
};


export default App
