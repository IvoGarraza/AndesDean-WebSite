import React from "react";
import portada from "../../assets/images/Imagenes/portada-sin-editar.jpg";
import { Link } from "react-router-dom";
import './Hero.css'

const Hero = () => {
  return (
    ///bg-[url('https://www.np5.eu/resources/uploads/technologijos/gamyba-surenkami-namai-light-steel-frame-surenkami-namai-np5-5.jpg')]
    <div
      className={`w-full relative sm:h-[80vh] h-[90vh] overflow-hidden text-white font-bold flex object-cover bg-center grayscale-0 `}
      id="hero"
    >
      <img src={portada} className="absolute -z-10 sm:w-full w-auto sm:h-auto h-full  sm:-top-40 grayscale"></img>
      <div className="w-full h-full items-center justify-center flex flex-col">
        <div className="flex flex-col items-center justify-center w-full text-primary ">
          <h3 className="text-black font-extrabold font-xl text-justify sm:text-4xl text-2xl">
            ANDES DEAN
          </h3>
          <span className="text-black font-semibold sm:text-4xl text-2xl">
            ENGINEERING STUDIO
          </span>
        </div>
        <div className="z-10">
          <p className="font-medium text-justify sm:text-xl text-lg px-4 my-4 ">
            Discover the world of Andes Dean Engineering, where project delivery
            meets unmatched expertise.
          </p>
        </div>
        <div className="my-4">
          <Link to="/contactus" className="w-44">
            <a className="bg-primary px-4 py-2 w- 44 rounded-md text-[#ffffff] font-medium mx-2 transition-all hover:bg-secondary ">
              Contact Us
            </a>
          </Link>

          <a
            href="#content"
            className=" bg-secondary px-4 py-2 w-44 rounded-md text-[#ffffff] mx-2 font-medium transition-all hover:bg-primary hover:text-[#ffffff]"
          >
            Learn more
          </a>
        </div>
      </div>
        <div className="shape absolute sm:flex sm:visible hidden bottom-0 left-0 sm:w-1/3 w-1/2 sm:h-full h-1/2 bg-[#a22224b7] z-0"></div>
        <div className="shape2 absolute sm:flex sm:visible hidden top-0 right-0 sm:w-1/3 w-1/2 sm:h-full h-1/2 bg-[#052a49ce] z-0"></div>
      {/* <div class='shape'></div> */}
    </div>
  );
};

export default Hero;
