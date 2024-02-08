import React, { useState } from "react";

const CarrierButton = ({ name, isSelected, onClick }) => {
  return (
    <div
      className={
        isSelected
          ? "flex items-center gap-x-2 px-4 py-3 border-solid border-[0px] border-[#9CA3AF] rounded w-auto min-w-fit cursor-pointer bg-[#1F2937] text-white text-base"
          : "flex gap-x-2 font-white text-base border-solid border-[1px] w-auto px-4 py-3 border-[#8d8d8d] rounded items-center min-w-fit cursor-pointer"
      }
      onClick={onClick}
    >
      {name}
    </div>
  );
};

export default CarrierButton;
