import React, { useEffect, useRef } from "react";
import bulletPoint from "../../assets/images/Recursos/PNG/logo-sin fondo.png";
import "./Why.css";
import {motion, useInView} from "framer-motion"
import gif from '../../assets/images/Imagenes/gif.gif'


const squareVariants = {
  visible: { opacity: 1, scale: 4,x:0, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0, x:-1000 }
};

const Why = () => {

  const ref = useRef(null)
  const isInView = useInView(ref)
  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])

  return (
    <div className="flex flex-col items-center">
      <div className="h-[50vh] w-full flex justify-center items-center  object-cover bg-center">
        <div className="w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden relative">
          <img src={gif} className="w-full absolute -z-10 "></img>
          <h3 className="text-4xl font-bold text-[#fff]">Why Andes</h3>
        </div>
      </div>
      <div className="text-justify px-16 py-12 mb-12">
        <span className="font-semibold">
          Time Zone Advantage: Our remote team operates within a similar time
          zone as our clients, enabling seamless communication and collaboration
          throughout the project.
          <br />
          <br />
          Experience a significant reduction in labor costs by outsourcing with
          Andes Dean Engineering. Outsourcing allows your business to expand at
          a lower cost compared to internal growth, enabling you to allocate
          resources more efficiently and invest in other critical areas of your
          organization's development.
          <br />
          <br />
          Embracing Latest Software: Our team is equipped with the knowledge and
          expertise to work with a wide range of cutting-edge software tools. In
          cases where unfamiliar software is encountered, we proactively learn
          and train our team to ensure we can provide comprehensive solutions.
          <br />
          <br />
          Full Project Lifecycle Coverage: With expertise covering all project
          stages defined by the Project Management Institute (PMI), we offer
          end-to-end services, from initial conceptualization to implementation
          and beyond, ensuring a holistic approach to project management and
          delivery.
          <br />
          <br />
          Collaborative Partnership: We prioritize onsite meetings to deeply
          understand our clients' needs, values, and operational processes. By
          immersing ourselves in their environment, we become an extension of
          their office, fostering a collaborative partnership that ensures
          seamless integration and alignment with their goals.{" "}
        </span>
      </div>
      <div>
        <motion.div ref={ref} initial={{x:-1000}} animate={isInView? {x:0}:{x:-1000}} transition={{duration: 0.400}} id="ourmission" className="p-6 pr-8 py-16 my-4 w-full sm:pr-48 text-[#ffffff] ">
          <h3 className="font-bold text-4xl">Our mission</h3>
          <br/>
          <span >
            At Andes Dean Engineering, we are dedicated to revolutionizing the
            construction industry and enhancing productivity.
            <br/>
            To achieve that, we
            work on three important aspects:
          </span>
        <div className="pr-6 my-6 font-semibold">
          <div className="flex flex-row my-6 items-center">
            <img src={bulletPoint} className="w-6"></img>
            <span className="font-bold text-primary">APPLIED TECHNOLOGIES</span>
          </div>
          <span>
            By harnessing applied technologies such as BIM, Revit, IT, data
            analytics, agile surveying, and automated processing, we drive
            tech-driven solutions.
          </span>
          <div className="flex flex-row my-6 items-center">
            <img src={bulletPoint} className="w-6"></img>
            <span className="font-bold text-primary">INNOVATIONS</span>
          </div>
          <span>
            Our focus on innovation extends to embracing prefabrication,
            industrialization, and LEAN principles
          </span>
          <div className="flex flex-row my-6 items-center">
            <img src={bulletPoint} className="w-6"></img>
            <span className="font-bold text-primary">PROJECT MANAGEMENT</span>
          </div>
          <span>
            With our commitment to project management excellence, guided by the
            Project Management Institute and agile development, we ensure
            standards and evolutionary management practices.
            <br />
            <br />
            Join us in shaping the future of construction.
          </span>
        </div>
        </motion.div>
        <motion.div initial={{x:1000}} animate={isInView?{x:0}:{x:1000}} transition={{duration: 0.400}} id="ourvalues" className="p-6 pl-8 py-16 my-8 w-full text-[#ffffff] text-end">
          <h3 className="font-bold text-4xl">Our values</h3>
          <br/>
          <span>
            At Andes Dean Engineering, we are committed to elevating values to new
            heights.
            <br/>
            Our unwavering dedication to responsibility, quality,
            teamwork and innovation forms the foundation of our work, ensuring
            that we deliver <br/> engineering solutions that surpass expectations and
            drive positive impact.
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Why;
