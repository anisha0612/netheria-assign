import React, { useContext } from "react";
import Box from "../Box/Box.jsx";
import boxContent from "../../assets/Data.js";
import HardwareTargetsHeader from "../HardwareTargetsHeader.jsx";
import SelectHardware from "../SelectHardware.jsx";
import DataContext from "../../Context/DataContext.js";
import "./HardwarePane.css";

// Parent Hardware Target Pane which has all the children components

const HardwarePane = () => {
  const { handleAdd } = useContext(DataContext);
  return (
    <div className='hardware-pane'>
      <h1 className='title'>Octomize</h1>
      <div className='options'>
        {boxContent.map((content) => (
          <Box key={content.id} content={content} />
        ))}
      </div>
      <div className='section'>
        <p className='hardware-target'>Hardware Targets</p>
        <button className='button active-button' onClick={handleAdd}>
          Add
        </button>
      </div>
      <HardwareTargetsHeader />
      <SelectHardware />
    </div>
  );
};

export default HardwarePane;
