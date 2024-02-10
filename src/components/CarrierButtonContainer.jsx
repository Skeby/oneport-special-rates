import CarrierButton from "./CarrierButton";

const CarrierButtonContainer = ({
  carriers,
  selectedCarrier,
  handleCarrierClick,
}) => {
  return (
    <div className="carrier-container flex items-center gap-x-3 max-w-[520px] lg:max-w-[750px] overflow-auto">
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
  );
};

export default CarrierButtonContainer;
