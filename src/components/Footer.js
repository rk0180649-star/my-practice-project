import React from "react";
import './Footer.css';
import Button from './Button';
import { FaMobile } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Skills from './Skills';
import Service from './Service';
import Contact from './Contact';

const Footer = () => {
    return(
        <div className="footer-section">
            <div className="header-resume">
            <h6>Interested in working together? Let's connect!</h6>
            <a href="resume.docx" download  className="resumebuttom">Dawnload Resume ⬇️</a>
            </div>
            <div className="footer-box-three">
                <div className="footer-box">
                   <h6>Quick Links</h6>
                  <Link to="/service">Services</Link>
                  <Link to="/skills">Skills</Link>
                  <Link to="/contact">Contact</Link>
                </div>
                <div className="footer-box">
                   <h6>Resources</h6>
                   <a href="">Blog</a>
                   <a href="">Portfolio Tips</a>
                   <a href="">Coding Guides</a> 
                </div>
                <div className="footer-box">
                  <h6>Contact Info</h6>
                  <p><FaMobile /> +91 6201442285</p> 
                  <p><SiGmail /> rk0180649@gmail.com</p> 
                  <p><FaLocationDot /> Bihar India</p> 
                </div>
            </div>
            <div className="privact-policy">
                <p>@ 2026 Rupesh Kumar. All rights reserved. Privacy Policy . Terms of Service . Sitemap</p>
            </div>
        </div>
    );
}
export default Footer;