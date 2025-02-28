import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styling/header.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo" onClick={closeMenu}>
          Amanuel
        </Link>
        <div className={isMenuOpen ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link" onClick={closeMenu}>
                <i className="uil uil-estate nav__icon"></i> Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/about" className="nav__link" onClick={closeMenu}>
                <i className="uil uil-user nav__icon"></i> About
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/Skills" className="nav__link" onClick={closeMenu}>
                <i className="uil uil-user nav__icon"></i> Skills
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/Projects" className="nav__link" onClick={closeMenu}>
                <i className="uil uil-user nav__icon"></i> Projects
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/Contact" className="nav__link" onClick={closeMenu}>
                <i className="uil uil-user nav__icon"></i> Contact
              </Link>
            </li>
            {/* Add additional navigation items here as required */}
          </ul>
          <i className="uil uil-times nav__close" onClick={toggleMenu}></i>
        </div>
        <div className="nav__toggle" onClick={toggleMenu}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
