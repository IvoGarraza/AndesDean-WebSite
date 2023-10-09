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
      <div className="sm:h-44 h-60 flex items-center justify-end flex-col mb-8">
        <h2 class=" text-gray-500 mb-2 text-4xl text-center font-bold text-primary ">
          CONTACT US
        </h2>
        <span className="font-bold px-12 text-center text-secondary">
          Let's discuss your project needs and create a tailored proposal. Reach
          out to our team of Engineers at Andes Dean to explore how we can best
          assist you.{" "}
        </span>
      </div>
      <div className="flex sm:flex-row flex-col-reverse my-2 items-center">
        <div className="sm:w-1/2 w-full flex flex-col p-12">
          <div className="flex">
            <img src={mapa}></img>
          </div>
          <div className="flex sm:flex-row flex-col justify-around items-center w-full">
            <div className="flex flex-row items-center justify-around w-full">
              <img className="w-16 border-black" src={arg}></img>
              <div className="flex flex-col font-semibold text-center text-xs">
                <div className="flex flex-row items-center">
                  <img src={Location} />
                  <span>Argentina</span>
                </div>
                <div className="flex flex-row items-center">
                  <img src={Phone} />
                  <span>+5493513886585</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-around w-full">
              <img className="w-16" src={usa}></img>
              <div className="flex flex-col font-semibold text-center text-xs">
                <div className="flex flex-row items-center">
                  <img src={Location} />
                  <span>United States</span>
                </div>
                <div className="flex flex-row items-center">
                  <img src={Phone} />
                  <span>+14078152416</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-around w-full">
              <img className="w-16" src={italy}></img>
              <div className="flex flex-col font-semibold text-center text-xs">
                <div className="flex flex-row items-center">
                  <img src={Location} />
                  <span>Italy</span>
                </div>
                <div className="flex flex-row items-center">
                  <img src={Phone} />
                  <span>+393463578343</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 sm:w-1/2 w-full flex flex-col">
          <h3 className="text-center font-bold mb-4">REQUEST A PROPOSAL</h3>
          <form id="contact_form" className="flex flex-col">
            <div class="flex flex-col mb-5">
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
            <div class="mb-4">
              <label for="message_field" class="block text-sm font-medium">
                Message:
              </label>
              <textarea
                class="w-full rounded border-gray-400"
                name="message"
                id="message_field"
                rows="6"
              ></textarea>
            </div>

            <button
              type="submit"
              class="bg-primary rounded-md py-2 text-[#fff] font-semibold"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
