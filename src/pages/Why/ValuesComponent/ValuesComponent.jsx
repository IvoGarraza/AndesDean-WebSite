import React from "react";
import teamwork from "../../../assets/teamwork.svg";
import tape from '../../../assets/tape.svg';
import manhappy from '../../../assets/manhappy.svg'
import design from '../../../assets/design.svg'
import sketch from '../../../assets/sketch.svg'
import wall from '../../../assets/wall.svg'

const ValuesComponent = () => {
  return (
    <div>
      <div
        /*           initial={{ x: 1000 }}
          animate={isInView ? { x: 0 } : { x: 1000 }}
          transition={{ duration: 0.4 }} */
        id="ourvalues"
        className="p-6 pl-8 py-16 my-8 w-full text-[#ffffff] flex flex-col items-center"
      >
        <h3 className="font-bold text-4xl mb-8">Our values</h3>
        <div className="w-full sm:flex sm:flex-row justify-around">
          <div className="flex flex-col items-center bg-[#fff] text-[#000] text-center justify-center w-72 h-72 rounded-md p-4 shadow-sm shadow-black">
            <img className="w-1/2" src={teamwork}></img>
            <h2 className="font-bold">Teamwork</h2>
            <div>
              <span>
                At Andes Dean Engineering, we prioritize collaboration and
                synergy in all our endeavors.
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center bg-[#fff] text-[#000] text-center justify-center w-72 h-72 rounded-md p-4 shadow-sm shadow-black">
            <img className="w-1/2" src={sketch}></img>
            <h2 className="font-bold">Attention to Details</h2>
            <div>
              <span>
                Our meticulous approach ensures precision in every aspect of our
                work.
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center bg-[#fff] text-[#000] text-center justify-center w-72 h-72 rounded-md p-4 shadow-sm shadow-black">
            <img className="w-1/2" src={design}></img>
            <h2 className="font-bold">Responsibility</h2>
            <div>
              <span>
                We uphold accountability and reliability in all our commitments.
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center bg-[#fff] text-[#000] text-center justify-center w-72 h-72 rounded-md p-4 shadow-sm shadow-black">
            <img className="w-1/2" src={wall}></img>
            <h2 className="font-bold">Fast-Learning</h2>
            <div>
              <span>
                Our adaptive nature facilitates rapid learning to innovate and
                excel.
              </span>
            </div>
          </div>
        </div>
        {/*           <br />
          <span>
            At Andes Dean Engineering, we are committed to elevating values to
            new heights.
            <br />
            Our unwavering dedication{" "}
            <span className="font-bold">
            teamwork, attention to details, responsibility and fast-learning
            </span>{" "}
            forms the foundation of our work, ensuring that we deliver <br />{" "}
            engineering solutions that surpass expectations and drive positive
            impact.
          </span> */}
      </div>
    </div>
  );
};

export default ValuesComponent;
