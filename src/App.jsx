import { useState, useEffect } from "react";
import useRates from "./hooks/useRates";
import Heading from "./components/Heading";
import Loader from "./components/Loader";
import FiltersContainer from "./components/FiltersContainer";
import RateCardContainer from "./components/RateCardContainer";
import Pagination from "./components/Pagination";
import "./App.css";

const App = () => {
  // TODO: Comment all files
  const defaultRateCount = 9;
  const containerSizes = ["20FT", "40FT", "40FT HC"];
  const containerTypes = ["DRY", "REEFER"];
  const containerParams = [containerSizes, containerTypes];

  const [selectedCarrier, setSelectedCarrier] = useState(null);
  const [rateCount, setRateCount] = useState(defaultRateCount);
  const [selectedContainerParam, setSelectedContainerParam] = useState(
    containerParams.map((params) => params[0])
  );
  const { rates, isLoading } = useRates(...selectedContainerParam);
  const carriers = Array.from(new Set(rates.map((rate) => rate.carrier_name)));

  const [selectDisplays, setSelectDisplays] = useState(
    containerParams.map(() => false)
  );

  const filteredRates = rates.filter(
    (rate) => rate.carrier_name === selectedCarrier
  );

  const totalRateCount = filteredRates.length;
  const displayedRates = filteredRates.slice(0, rateCount);

  const handleCarrierClick = (carrier) => {
    if (carrier !== selectedCarrier) {
      setSelectedCarrier(carrier);
      setRateCount(defaultRateCount);
    }
  };

  const handlePaginationClick = () => {
    setRateCount((prevCount) => {
      if (prevCount + 9 < totalRateCount) {
        return prevCount + 9;
      } else if (rateCount === totalRateCount) {
        return defaultRateCount;
      } else {
        return totalRateCount;
      }
    });
  };

  const handleSelectClick = (index) => {
    setSelectDisplays((prevDisplays) =>
      prevDisplays.map((prev, i) => (i === index ? !prev : false))
    );
  };

  const handleContainerParamSelect = (index, containerParam) => {
    setSelectedContainerParam((prevParams) =>
      prevParams.map((prev, i) => (i === index ? containerParam : prev))
    );
  };

  useEffect(() => {
    if (carriers.length > 0 && selectedCarrier === null) {
      setSelectedCarrier(carriers[0]);
    }
  }, [carriers, selectedCarrier]);

  return (
    <div className="font-inter max-w-[1200px] mx-auto relative px-5 py-10 col-span-1">
      <div className="relative min-h-[843px]">
        {/* Heading */}
        <Heading>Special Rates</Heading>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            {/* Filters */}
            <FiltersContainer
              containerParams={containerParams}
              carriers={carriers}
              totalRateCount={totalRateCount}
              selectedCarrier={selectedCarrier}
              selectDisplays={selectDisplays}
              handleSelectClick={handleSelectClick}
              handleContainerParamSelect={handleContainerParamSelect}
              handleCarrierClick={handleCarrierClick}
            />

            {/* Rates Cards */}
            {totalRateCount === 0 ? (
              <p className="mt-4">No Rates To Display</p>
            ) : (
              <RateCardContainer displayedRates={displayedRates} />
            )}

            {/* Pagination */}
            {totalRateCount > defaultRateCount && (
              <Pagination
                rateCount={rateCount}
                totalRateCount={totalRateCount}
                handlePaginationClick={handlePaginationClick}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
