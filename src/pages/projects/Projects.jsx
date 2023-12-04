import React, { useRef, useState } from "react";
import HowWeWork from "../../components/howwework/HowWeWork";
import Palais from "../../components/allProjects/Palais";
import CustomHomes from "../../components/allProjects/CustomHomes";
import HousingDelParque from "../../components/allProjects/HousingDelParque";
import CocaCola from "../../components/allProjects/CocaCola";
import GablesRiversOaks from "../../components/allProjects/GablesRiversOaks";
import SunCityMesquite from "../../components/allProjects/SunCityMesquite";
import CarrouselProjects from "../../components/carrouselProjects/CarrouselProjects";
import video from "../../assets/images/Imagenes/projects.mp4";
import { projects } from "../../components/allProjects";
import Modal from "../../components/Modal/Ventana";
import { motion, useInView } from "framer-motion";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClickProject = (projectTitle) => {
    setSelectedProject(projectTitle);
  };

  const renderComponent = (component) => {
    switch (component) {
      case "Palais 550 Townhomes":
        return <Palais></Palais>;
      case "Custom Homes":
        return <CustomHomes></CustomHomes>;
      case "Housing del parque":
        return <HousingDelParque></HousingDelParque>;
      case "Coca Cola Company Warehouse Extension":
        return <CocaCola></CocaCola>;
      case "Gables Rivers Oaks":
        return <GablesRiversOaks></GablesRiversOaks>;
      case "Sun City Mesquite":
        return <SunCityMesquite></SunCityMesquite>;
      default:
        break;
    }
  };

  const handleClick = () => {
    setShowModal(true);
  };
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div>
      <div className="sm:h-64 h-96 relative flex items-center justify-center flex-col">
        <video
          src={video}
          className="absolute h-full w-full -z-10 object-cover"
          autoPlay
          loop
        ></video>
        <div className="absolute bg-[rgba(0,0,0,0.4)] -z-10 w-full h-full"></div>
        <div>
          <h3 className="font-bold text-[#fff] text-4xl my-4">PROJECTS</h3>
        </div>
        <div className="px-6 text-center">
          <span className="font-semibold text-[#fff]">
            Since 2006, Andes Dean Engineering Studio has led 250+ contruction
            projects worldwide. With expertise in Wood Framing, Steel Framing,
            Masonry, and Concrete, we seamlessly integrate Building Information
            Modeling (BIM) for exceptional result. Our passion for innovation
            drives us to embrace diverse challenges across sector.
          </span>
        </div>
      </div>
      <div className="py-4">
        <h3 className="font-bold text-primary text-2xl text-center pb-4">
          How we work
        </h3>
        <div className="px-6 text-justify">
          <span className="font-semibold text-tertiary">
            At Andes Dean, we follow a comprehensive Project Management
            Institute (PMI) approach to ensure successful delivery of every
            project we undertake in the Architecture, Engineering and
            Construction (AEC) industry. Our methodology consists of several key
            phases, each of which is carefully executed to achieve project
            objectives. Here are are some of the key stages we use:
          </span>
        </div>
      </div>
      <div className="px-6 h-96">
        <HowWeWork></HowWeWork>
      </div>
      <div className="w-full flex items-center justify-center">
        <h3 className="font-bold text-primary py-12 text-2xl">Some of the projects we work on</h3>
      </div>
      <div ref={ref} className="grid sm:grid-cols-3 sm:grid-rows-2 grid-cols-1 gap-4 px-6 my-12">
        {projects.map((project, index) => (
          <motion.div
            className="group bg-primary h-64 rounded-lg bg-center object-cover"
            style={{ backgroundImage: `url(${project.img})` }}
          >
            <div className="bg-[rgba(0,0,0,0.5)] transition-opacity hover:bg-[rgba(0,0,0,0.0)] w-full h-full rounded-xl flex flex-col justify-end">
              <div className={`bg-[#fff] flex flex-col rounded-b-lg sm:h-1/3 transition-all sm:group-hover:h-1/2 ${isInView?'h-1/2':'h-1/3'}  text-center justify-around items-center text-[#fff] font-bold`}>
                <h2 className="text-primary text-2xl">{project.title}</h2>
                <span className="text-secondary text-xs">{project.type}</span>
                <button
                  className="text-[#fff] sm:hidden group-hover:flex bg-primary rounded-md p-2"
                  onClick={() => handleClickProject(project.title)}
                >
                  Show project
                </button>
                {selectedProject === project.title && (
                  <Modal
                    showModal={selectedProject === project.title}
                    setShowmodal={() => setSelectedProject(null)}
                    component={renderComponent(project.title)}
                  ></Modal>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
