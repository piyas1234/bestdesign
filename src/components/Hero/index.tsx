import React from "react";
import img from "../../images/image_03.png";
import img2 from '../../images/Shape_03.png'
function Hero() {
  return (
    <div className=" bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      <hr />
      <div className="md:flex  md:justify-around mt-20">
        <div className=" md:w-1/3   p-3">
          <h1 className="uppercase text-white">Bussiness workflow</h1>
          <h1 className="text-white mt-5 text-3xl">
            Get the most effecient ui design for your bussiness now!
          </h1>
          <p className="text-white mt-5">
            hire me for design for a nice and clean mordern ui
          </p>
          <div className="mt-10">
            <button className="uppercase bg-white p-1 mr-2" type="submit">
              Hire Me
            </button>
            <button className="uppercase  border p-1 text-white" type="submit">
              Portfilio
            </button>
          </div>
        </div>

        <div className=" md:w-2/5 p-2">
          <img className="" width="100%" src={img} alt="" />
        </div>
 
      </div>
      <div className="">
          <img src={img2} alt=""   />
        </div>
    </div>
  );
}

export default Hero;
