const ContainerOption = ({ name, isSelected, onClick }) => {
  return (
    <p
      className={
        isSelected
          ? "p-2 bg-green-100 text-[#139C33] cursor-pointer rounded"
          : "p-2 cursor-pointer text-[#1F2937] rounded"
      }
      onClick={onClick}
    >
      {name}
    </p>
  );
};

export default ContainerOption;
