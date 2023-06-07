import React from "react";
import facegif from "../pics/facegif.webp";
const Login = () => {
  return (
    <div className=" py-20 px-8 w-[100vw] h-[100vh] bg-[#24303E]">
      {" "}
      <div className=" flex flex-col mt-10 gap-5 ">
        <div className="flex justify-center">
          <img
            className="w-[120px] h-[120px] rounded-full"
            src={facegif}
            alt=""
          />
        </div>
        <div>
          <h3 className=" font-medium text-xl text-white ">
            Devops@wizeradvisory.com
          </h3>
        </div>
        <div>
          <input
            className=" text-xs px-3 py-2 rounded-lg"
            placeholder="password"
            type="password"
          />
        </div>
        <div>
          <button className=" rounded-lg text-white bg-[#2ECF8B] px-3 py-1.5 text-xs hover:bg-white hover:text-green-600">
            Unlock
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
