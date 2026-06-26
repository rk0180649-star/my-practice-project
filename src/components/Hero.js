import React from 'react';
import './Hero.css';
import Button from '../components/Button';
import { FaPenNib, FaCode, FaMobileAlt, FaTachometerAlt  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Figma from '../pages/Figma';
import WebDesign from '../pages/WebDesign';

const Hero = () =>{
    return(
        <div className="main-div">
            <section className='hero-section'>
            <div className="hero">
              <h1>HI, I'M RUPESH KUMAR</h1>
                <p>Creative Designer & Developer</p>
            </div>
            <div className="hero-botom">
                <a href="https://wa.me/916201442285">
                <Button text= "Contact on Whatsapp"></Button>
                </a>
                <Link to="/figma"><Button text= "View My figma Design"></Button></Link>
                <Link to="/webdesign"> <Button text= "view My web Design"></Button></Link>
            </div>

            <div className="services">
              <span><FaPenNib /> UI/UX Design</span>
              <span><FaCode /> Frontend Development</span>
             <span><FaMobileAlt /> Responsive Design</span>
            <span><FaTachometerAlt /> Website Optimization</span>
          </div>

            <div className="skills-icons">
              <p className="icon-ps">Ps</p>
              <p className="icon-figma">Figma</p>
              <p className="icon-code"><FaCode /></p> 
            </div>
            </section>
          
        </div>
        
    );
}

export default Hero;