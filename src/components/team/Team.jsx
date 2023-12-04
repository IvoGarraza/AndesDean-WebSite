import React from "react";
import "./Team.css";
import diego2 from '../../assets/images/Imagenes/diego2.jpeg'

const Team = () => {
  return (
      <div class="container">
        <div class="wrap my-2 flex flex-row w-full justify-between h-1/5">
          <div class="rotate-90 text-primary flex items-center justify-center w-1/6 h-100">
            <span class="font-bold sm:text-sm h-100 text-xs flex text-center text-primary items-center justify-center">ROCKIES TEAM<br/>Usa Projects</span>
          </div>
          <div class="colorbar w-[10px] bg-primary"></div>
          <div class="flex flex-row justify-around w-4/5">
            <img
              className="w-1/3"
              src="https://ca.slack-edge.com/T42HA9JJF-U04SLAWESCS-59a17957afaf-512"
            />
            <img
              className="w-1/3"
              src="https://ca.slack-edge.com/T42HA9JJF-U035APFLB9Q-97cd66e61208-512"
            />
            <img
              className="w-1/3"
              src={diego2}
            />
          </div>
        </div>
        <div class="wrap2 my-2 flex flex-row w-full justify-between h-2/5">
          <div class="rotate-90 text-primary flex w-1/6 h-100">
            <span class="font-bold sm:text-sm text-xs flex flex-col text-center text-secondary items-center justify-center h-full w-full">ANDES TEAM<br/> Argentina Projects</span>
          </div>
          <div class="colorbar2 w-[10px] bg-secondary"></div>
          <div class="wrapImages w-4/5">
            <div class="imageContainer3 w-full flex flex-row">
              <img className="w-1/3" src="https://ca.slack-edge.com/T42HA9JJF-U0357SGBF1T-8451feab56a6-512" />
              <img className="w-1/3" src="http://drive.google.com/uc?export=view&id=1Lfiuf3qPtCgYCkr8qqDAVQRGX1slBVOU" />
              <img className="w-1/3" src="https://ca.slack-edge.com/T42HA9JJF-U03CLP4ERGR-590327d6b259-512" />
            </div>
            <div class="imageContainer4 flex flex-row w-full">
              <img className="w-1/3" src="https://ca.slack-edge.com/T42HA9JJF-U0564QNCLHY-1cf8cb70b923-512" />
              <img className="w-1/3" src="https://ca.slack-edge.com/T42HA9JJF-U04P347ND8D-b0788daeeb74-512" />
              <img className="w-1/3" src="http://drive.google.com/uc?export=view&id=1fjatQHje5Hkwc31wi5k6liLQlZXTubWd" />
            </div>
          </div>
        </div>
        <div class="wrap my-2 w-full flex flex-row justify-between h-1/5">
          <div class="rotate-90 text-primary flex w-1/6">
            <span class="font-bold sm:text-sm text-xs flex flex-col text-center items-center justify-center ">
              OPERATIONS &<br/>
              BUSSINES DEV.
            </span>
          </div>
          <div class="colorbar w-[10px] bg-primary"></div>
          <div class="flex flex-row justify-around w-4/5 h-full">
            <img
              className="w-1/3"
              src="https://ca.slack-edge.com/T42HA9JJF-U0526L98XA8-0aea789ce36b-512"
            />
            <img
              className="w-1/3"
              src="https://ca.slack-edge.com/T42HA9JJF-U052V33DT32-c8e7097b6f2a-512"
            />
            <img
              className="w-1/3"
              src="https://ca.slack-edge.com/T42HA9JJF-U035P0VHT4H-529e78424158-512"
            />
          </div>
        </div>
        <div class="wrap flex flex-row justify-between  h-1/5">
          <div class="rotate-90 text-secondary w-1/6">
            <span class="font-medium sm:text-sm text-xs mt-1 flex flex-col text-center">
              Technologies
              <br />
              for the AEC<span className="font-bold">UBICUO</span>
            </span>
          </div>
          <div class="colorbar2 w-[10px] bg-secondary"></div>
          <div class="imageContainer2 flex flex-row justify-around w-4/5 h-full items-center">
            <div class="">
              <img src="https://ca.slack-edge.com/T42HA9JJF-U5CTK8ZKJ-f55173f0a867-512" />
            </div>
            <div class="">
              <img src="https://ca.slack-edge.com/T42HA9JJF-U05217UU4AZ-4efa633d4627-512" />
            </div>
            <div class="">
              <img src="https://ca.slack-edge.com/T42HA9JJF-UPTMQUY8N-a0adaa100732-512" />
            </div>
            <div class="">
              <img src="https://ca.slack-edge.com/T42HA9JJF-U5DK88GFN-ad547219404a-512" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Team;
