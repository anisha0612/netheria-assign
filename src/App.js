import React from "react";
import Wrapper from "./pages/Wrapper.jsx";
import { DataProvider } from "./Context/DataContext.js";
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <DataProvider>
        <Wrapper />
      </DataProvider>
    </div>
  );
};

export default App;
