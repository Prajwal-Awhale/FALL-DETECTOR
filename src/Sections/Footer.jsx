import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 mt-7 rounded-t-lg flex flex-col items-center justify-center h-[40vh]">
     
      <div className="flex flex-wrap justify-center gap-6 py-6 w-full max-w-[960px] border-b border-gray-700">
        {["Technology", "Healthcare", "Retail", "Consumer Goods", "About", "Contact", "Careers", "Blog"].map(
          (item, index) => (
            <a
              key={index}
              className="text-[#4e7397] text-base font-normal leading-normal hover:underline"
              href="#"
            >
              {item}
            </a>
          )
        )}
      </div>

      
      <div className="flex gap-4 py-4">
        {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((platform, index) => (
          <a key={index} href="#" className="text-[#4e7397] hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
            
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" />
            </svg>
          </a>
        ))}
      </div>

  
      <p className="text-[#4e7397] text-sm font-normal text-center py-2">
        © 2023, All rights reserved <br /> by team @TrojanDevs
      </p>
    </footer>
  );
};

export default Footer;
