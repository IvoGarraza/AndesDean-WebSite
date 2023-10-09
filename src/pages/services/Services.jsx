import React, { useRef } from "react";
/* import './Services.css' */
import residential from "../../assets/images/Imagenes/residential.jpg";
import commercial from "../../assets/images/Imagenes/commercial.jpg";
import institutional from "../../assets/images/Imagenes/institutional2.jpg";
import { Link } from "react-router-dom";
import Carrousel from '../../components/carrousel/carrousel'
import servicios from '../../assets/images/Imagenes/servicios.jpg'
import { useInView, motion } from "framer-motion";


const Services = () => {
  const ref= useRef(null)
  const isInView = useInView(ref)

  return (
    <div className="text-justify">
      <div className="flex items-center justify-center h-[50vh] object-cover bg-center w-full" /* style={{backgroundImage:`url(${servicios})`}} */>
        <div className="w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center relative overflow-hidden">
          <img src={servicios} className="absolute -z-10 w-full"></img>
          <h3 className="font-bold text-[#fff] text-4xl">SERVICES</h3>
        </div>
      </div>
      <div className="px-6 text-center mt-12">
        <span className="font-semibold">
          At Andes Dean, we take pride in offering a wide range of range of
          services to meet the needs of our clients. We work with a variety of
          specialized software to provide efficient and accurate solution.
        </span>
      </div>
      <div ref={ref} className="py-8">
        <h3 className="font-bold text-center text-primary text-2xl m-2">
          Our Services
        </h3>
        <div>
          <div class="containerServices">
            <div class="servicesContainer px-4">
              <div class="itemsWrap grid sm:grid-cols-5 sm:grid-rows-2 grid-cols-2 grid-flow-row  grid-rows-5 text-[#ffffff] font-bold justify-items-center ">
                <motion.div initial={{opacity:0}} animate={isInView?{opacity:1}:{opacity:0}} transition={{duration:0.200}} class="items bg-primary rounded-md shadow-md shadow-nav sm:h-24 sm:w-64 h-24 w-40 m-2 p-2 items-center flex justify-center text-center hover:bg-secondary">
                  <h4>Structural Design</h4>
                </motion.div>
                <motion.div initial={{opacity:0}} animate={isInView?{opacity:1}:{opacity:0}} transition={{duration:0.200,delay:0.100}} class="items bg-primary rounded-md shadow-md shadow-nav sm:h-24 sm:w-64 h-24 w-40 m-2 p-2 items-center flex justify-center text-center hover:bg-secondary">
                  <h4>Bim Management</h4>
                </motion.div>
                <motion.div initial={{opacity:0}} animate={isInView?{opacity:1}:{opacity:0}} transition={{duration:0.200, delay:0.200}} class="items bg-primary rounded-md shadow-md shadow-nav sm:h-24 sm:w-64 h-24 w-40 m-2 p-2 items-center flex justify-center text-center hover:bg-secondary">
                  <h4>Mep Engineering</h4>
                </motion.div>
                <motion.div initial={{opacity:0}} animate={isInView?{opacity:1}:{opacity:0}} transition={{duration:0.200, delay:0.300}} class="items bg-primary rounded-md shadow-md shadow-nav sm:h-24 sm:w-64 h-24 w-40 m-2 p-2 items-center flex justify-center text-center hover:bg-secondary">
                  <h4>3D Visualization</h4>
                </motion.div>
                <motion.div initial={{opacity:0}} animate={isInView?{opacity:1}:{opacity:0}} transition={{duration:0.200, delay:0.400}} class="items bg-primary rounded-md shadow-md shadow-nav sm:h-24 sm:w-64 h-24 w-40 m-2 p-2 items-center flex justify-center text-center hover:bg-secondary">
                  <h4>Desingn Development</h4>
                </motion.div>
                <motion.div initial={{opacity:0}} animate={isInView?{opacity:1}:{opacity:0}} transition={{duration:0.200, delay:0.100}} class="items bg-primary rounded-md shadow-md shadow-nav sm:h-24 sm:w-64 h-24 w-40 m-2 p-2 items-center flex justify-center text-center hover:bg-secondary">
                  <h4>Contruction Documents</h4>
                </motion.div>
                <motion.div initial={{opacity:0}} animate={isInView?{opacity:1}:{opacity:0}} transition={{duration:0.200, delay:0.200}} class="items bg-primary rounded-md shadow-md shadow-nav sm:h-24 sm:w-64 h-24 w-40 m-2 p-2 items-center flex justify-center text-center hover:bg-secondary">
                  <h4>
                    Composition and <br />
                    Listing of Materials
                  </h4>
                </motion.div>
                <motion.div initial={{opacity:0}} animate={isInView?{opacity:1}:{opacity:0}} transition={{duration:0.200, delay:0.300}} class="items bg-primary rounded-md shadow-md shadow-nav sm:h-24 sm:w-64 h-24 w-40 m-2 p-2 items-center flex justify-center text-center hover:bg-secondary">
                  <h4>
                    Projects and <br />
                    Techcnical Maganement
                  </h4>
                </motion.div>
                <motion.div initial={{opacity:0}} animate={isInView?{opacity:1}:{opacity:0}} transition={{duration:0.200, delay:0.400}} class="items bg-primary rounded-md shadow-md shadow-nav sm:h-24 sm:w-64 h-24 w-40 m-2 p-2 items-center flex justify-center text-center hover:bg-secondary">
                  <h4>
                    Consultant Coordination <br />
                    and Support
                  </h4>
                </motion.div>
                <motion.div initial={{opacity:0}} animate={isInView?{opacity:1}:{opacity:0}} transition={{duration:0.200, delay:0.500}} class="items bg-primary rounded-md shadow-md shadow-nav sm:h-24 sm:w-64 h-24 w-40 m-2 p-2 items-center flex justify-center text-center hover:bg-secondary">
                  <h4>Professional Trainning</h4>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6">
        <h3 className="font-bold text-2xl text-primary text-center">Sectors</h3>
        <div className="flex sm:flex-row flex-col items-center justify-between">
          <div
            className="group w-full h-56 m-2 bg-center grayscale hover:grayscale-0 flex items-center justify-center text-[#ffffff] font-bold"
            style={{ backgroundImage: `url(${residential})` }}
          >
            <Link to='/projects' className="w-full h-full flex items-center justify-center">
            <span className="text-2xl transition ease-in-out group-hover:scale-150  drop-shadow-xl shadow-black ">
              Residential
            </span>
            </Link>
          </div>
          <div
            className="group w-full h-56 m-2 bg-center grayscale hover:grayscale-0  text-[#ffffff] font-bold"
            style={{ backgroundImage: `url(${commercial})` }}
          >
            <Link to='/projects' className="w-full h-full flex items-center justify-center">
            <span className="text-2xl transition ease-in-out group-hover:scale-150 drop-shadow-xl shadow-black ">
              Commercial
            </span>
            </Link>
          </div>
          <div
            className="group w-full h-56 m-2 bg-center grayscale hover:grayscale-0 flex items-center justify-center text-[#ffffff] font-bold"
            style={{ backgroundImage: `url(${institutional})` }}
          >
            <Link to='/projects' className="w-full h-full flex items-center justify-center">
            <span className="text-2xl transition ease-in-out group-hover:scale-150 drop-shadow-xl shadow-black">
              Institucional
            </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="my-6 mx-6">
        <h3 className="font-bold text-center text-primary text-2xl">Software</h3>
        <Carrousel></Carrousel>
      </div>
    </div>
  );
};

export default Services;
