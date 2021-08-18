import React, { useState } from "react";
import Box from "../Box/Box.jsx";
import boxContent from "../../assets/Data.js";
import HardwareTargetsHeader from "../HardwareTargetsHeader.jsx";
import SelectHardware from "../SelectHardware.jsx";
import "./HardwarePane.css";

const HardwarePane = () => {
  console.log(boxContent);
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='hardware-pane'>
      <h1 className='title'>Octomize</h1>
      <div className='options'>
        {boxContent.map((content) => (
          <Box
            key={content.id}
            content={content}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        ))}
      </div>
      <div className='section'>
        <p className='hardware-target'>Hardware Targets</p>
        <button className='button'>Add</button>
      </div>
      <HardwareTargetsHeader />
      <SelectHardware />
    </div>
  );
};

export default HardwarePane;
