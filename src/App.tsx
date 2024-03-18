import { useState } from 'react'
import amanicon from '/amanicon.svg'
import './components/Styling/header.css'
import amanlogo  from '/amanlogo.svg'
import Header from './components/ Header'
import { Button } from './components/ui/button'

function App() {
  
  return (
    <>
    <Header />
    <div>
      {/* When the link is clicked, toggleLogoSize will be called */}
        {/* Apply dynamic width to the image */}
        <img src={amanlogo}
          />
    </div>
    <h1>My Portfolio Website</h1>
  </>
);
};


export default App
