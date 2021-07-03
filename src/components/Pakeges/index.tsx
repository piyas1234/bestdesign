import React from "react";

function Pakeges() {
  return (
    <div className="py-20">
      <h1 className="text-center text-4xl mt-10">Packages</h1>
      <h1 className="m-auto bg-red-600 h-1 w-1/6 mt-2">.</h1>
      <div className="md:flex justify-evenly  p-3">
        <div className="md:w-1/4 shadow-lg md:p-4 p-2">
          <h3 className="text-red-400 uppercase">Getting started</h3>
          <h1 className="m-2 text-bold text-2xl">Headline 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          </p>
          <button
            className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-2 mt-3 text-white"
            type="submit"
          >
            SEE MORE
          </button>
        </div>
        <div className="md:w-1/4  shadow-lg md:p-4 p-2">
          <h3 className="text-red-400 uppercase">Bussiness workflow</h3>
          <h1 className="m-2 text-bold text-2xl">Headline 2</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          </p>
          <button
            className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500  p-2 mt-3 text-white"
            type="submit"
          >
            SEE MORE
          </button>
        </div>
        <div className="md:w-1/4  shadow-lg md:p-4 p-2">
          <h3 className="text-red-400 uppercase">Interaction</h3>
          <h1 className="m-2 text-bold text-2xl">Headline 3</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          </p>
          <button
            className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-2 mt-3 text-white"
            type="submit"
          >
            SEE MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pakeges;
