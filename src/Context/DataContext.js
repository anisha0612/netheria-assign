import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = (props) => {
  // Hardware Pane
  const [hardwareData, setHardwareData] = useState([]);
  const [checkedPane, setCheckedPane] = useState([]);
  // const [dropdownMenu, setDropdownMenu] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState("Select Provider");
  const [selectedInstance, setSelectedInstance] = useState("Select Instance");
  const [availableInstances, setInstances] = useState([]);

  const [newHardware, setNewHardware] = useState({});

  const providerOptions = [
    { id: 1, provider: "AWS", name: "Amazon Web Services" },
    { id: 2, provider: "GCP", name: "Google Cloud" },
    { id: 3, provider: "Azure", name: "Microsoft Azure" },
  ];

  // fetch provider from selected provider
  const provider = providerOptions.find((option) => {
    if (option.name === selectedProvider) {
      return option.name;
    }
  });
  // cpu value for the selected instance
  const [vcpu, setVcpu] = useState(0);
  // memory of the selected instance
  const [memory, setMemory] = useState(0);
  //   Total runs
  const [totalRuns, setTotalRuns] = useState(0);
  const [isAddClicked, setIsAddClicked] = useState(false);
  const [hardwareActions, setHardwareActions] = useState([]);

  // dropdown is disabled
  const [isDisabled, setIsDisabled] = useState(true);

  // handle click for ADD button when you add instances and provider for increase Total runs
  const handleAdd = () => {
    setIsAddClicked(true);
    console.log(newHardware);
    setHardwareActions([...hardwareActions, newHardware]);
    console.log(hardwareActions);
    setTotalRuns(totalRuns + 1);
    setSelectedProvider("Select Provider");
    setSelectedInstance("Select Instance");
    setInstances([]);
    setVcpu(0);
    setMemory(0);
  };

  // Fetch hardware providers from API

  useEffect(() => {
    let flag = true;
    const fetchAPI = async () => {
      const { data } = await axios.get(
        "http://netheria.takehome.octoml.ai/hardware"
      );
      if (flag) {
        setHardwareData(data);
      }
    };

    // if a provider is selected then get all data fetched from API corresponding to the provider
    if (selectedProvider !== "Select Provider") {
      setIsDisabled(false);
      const createInstances = () => {
        setInstances(
          hardwareData.filter((hardware) => {
            if (hardware.provider === provider.provider) {
              return hardware;
            }
          })
        );
      };
      createInstances();
    } else {
      setIsDisabled(true);
      setIsAddClicked(false);
      setNewHardware({});
    }

    fetchAPI();
    // update cpu and memory values on instance selection
    const updateCpuAndMemory = () => {
      if (selectedInstance !== "Select Instance") {
        const cpuValue = availableInstances.filter((instance) => {
          if (instance.instance === selectedInstance) {
            return instance.cpu;
          }
        });

        const memoryValue = availableInstances.filter((instance) => {
          if (instance.instance === selectedInstance) {
            return instance.memory;
          }
        });
        if (Array.isArray(cpuValue) && Array.isArray(memoryValue)) {
          setVcpu(cpuValue[0].cpu);
          setMemory(memoryValue[0].memory);
          setNewHardware({
            id: hardwareActions.length + 1,
            instance: selectedInstance,
            cpu: vcpu,
          });
        }
      }
    };
    updateCpuAndMemory();

    return () => {
      flag = false;
    };
  }, [selectedProvider, selectedInstance, handleAdd]);

  return (
    <DataContext.Provider
      value={{
        hardwareData,
        checkedPane,
        setCheckedPane,
        totalRuns,
        setTotalRuns,
        selectedProvider,
        setSelectedProvider,
        selectedInstance,
        setSelectedInstance,
        providerOptions,
        availableInstances,
        setInstances,
        vcpu,
        setVcpu,
        memory,
        setMemory,
        isDisabled,
        setIsDisabled,
        handleAdd,
      }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
