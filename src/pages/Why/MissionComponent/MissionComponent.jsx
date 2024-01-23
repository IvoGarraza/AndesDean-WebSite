import React from "react";
import bulletPoint from "../../../assets/images/Recursos/PNG/logo-sin fondo.png";

const MissionComponent = () => {
  return (
    <div
      /*           ref={ref}
    initial={{ x: -1000 }}
    animate={isInView ? { x: 0 } : { x: -1000 }}
    transition={{ duration: 0.4 }} */
      id="ourmission"
      className="p-6 pr-8 py-16 px-12 my-4 w-full sm:pr-48 text-[#ffffff] "
    >
      <h3 className="font-bold text-4xl">Our mission</h3>
      <br />
      <span>
        At Andes Dean Engineering, we are dedicated to revolutionizing the
        construction industry and enhancing productivity.
        <br />
        To achieve that, we work on three important aspects:
      </span>
      <div className="pr-6 my-6 font-semibold">
        <div className="flex flex-row my-6 items-center">
          <img src={bulletPoint} className="w-6"></img>
          <span className="font-bold text-[#fff]">APPLIED TECHNOLOGIES</span>
        </div>
        <span>
          <li>
            By leveraging applied technologies such as BIM, Revit, IT, data
            analytics, agile surveying, and automated processing, we deliver
            innovative, technology- powered solutions.
          </li>
        </span>
        <div className="flex flex-row my-6 items-center">
          <img src={bulletPoint} className="w-6"></img>
          <span className="font-bold text-[#fff]">INNOVATIONS</span>
        </div>
        <span>
          <li>
            Our focus on innovation extends to embracing prefabrication,
            industrialization, and LEAN principles.
          </li>
        </span>
        <div className="flex flex-row my-6 items-center">
          <img src={bulletPoint} className="w-6"></img>
          <span className="font-bold text-[#fff]">PROJECT MANAGEMENT</span>
        </div>
        <span>
          <li>
            With our commitment to project management excellence, guided by the
            Project Management Institute and agile development, we ensure
            standards and evolutionary management practices.
          </li>
          <br />
          <br />
          <span className="text-primary font-bold">
            Join us in shaping the future of construction!
          </span>
        </span>
      </div>
    </div>
  );
};

export default MissionComponent;
