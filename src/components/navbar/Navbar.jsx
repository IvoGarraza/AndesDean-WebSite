import React, { useEffect, useState } from "react";
import close from "../../assets/menu.svg";
import open from "../../assets/close.svg";
import logo from "../../assets/images/COLOR.RGB.png";
import { Link } from "react-router-dom";
import HambuergerMenu from "./HamburgerMenu";
import { motion } from "framer-motion";

const variants = {
  open:{opacity:1,x:0},
  closed:{opacity:1, x:-200}
}

const navbarlist = {
  open:{opacity:1,x:0},
  closed:{opacity:0,x:-100}
}

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navbarColor, setNavbarColor] = useState("bg-transparent text-black");

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setNavbarColor("bg-transparent text-black");
    } else {
      setNavbarColor("bg-tertiary text-[#ffffff]"); // Reemplaza 'bg-custom' con tu clase de color personalizado
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setToggle(false);
  };
  return (
    <nav
      className={`flex w-full justify-between fixed ${navbarColor} top-0 sm:py-2 z-30`}
    >
      <div className="ml-2 ">
        <img className='sm:w-64 w-1/2 my-2' src={logo} />
      </div>
      <div className="w-[50%] justify-around sm:flex hidden items-center font-bold text-[#fff]">
        <Link
          className="my-2"
          to="/"
        >
          HOME
        </Link>
        <Link
          className="my-2"
          to="/whoweare"
        >
          WHO WE ARE
        </Link>
        <Link className="my-2" to="/whyandes">
          WHY ANDES
        </Link>
        <Link className="my-2" to="/services">
          SERVICES
        </Link>
        <Link className="my-2" to="/projects">
          PROJECTS
        </Link>
        <Link className="my-2" to="/contactus">
          CONTACT US
        </Link>
      </div>
      <div className="sm:hidden flex text-white pr-6 z-20">
        
        <img
          className="w-14 fill-white"
          src={toggle ? open : close}
          onClick={() => setToggle((prev) => !prev)}
        />
        {/* <HambuergerMenu></HambuergerMenu> */}
      </div>
      <motion.div animate = {toggle?"open":"closed"} variants={variants} transition={{duration:0.2}}
        className={`${
          toggle ? "flex " : "hidden"
        } z-30 sm:justify-between text-[#fff] bg-[#212121] justify-start pl-12 absolute sm:mr-0 sm:relative bg-slate-700 sm:w-[45%] w-[75%] h-[100vh] sm:flex-row flex-col py-36 mr-2 pr-2`}
      >
        <motion.div animate = {toggle?"open":"closed"} variants={navbarlist} transition={{duration:0.2, delay:0.2}}
        className="my-2">
          <Link
            
            to="/"
            onClick={() => setToggle((prev) => !prev)}
          >
            HOME
          </Link>
        </motion.div>
        <motion.div animate = {toggle?"open":"closed"} variants={navbarlist} transition={{duration:0.2, delay:0.3}}
        className="my-2">
          <Link
            
            to="/whoweare"
            onClick={() => setToggle((prev) => !prev)}
          >
            WHO WE ARE
          </Link>
        </motion.div>
        <motion.div animate = {toggle?"open":"closed"} variants={navbarlist} transition={{duration:0.2, delay:0.4}}
        className="my-2">
          <Link  to="/whyandes"
          onClick={() => setToggle((prev) => !prev)}>
            WHY ANDES
          </Link>
        </motion.div>
        <motion.div animate = {toggle?"open":"closed"} variants={navbarlist} transition={{duration:0.2, delay:0.5}}
        className="my-2">
          <Link  to="/services"
          onClick={() => setToggle((prev) => !prev)}>
            SERVICES
          </Link>
        </motion.div>
        <motion.div animate = {toggle?"open":"closed"} variants={navbarlist} transition={{duration:0.2, delay:0.6}}
        className="my-2">
          <Link  to="/projects"
          onClick={() => setToggle((prev) => !prev)}>
            PROJECTS
          </Link>
        </motion.div>
        <motion.div animate = {toggle?"open":"closed"} variants={navbarlist} transition={{duration:0.2, delay:0.7}}
        className="my-2">
          <Link  to="/contactus"
          onClick={() => setToggle((prev) => !prev)}>
            CONTACT US
          </Link>
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
