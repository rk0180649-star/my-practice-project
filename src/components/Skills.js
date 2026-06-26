import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaFigma, FaMobileAlt, FaLaptop} from 'react-icons/fa';
import { BsJavascript} from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { SiReactrouter } from 'react-icons/si';
import { FaSquareGit, FaGithubAlt } from 'react-icons/fa6';

const Skills = ()=> {
    return(
             <div className="skill-section">
            <h1>SKILLS</h1>
            <div className="skill">
              <div className="section20">
                <div className="back-color">
                <span><FaHtml5 /></span>
                <p>HTML</p>
                </div>
              </div>
              <div className="section20">
                <div className="back-color">
                <span><FaCss3Alt /></span>
                <p>CSS</p>
                </div>
              </div>
              <div  className="section20">
                <div className="back-color">
                <span><FaFigma /></span>
                <p>Figma</p>
                </div>
              </div>
              <div  className="section20">
                <div className="back-color">
                <span><FaMobileAlt /> <FaLaptop /></span>
                <p>Responsive Design</p>
                </div>
              </div>
              <div  className="section20">
                <div className="back-color">
                <span><BsJavascript /></span>
                <p>Javascript</p>
                </div>
              </div>
                <div  className="section20">
                <div className="back-color">
                <span><FaReact /></span>
                <p>React</p>
                </div>
              </div>
                <div  className="section20">
                <div className="back-color">
                <span><SiReactrouter /></span>
                <p>React Router</p>
                </div>
              </div>
                  <div  className="section20">
                <div className="back-color">
                <span><FaSquareGit /> <FaGithubAlt /></span>
                <p>Git and GitHub</p>
                </div>
              </div>
           </div>
        </div>
    );
}

export default Skills;