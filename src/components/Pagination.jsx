const Pagination = ({ rateCount, totalRateCount, handlePaginationClick }) => {
  return (
    <div className="mt-10">
      <p className="text-center text-sm black-text-3 mb-4">
        Viewing {rateCount} of {totalRateCount} special rates
      </p>
      <button
        className="border-solid flex px-12 mx-auto border-[1px] border-[#374151] rounded py-3"
        onClick={handlePaginationClick}
      >
        {rateCount === totalRateCount ? "Show Less" : "Load More"}
      </button>
    </div>
  );
};

export default Pagination;
