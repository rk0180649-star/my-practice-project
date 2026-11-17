import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaFigma, FaMobileAlt, FaLaptop, FaNodeJs} from 'react-icons/fa';
import { BsJavascript} from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiNextdotjs, SiReactrouter, SiTailwindcss, SiVercel } from 'react-icons/si';
import { FaSquareGit, FaGithubAlt } from 'react-icons/fa6';
import { MdApi } from 'react-icons/md';
import { DiVisualstudio } from 'react-icons/di';

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
                <div  className="section20">
                <div className="back-color">
                <span><SiNextdotjs /></span>
                <p>Next.js</p>
                </div>
              </div>
                <div  className="section20">
                <div className="back-color">
                <span><SiTailwindcss /></span>
                <p>Tailwind CSS</p>
                </div>
              </div>
                <div  className="section20">
                <div className="back-color">
                <span><FaNodeJs /></span>
                <p>Node.js</p>
                </div>
              </div>
                <div  className="section20">
                <div className="back-color">
                <span><SiExpress /></span>
                <p>Express.js</p>
                </div>
              </div>
                <div  className="section20">
                <div className="back-color">
                <span><MdApi /></span>
                <p>REST API</p>
                </div>
              </div>
                <div  className="section20">
                <div className="back-color">
                <span><SiMongodb /></span>
                <p>MongoDB</p>
                </div>
              </div>
                <div  className="section20">
                <div className="back-color">
                <span><SiVercel /></span>
                <p>Vercel</p>
                </div>
              </div>

                <div  className="section20">
                <div className="back-color">
                <span><DiVisualstudio /></span>
                <p>VS Code</p>
                </div>
              </div>
              
           </div>
        </div>
    );
}

export default Skills;