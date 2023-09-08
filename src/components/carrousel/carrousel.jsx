import React, { useEffect, useState } from "react";
/* import './carrousel.css' */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import logo1 from '../../assets/images/Recursos/iconos/629a3a503e59ee069da94c6f.png'
import logo2 from '../../assets/images/Recursos/iconos/AI-_2D00_RSS.png'
import { logos } from "../../assets/images/Recursos/iconos";


const Carrousel = () => {
 
  const [settings] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: 'linear',
  });

  return (
    <div>
      <Slider {...settings}>
        {
          logos.map((logo, index)=>(
            <div key={index}>
              <img src={logo}/>
            </div>
          ))
        }
      </Slider>
    </div>
  );
};

export default Carrousel;
