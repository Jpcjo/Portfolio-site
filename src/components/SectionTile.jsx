import React from "react";

const SectionTile = ({ text }) => {
  return (
    <div className="border-b pb-5 ">
      <h2 className=" text-gray-700 text-3xl font-medium tracking-wider capitalize">
        {text}
      </h2>
    </div>
  );
};

export default SectionTile;
