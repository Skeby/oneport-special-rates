import { useState } from "react";
import caretDown from "../assets/caret-down.svg";
import ContainerOption from "./ContainerOption";
const ContainerSelect = ({
  containerParams,
  onClick,
  selectDisplayed,
  onSelect,
}) => {
  const [selectedContainerParam, setSelectedContainerParam] = useState(
    containerParams[0]
  );

  const handleContainerParamClick = (containerParam) => {
    setSelectedContainerParam(containerParam);
    onSelect(containerParam);
  };
  return (
    <div className="relative" onClick={onClick}>
      <div className="flex items-center gap-x-2 px-4 py-3 border-solid border-[1px] border-[#9CA3AF] rounded w-fit cursor-pointer">
        <p>{selectedContainerParam}</p>
        <span>
          <img src={caretDown} alt="" />
        </span>
      </div>
      {selectDisplayed && (
        <div className="absolute w-[100px] p-1 text-sm black-text-3 bg-white shadow-[1px_4px_12px_-1px_rgba(44,78,39,0.15)] rounded">
          {containerParams.map((containerParam, i) => (
            <ContainerOption
              key={i}
              name={containerParam}
              isSelected={selectedContainerParam === containerParam}
              onClick={() => handleContainerParamClick(containerParam)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ContainerSelect;
