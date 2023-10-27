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
    className={`relative w-full h-full overflow-hidden active:border-white hover:border-2 active:boerder-0 focus:border-black rounded-md transition-all cursor-pointer ${
      active === id ? "col-span-2 border-secondary" : "col-span-1"
    }`}
    onClick={() => handleClick(id)}
  >
    <div className={`bg-primary  ${active === id ? "h-2/3":"h-12"} transition-all absolute bottom-0 z-10 font-bold w-full flex flex-col p-4 text-center items-center justify-around`}>
      <h3 className="text-[#fff]">{title}</h3>
      <span className={`${active===id? "flex":"hidden"} text-[#fff] text-xs`}>{description}</span>
    </div>
    <img src={imgUrl} className={`absolute h-full object-cover grayscale hover:grayscale-0 ${active==id?'grayscale-0':'grayscale'}`}></img>

  </div>
);

export default ExploreCard;
