import React, { useContext } from "react";
import Box from "../Box/Box.jsx";
import boxContent from "../../assets/Data.js";
import HardwareTargetsHeader from "../HardwareTargetsHeader.jsx";
import SelectHardware from "../SelectHardware.jsx";
import DataContext from "../../Context/DataContext.js";
import "./HardwarePane.css";

const HardwarePane = () => {
  const { handleAdd, hardwareActions } = useContext(DataContext);
  console.log(hardwareActions);
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
        <button className='button' onClick={handleAdd}>
          Add
        </button>
      </div>
      <HardwareTargetsHeader />
      <SelectHardware />
    </div>
  );
};

export default HardwarePane;
