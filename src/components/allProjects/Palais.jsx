import React from "react";
import palais1 from "../../assets/images/Imagenes/palais1.png";
import palais2 from "../../assets/images/Imagenes/palais2.png";
import bulletPoint from "../../assets/images/Recursos/PNG/logo-sin fondo.png";
import Shape from "../shape/shape";

const Palais = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row py-12 px-6 text-xl">
      <div className="sm:px-12  sm:w-1/2 flex flex-col">
        <img className="my-2" src={palais1} />
        <img className="my-2" src={palais2} />
      </div>
      <div className=" my-4 sm:w-1/2 flex flex-col justify-around">
        <h3 className="font-bold text-5xl text-primary">
          Palais 550 Townhomes
        </h3>
        <span className="font-bold text-secondary">
          STRUCTURAL CALCULATIONS
        </span>
        <p>
          This project comprises{" "}
          <span className="font-bold">
            four three-story residential buildings.
          </span>{" "}
          The structural design encompasses foundations, wood framing, and steel
          framing.
        </p>
        <br />
        <div className="text-xl">
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
        </div>
        <br />
        <span>
          Software employed: Enercalc and Forte Web
          <br />
          <br />
          Design Code utilized: 2018 IBC.
          <br />
          <br />
          (Projects developed on behalf of ae urbia, architects and engineers).
        </span>
        <div className="my-4">
          <Shape location='Midvale, Utah, US' period='2022' team='Andes Dean and Partners'></Shape>
        </div>
      </div>
    </div>
  );
};

export default Palais;
