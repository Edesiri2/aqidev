import React from "react";

const FlatCard = (props) => {
  return (
    <div className=" flex px-2 rounded-lg py-2 h-[40px] w-[200px] bg-[#24303E]">
      <div className=" flex px-2 w-[80%] text-white">{props.title}</div>
      <div className="w-[20%] rounded-lg px-2 bg-[#F95959] text-white">
        {props.num}
      </div>
    </div>
  );
};

export default FlatCard;
