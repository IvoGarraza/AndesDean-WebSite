import React from "react";
import map from "../../assets/images/map.png";
import mapa from "../../assets/images/Recursos/MAPA.png";
import arg from "../../assets/argentina.png";
import italy from "../../assets/italy.png";
import usa from "../../assets/usa.png";
import Location from "../../assets/location.png";
import Phone from "../../assets/headset.png";

const ContactUs = () => {
  return (
    <div>
      <div className="flex sm:flex-row flex-col-reverse my-2 items-center relative p-4">
        <img className="absolute -z-10" src={mapa}></img>

        <div className="w-full h-full flex flex-col items-center rounded-md bg-[rgba(118,118,118,0.26)] p-6">
          <div className="sm:h-44 h-60 flex items-center justify-end flex-col mb-8">
            <h2 class=" text-gray-500 mb-2 text-4xl text-center font-bold text-primary ">
              CONTACT US
            </h2>
            <span className="font-bold px-12 text-center text-secondary">
              Let's discuss your project needs and create a tailored proposal.
              Reach out to our team of Engineers at Andes Dean to explore how we
              can best assist you.{" "}
            </span>
          </div>
          <div className=" w-full flex flex-col items-center p-12 pt-0 ">
            <div className="flex sm:flex-row flex-col justify-center items-center w-full text-[#fff] ">
              <div className="flex flex-row sm:w-[20%] w-full bg-secondary rounded-full sm:mx-4 sm:py-2 py-1 mb-2 items-center justify-center ">
                {/* <img className="w-16 border-black" src={arg}></img> */}
                <div className="flex flex-col font-semibold text-center text-xs">
                  <div className="flex flex-row items-center justify-center ">
                    <img src={Location} />
                    <span>Argentina</span>
                  </div>
                  <div className="flex flex-row items-center">
                    {/* <img src={Phone} /> */}
                    <a href="tel:1234567890">+549 351 3886585</a>
                  </div>
                </div>
              </div>
              <div className="flex flex-row sm:w-[20%] w-full bg-secondary rounded-full sm:mx-4 sm:py-2 py-1 mb-2 items-center justify-center">
                {/* <img className="w-16" src={usa}></img> */}
                <div className="flex flex-col font-semibold text-center items-center text-xs">
                  <div className="flex flex-row items-center">
                    <img src={Location} />
                    <span>United States</span>
                  </div>
                  <div className="flex flex-row items-center">
                    {/* <img src={Phone} /> */}
                    <a href="tel:1234567890">+140 78152416</a>
                  </div>
                </div>
              </div>
              <div className="flex flex-row sm:w-[20%] w-full bg-secondary rounded-full sm:mx-4 sm:py-2 py-1 items-center justify-center">
                {/* <img className="w-16" src={italy}></img> */}
                <div className="flex flex-col font-semibold text-center items-center text-xs">
                  <div className="flex flex-row items-center">
                    <img src={Location} />
                    <span>Italy</span>
                  </div>
                  <div className="flex flex-row items-center">
                    {/* <img src={Phone} /> */}
                    <a href="tel:1234567890">+39 3463578343</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-center font-bold mb-4 text-primary text-4xl">Request a quote</h3>
          <div class="p-4 sm:w-full w-full items-center flex flex-col ">
            <form id="contact_form" className="flex sm:flex-row flex-col w-full justify-between p-2">
              <div class="flex flex-col sm:w-1/2 w-full">
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
              </div>
              <div class=" sm:w-1/2 w-full h-full sm:p-2 pt-0">
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

            </form>
              <button
                type="submit"
                class="bg-primary w-1/3 rounded-md py-2 text-[#fff] font-semibold"
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
