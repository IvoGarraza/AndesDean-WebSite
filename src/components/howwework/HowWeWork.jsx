import React, { useState } from "react";
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
    <div  className="grid sm:grid-rows-1 sm:grid-cols-7 grid-cols-1 grid-rows-6 sm:h-94 h-72  gap-4">
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
