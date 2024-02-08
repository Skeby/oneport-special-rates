import React from "react";
import CarrierButton from "./components/CarrierButton";
import RateCard from "./components/RateCard";

const App = () => {
  const carriers = ["COSCO", "HMM", "MAERSK", "EVERGREEN", "OOCL", "YANG MING"];
  const rates = ["$1,885", "$1,885", "$1,885", "$1,885", "$1,885", "$1,885"];
  return (
    <div className="max-w-[1200px] mx-auto relative px-5 py-10 text-4xl col-span-1">
      <div className="relative min-h-[843px]">
        {/* Heading */}
        <h1 className="font-sato font-medium">Special Rates</h1>

        {/* Top Section */}
        <div className="mt-10 pb-8 bottom-divider-2 flex flex-col gap-y-5 md:gap-y-0 md:flex-row md:justify-between md:items-center gap-x-3 relative z-[20]">
          {/* Select tags */}
          <div className="flex items-center gap-x-3"></div>
          <div className="flex scrollbar items-center gap-x-3 max-w-[520px] lg:max-w-[750px] overflow-auto">
            {carriers.map((carrier) => (
              <CarrierButton key={carrier} name={carrier}>
                {carrier}
              </CarrierButton>
            ))}
          </div>
        </div>

        {/* Card Rates */}
        <div className="card-rates pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rates.map((rate, i) => (
            <RateCard key={i} rate={rate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
