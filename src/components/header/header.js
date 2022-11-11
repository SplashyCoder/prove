import {NavLink} from 'react-router-dom'
import React from 'react'
import './header.css'





const Header = ({titulo,logo}) =>(
    <header className='Header'>
        <div className='contenido'>
            <div className='Logo'>
                <a href="index.html "><img className="main_logo" src={logo} alt="icon" /></a>
                <h1 className='name'>{titulo}</h1>
            </div>
            <input type="checkbox" id="check"/>
            <label htmlFor="check" className="checkbtn">
                <div className="linkContainer">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </label>
            <nav className='nav'>
                <NavLink id='HederLink' to =".Header"  >Home</NavLink>
                <NavLink id='HederLink' to = "index.html"  >Projects</NavLink>
                <NavLink id='HederLink' to = "index.html"  >Education</NavLink>
                <NavLink id='HederLink' to = "index.html"  >About</NavLink> 
                <NavLink id='HederLink' to = "index.html"  >contact</NavLink> 
            </nav>
            
        </div> 
    </header>
    )

export default Header;