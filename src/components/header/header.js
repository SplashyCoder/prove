import React from 'react'
import './header.css'





const Header = (props) =>(
    <header className='Header'>
        <div className='contenido'>
            <div className='Logo'>
                <a href="https://splashycoder.github.io/splashyCoderPortfolio/ "><img className="main_logo" src={props.logo} alt="icon" /></a>
                <h1 className='name'>{props.titulo}</h1>
            </div>
            {/* drop down menu */}
            {/* <input type="checkbox" id="check"/>
            <label htmlFor="check" className="checkbtn">
                <div className="linkContainer">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </label> */}
            {/* <div className='nav'>
               {props.children}
            </div> */}
            
        </div> 
    </header>
    )

export default Header;