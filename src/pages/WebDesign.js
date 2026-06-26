import { useState } from "react";
import './WebDesign.css';

import Figma1 from '../images/img1w.webp';
import Figma2 from '../images/img2.webp';
import Figma3 from '../images/img2w.webp';
import Figma4 from '../images/img4d.webp';
import Figma5 from '../images/img5d.webp';
import Figma6 from '../images/img6w.webp';
import Figma7 from '../images/img7w.webp';

const images = [Figma1,Figma2,Figma3,Figma4,Figma5,Figma6,Figma7];

function WebDesign() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="image-slider-web">
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

export default WebDesign;