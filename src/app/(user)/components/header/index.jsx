import React from "react";

const Header = () => {
  return (
    <div className=" grid grid-cols-3  text-black text-sm w-full h-12">
      <div className="font-brand w-fit mx-2 p-1 bg-transparent flex justify-center items-center h-fit text-4xl ">
        A
      </div>
      {/* <ul className="flex space-x-3 justify-center items-center pt-2">
        <li className="hover:bg-gray-100   px-3 py-1 rounded-md">Home</li>
        <li className="hover:bg-gray-100  px-3 py-1 rounded-md">About</li>
        <li className="hover:bg-gray-100  px-3 py-1 rounded-md">Services</li>
        <li className="hover:bg-gray-100  px-3 py-1 rounded-md">Contact</li>
        <li className="hover:bg-gray-100  px-3 py-1 rounded-md">Terms of Service</li>
      </ul> */}
    </div>
  );
};

export default Header;
