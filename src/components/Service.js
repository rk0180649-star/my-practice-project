import React from "react";
import './Service.css';
import Tags from "./Tags";
import { FaPalette, FaCode, FaMobileAlt, FaLaptopCode, FaReact } from "react-icons/fa";

const Service = () => {
    return(
        <div className="service-section">
            <h1>MY SERVICES</h1>
            <p>FRONTEND DEVELOPMENT & DESIGN</p>
            <div className="service">
            <div className="card-box">
            <p><FaPalette /></p>
            <h6>WEB DESIGN (FIGMA TO CODE)</h6>
            <p>Convert Figma designs into clean, responsive and user-friendly
             websites using modern frontend technologies.</p>
             <div className="tagsdesign"><Tags tags="Figma" /><Tags tags="HTML5" /><Tags tags="CSS3" /></div>
            </div>
            <div className="card-box">
            <p><FaCode /></p>
            <h6>FRONTEND DEVELOPMENT</h6>
            <p>Build interactive and responsive user interfaces using HTML,
             CSS, JavaScript and React Focus on clean code.</p>
             <div className="tagsdesign"><Tags tags="React" /><Tags tags="JavaScript" /><Tags tags="CSS" /></div>
            </div>
            <div className="card-box">
            <p><FaMobileAlt /><FaLaptopCode /></p>
            <h6>RESPONSIVE WEB DESIGN</h6>
            <p>Create websites that work perfectly across Mobile, Tablet and 
             Desktop devices with a smooth user experience.</p>
             <div className="tagsdesign"><Tags tags="Responsive" /><Tags tags="Flexbox" /><Tags tags="Mobile" /></div>
            </div>
            <div className="card-box">
            <p><FaReact /></p>
            <h6>REACT WEB APPLICATIONS</h6>
            <p>Develop fast and modern single-page applications with
             reusable components and smooth navigation.</p>
             <div className="tagsdesign"><Tags tags="React Router" /><Tags tags="Components" /></div>
            </div>
            </div>
        </div>  
    );
}


export default Service;