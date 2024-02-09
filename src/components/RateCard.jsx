import React from "react";
import link from "../assets/link.svg";

const RateCard = ({
  carrier_name,
  origin_port_code,
  destination_port_code,
  sailing_date,
  transit_time,
  free_days,
}) => {
  return (
    <div className="p-5 rounded-[10px] cursor-pointer border-[2px] border-solid border-[#E5E7EB] hover:border-[#139C33]">
      <div className="flex items-center justify-between">
        <p className="text-sm text-black font-medium">{carrier_name}</p>
        <div className="black-text-3 flex text-sm font-normal items-center gap-x-2">
          <p>{origin_port_code}</p>
          <span>
            <img src={link} alt="" />
          </span>
          <p>{destination_port_code}</p>
        </div>
      </div>
      <div className="mt-3 mb-6 flex items-center justify-between">
        <p className="text-xl font-normal text-[#004800]">$1,885</p>
      </div>
      <div className="top-divider text-sm pt-6 grid grid-cols-3">
        <div>
          <p className="grey-text font-light mb-1.5">Sailing Date</p>
          <p className="black-text-3">{sailing_date ? sailing_date : "N/A"}</p>
        </div>
        <div>
          <p className="grey-text font-light mb-1.5">Transit Time</p>
          <p className="black-text-3">{transit_time ? transit_time : "N/A"}</p>
        </div>
        <div>
          <p className="grey-text font-light mb-1.5">Free Days</p>
          <p className="black-text-3">{free_days}</p>
        </div>
      </div>
    </div>
  );
};

export default RateCard;
