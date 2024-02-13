import ContainerSelect from "./ContainerSelect";
import CarrierButtonContainer from "./CarrierButtonContainer";

const FiltersContainer = ({
  containerParams,
  carriers,
  totalRateCount,
  selectedCarrier,
  selectDisplays,
  handleSelectClick,
  handleContainerParamSelect,
  handleCarrierClick,
}) => {
  return (
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
  );
};

export default FiltersContainer;
