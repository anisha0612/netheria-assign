import React from "react";

const HardwareTargetsHeader = () => {
  return (
    <div className='table'>
      <p className='table-header header-first'>Provider</p>
      <p className='table-header'>Instance</p>
      <p className='table-header'>VCPU</p>
      <p className='table-header'>Memory (GIB)</p>
    </div>
  );
};

export default HardwareTargetsHeader;
