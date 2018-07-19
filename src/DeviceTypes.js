import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

import AttributesTable from "./AttributesTable";
import CategoryField from "./modal/CategoryField";
import BrandField from "./modal/BrandField";
import ModelField from "./modal/ModelField";
import { customAttr } from "./modal/ModalUtils";

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
        //"Allow-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ action: "Read" })
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
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
      if (row[prop] === undefined || row[prop] === "false") {
        row[prop] = false;
      }
      if (row[prop] === "true") {
        row[prop] = true;
      }
      docs[0][prop] = row[prop];
    }
    docs[0].attributes = row.attributes;

    console.log(JSON.stringify(docs));

    //checks for duplicates (if id's are the same)
    for (var i = 0; i < this.state.devicetypes.length; i++) {
      if (row["_id"] === this.state.devicetypes[i]["_id"]) return;
    }

    fetch("https://34.229.145.29/devicetypes", {
      method: "POST",
      headers: {
        //"Allow-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        action: "Create",
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
        alert(result.message);
        this.setState({
          devicetypes: this.state.devicetypes
        });
      });
    row.attributes.type = docs[0].type;
    row.attributes.label = docs[0].label;
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
        //"Allow-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
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
        alert(result.message);
      });
  }

  /*-------------- Delete -----------------*/
  onDeleteRow(rows, fullrows) {
    var deleted = [];
    console.log(fullrows);

    //this is wrong, fix later! need ["_id"]
    for (var i = 0; i < fullrows.length; i++) {
      deleted.push(fullrows[i]["_id"]);
    }

    if (
      window.confirm("Are you sure you want to delete the following device types(s) " + deleted)
    ) {
      fetch("https://34.229.145.29/devicetypes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          action: "Delete",
          ids: deleted
        })
      })
        .then(response => {
          return response.json();
        })
        .then(result => {
          console.log(result);
        });
    }
  }

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
      onAddRow: this.onAddRow,
      searchDelayTime: 1000,
      onDeleteRow: this.onDeleteRow
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
          //data={applyDefaults(this.state.devicetypes, defaultAttributes)}
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
            isKey={true}
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
            editable={{ type: "textarea", validator: textValidator, placeholder: "Enter Label" }}
          >
            Label
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="ovrcPro"
            expandable={false}
            hidden
            editable={{
              type: "checkbox",
              options: { values: "true:false" }
            }}
          >
            OvrC Pro
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="ovrcHome"
            expandable={false}
            hidden
            editable={{
              type: "checkbox",
              options: { values: "true:false" }
            }}
          >
            OvrC Home
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="logTimeSeries"
            expandable={false}
            hidden
            editable={{
              type: "checkbox",
              options: { values: "true:false" }
            }}
          >
            Log Time Series
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="attributes"
            expandable={false}
            hidden
            editable={false}
            customInsertEditor={{ getElement: customAttr }}
          >
            Attributes
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default DeviceTypes;
