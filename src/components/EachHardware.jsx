import React from "react";

const EachHardware = ({ instance, cpu }) => {
  console.log(instance, cpu);
  return (
    <div>
      <p className='hardware-instance'>{instance}</p>
      <p className='hardware-cpu'>{cpu} cores</p>
    </div>
  );
};

export default EachHardware;
