import React from "react";

import hub_logo from "../hub_logo.png";

const Footer = () => (
  <div className="bg-gradient-to-r from-black via-gray-500 to-lime-600 w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">
        We look foward to more collaborations with you
      </p>
      <p className="text-white text-sm text-center font-medium mt-2">
        info@td4pai.com
      </p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@td4pai2022</p>
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={hub_logo} alt="logo" className="w-32" />
      </div>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
