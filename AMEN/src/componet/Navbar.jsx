import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='navbar'>
            <img src="src\assets\aaaaaa.png" alt="" />
            {/* <h1>TXT<span className='txt'>☠</span>RAFA</h1> */}
            {/* <h1>Verm<span className='txt'>i</span>thor</h1> */}
            <div className='search-container'>
                <input className='search-input' type="text" placeholder='Search' />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    {/* <li><a href="/home">Home</a></li>
                    <li><a href="/service">Service</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/about">About</a></li> */}
                    <li>
                        <Link to={"/home"} >Home</Link>
                    </li>
                    <li>
                        <Link to={"/service"} >Service</Link>
                    </li>
                    <li>
                        <Link to={"/about"} >About</Link>
                    </li>
                    <li>
                        <Link to={"/contact"} >Contact</Link>
                    </li>
                    {/* <input className='btn' type="submit" value="Login" /> */}
                    <Link to={"/signup"}><input className='btn' type="submit" value={"Login"} /></Link>
                </ul>
            </div>
            <div className='hamburger' onClick={toggleMenu}>
                <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </div>
        </nav>
    );
};

export default Navbar;
