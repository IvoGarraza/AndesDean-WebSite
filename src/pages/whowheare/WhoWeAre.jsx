import React from "react";
import Team from "../../components/team/Team";
import fondo from "../../assets/images/Imagenes/portada-sin-editar.jpg";
import diego from "../../assets/images/Imagenes/diego.jpeg";

import Palais from "../../components/allProjects/Palais";
import blanconegro from "../../assets/images/blanconegro.png";

const WhoWeAre = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center h-[50vh] w-full object-cover ">
        <div className="w-full h-full relative overflow-hidden flex items-center ">
          <img
            src={fondo}
            className="absolute w-full -top-30 grayscale -z-10"
          ></img>
          <h3 className="text-primary text-5xl font-extrabold w-full text-center  px-6">
            Meet the team behind Andes Dean Engineering
          </h3>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-center my-8">
        <div className="py-6 sm:w-[40%] px-6 sm:px-0">
          <h3 className="font-bold text-primary text-4xl text-center mb-12">
            Meet our CEO
          </h3>
          <p className="font-medium text-justify">
            Diego is a highly experienced professional engineer with over 15
            years of expertise in the AEC industry, renowned for his leadership
            and adaptability. He has successfully delivered interdisciplinary
            projects, leveraging cutting-edge technologies on both local and
            international scales. As the Founder and CEO of Andes Dean
            Engineering Studio, Diego has spent the last 10 years assembling a
            highly skilled team that shares his passion for innovation and
            embraces new challenges. Specializing in project management, the
            studio covers design development, permits, and construction
            documentation. Diego's proficiency extends to architectural and
            engineering projects, along with providing international AEC
            back-office support, ensuring flawless execution and top- quality
            outcomes.
          </p>
        </div>
        <div className="sm:w-[30%] px-4 flex flex-col items-center justify-center mb-6">
          <img className="w-4/5 sm:w-80" src={diego}></img>
          <div className="flex flex-col text-justify items-center my-2">
            <span className="font-bold">DIEGO DEAN</span>
            <span className="font-medium">FOUNDER & CEO</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-around my-6">
        <div className="sm:w-[40%] w-full flex flex-col items-center">
          <h3 className="font-bold text-4xl text-primary my-2">
            Meet the team
          </h3>
          <span className="font-bold text-xl text-primary my-6 px-6 text-center">
            Together we soar higher: the mighty team of andes dean engineering
          </span>
          <span className="text-justify px-6 font-medium">
            At Andes Dean we are 3 dynamic team of professionals dedicated to
            delivering successful projects worldwide. With expertise in advanced
            technology and collaboration, we provide comprehensive project
            modeling and documentation services. By leveraging cutting edge
            tools like BM software, we ensure precise virtual representations of
            projects, optimizing efficiency and minimizing errors. Through
            effective communication and searnless coordination, At Andes Dean we
            empower stakeholders to achieve their project goals with confidence.
          </span>
        </div>
        <div className="sm:w-1/3 mx-2">
          <Team></Team>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
