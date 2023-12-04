import { useState } from "react";
import styles from "./styles";
import { fadeIn } from "./utils";
import { motion } from "framer-motion";

const ExploreCard = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
  description,
  key,
}) => (
  <div
    className={`relative sm:w-[90%] sm:h-full h-24 overflow-hidden sm:active:border-white sm:hover:border-2 sm:active:boerder-0 sm:focus:border-black rounded-md sm:transition-all sm:cursor-pointer ${
      active === id ? "sm:col-span-2 col-span-1 sm:row-span-1 row-span-2 border-secondary" : "col-span-1 row-span-1"
    }`}
    onClick={() => handleClick(id)}
  >
    <div className={`bg-primary  ${active === id ? "h-1/2 opacity-90":"h-12"} transition-all absolute bottom-0 z-10 font-bold w-full flex flex-col p-4 text-center items-center justify-around`}>
      <h3 className="text-[#fff]">{title}</h3>
      <span className={`${active===id? "flex":"hidden"} text-[#fff] text-xs`}>{description}</span>
    </div>
    <img src={imgUrl} className={`absolute sm:h-full h-auto sm:w-auto w-full object-cover grayscale hover:grayscale-0 ${active==id?'grayscale-0':'grayscale'}`}></img>

  </div>
);

export default ExploreCard;
