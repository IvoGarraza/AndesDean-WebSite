import React from "react";
import bulletPoint from "../../assets/images/Recursos/PNG/logo-sin fondo.png";
import customHomes1 from "../../assets/images/Imagenes/customHomes.png";
import Shape from "../shape/shape";

const CustomHomes = () => {
  return (
    <div className=" flex sm:flex-row flex-col  px-6">
      <div className="sm:w-1/2 text-xl p-2 justify-between">
        <div>
          <h3 className="text-5xl font-bold text-primary">Custom Homes</h3>
          <span className="font-bold text-2xl text-secondary">
            STRUCTURAL CALCULATIONS
          </span>
        </div>
        <br />
        <span className="font-medium">
          These projects encompass the{" "}
          <span className="font-bold">
            construction of custom residential homes
          </span>{" "}
          across multiple locations. The structural design incorporates
          foundations, wood framing, and steel framing.
        </span>
        <br />
        <br />
        <div>
          <span>The tasks executed are as follows:</span>
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <img src={bulletPoint} className="w-4 mr-2"></img>
              <span className="font-bold">Load Analysis</span>
            </div>
            <div className="flex flex-row items-center">
              <img src={bulletPoint} className="w-4 mr-2"></img>
              <span className="font-bold">Gravity Design and Calculations</span>
            </div>
            <div className="flex flex-row items-center">
              <img src={bulletPoint} className="w-4 mr-2"></img>
              <span className="font-bold">Lateral Design and Calculations</span>
            </div>
            <div className="flex flex-row items-center">
              <img src={bulletPoint} className="w-4 mr-2"></img>
              <span className="font-bold">Calculation Package</span>
            </div>
          </div>
          <br />
          <span className="font-medium">
            Software utilized: Enercalc and Forte Web
            <br />
            Design Code adhered to: 2018 IBC.
            <br />
            (Projects developed on behalf of ae urbia, architects and
            engineers).
          </span>
        </div>
        <div className="mt-4 mr-2">
          <Shape
            location="Utah and Wyoming"
            period="2021"
            team="Andes Dean and Partners"
          ></Shape>
        </div>
      </div>
      <div className="sm:w-1/2 flex justify-center items-center">
        <img src={customHomes1} />
      </div>
    </div>
  );
};

export default CustomHomes;
