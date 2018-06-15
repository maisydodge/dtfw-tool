import React from "react";
import { render } from "react-dom";
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
//import DatePicker from 'react-date-picker'
import "react-bootstrap-table/dist/react-bootstrap-table.min.css";
import "semantic-ui-css/semantic.min.css";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import MainTables from "./MainTables";
// import CategoryField from "./CategoryField";
// import BrandField from "./BrandField";

render(<MainTables />, document.getElementById("root"));
