import React from "react";
import map from "../../assets/images/map.png";
import mapa from "../../assets/images/Recursos/MAPA.png";
import arg from "../../assets/argentina.png";
import italy from "../../assets/italy.png";
import usa from "../../assets/usa.png";
import Location from "../../assets/location.png";
import Phone from "../../assets/headset.png";
import Linkedin from "../../assets/linkedin.png";
import mail from "../../assets/email.png";

const ContactUs = () => {
  return (
    <div>
      <div className="flex sm:flex-row flex-col-reverse my-2 items-center relative p-4">
        <img className="absolute -z-10" src={mapa}></img>
        <div className="w-full h-full flex flex-row items-start rounded-md mt-24 bg-[rgba(118,118,118,0.26)] p-6">
          <div className=" w-1/3 flex flex-col justify-between items-center ">
            <div className="sm:h-44 h-60 flex items-center justify-end mt-24 flex-col mb-12">
              <h2 class=" text-gray-500 mb-2 text-4xl text-center font-bold text-secondary ">
                CONTACT US
              </h2>
              <span className="font-bold px-12 text-center text-primary">
                Let's discuss your project needs and create a tailored proposal.
                Reach out to our team of Engineers at Andes Dean to explore how
                we can best assist you.{" "}
              </span>
            </div>
            <div className="flex sm:flex-col flex-col justify-center items-center w-full  ">
              <div className="flex flex-row sm:w-[90%] w-full rounded-full sm:mx-2 sm:py-2 py-1 mb-2 items-center justify-center ">
                <img className="w-16 border-black" src={arg}></img>
                <div className="bg-[#fff] rounded-full p-2 px-8 flex flex-col font-semibold text-center text-xs">
                  <div className="flex flex-row items-center justify-center mb-2">
                    <img src={Location} />
                    <span>Argentina</span>
                  </div>
                  <div className="flex flex-row items-center">
                    {/* <img src={Phone} /> */}
                    <a href="tel:1234567890">+549 351 3886585</a>
                  </div>
                </div>
              </div>
              <div className="flex flex-row sm:w-[90%] w-full rounded-full sm:mx-2 sm:py-2 py-1 mb-2 items-center justify-center">
                <img className="w-16" src={usa}></img>
                <div className="bg-[#fff] rounded-full p-2 px-8 flex flex-col font-semibold text-center items-center text-xs">
                  <div className="flex flex-row items-center mb-2">
                    <img src={Location} />
                    <span>United States</span>
                  </div>
                  <div className="flex flex-row items-center">
                    {/* <img src={Phone} /> */}
                    <a href="tel:1234567890">+1 407 8152416</a>
                  </div>
                </div>
              </div>
              <div className="flex flex-row sm:w-[90%] w-full  rounded-full sm:mx-2 sm:py-2 py-1 items-center justify-center">
                <img className="w-16 " src={italy}></img>
                <div className="bg-[#fff] rounded-full p-2 px-8 flex flex-col font-semibold text-center items-center text-xs">
                  <div className="flex flex-row items-center mb-2">
                    <img src={Location} className="" />
                    <span>Italy</span>
                  </div>
                  <div className="flex flex-row items-center">
                    {/* <img src={Phone} /> */}
                    <a href="tel:1234567890">+39 3463578343</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-12">
              <a
                href="https://www.linkedin.com/company/andes-dean/?originalSubdomain=ar"
                className="flex flex-row items-center"
              >
                <img
                  src={Linkedin}
                  className="w-10 mr-2 bg-primary rounded-full"
                ></img>
                <span className="font-bold">Follow us on Linkedin</span>
              </a>
              <a
                href="mailto:ingineering@andesdean.pro"
                className="flex flex-row items-center"
              >
                <img
                  src={mail}
                  className="w-10 p-1 mr-2  bg-primary rounded-full"
                ></img>
                <span className="font-bold">ingineering@andesdean.pro</span>
              </a>
            </div>
          </div>
          <div class="p-4 sm:w-2/3 w-full items-center flex flex-col ">
            <h3 className="text-center font-bold  mt-24 text-primary text-4xl">
              Request a quote
            </h3>
            <form
              id="contact_form"
              className="flex sm:flex-row flex-col w-full justify-between items-center p-2"
            >
              <div class="flex flex-col p-12 w-full">
                <div class="mb-2">
                  <label for="name_field" class="block text-sm font-medium">
                    Your Name:
                  </label>
                  <input
                    class="rounded border-gray-400 w-full p-2"
                    type="text"
                    name="name"
                    id="name_field"
                  />
                </div>
                <div class="mb-2">
                  <label for="company_field" class="block text-sm font-medium">
                    Company Name:
                  </label>
                  <input
                    class="rounded border-gray-400 w-full p-2"
                    type="text"
                    name="name"
                    id="name_field"
                  />
                </div>
                <div class="mb-2">
                  <label for="email_field" class="block text-sm font-medium ">
                    Email Address:
                  </label>
                  <input
                    class="rounded border-gray-400 w-full p-2"
                    type="email"
                    name="email"
                    id="email_field"
                  />
                </div>
                <div class="mb-2">
                  <label for="email_field" class="block text-sm font-medium">
                    Phone:
                  </label>
                  <input
                    class="rounded border-gray-400 w-full p-2"
                    type="email"
                    name="email"
                    id="email_field"
                  />
                </div>
                <div class=" w-full h-full pt-0">
                  <label for="message_field" class="block text-sm font-medium">
                    Message:
                  </label>
                  <textarea
                    class="w-full h-full rounded border-gray-400"
                    name="message"
                    id="message_field"
                    rows="6"
                  ></textarea>
                </div>
              </div>
            </form>
            <button
              type="submit"
              class="bg-primary hover:bg-secondary transition-all w-1/3 rounded-md py-2 text-[#fff] font-semibold"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
