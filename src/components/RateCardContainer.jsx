import RateCard from "./RateCard";

const RateCardContainer = ({ displayedRates }) => {
  return (
    <div className="border-[#f3f4f6] pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {displayedRates.map((rate, index) => (
        <RateCard
          key={index}
          carrier_name={rate.carrier_name}
          total_amount_usd={rate.total_amount_usd}
          origin_port_code={rate.origin_port_code}
          destination_port_code={rate.destination_port_code}
          sailing_date={rate.sailing_date}
          transit_time={rate.transit_time}
          free_days={rate.detention_days + rate.demurrage_days}
        />
      ))}
    </div>
  );
};

export default RateCardContainer;
