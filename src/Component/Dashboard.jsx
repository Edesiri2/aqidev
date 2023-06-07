import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

const Dashboard = () => {
  return (
    <div className=" flex w-[fit] h-[100vh]">
      <div>
        <div className="block  w-[16.%] ">
          <Sidebar />
        </div>
      </div>
      <div className="w-[84%]">
        <Feed />
      </div>
    </div>
  );
};

export default Dashboard;
