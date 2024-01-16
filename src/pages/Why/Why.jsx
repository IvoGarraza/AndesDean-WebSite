import React, { useEffect, useRef } from "react";
import bulletPoint from "../../assets/images/Recursos/PNG/logo-sin fondo.png";
import "./Why.css";
import { motion, useInView } from "framer-motion";
import gif from "../../assets/images/Imagenes/gif.gif";
import ValuesComponent from "./ValuesComponent/ValuesComponent";
import MissionComponent from "./MissionComponent/MissionComponent";

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
      <div className=" text-justify flex flex-row items-center z-10 px-12 py-12 mx-12 -mt-16 mb-12 rounded-xl border-black border-[0px] bg-[#fff]">
        <div className="w-1/3 mr-12">
          <span className="font-light text-xs">
            <span className="font-bold">Time Zone Advantage:</span> As a remote team we within a similar time zone
            as our clients, enabling seamless communication and collaboration
            throughout the projects.
            <br />
            <br />
            <span className="font-bold">Cost-effective growth:</span> Outsource with Andes Dean Engineering for a
            significant reduction in labor costs, enabling efficient resource
            allocation and investment in critical areas of your organization's
            development.
            <br />
            <br />
            <span className="font-bold">Embracing Latest Software:</span> We possess the knowledge and expertise to
            work seamlessly with a diverse range of cutting-edge software,
            proactively learning and training our team in the industry to ensure
            the delivery of comprehensive solutions.
            <br />
            <br />
            <span className="font-bold">Full Project Lifecycle Coverage:</span> With expertise covering all project
            stages defined by the Project Management Institute (PMI), we offer
            end-to-end services, from initial conceptualization to
            implementation and beyond, ensuring a holistic approach to project
            management and delivery.
            <br />
            <br />
            <span className="font-bold">Collaborative Partnership:</span> We prioritize on-site meetings to gain a
            deep understanding of our clients' needs, values, and operational
            processes. By immersing ourselves in their environment, we become an
            extension of their office to align with their goals.{" "}
          </span>
        </div>
        <div className=" w-2/3 h-full">
{/*           <div className="w-full h-full top-0 bg-secondary text-xs">
            <span>our misssion</span>
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
                <span className="font-bold text-primary">
                  APPLIED TECHNOLOGIES
                </span>
              </div>
              <span>
                <li>
                  By leveraging applied technologies such as BIM, Revit, IT,
                  data analytics, agile surveying, and automated processing, we
                  deliver innovative, technology- powered solutions.
                </li>
              </span>
              <div className="flex flex-row my-6 items-center">
                <img src={bulletPoint} className="w-6"></img>
                <span className="font-bold text-primary">INNOVATIONS</span>
              </div>
              <span>
                <li>
                  Our focus on innovation extends to embracing prefabrication,
                  industrialization, and LEAN principles.
                </li>
              </span>
              <div className="flex flex-row my-6 items-center">
                <img src={bulletPoint} className="w-6"></img>
                <span className="font-bold text-primary">
                  PROJECT MANAGEMENT
                </span>
              </div>
              <span>
                <li>
                  With our commitment to project management excellence, guided
                  by the Project Management Institute and agile development, we
                  ensure standards and evolutionary management practices.
                </li>
                <br />
                <br />
                <span className="text-primary font-bold">
                  Join us in shaping the future of construction!
                </span>
              </span>
            </div>
          </div> */}
        </div>
        {/*         <div className="border border-black w-[90%] rounded-md p-2">
          <div>
            <span className="font-semibold">
              Time Zone Advantage: As a remote team we within a similar time
              zone as our clients, enabling seamless communication and
              collaboration throughout the projects.
              <br />
              <br />
              Cost-effective growth: Outsource with Andes Dean Engineering for a
              significant reduction in labor costs, enabling efficient resource
              allocation and investment in critical areas of your organization's
              development.
              <br />
              <br />
              Embracing Latest Software: We possess the knowledge and expertise
              to work seamlessly with a diverse range of cutting-edge software,
              proactively learning and training our team in the industry to
              ensure the delivery of comprehensive solutions.
              <br />
              <br />
              Full Project Lifecycle Coverage: With expertise covering all
              project stages defined by the Project Management Institute (PMI),
              we offer end-to-end services, from initial conceptualization to
              implementation and beyond, ensuring a holistic approach to project
              management and delivery.
              <br />
              <br />
              Collaborative Partnership: We prioritize on-site meetings to gain
              a deep understanding of our clients' needs, values, and
              operational processes. By immersing ourselves in their
              environment, we become an extension of their office to align with
              their goals.{" "}
            </span>
          </div>
        </div> */}
      </div>
      <div className="w-full">
        <MissionComponent></MissionComponent>
        <ValuesComponent></ValuesComponent>
      </div>
    </div>
  );
};

export default Why;
