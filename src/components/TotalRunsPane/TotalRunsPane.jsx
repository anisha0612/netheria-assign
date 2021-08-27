import React, { useContext } from "react";
import EachHardware from "../EachHardware";
import "./TotalRunsPane.css";
import DataContext from "../../Context/DataContext.js";
import { act } from "@testing-library/react";

const TotalRunsPane = () => {
  const { totalRuns, hardwareActions, actions } = useContext(DataContext);
  console.log(totalRuns, actions);
  if (hardwareActions && hardwareActions.length > 0) {
    return (
      <div className='total-runs-pane'>
        <h1 className='total-runs'>Total Runs</h1>
        <h1 className='count text-green'>{totalRuns}</h1>
        {hardwareActions.map((action) => ({
          /* <EachHardware
            key={action.id}
            instance={action.instance}
            cpu={action.cpu}
          /> */
        }))}
        <button className='button-octomize'>Octomize</button>
      </div>
    );
  } else {
    return (
      <div className='total-runs-pane'>
        <h1 className='total-runs'>Total Runs</h1>
        <h1 className='count text-green'>{totalRuns}</h1>
        <button className='button-octomize'>Octomize</button>
      </div>
    );
  }
};

export default TotalRunsPane;
