import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
//import MyCustomBody from "./MyCustomBody";
import AttributesTable from "./AttributesTable";
import CategoryField from "./CategoryField";
import BrandField from "./BrandField";
import {
  makeUnique,
  booleanCheck,
  applyDefaults,
  populateBrand,
  populateCategory,
  populateModel,
  urlValidator,
  fileSizeValidator,
  tftpURLValidator,
  formatModels,
  filterOptions
} from "./Utils";
import fw_data from "./data/firmware.upgrades.mock";
import dt_data from "./data/device.types.mock.json";

const cat_options = makeUnique(
  dt_data.map(({ category }) => ({ value: category, text: category }))
);

const brand_options = makeUnique(
  dt_data.map(({ brandName }) => ({ value: brandName, text: brandName }))
);

/*----- Default Attributes -----*/
const defaultAttributes = {
  webconnect: true,
  ovrcHome: true,
  ovrcPro: false,
  logTimeSeries: false,
  parentalControls: false
};

class MainTables extends React.Component {
  constructor(props) {
    super(props);
  }

  isExpandableRow(row) {
    return true;
  }

  expandComponent(row) {
    return <AttributesTable data={row["attributes"]} />;
  }

  expandColumnComponent({ isExpandableRow, isExpanded }) {
    let content = "";

    if (isExpandableRow) {
      content = isExpanded ? "(-)" : "(+)";
    } else {
      content = " ";
    }
    return <div> {content} </div>;
  }

  //Use this to print attributes as well
  onAfterInsertRow(row) {
    let newRowStr = "";

    for (const prop in row) {
      newRowStr += prop + ": " + row[prop] + " \n";
    }
    alert("The new row is:\n " + newRowStr);
  }

  customCategory = (column, attr, editorClass, ignoreEditable, defaultValue) => {
    console.log("in customCategory");
    return (
      <CategoryField ref={attr.ref} editorClass={editorClass} ignoreEditable={ignoreEditable} />
    );
  };

  customBrand = (column, attr, editorClass, ignoreEditable, defaultValue) => {
    console.log("in customBrand");
    return <BrandField ref={attr.ref} editorClass={editorClass} ignoreEditable={ignoreEditable} />;
  };

  customModel = (column, attr, editorClass, ignoreEditable, defaultValue) => {
    console.log("in customModel");
    return <input type="text" {...attr} className={`${editorClass}`} />;
  };

  render() {
    const options = {
      expandRowBgColor: "rgb(66, 134, 244)",
      expandBy: "column",
      afterInsertRow: this.onAfterInsertRow,
      onAddRow: this.handleAddRow
    };
    const keyBoardNav = {
      enterToEdit: true
    };
    const cellEditProp = {
      mode: "click"
    };

    return (
      <Tabs>
        <TabList>
          <Tab>Device Types</Tab>
          <Tab>Firmware Upgrades</Tab>
        </TabList>
        <div>
          <TabPanel>
            <center>
              <h2>Device Types</h2>
            </center>
            <BootstrapTable
              ref="table"
              data={applyDefaults(dt_data, defaultAttributes)}
              cellEdit={cellEditProp}
              insertRow={true}
              options={options}
              striped
              expandableRow={this.isExpandableRow}
              expandComponent={this.expandComponent}
              expandColumnOptions={{
                expandColumnVisible: true,
                expandColumnComponent: this.expandColumnComponent,
                columnWidth: 40
              }}
              search
              pagination
              keyBoardNav={keyBoardNav}
            >
              <TableHeaderColumn dataField="_id" isKey={true} hidden editable={false}>
                ID
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="category"
                expandable={false}
                editable={{ type: "select", options: { values: populateCategory } }}
                customInsertEditor={{ getElement: this.customCategory }}
                filterFormatted
                filter={{ type: "SelectFilter", options: filterOptions(cat_options) }}
              >
                Category
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="brandName"
                expandable={false}
                editable={{ type: "select", options: { values: populateBrand } }}
                customInsertEditor={{ getElement: this.customBrand }}
                filter={{ type: "SelectFilter", options: filterOptions(brand_options) }}
              >
                Brand
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="model"
                expandable={false}
                editable={{ type: "select", options: { values: populateModel } }}
                customInsertEditor={{ getElement: this.customModel }}
              >
                Model
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="firmware"
                expandable={false}
                editable={{ type: "textarea" }}
              >
                Firmware Version
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="platform"
                expandable={false}
                editable={{ type: "textarea" }}
              >
                Platform (optional)
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="supported"
                expandable={false}
                editable={{ type: "checkbox", options: { values: "true:false" } }}
                dataFormat={booleanCheck}
              >
                Supported
              </TableHeaderColumn>
            </BootstrapTable>
          </TabPanel>
          <TabPanel>
            <center>
              <h2>Firmware Upgrades</h2>
            </center>
            <BootstrapTable
              data={fw_data}
              cellEdit={cellEditProp}
              insertRow={true}
              options={options}
              keyBoardNav={keyBoardNav}
              striped
              search
              pagination
            >
              <TableHeaderColumn dataField="_id" isKey={true} hidden editable={false}>
                ID
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="url"
                editable={{ type: "textarea" }}
                dataFormat={urlValidator}
                tdStyle={{ whiteSpace: "normal" }}
                width={"250"}
              >
                URL
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="filesize"
                editable={{ type: "textarea" }}
                dataFormat={fileSizeValidator}
                tdStyle={{ whiteSpace: "normal" }}
                width={"100"}
              >
                File Size
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="releaseDate"
                editable={{ type: "textarea" }}
                width={"140"}
              >
                Release Date
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="releaseNotes"
                editable={{ type: "textarea" }}
                tdStyle={{ whiteSpace: "normal" }}
              >
                Release Notes
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="platform"
                editable={{ type: "textarea" }}
                tdStyle={{ whiteSpace: "normal" }}
              >
                Platform
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="tftpStatus"
                editable={{ type: "checkbox", options: { values: "true:false" } }}
                dataFormat={booleanCheck}
              >
                TFTP Status (optional)
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="tftpURL"
                editable={{ type: "textarea" }}
                tdStyle={{ whiteSpace: "normal" }}
                dataFormat={tftpURLValidator}
                width={"200"}
              >
                TFTP URL
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="models"
                editable={false}
                tdStyle={{ whiteSpace: "normal" }}
                dataFormat={formatModels}
              >
                Models
              </TableHeaderColumn>
            </BootstrapTable>{" "}
            <br /> <br />{" "}
          </TabPanel>{" "}
        </div>{" "}
      </Tabs>
    );
  }
}
export default MainTables;
