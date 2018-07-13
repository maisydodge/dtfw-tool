import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

import AttributesTable from "./AttributesTable";
import { customID } from "./modal/ModalUtils";
import CategoryField from "./modal/CategoryField";
import BrandField from "./modal/BrandField";
import ModelField from "./modal/ModelField";

import {
  cat_options,
  brand_options,
  model_options,
  defaultAttributes,
  booleanCheck,
  allCaps,
  applyDefaults,
  filterOptions,
  onAfterInsertRow
} from "./Utils";

import { selectValidator, textValidator } from "./Validators";

class DeviceTypes extends React.Component {
  constructor() {
    super();
    this.state = {
      devicetypes: []
    };
    this.onAddRow = this.onAddRow.bind(this);
    this.onAfterSaveCell = this.onAfterSaveCell;
    this.customCategory = this.customCategory.bind(this);
    this.customBrand = this.customBrand.bind(this);
    this.customModel = this.customModel.bind(this);
  }

  componentWillMount() {
    fetch("https://34.229.145.29/devicetypes", {
      method: "POST",
      headers: {
        "Allow-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: "Basic YWRtaW46dGhpc2lzYXN0cm9uZ3eec3N3b3Jk"
      },
      body: JSON.stringify({ action: "Read" })
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        //console.log(result)
        this.setState({ devicetypes: result.data.documents });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log("Current: " + JSON.stringify(this.state.devicetypes));
  }

  /*-------------- Create -----------------*/
  onAddRow(row) {
    let docs = [];
    docs[0] = {};

    for (const prop in row) {
      docs[0][prop] = row[prop];
    }

    fetch("https://34.229.145.29/devicetypes", {
      method: "POST",
      headers: {
        "Allow-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: "Basic YWRtaW46dGhpc2lzYXN0cm9uZ3eec3N3b3Jk"
      },
      body: JSON.stringify({
        action: "Create",
        parent: "",
        documents: docs
      })
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
        this.state.devicetypes.push(row);
        console.log("Length should be + 1: " + this.state.devicetypes.length);
        this.setState({
          devicetypes: this.state.devicetypes
        });
      });
  }

  /*-------------- Update -----------------*/
  onAfterSaveCell(row, cellName, cellValue) {
    alert(`Save cell ${cellName} with value ${cellValue}`);

    //to make supported a boolean rather than string
    if (cellName === "supported") {
      if (cellValue === "true") {
        cellValue = true;
      } else cellValue = false;
    }

    let props = {};
    props[cellName] = cellValue;

    fetch("https://34.229.145.29/devicetypes", {
      method: "POST",
      headers: {
        "Allow-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Authorization: "Basic YWRtaW46dGhpc2lzYXN0cm9uZ3eec3N3b3Jk"
      },
      body: JSON.stringify({
        action: "Update",
        ids: [row["_id"]],
        properties: props
      })
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
      });
  }

  /*-------------- Delete -----------------*/
  // onAfterDeleteRow(rowKeys) {
  //   if (window.confirm("Are you sure you want to delete the following firmware upgrade(s) " + rowKeys)){
  //     fetch("https://34.229.145.29/firmware", {
  //       method: "POST",
  //       headers: { "Allow-Control-Allow-Origin": "*", "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         action: "Delete",
  //       })
  //     })
  //       .then(response => {
  //         return response.json();
  //       })
  //       .then(result => {
  //         console.log(result);
  //       });
  //   }
  // }

  /*----------- Insert Modal Fields ---------------*/
  customCategory(column, attr, editorClass, ignoreEditable, defaultValue) {
    return <CategoryField data={this.state.devicetypes} ref={attr.ref} />;
  }
  customBrand(column, attr, editorClass, ignoreEditable, defaultValue) {
    return <BrandField data={this.state.devicetypes} ref={attr.ref} />;
  }
  customModel(column, attr, editorClass, ignoreEditable, defaultValue) {
    return <ModelField data={this.state.devicetypes} ref={attr.ref} />;
  }

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
      afterInsertRow: onAfterInsertRow,
      onAddRow: this.onAddRow
      //afterDeleteRow: onAfterDeleteRow
    };
    const keyBoardNav = {
      enterToEdit: true
    };
    const cellEditProp = {
      mode: "click",
      afterSaveCell: this.onAfterSaveCell
    };

    const selectRowProp = {
      mode: "checkbox",
      bgColor: "pink",
      clickToSelect: true,
      clickToExpand: true
    };

    return (
      <div>
        <center>
          <h1>Device Types</h1>
        </center>
        <BootstrapTable
          ref="table"
          data={applyDefaults(this.state.devicetypes, defaultAttributes)}
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
            editable={true}
            customInsertEditor={{ getElement: customID }}
          >
            ID
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="category"
            expandable={false}
            editable={{
              type: "select",
              options: { values: cat_options(this.state.devicetypes) },
              validator: selectValidator
            }}
            customInsertEditor={{ getElement: this.customCategory }}
            filter={{
              type: "SelectFilter",
              options: filterOptions(cat_options(this.state.devicetypes))
            }}
          >
            Category
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="brandName"
            expandable={false}
            editable={{
              type: "select",
              options: { values: brand_options(this.state.devicetypes) },
              validator: selectValidator
            }}
            customInsertEditor={{ getElement: this.customBrand }}
            filter={{
              type: "SelectFilter",
              options: filterOptions(brand_options(this.state.devicetypes))
            }}
          >
            Brand
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="model"
            expandable={false}
            editable={{
              type: "select",
              options: { values: model_options(this.state.devicetypes) },
              validator: selectValidator
            }}
            customInsertEditor={{ getElement: this.customModel }}
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
            editable={{ type: "textarea", placeholder: "Enter Platform" }}
          >
            Platform
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="supported"
            expandable={false}
            editable={{
              type: "checkbox",
              options: { values: "true:false" }
            }}
            dataFormat={booleanCheck}
          >
            Supported
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="type"
            expandable={false}
            hidden
            editable={{ type: "textarea", placeholder: "Enter Type" }}
            dataFormat={allCaps}
          >
            Type
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="label"
            expandable={false}
            hidden
            editable={{ type: "textarea", placeholder: "Enter Label" }}
          >
            Label
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="webconnect"
            expandable={false}
            hidden
            editable={{
              type: "checkbox",
              options: [{ value: true, text: "true" }, { value: false, text: "false" }]
            }}
          >
            WebConnect
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="ovrcHome"
            expandable={false}
            hidden
            editable={{
              type: "checkbox",
              options: [{ value: true, text: "true" }, { value: false, text: "false" }]
            }}
          >
            Ovrc Home
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="ovrcPro"
            expandable={false}
            hidden
            editable={{
              type: "checkbox",
              options: [{ value: true, text: "true" }, { value: false, text: "false" }]
            }}
          >
            Ovrc Pro
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="logTimeSeries"
            expandable={false}
            hidden
            editable={{
              type: "checkbox",
              options: [{ value: true, text: "true" }, { value: false, text: "false" }]
            }}
          >
            Log Time Series
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="parentalControls"
            expandable={false}
            hidden
            editable={{
              type: "checkbox",
              options: [{ value: true, text: "true" }, { value: false, text: "false" }]
            }}
          >
            Parental Controls
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="sshtunnel"
            expandable={false}
            hidden
            editable={{
              type: "checkbox",
              options: [{ value: true, text: "true" }, { value: false, text: "false" }]
            }}
          >
            SSH Tunnel
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default DeviceTypes;
