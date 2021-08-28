import React from "react";

/* Child component which displays Hardware targets selected from the dropdown to Octomize */
const EachHardware = ({ instance, cpu, count }) => {
  return (
    <div className='Each-hardware'>
      <div>
        <p className='hardware-instance'>{instance}</p>
        <p className='hardware-cpu'>{cpu} cores</p>
      </div>
      <div>
        <p className='hardware-count'>{count}</p>
      </div>
    </div>
  );
};

export default EachHardware;
