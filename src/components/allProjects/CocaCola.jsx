import React from "react";
import bulletPoint from "../../assets/images/Recursos/PNG/logo-sin fondo.png";
import cocacola1 from "../../assets/images/Imagenes/cocacola1.png";
import cocacola2 from "../../assets/images/Imagenes/cocacola2.png";
import cocacola3 from "../../assets/images/Imagenes/cocacola3.png";
import Shape from "../shape/shape";

const CocaCola = () => {
  return (
    <div className="px-6 flex flex-col sm:flex-row">
      <div className="sm:w-1/2 text-xl flex flex-col justify-around">
        <h3 className="text-5xl font-bold text-primary">
          Coca Cola Company Warehouse Extension
        </h3>
        <span className="font-bold text-2xl text-secondary">
          PROJECTS & CONTRUCTION INSPECTIONS
        </span>
        <br />
        <span>
          Warehouse extension of finished product for the Coca Cola Company in
          Córdoba, Argentina (EDASA) with a total covered area of 10,000m2.
        </span>
        <br />
        <br />
        <div>
          <span>The of work includes:</span>
          <div className="flex flex-col font-medium">
            <div className="flex flex-row items-center">
              <img src={bulletPoint} className="w-4 mr-2"></img>
              <span className="font-bold">Existing Conditions Survey.</span>
            </div>
            <div className="flex flex-row items-center">
              <img src={bulletPoint} className="w-4 mr-2"></img>
              <span className="font-bold">Existing Conditions Survey.</span>
            </div>
            <div className="flex flex-row items-center">
              <img src={bulletPoint} className="w-4 mr-2"></img>
              <span className="font-bold">Civil Works Package.</span>
            </div>
            <div className="flex flex-row items-center">
              <img src={bulletPoint} className="w-4 mr-2"></img>
              <span className="font-bold">Heavy Steel Structure Package.</span>
            </div>
            <div className="flex flex-row items-center">
              <img src={bulletPoint} className="w-4 mr-2"></img>
              <span className="font-bold">MEP Package.</span>
            </div>
            <div className="flex flex-row items-center">
              <img src={bulletPoint} className="w-4 mr-2"></img>
              <span className="font-bold">City Permits.</span>
            </div>
            <div className="flex flex-row items-center">
              <img src={bulletPoint} className="w-4 mr-2"></img>
              <span className="font-bold">Construction Inspections.</span>
            </div>
          </div>
          <br />
        </div>
        <Shape
          location="Córdoba, Argentina"
          period="2018"
          team="Andes Dean and Partners"
        ></Shape>
      </div>
      <div className="flex flex-col sm:w-1/2 justify-center items-center">
        <img className='sm:w-1/2 my-2' src={cocacola1} />
      {/*   <img className='w-12' src={cocacola2} /> */}
        <img className='sm:w-1/2 my-2' src={cocacola3} />
      </div>
    </div>
  );
};

export default CocaCola;
