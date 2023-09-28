import React from "react";

const FeatureBox = ({ title, desc, icon }) => {
  return (
    <div className="cursor-pointer relative bg-white p-4 flex flex-col gap-4 min-h-[200px]">
      <div className="w-12 h-12 flex justify-center items-center mx-auto rounded-full bg-[#3a2e54] text-primary-cyan">
        {icon}
      </div>
      <h3 className="text-3xl font-medium text-black">{title}</h3>
      <p className="text-gray-500 leading-6">{desc}</p>
    </div>
  );
};

export default FeatureBox;
