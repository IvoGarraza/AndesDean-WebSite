import React from "react";
/* import './shape.css' */
import { motion } from "framer-motion";
import Pin from "../../assets/pin.svg";

const Shape = (props) => {
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 0 }}
      class="shapeContent"
    >
      {/*       <motion.div initial={{x:20}} animate={{x:0}} transition={{duration:0.5, delay:0.5}} class="carouselUno"></motion.div>
      <motion.div  class="carousel"></motion.div> */}
      <div class="infoContainer rounded-md h-full bg-[#b9b9b9] flex flex-row">
        <div className="w-[10px] h-[150px] bg-secondary rounded-l-md"></div>
        <div className="w-[10px] h-[150px] bg-primary"></div>
        <div className="flex flex-col w-full text-center py-2 ml-2 text-primary">
          <div className="flex flex-row items-center w-full">
          <div className="iconContainer">
            <svg
              className="w-4 fill-primary h-auto"
              version="1.1"
              id="Capa_1"
              width="800px"
              height="800px"
              viewBox="0 0 118.1 118.1"
            >
              <g>
                <path
                  d="M59,0C34.4,0,14.5,19.9,14.5,44.5c0,12.8,6.4,24.4,12.7,35.1c7.7,13.301,16.9,25.7,27.6,36.7c2.3,2.399,6.101,2.399,8.5,0
		C72.7,107,81,96.5,88,85.3c7.5-12.101,15.6-26.101,15.6-40.8C103.5,20,83.6,0,59,0z M59,70.3c-14.9,0-27-12.1-27-27s12.1-27,27-27
		c14.9,0,27,12,27,27S73.9,70.3,59,70.3z"
                />
              </g>
            </svg>
          </div>
            <span class="firstSpan">
              Location: <span class="secondSpan">{props.location}</span>
            </span>
          </div>
          <span class="firstSpan items-center">
            Period:<span class="secondSpan">{props.period}</span>
          </span>
          <span class="firstSpan">
            Team: <span class="secondSpan">{props.team}</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Shape;
