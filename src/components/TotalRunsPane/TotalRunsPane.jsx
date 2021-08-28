import React, { useContext } from "react";
import EachHardware from "../EachHardware";
import "./TotalRunsPane.css";
import DataContext from "../../Context/DataContext.js";

// Parent Component that has all child components related to Total Runs Pane

const TotalRunsPane = () => {
  const { totalRuns, hardwareActions, handleOctomize } =
    useContext(DataContext);
  if (hardwareActions && hardwareActions.length > 0) {
    return (
      <div className='total-runs-pane'>
        <h1 className='total-runs'>Total Runs</h1>
        <h1 className='count text-green'>{totalRuns}</h1>
        {hardwareActions.map((action) => {
          return (
            <EachHardware
              key={action.id}
              instance={action.instance}
              cpu={action.cpu}
              count={action.count}
            />
          );
        })}
        <button
          onClick={handleOctomize}
          className={
            totalRuns > 0
              ? `active-button button-octomize`
              : `button-octomize inactive-button`
          }>
          Octomize
        </button>
      </div>
    );
  } else {
    return (
      <div className='total-runs-pane'>
        <h1 className='total-runs'>Total Runs</h1>
        <h1 className='count text-green'>{totalRuns}</h1>
        <button
          className={
            totalRuns > 0
              ? `active-button button-octomize`
              : `button-octomize inactive-button`
          }>
          Octomize
        </button>
      </div>
    );
  }
};

export default TotalRunsPane;
