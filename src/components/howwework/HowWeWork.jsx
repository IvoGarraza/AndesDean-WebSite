import React, { useState } from "react";
/* import './HowWeWork.css' */
import how1 from "../../assets/images/howwework1.jpeg";
import how2 from "../../assets/images/howwework2.jpg";
import how3 from "../../assets/images/howwework3.jpg";
import how4 from "../../assets/images/howwework4.jpg";
import how5 from "../../assets/images/howwework5.jpg";
import how6 from "../../assets/images/howwework6.jpg";
import { exploreWorlds } from "./content";
import HowWeWorkCard from './HowWeWorkCard'

const HowWeWork = () => {
  const [active, setActive] = useState('world-1');
  return (
/*     <div className="grid text-center grid-flow-row grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 grid-rows-6 justify-items-center">
      <div className="p-2 w-full flex items-center justify-center">
        <div className="group flex flex-col items-center justify-center bg-center rounded-md h-64 w-96 hover:bg-primary"
        style={{ backgroundImage: `url(${how1})` }}>
          <h2 className="font-bold text-4xl text-[#ffffff] group-hover:hidden">Project Quote</h2>
          <p className="group-hover:flex font-semibold items-center hidden text-[#ffffff] h-64 w-96 mx-2 px-2 bg-primary rounded-md">
            As the initial stage, we provide a comprehensive project quote that
            outlines the estimated cost, timeline, and deliverables based on the
            client's requirements and project scope. This serves as the foundation
            for subsequent project stages.
          </p>
        </div>
      </div>
      <div className="p-2 w-full flex items-center justify-center">
        <div className="group flex flex-col items-center justify-center bg-center rounded-md h-64 w-96 hover:bg-primary"
        style={{ backgroundImage: `url(${how2})` }}>
          <h2 className="font-bold text-4xl text-[#ffffff] group-hover:hidden">Project Kick-off</h2>
          <p className="group-hover:flex font-semibold items-center hidden text-[#ffffff] h-64 w-96 mx-2 px-2 bg-primary rounded-md">
            With a detailed project plan encompassing timelines, deliverables, and
            resource allocation, we initiate the project execution phase. Our team
            mobilizes and effectively allocates resources, closely monitors
            project progress, and ensures transparent communication through
            regular status meetings.
          </p>
        </div>
      </div>
      <div className="p-2 w-full flex items-center justify-center">
        <div className="group flex flex-col items-center justify-center bg-center rounded-md h-64 w-96 hover:bg-primary"
        style={{ backgroundImage: `url(${how3})` }}>
          <h2 className="font-bold text-4xl text-[#ffffff] group-hover:hidden">Project Planning</h2>
          <p className="group-hover:flex font-semibold items-center hidden text-[#ffffff] h-64 w-96 mx-2 px-2 bg-primary rounded-md">
            In this stage we develop a detailed project plan encompassing
            timelines, deliverables, and resource allocation. Additionally, we
            conduct comprehensive risk analysis and define quality control
            measures and project communication protocols.
          </p>
        </div>
      </div>
      <div className="p-2 w-full flex items-center justify-center">
        <div className=" group flex flex-col items-center justify-center bg-center rounded-md h-64 w-96 hover:bg-primary"
        style={{ backgroundImage: `url(${how4})` }}>
          <h2 className="font-bold text-4xl text-[#ffffff] group-hover:hidden">Projects Execution</h2>
          <p className="group-hover:flex font-semibold items-center hidden text-[#ffffff] h-64 w-96 mx-2 px-2 bg-primary rounded-md">
            During this phase, we mobilize the project team, allocate resources
            effectively, and closely monitor project progress to ensure adherence
            to the project plan. Our dedicated team manages and coordinates
            project tasks, timelines, and dependencies to drive successful project
            execution. Conduct regular status meetings and provide transparent
            communication to stakeholders.
          </p>
        </div>
      </div>
      <div className="group p-2 w-full flex items-center justify-center">
        <div className=" flex flex-col items-center justify-center bg-center rounded-md h-64 w-96 hover:bg-primary"
        style={{ backgroundImage: `url(${how5})` }}>
          <h2 className="font-bold text-4xl text-[#ffffff] group-hover:hidden">Project Wrap-up</h2>
          <p className="group-hover:flex font-semibold items-center hidden text-[#ffffff] h-64 w-96 mx-2 px-2 bg-primary rounded-md">
            During the Project Evaluation phase, we assess project success against
            predetermined objectives and metrics while actively seeking feedback
            to gauge client sa
          </p>
        </div>
      </div>
      <div className=" p-2 w-full flex items-center justify-center">
        <div className="group flex flex-col items-center justify-center bg-center rounded-md h-64 w-96 hover:bg-primary"
        style={{ backgroundImage: `url(${how6})` }}>
          <h2 className="font-bold text-4xl text-[#ffffff] group-hover:hidden">Project Delivery</h2>
          <p className="group-hover:flex font-semibold items-center hidden text-[#ffffff] h-64 w-96 mx-2 px-2 bg-primary rounded-md">
            As we reach the project's final stages, we focus on delivering
            exceptional results by fulfilling and validating all project
            deliverables. Additionally, we conduct thorough project reviews to
            identify areas for improvement and enhance future project outcomes.
          </p>
        </div>
      </div>
    </div> */

/*     <div className="grid grid-cols-7 w-full h-[100vh] px-6 gap-4">
      <div className="col-span-1 hover:col-span-2 transition ease-in bg-primary rounded-lg focus:border-red-400 focus:border-[2px] active:bg-secondary">1</div>
      <div className="col-span-1 hover:col-span-2 transition ease-in bg-primary rounded-lg">2</div>
      <div className="col-span-1 hover:col-span-2 transition ease-in bg-primary rounded-lg">3</div>
      <div className="col-span-1 hover:col-span-2 transition ease-in bg-primary rounded-lg">4</div>
      <div className="col-span-1 hover:col-span-2 transition ease-in bg-primary rounded-lg">5</div>
      <div className="col-span-1 hover:col-span-2 transition ease-in bg-primary rounded-lg">6</div>
    </div> */
    <div /* className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5" */ className="grid grid-row-1 grid-cols-7 h-96 gap-4">
    {exploreWorlds.map((world, index) => (
      <HowWeWorkCard
        key={world.id}
        {...world}
        index={index}
        active={active}
        handleClick={setActive}
      />

    ))}
  </div>
  );
};

export default HowWeWork;
