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
        <div className="flex text-sm font-normal items-center gap-x-2">
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
      <div className="border-t-[1px] text-sm pt-6 grid grid-cols-3">
        <div>
          <p className="text-grey font-light mb-1.5">Sailing Date</p>
          <p>{sailing_date ? sailing_date : "N/A"}</p>
        </div>
        <div>
          <p className="text-grey font-light mb-1.5">Transit Time</p>
          <p>
            {transit_time
              ? transit_time > 1
                ? transit_time + " days"
                : transit_time + " day"
              : "N/A"}
          </p>
        </div>
        <div>
          <p className="text-grey font-light mb-1.5">Free Days</p>
          <p>
            {free_days
              ? free_days > 1
                ? free_days + " days"
                : free_days + " day"
              : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RateCard;
