import React from "react";
import Sidebar from "../assets/sidebarImage.svg";
import HardwarePane from "../components/HardwarePane/HardwarePane.jsx";
import TotalRunsPane from "../components/TotalRunsPane/TotalRunsPane.jsx";
import "./Wrapper.css";

const Octomize = () => {
  return (
    <div className='Wrapper'>
      <div className='sidebar'>
        <img src={Sidebar} alt='Logo' />
      </div>
      <div className='Content'>
        <h1 className='heading'>Shufflenet-v2.onnx</h1>
        <h2 className='form-title'>Created three days ago by Mike Johnson</h2>
        <HardwarePane />
        <TotalRunsPane />
      </div>
    </div>
  );
};

export default Octomize;
