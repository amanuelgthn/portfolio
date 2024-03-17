import React from 'react'

import { NavigationMenu } from './ui/navigation-menu'

const  Header = () => {
  return (
    <header className='header'>
        <NavigationMenu className='nav container'>
            <div className='nav-menu'>
                <ul className='nav-list-grid'>
                <li className='nav-item'>
                        <a href='#' className='nav_logo'>
                            <i className='uil nav_icon'></i> Amanuel
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#Home' className='nav_link'>
                            <i className='uil uil-estate nav_icon'></i> Home
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#About' className='nav_link'>
                            <i className='uil uil-user nav_icon '></i> About
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#Skills' className='nav_link'>
                            <i className='uil uil-file-alt nav_icon'></i> Skills
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#Services' className='nav_link'>
                            <i className='uil uil-briefcase-alt nav_icon'></i> Services
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#Portfolio' className='nav_link'>
                            <i className='uil uil-scenery nav_icon'></i> Portfolio
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#Cotact' className='nav_link'>
                            <i className='uil uil-message nav_icon'></i> Contact
                        </a>
                    </li>
                </ul>
            </div>
        </NavigationMenu>
    </header>
  )
}

export default  Header