import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DeviceTypes from "./DeviceTypes";
import FirmwareUpgrades from "./FirmwareUpgrades";

class MainTables extends React.Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Device Types</Tab>
          <Tab>Firmware Upgrades</Tab>
        </TabList>
        <TabPanel>
          <DeviceTypes />
        </TabPanel>
        <TabPanel>
          <FirmwareUpgrades />
        </TabPanel>
      </Tabs>
    );
  }
}

export default MainTables;
