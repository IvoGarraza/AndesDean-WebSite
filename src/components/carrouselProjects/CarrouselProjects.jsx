import React, { useState } from "react";
import { projects } from "../allProjects";
import {motion, AnimatePresence} from 'framer-motion'
import Modal from "../Modal/Ventana";




const CarrouselProjects = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () =>{
    setShowModal(true)
  }


  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 px-6">
      {projects.map((project, index)=>(
        <div className="bg-primary h-44 rounded-lg bg-center" style={{backgroundImage:`url(${project.img})`}}>
          <div className="bg-[#fff] flex flex-col rounded-t-lg text-center items-center text-[#fff] font-bold">
            <h2 className="text-primary text-2xl">{project.title}</h2>
            <span className="text-secondary text-md">{project.type}</span>
            <button className="text-primary" onClick={handleClick}>Show project</button>
            <Modal showModal={showModal} setShowmodal={setShowModal}></Modal>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarrouselProjects;
