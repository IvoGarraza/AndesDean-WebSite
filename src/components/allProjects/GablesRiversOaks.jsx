import React from "react";
import gablesriveroaks from "../../assets/images/Imagenes/institutional2.jpg";
import Shape from "../shape/shape";

const GablesRiversOaks = () => {
  return (
    <div className="px-6 my-4 flex flex-col sm:flex-row">
      <div className="sm:w-1/2 sm:px-6 text-xl">
        <h3 className="font-bold text-5xl text-primary">Gables Rivers Oaks</h3>
        <span className="font-bold text-secondary text-2xl">
          BIM MODELING FOR DDs & COORDINATION
        </span>
        <br />
        <br />
        <div className="text-justify">
          <span className=" font-medium">
            Gables River Oaks is a residential building in Houston, Texas.
            represented CorbisGlobal as the engineering team of WSP in Houston.
            <br />
            The scope of work includes Revit modeling of the MEP+F disciplines
            and the spatial coordination with Arch Structural models. Also, we
            develop all Design Drawings in Revit.
            <br />
            At the end of 2011, I launched a BIM training to the WSP engineering
            team in Houston,
            <br />
            <br />
            (Project developed on behalf CorbisGlobal)
          </span>
        </div>
        <div className="mt-4">
          <Shape
            location="Houston, Texas, US"
            period="2011"
            team="WSP Engeneering"
          ></Shape>
        </div>
      </div>
      <div className=" sm:w-1/2 sm:px-6">
        <img src={gablesriveroaks} />
      </div>
    </div>
  );
};

export default GablesRiversOaks;
