import { motion, useInView } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Content = () => {
  /*   const onChange = entries =>{
    entries.forEach(entry=>{
      if (entry.target ===)
    })
  } */
  /*  const container = useRef(null) */
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <div
      className="flex flex-col items-center justify-center w-full px-16 py-6"
      id="content"
    >
      <div className="pb-4">
        <h2 className="w-full font-extrabold text-xl text-primary">CONTENT</h2>
      </div>
      <div className="p-2 my-6 flex flex-col justify-center items-center text-center">
        <h3 className="font-bold text-primary text-2xl">ABOUT ANDES DEAN</h3>
        <br />
        <p>
          With our diverse team of architects and engineers, we are dedicated to
          providing cutting-edge engineering solutions. As BIM experts, we
          harness the power of technology to transform your ideas into reality,
          ensuring seamless project delivery and exceeding your expectations
          every step of the way.
        </p>
        <div></div>
      </div>
      <div
        ref={ref}
        className="grid sm:grid-cols-3 grid-cols-1 grid-flow-row sm:grid-rows-1 grid-rows-1 font-medium"
      >
        <motion.div
          initial={{ opacity: 0, y: 500 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-[#fff] m-2 flex flex-col justify-between items-center rounded-md p-4 shadow-lg hover:shadow-none transition-all duration-200 text-center"
        >
          <h3 className="font-bold text-primary">WHY ANDES</h3>
          <br />
          <p>
            Some key differentiators highlight Andes Dean Engineering's
            competitive advantages and emphasize our ability to provide
            exceptional engineering solutions to our clients.
          </p>
          <Link to="/whyandes">
            <button className="w-44 text-[#ffffff] font-semibold transition-all duration-200 py-2 my-6 bg-primary rounded-md hover:bg-secondary">
              See more...
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 500 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="bg-[#fff] m-2 flex flex-col justify-between items-center rounded-md p-4 shadow-lg hover:shadow-none transition-all duration-200 text-center"
        >
          <h3 className="font-bold text-primary">SERVICES</h3>
          <br />
          <p>
            At Andes Dean we combine cutting-edge technology with the right
            resources to deliver tailored services that cater to your unique
            needs.
          </p>
          <Link to="/services">
            <button className="w-44 text-[#ffffff] font-semibold transition-all duration-200 py-2 my-6 bg-primary rounded-md hover:bg-secondary">
              See more...
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 500 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.4 }}
          className="bg-[#fff] m-2 flex flex-col justify-between items-center rounded-md p-4 shadow-lg hover:shadow-none transition-all duration-200 text-center"
        >
          <h3 className="font-bold text-primary">WHO WE ARE</h3>
          <p>Meet the team behind Andes Dean Engineering</p>
          <Link to="/whoweare">
            <button className="w-44 text-[#ffffff] font-semibold transition-all duration-200 py-2 my-6 bg-primary rounded-md hover:bg-secondary">
              See more...
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Content;
