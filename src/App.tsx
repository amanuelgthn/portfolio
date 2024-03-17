import { useState } from 'react'
import amanicon from '/amanicon.svg'
import amanlogo  from '/amanlogo.svg'
import './App.css'
import './global.css'
import Header from './components/ Header'
import { Button } from './components/ui/button'

function App() {

  const [logowidth, setLogoWidth] = useState(100);
  
  return (
    <>
    <Header />
    <div>
      {/* When the link is clicked, toggleLogoSize will be called */}
        {/* Apply dynamic width to the image */}
        <img src={amanlogo} className="logo" alt="React logo" />
    </div>
    <h1>My Portfolio Website</h1>
  </>
);
};


export default App
