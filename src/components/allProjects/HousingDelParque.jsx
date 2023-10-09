import React from 'react'
import bulletPoint from "../../assets/images/Recursos/PNG/logo-sin fondo.png";
import housing1 from "../../assets/images/Imagenes/housing1.jpg"
import housing2 from '../../assets/images/Imagenes/housing2.jpg'
import Shape from '../shape/shape';


const HousingDelParque = () => {
  return (
    <div className='flex flex-col sm:flex-row-reverse px-6 my-8'>
      <div className='sm:w-1/2  flex flex-col justify-around text-xl'>
        <h3 className='font-bold text-5xl text-primary'>Housing del parque</h3>
        <span className='font-bold text-secondary text-2xl'>LIGHT STEEL FRAMING</span>
        <span className='font-medium'>Light Steel Framing has gained popularity as a construction method in Argentina in recent years. The typical project scope includes:</span>
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <img src={bulletPoint} className="w-4 mr-2"></img>
            <span className="font-bold">Architectural Pack</span>
          </div>
          <span className='font-medium'>Schematic Design, Renders, Design Drawings, Permits, Architectural Details.</span>
          <div className="flex flex-row items-center">
            <img src={bulletPoint} className="w-4 mr-2"></img>
            <span className="font-bold">Engineering Pack</span>
          </div>
          <span className='font-medium'>Structural calculations for Studs/Wall System, Roofing System, Bracing System, and Slab-on-Grade. Structural Set of Drawings.</span>
          <div className="flex flex-row items-center">
            <img src={bulletPoint} className="w-4 mr-2"></img>
            <span className="font-bold">Design and Detailing Pack</span>
          </div>
          <span className='font-medium'>BIM 3D model, Complete set of Assembly Drawings. Complete set of Layout Drawings. Steel Estimation Report.</span>
        </div>
        <div className='py-4'>
            <Shape location='Córdoba, Argentina' period='2020' team='Andes Dean and Partners'></Shape>
        </div>
      </div>
        <div className='sm:w-1/2 px-12 flex flex-col'>
            <img className='my-2' src={housing1}/>
            <img className='my-2' src={housing2}/>
        </div>
    </div>
  )
}

export default HousingDelParque