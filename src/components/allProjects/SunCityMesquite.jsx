import React from "react";
import Shape from "../shape/shape";
import suncity1 from "../../assets/images/Imagenes/residential.jpg";
import suncity2 from "../../assets/images/Imagenes/suncity1.jpg";

const SunCityMesquite = () => {
  return (
    <div className="px-6 my-6 flex flex-col sm:flex-row text-justify">
      <div className="sm:w-1/2 sm:px-6 flex flex-col justify-around text-xl">
        <div className="text-center mb-6">
          <h3 className="font-bold text-5xl text-primary mb-4 text-center">Sun City Mesquite</h3>
          <span className="font-bold text-secondary text-2xl text-center">WOOD FRAMING DESIGN</span>
        </div>
{/*         <br />
        <br /> */}
        <div className="text-justify">
          <span className="font-medium">
            Sun City Mesquite is a 55+ housing community located in Mesquite,
            Nevada, featuring new construction homes developed by Pulte Homes
            and Del Webb.
            <br />
            Working alongside the structural team, we designed and created the
            Design Structural Drawings for twelve distinct models within this
            community in 2006.
            <br />
            Our scope of work encompassed the gravity and lateral design,
            sizing, plans, and structural detailing for the Post-Tensioned
            Slab-on-grade and Wood Framing structures.
            <br />
            Project developed on behalf of AMP consulting.
          </span>
        </div>
        <div className="mt-4">
          <Shape
            location=" Mezquite, Nevada, US"
            period=" 2007"
            team=" Pulte Homes Nevada"
          ></Shape>
        </div>
      </div>
      <div className="sm:w-1/2 sm:px-6">
        <img className="my-2" src={suncity1} />
        <img className="my-2" src={suncity2}></img>
      </div>
    </div>
  );
};

export default SunCityMesquite;
