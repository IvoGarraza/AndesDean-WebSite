import { useState } from "react";
import styles from "./styles";
import { fadeIn } from "./utils";
import { motion } from "framer-motion";


const ExploreCard = ({ id, imgUrl, title, index, active, handleClick, description }) => (

  
/*     <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt="planet-04"
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-[#fff] absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] drop-shadow-2xl">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-6 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div
            className={`${styles.flexCenter} w-[60px] rounded-[24px] glassmorphism mb-[16px]`}
          >
          </div>
          <p className="font-normal sm:text-[16px] text-xs leading-[20.16px] text-[#fff]">
            {description}
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-md text-[#fff] ">
            {title}
          </h2>
        </div>
      )}
    </motion.div> */
    <div className={`relative w-full h-full overflow-hidden rounded-md ${active?'col-span-1':'col-span-2'}`} onClick={() => handleClick(id)}>
      <div className="bg-gray-500 absolute">
        <h3>{title}</h3>
      </div>
      <img src={imgUrl} className="absolute h-full"></img>
    </div>
  );
  
  export default ExploreCard;