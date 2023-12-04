import React from "react";
import whiteLogo from '../../assets/images/Recursos/PNG/BLANCO_PNG.png'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-[#ffffff] font-light shadow dark:bg-gray-900 mb-0 flex items-center justify-center">
      <div className="w-full max-w-screen-xl  md:py-8 ">
        <div className="sm:flex sm:items-center sm:justify-between w-full">
          <Link
            to='/'
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              src={whiteLogo}
              className="w-1/2"
              alt="Flowbite Logo"
            />
          </Link>
          <ul className="flex flex-wrap flex-row w-2/3 items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            
            <li>
              <Link to='/'>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link to='/whoweare'>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                Who we are
                </a>
              </Link>
            </li>
            <li>
              <Link to='/whyandes'>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Why Andes
                </a>
              </Link>
            </li>
            <li>
              <Link to='/services'>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                Services
                </a>
              </Link>
            </li>
            <li>
              <Link to='/projects'>
                <a className="mr-4 hover:underline md:mr-6">
                Projects
                </a>
              </Link>
            </li>
            <li>
              <Link to='contactus'>
                <a className="mr-4 hover:underline md:mr-6">
                Contact us
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto w-full dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link to='/' className="hover:underline">
            AndesDean™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
