import { useState } from "react";
import './Figma.css';

import Figma1 from '../images/figma1.webp';
import Figma2 from '../images/figma2.webp';
import Figma3 from '../images/figma3.webp';
import Figma4 from '../images/figma4.webp';
import Figma5 from '../images/figma5.webp';
import Figma6 from '../images/figma6.webp';
import Figma7 from '../images/figma7.webp';

const images = [Figma1,Figma2,Figma3,Figma4,Figma5,Figma6,Figma7];

function Figma() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="image-slider">
      <img src={images[current]} alt="slider" />

      <button
        onClick={() =>
          setCurrent(current === 0 ? images.length - 1 : current - 1)
        }
      >
        Prev
      </button>

      <button
        onClick={() =>
          setCurrent((current + 1) % images.length)
        }
      >
        Next
      </button>
    </div>
  );
}

export default Figma;