import React from "react";
import './Service.css';
import Tags from "./Tags";
import { FaPalette, FaCode, FaMobileAlt, FaLaptopCode, FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiNextdotjs, SiTailwindcss, SiVercel } from "react-icons/si";
import { MdApi } from "react-icons/md";

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
            <div className="card-box">
            <p><SiNextdotjs /> <SiTailwindcss /></p>
            <h6>FRONTEND FRAMEWORK & STYLING</h6>
            <p>Build high-performance server-rendered React applications 
                with modern utility-first CSS styling.</p>
             <div className="tagsdesign"><Tags tags="Next.js" /><Tags tags="Tailwind CSS" /></div>
            </div>
            <div className="card-box">
            <p><FaNodeJs /> <SiExpress /></p>
            <h6> BACKEND DEVELOPMENT</h6>
            <p> Develop secure server-side logic and robust REST APIs 
                using JavaScript runtime and framework.</p>
             <div className="tagsdesign"><Tags tags="Node.js" /><Tags tags="Express.js" /></div>
            </div>
            <div className="card-box">
            <p><MdApi /> <SiMongodb /></p>
            <h6> DATABASE & API INTEGRATION</h6>
            <p>Manage flexible NoSQL database schemas and connect
                 client-server communication smoothly and securely.</p>
             <div className="tagsdesign"><Tags tags="MongoDB" /><Tags tags="REST API" /></div>
            </div>
            <div className="card-box">
            <p><SiVercel /></p>
            <h6>CLOUD DEPLOYMENT</h6>
            <p> Deploy full-stack production-ready web applications
                 instantly with continuous integration.</p>
             <div className="tagsdesign"><Tags tags="Vercel" /></div>
            </div>
            
            

            </div>
        </div>  
    );
}


export default Service;