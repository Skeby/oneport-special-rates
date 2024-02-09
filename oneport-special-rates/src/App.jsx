import { useState, useEffect } from "react";
import CarrierButton from "./components/CarrierButton";
import RateCard from "./components/RateCard";
import useRates from "./hooks/useRates";

const App = () => {
  // TODO: Comment all files
  const rates = useRates("20FT", "dry");
  const defaultRateCount = 9;
  const carriers = Array.from(new Set(rates.map((rate) => rate.carrier_name)));
  const [selectedCarrier, setSelectedCarrier] = useState(null);
  const [rateCount, setRateCount] = useState(defaultRateCount);

  const filteredRates = rates.filter(
    (rate) => rate.carrier_name === selectedCarrier
  );

  const totalRateCount = filteredRates.length;
  const displayedRates = filteredRates.slice(0, rateCount);

  const handleCarrierClick = (carrier) => {
    if (carrier !== selectedCarrier) {
      setSelectedCarrier(carrier);
    }
  };

  const handleShowAllClick = () => {
    setRateCount((prevCount) =>
      prevCount === totalRateCount ? defaultRateCount : totalRateCount
    );
  };

  useEffect(() => {
    if (carriers.length > 0 && selectedCarrier === null) {
      setSelectedCarrier(carriers[0]);
    }
  }, [carriers, selectedCarrier]);

  return (
    <div className="max-w-[1200px] mx-auto relative px-5 py-10 col-span-1">
      <div className="relative min-h-[843px]">
        {/* Heading */}
        <h1 className="font-sato font-medium text-4xl">Special Rates</h1>

        {/* Top Section */}
        <div className="mt-10 pb-8 bottom-divider-2 flex flex-col gap-y-5 md:gap-y-0 md:flex-row md:justify-between md:items-center gap-x-3 relative z-[20]">
          {/* Select tags */}
          <div className="flex items-center gap-x-3"></div>
          <div className="flex scrollbar items-center gap-x-3 max-w-[520px] lg:max-w-[750px] overflow-auto">
            {carriers.map((carrier) => (
              <CarrierButton
                key={carrier}
                name={carrier}
                isSelected={carrier === selectedCarrier}
                onClick={() => handleCarrierClick(carrier)}
              >
                {carrier}
              </CarrierButton>
            ))}
          </div>
        </div>

        {/* Card Rates */}
        <div className="card-rates pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedRates.map((rate, index) => (
            <RateCard
              key={index}
              carrier_name={rate.carrier_name}
              origin_port_code={rate.origin_port_code}
              destination_port_code={rate.destination_port_code}
              sailing_date={rate.sailing_date}
              transit_time={rate.transit_time}
              free_days={rate.detention_days + rate.demurrage_days}
            />
          ))}
        </div>

        {/* Additional Rates */}
        {totalRateCount > defaultRateCount && (
          <div className="mt-10">
            <p className="text-center text-sm black-text-3 mb-4">
              Viewing {rateCount} of {totalRateCount} special rates
            </p>
            <button
              className="border-solid flex px-12 mx-auto border-[1px] border-[#374151] rounded py-3"
              onClick={handleShowAllClick}
            >
              {rateCount === defaultRateCount ? "Show All" : "Show Less"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
