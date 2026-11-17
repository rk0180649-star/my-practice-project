import './HeaderSecond.css';
import React, {useState} from "react";
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';
import Figma from '../pages/Figma';
import Skills from './Skills';
import Service from './Service';
import Contact from './Contact';
import WebDesign from '../pages/WebDesign';
import Projectlink from './Projectlink';

const HeaderSecond = () => {
    const[isOpen, setisOpen] = useState(false);

    const toggleMenu = () =>{
        setisOpen(!isOpen);
    }
  return (
    <div className='navbar'>
        <div className='logo'>
            <p className='logo-desing'>R</p>
            <p>Rupesh</p>
        </div>
        <div className='navbar-nav'>
            <nav className={`mobile-navbar ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li className='mobile-close' onClick={toggleMenu}> <FaTimes /></li>
                    <li><Link to="/" className='textstyle' onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/skills" className='textstyle' onClick={toggleMenu}>Skills</Link></li>
                    <li><Link to="/service" className='textstyle' onClick={toggleMenu}>Services</Link></li>
                    <li><Link to="/contact" className='textstyle' onClick={toggleMenu}>Contact</Link></li>
                    <li><Link to="/projectlink" className='textstyle' onClick={toggleMenu}>Full Stack</Link></li>
                    <li><Link to="/figma" className='textstyle' onClick={toggleMenu}>Figma </Link></li>
                    <li><Link to="/webdesign" className='textstyle' onClick={toggleMenu}>Web Design</Link></li>
                </ul>
            </nav>
            <div className='hamburger' onClick={toggleMenu}> <FaBars /></div>
        </div>
    </div>
  );
}

export default HeaderSecond;