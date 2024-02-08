import React from "react";

const CarrierButton = ({ name }) => {
  return (
    <div className="flex gap-x-2 font-white text-base border-solid border-[1px] w-auto px-4 py-3 border-[#8d8d8d] rounded items-center min-w-fit cursor-pointer">
      {name}
    </div>
  );
};

export default CarrierButton;
