import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

import AttributesTable from "./AttributesTable";
import { customCategory, customBrand, customModel, customID } from "./modal/ModalUtils";

import {
  defaultAttributes,
  cat_options,
  brand_options,
  populateCategory,
  populateBrand,
  populateModel,
  booleanCheck,
  applyDefaults,
  filterOptions,
  onAfterSaveCell,
  onAfterInsertRow
} from "./Utils";

import { selectValidator, textValidator } from "./Validators";

class DeviceTypes extends React.Component {
  constructor() {
    super();
    this.state = {
      devicetypes: []
    };
  }

  componentWillMount() {
    fetch("https://34.229.145.29/devicetypes", {
      method: "POST",
      headers: { "Allow-Control-Allow-Origin": "*", "Content-Type": "application/json" },
      body: JSON.stringify({ action: "Read" })
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.setState({ devicetypes: result.data.documents });
      });
  }

  //   componentDidUpdate(prevProps, prevState) {
  //     console.log("Current: " + JSON.stringify(this.state.devicetypes));
  //   }

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
            editable={{ type: "textarea", placeholder: "Enter Platform" }}
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
      </div>
    );
  }
}

export default DeviceTypes;
