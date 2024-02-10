import { useState, useEffect } from "react";
import Loader from "./assets/loader.svg";
import CarrierButton from "./components/CarrierButton";
import RateCard from "./components/RateCard";
import ContainerSelect from "./components/ContainerSelect";
import useRates from "./hooks/useRates";
import "./App.css";
import RateCardContainer from "./components/RateCardContainer";
import Pagination from "./components/Pagination";
import CarrierButtonContainer from "./components/CarrierButtonContainer";

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
  // const [selectDisplayed, setSelectDisplayed] = useState(false);

  const filteredRates = rates.filter(
    (rate) => rate.carrier_name === selectedCarrier
  );

  const totalRateCount = filteredRates.length;
  // const totalRateCount = 0;
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
    console.log(rateCount, totalRateCount, defaultRateCount);
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
    <div className="max-w-[1200px] mx-auto relative px-5 py-10 col-span-1">
      <div className="relative min-h-[843px]">
        {/* Heading */}
        <h1 className="font-sato font-medium text-4xl">Special Rates</h1>

        {isLoading ? (
          <div className="flex items-center justify-center mt-5">
            <img src={Loader} alt="" />
          </div>
        ) : (
          <>
            {/* Top Section */}
            <div className="mt-10 pb-8 border-b-[1px] flex flex-col gap-y-5 md:gap-y-0 md:flex-row md:justify-between md:items-center gap-x-3 relative z-[20]">
              {/* Select tags */}
              <div className="flex items-center gap-x-3">
                {containerParams.map((containerParam, i) => (
                  <ContainerSelect
                    key={i}
                    containerParams={containerParam}
                    onClick={() => handleSelectClick(i)}
                    selectDisplayed={selectDisplays[i]}
                    onSelect={(containerParam) =>
                      handleContainerParamSelect(i, containerParam)
                    }
                  />
                ))}
              </div>
              {totalRateCount > 0 && (
                <CarrierButtonContainer
                  carriers={carriers}
                  selectedCarrier={selectedCarrier}
                  handleCarrierClick={handleCarrierClick}
                />
              )}
            </div>

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
