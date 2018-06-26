import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import AttributesTable from "./AttributesTable";
import {
  customCategory,
  customBrand,
  customModel,
  customID,
  customFWModel,
  customReleaseNotes
} from "./modal/ModalUtils";

import {
  defaultAttributes,
  cat_options,
  brand_options,
  populateCategory,
  populateBrand,
  populateModel,
  booleanCheck,
  formatModels,
  formatDate,
  HTML2text,
  applyDefaults,
  filterOptions,
  onAfterSaveCell,
  onAfterInsertRow
} from "./Utils";

import {
  selectValidator,
  textValidator,
  urlValidator,
  fileSizeValidator,
  tftpURLValidator
} from "./Validators";

import fw_data from "./data/firmware.upgrades.mock";
import dt_data from "./data/device.types.mock.json";

/*------- Main Tables -------*/
/**
 * Summary: The MainTables class contains two tables - one for device types and one for firmware upgrades.
 *          React Tabs is used to separate the two tables into separate tabs.
 */
class MainTables extends React.Component {
  /*----- Expand functions -----*/
  isExpandableRow(row) {
    return true;
  }

  expandComponent(row) {
    return <AttributesTable data={row["attributes"]} />;
  }

  expandColumnComponent({ isExpandableRow, isExpanded }) {
    let content = "";
    if (isExpandableRow) content = isExpanded ? "(-)" : "(+)";
    else content = " ";
    return <div> {content} </div>;
  }

  render() {
    const options = {
      expandRowBgColor: "#aa66cc",
      expandBy: "column",
      afterInsertRow: onAfterInsertRow
      //onAddRow: this.handleAddRow
    };
    const keyBoardNav = {
      enterToEdit: true
    };
    const cellEditProp = {
      mode: "click",
      afterSaveCell: onAfterSaveCell
    };

    const selectRowProp = {
      mode: "checkbox",
      bgColor: "pink",
      clickToSelect: true,
      clickToExpand: true
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
              <h1>Device Types</h1>
            </center>
            <BootstrapTable
              ref="table"
              data={applyDefaults(dt_data, defaultAttributes)}
              cellEdit={cellEditProp}
              insertRow={true}
              deleteRow={true}
              exportCSV={true}
              options={options}
              expandableRow={this.isExpandableRow}
              expandComponent={this.expandComponent}
              expandColumnOptions={{
                expandColumnVisible: true,
                expandColumnComponent: this.expandColumnComponent,
                columnWidth: 40
              }}
              selectRow={selectRowProp}
              striped
              search
              pagination
              keyBoardNav={keyBoardNav}
              hover
            >
              <TableHeaderColumn
                dataField="_id"
                isKey={true}
                hidden
                editable={false}
                customInsertEditor={{ getElement: customID }}
              >
                ID
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="category"
                expandable={false}
                editable={{
                  type: "select",
                  options: { values: populateCategory },
                  validator: selectValidator
                }}
                customInsertEditor={{ getElement: customCategory }}
                filter={{ type: "SelectFilter", options: filterOptions(cat_options) }}
              >
                Category
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="brandName"
                expandable={false}
                editable={{
                  type: "select",
                  options: { values: populateBrand },
                  validator: selectValidator
                }}
                customInsertEditor={{ getElement: customBrand }}
                filter={{ type: "SelectFilter", options: filterOptions(brand_options) }}
              >
                Brand
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="model"
                expandable={false}
                editable={{
                  type: "select",
                  options: { values: populateModel },
                  validator: selectValidator
                }}
                customInsertEditor={{ getElement: customModel }}
              >
                Model
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="firmware"
                expandable={false}
                editable={{
                  type: "textarea",
                  validator: textValidator,
                  placeholder: "Enter Firmware Version"
                }}
              >
                Firmware Version
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="platform"
                expandable={false}
                editable={{ type: "textarea", defaultValue: "", placeholder: "Enter Platform" }}
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
            <br />
          </TabPanel>
          <TabPanel>
            <center>
              <h1>Firmware Upgrades</h1>
            </center>
            <BootstrapTable
              data={fw_data}
              cellEdit={cellEditProp}
              insertRow={true}
              deleteRow={true}
              exportCSV={true}
              options={options}
              keyBoardNav={keyBoardNav}
              selectRow={selectRowProp}
              striped
              search
              pagination
            >
              <TableHeaderColumn
                dataField="_id"
                isKey={true}
                hidden
                editable={false}
                customInsertEditor={{ getElement: customID }}
              >
                ID
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="url"
                editable={{ type: "textarea", validator: urlValidator, placeholder: "Enter URL" }}
                tdStyle={{ whiteSpace: "normal" }}
                width={"250"}
              >
                URL
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="filesize"
                editable={{
                  type: "textarea",
                  validator: fileSizeValidator,
                  placeholder: "Enter File Size"
                }}
                tdStyle={{ whiteSpace: "normal" }}
                width={"100"}
              >
                File Size
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="releaseDate"
                editable={{ type: "date", validator: selectValidator }}
                dataFormat={formatDate}
                width={"120"}
              >
                Release Date
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="releaseNotes"
                editable={{ type: "textarea", validator: textValidator }}
                tdStyle={{ whiteSpace: "normal" }}
                dataFormat={HTML2text}
                customInsertEditor={{ getElement: customReleaseNotes }}
              >
                Release Notes
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="platform"
                editable={{ type: "textarea", placeholder: "Enter Platform" }}
                tdStyle={{ whiteSpace: "normal" }}
              >
                Platform
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="tftpStatus"
                editable={{ type: "checkbox", options: { values: "true:false" } }}
                dataFormat={booleanCheck}
                width={"170"}
              >
                TFTP Status (optional)
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="tftpURL"
                editable={{
                  type: "textarea",
                  validator: tftpURLValidator,
                  placeholder: "Enter TFTP URL"
                }}
                tdStyle={{ whiteSpace: "normal" }}
                width={"250"}
              >
                TFTP URL
              </TableHeaderColumn>
              <TableHeaderColumn
                dataField="models"
                editable={false}
                tdStyle={{ whiteSpace: "normal" }}
                dataFormat={formatModels}
                customInsertEditor={{ getElement: customFWModel }}
              >
                Models
              </TableHeaderColumn>
            </BootstrapTable>
            <br />
          </TabPanel>
        </div>
      </Tabs>
    );
  }
}
export default MainTables;
