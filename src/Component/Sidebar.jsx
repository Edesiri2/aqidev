import React from "react";
import logo from "../pics/logo-2 2.svg";
import sidedata from "./constant";
import { useState } from "react";

const Sidebar = () => {
  const [selected, setSelected] = useState("DashBoard");
  //   const selected = "DashBoard";

  return (
    <div className=" h-[100vh] overflow-y-auto">
      <div className="h-[15%] flex py-7 px-10 justify-center">
        <img className=" mr-4" src={logo} alt="" />
      </div>
      <div>
        {sidedata.map((item) => (
          <div className="mt-2">
            <button
              onClick={() => {
                setSelected(item.name);
              }}
              key={item.name}
              className="flex ml-4   py-3 justify-center w-[180px] rounded-lg hover:bg-gray-100"
              style={{
                backgroundColor: item.name === selected && "#24303E",
                color: item.name === selected && "white",
              }}
            >
              <div className="flex w-[100%] items-center gap-4 px-4">
                <span className="">{item.icon}</span>
                <span className=" text-sm">{item.name}</span>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
