import './components/Styling/header.css'
import amanlogo  from '/amanlogo.svg'
import Header from './components/ Header'
import Home from './components/Home/Home'
import About from './components/about/About'

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
