import React, { useContext, useState } from "react";
import Icon from "../../assets/icon.svg";
import DataContext from "../../Context/DataContext.js";
import "./Dropdown.css";

// Dropdown Component for Selection of Provider and Instance

const Dropdown = ({
  isDisabled,
  setIsDisabled,
  providerOptions,
  availableInstances,
}) => {
  const [isActive, setIsActive] = useState(false);
  const {
    selectedProvider,
    setSelectedProvider,
    selectedInstance,
    setSelectedInstance,
  } = useContext(DataContext);

  if (providerOptions) {
    return (
      <div className='wrapper'>
        <button
          onClick={() => {
            setIsActive(!isActive);
          }}
          className='dropdown'>
          <span>{selectedProvider}</span>
          <img src={Icon} alt='Icon' />
        </button>

        <div className={isActive ? "active" : "inactive"}>
          {providerOptions.map((option) => (
            <button
              key={option.id}
              className='active-list'
              onClick={() => {
                setSelectedProvider(option.name);
              }}>
              {option.name}
            </button>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className='wrapper'>
        <button
          onClick={() => {
            setIsActive(!isActive);
          }}
          disabled={isDisabled}
          className='dropdown'>
          <span>{selectedInstance}</span>
          <img src={Icon} alt='Icon' />
        </button>

        <div className={isActive ? "active" : "inactive"}>
          {availableInstances.map((option) => (
            <button
              key={option.id}
              className='active-list'
              onClick={() => {
                setSelectedInstance(option.instance);
              }}>
              {option.instance}
            </button>
          ))}
        </div>
      </div>
    );
  }
};

export default Dropdown;
