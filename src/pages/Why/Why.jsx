import React, { useEffect, useRef } from "react";
import bulletPoint from "../../assets/images/Recursos/PNG/logo-sin fondo.png";
import "./Why.css";
import { motion, useInView } from "framer-motion";
import gif from "../../assets/images/Imagenes/gif.gif";
import ValuesComponent from "./ValuesComponent/ValuesComponent";
import MissionComponent from "./MissionComponent/MissionComponent";
import WhyComponent from "./WhyComponent.jsx/WhyComponent";

const squareVariants = {
  visible: { opacity: 1, scale: 4, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0, x: -1000 },
};

const Why = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <div className="flex flex-col items-center">
      <div className="h-[50vh] w-full flex justify-center items-center  object-cover bg-center">
        <div className="w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden relative">
          <img src={gif} className="w-full absolute -z-10 "></img>
          <h3 className="text-4xl font-bold text-[#fff]">Why Andes</h3>
        </div>
      </div>
      <WhyComponent></WhyComponent>
      <div className="w-full">
        {/* <MissionComponent></MissionComponent> */}
        <ValuesComponent></ValuesComponent>
      </div>
    </div>
  );
};

export default Why;
