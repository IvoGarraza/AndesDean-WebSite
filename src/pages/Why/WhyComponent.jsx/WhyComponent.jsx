import React from "react";
import teamwork from "../../../assets/teamwork.svg";
import tape from "../../../assets/tape.svg";
import manhappy from "../../../assets/manhappy.svg";
import design from "../../../assets/design.svg";
import sketch from "../../../assets/sketch.svg";
import wall from "../../../assets/wall.svg";
import bulletPoint from "../../../assets/images/Recursos/PNG/logo-sin fondo.png";
import { Link } from "react-router-dom";

const WhyComponent = () => {
  return (
    <div className=" text-justify flex flex-row items-center z-10 px-12 py-12 mx-12 -mt-16 mb-2 rounded-xl border-black border-[0px] bg-[#fff]">
      <div className="w-1/3 mr-12">
        <span className="font-light text-md">
          <span className="font-bold">Time Zone Advantage:</span> As a remote
          team we within a similar time zone as our clients, enabling seamless
          communication and collaboration throughout the projects.
          <br />
          <br />
          <span className="font-bold">Cost-effective growth:</span> Outsource
          with Andes Dean Engineering for a significant reduction in labor
          costs, enabling efficient resource allocation and investment in
          critical areas of your organization's development.
          <br />
          <br />
          <span className="font-bold">Embracing Latest Software:</span> We
          possess the knowledge and expertise to work seamlessly with a diverse
          range of cutting-edge software, proactively learning and training our
          team in the industry to ensure the delivery of comprehensive
          solutions.
          <br />
          <br />
          <span className="font-bold">
            Full Project Lifecycle Coverage:
          </span>{" "}
          With expertise covering all project stages defined by the Project
          Management Institute (PMI), we offer end-to-end services, from initial
          conceptualization to implementation and beyond, ensuring a holistic
          approach to project management and delivery.
          <br />
          <br />
          <span className="font-bold">Collaborative Partnership:</span> We
          prioritize on-site meetings to gain a deep understanding of our
          clients' needs, values, and operational processes. By immersing
          ourselves in their environment, we become an extension of their office
          to align with their goals.{" "}
        </span>
      </div>
      <div className=" w-2/3 h-full bg-secondary rounded-lg text-[#fff]">
        <div
          /*           ref={ref}
    initial={{ x: -1000 }}
    animate={isInView ? { x: 0 } : { x: -1000 }}
    transition={{ duration: 0.4 }} */

          className="w-full h-full py-12  px-6 text-black text-center flex flex-col justify-between "
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
              <img src={bulletPoint} className="w-6 mr-2"></img>
              <span className="font-bold ">APPLIED TECHNOLOGIES</span>
            </div>
            <span className="font-light">
              <li>
                By leveraging applied technologies such as BIM, Revit, IT, data
                analytics, agile surveying, and automated processing, we deliver
                innovative, technology- powered solutions.
              </li>
            </span>
            <div className="flex flex-row my-6 items-center">
              <img src={bulletPoint} className="w-6 mr-2"></img>
              <span className="font-bold ">INNOVATIONS</span>
            </div>
            <span className="font-light">
              <li>
                Our focus on innovation extends to embracing prefabrication,
                industrialization, and LEAN principles.
              </li>
            </span>
            <div className="flex flex-row my-6 items-center">
              <img src={bulletPoint} className="w-6 mr-2"></img>
              <span className="font-bold ">PROJECT MANAGEMENT</span>
            </div>
            <span className="font-light">
              <li>
                With our commitment to project management excellence, guided by
                the Project Management Institute and agile development, we
                ensure standards and evolutionary management practices.
              </li>
              <br />
              <br />
              <Link className="text-[#fff] p-2 rounded-md bg-primary hover:bg-[#fff] hover:text-[#000] transition-all font-bold">
                Join us in shaping the future of construction!
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyComponent;
