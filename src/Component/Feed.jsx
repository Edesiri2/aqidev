import React from "react";
import FlatCard from "../utils/FlatCard";
import BoldCard from "../utils/BoldCard";
import { FaBriefcase, FaBuilding, FaUser, FaWallet } from "react-icons/fa";
import MyDatePicker from "../utils/MyDatePicker";

const Feed = () => {
  return (
    <div className=" h-[100vh] overflow-y-auto bg-gray-200">
      <div className=" h-[20%]">
        <div className="h-[50%] flex w-[100%] justify-end px-4 gap-36 align-bottom mt-6">
          <div className="">
            <input
              className="w-200px px-4 bg-gray-200 py-1 rounded-lg border border-gray-300"
              placeholder="Search......"
            />
          </div>
          <div className=" flex gap-2">
            <div className="flex flex-col">
              <div className="flex justify-end">
                <h2 className=" font-bold text-xs">Steve Jobs</h2>
              </div>
              <div className="flex justify-end">
                <h4 className=" text-sm font-light">Last Logged in 2 days</h4>
              </div>
            </div>
            <div className=" bg-gray-500 w-[35px] flex items-center h-[35px] rounded-full">
              <FaUser size={40} className=" py-2" />
            </div>
          </div>
        </div>
        <div className="h-[50%] flex w-[100%] justify-end px-4 gap-4">
          <FlatCard title=" Pending Client" num="78" />
          <FlatCard title=" Approved Loan" num="55" />
          <FlatCard title="Active Deposit" num="18" />
        </div>
      </div>
      <div className=" h-[50%] ">
        <div className="  py-4 gap-6 px-20 flex">
          <div>
            <h4 className="flex font-semibold text-xs px-2 py-2 text-gray-400">
              Start Date
            </h4>
            <MyDatePicker />
          </div>{" "}
          <div>
            <h4 className="flex font-semibold text-xs px-2 py-2 text-gray-400">
              End Date
            </h4>
            <MyDatePicker />
          </div>
          <div>
            <button className=" w-[150px] h-[32px] py-2 text-xs  mt-8 flex justify-center bg-[#24303E]  text-white rounded-lg">
              Filter
            </button>
          </div>
        </div>
        <div className="gap-20 py-4 px-20 flex">
          <BoldCard
            num="63766"
            title="Total Clients"
            icon={<FaWallet color=" #24303E" size={50} />}
          />
          <BoldCard
            num="37266"
            title="Total Loan"
            icon={<FaBriefcase color=" #24303E" size={50} />}
          />
          <BoldCard
            num="13766"
            title="Active Clients"
            icon={<FaBuilding color=" #24303E" size={50} />}
          />
        </div>
      </div>
      <div className=" h-[26%] ">bdy2</div>
    </div>
  );
};

export default Feed;
