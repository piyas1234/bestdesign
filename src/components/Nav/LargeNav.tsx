import React from "react";
import logo from '../../images/logo_white.png'
function LargeNav() {
  return (
    <div className="lg:block md:block xl:block 2xl:block hidden">
      <div className="flex justify-evenly text-white p-3">
        <div className="text-lg w-1/3 text-white"><img src={logo} alt=""  /></div>
        <div className="flex w-1/3">
          <h5 className="mr-5">Home</h5>
          <h5>Profile</h5>
        </div>
        <div className=".w-1/3">
          <button className="bg-white text-black p-1" type="submit">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default LargeNav;
