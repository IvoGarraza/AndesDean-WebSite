import React from "react";
/* import './shape.css' */
import { motion } from "framer-motion";



const Shape = (props) => {
  return (
    <motion.div initial={{x:-1000}} animate={{x:0}} transition={{duration:0.5,delay:0}} class='shapeContent'>
{/*       <motion.div initial={{x:20}} animate={{x:0}} transition={{duration:0.5, delay:0.5}} class="carouselUno"></motion.div>
      <motion.div  class="carousel"></motion.div> */}
      <div class="infoContainer rounded-md h-full bg-[#b9b9b9] flex flex-row">
        <div className="w-[10px] h-[150px] bg-secondary rounded-l-md"></div>
        <div className="w-[10px] h-[150px] bg-primary"></div>
        <div className="flex flex-col w-full text-center py-2 ml-2 text-primary">
          <span class="firstSpan">
            Location: <span class="secondSpan">{props.location}</span>
          </span>
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
