import React, { useContext } from "react";
import Dropdown from "./Dropdown/Dropdown.jsx";
import DataContext from "../Context/DataContext";

// Component which has dropdown actions for hardware actions in Hardware Pane
const SelectHardware = () => {
  const {
    providerOptions,
    availableInstances,
    isDisabled,
    setIsDisabled,
    selectedInstance,
    vcpu,
    memory,
  } = useContext(DataContext);

  return (
    <div className='select-hardware'>
      <Dropdown providerOptions={providerOptions} />
      <Dropdown
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
        availableInstances={availableInstances}
      />

      <div className={vcpu !== 0 ? `text-dark` : `text-grey`}>{vcpu}</div>
      <div className={memory !== 0 ? `text-dark` : `text-grey`}>{memory}</div>
    </div>
  );
};

export default SelectHardware;
