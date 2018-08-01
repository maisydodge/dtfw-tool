import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

import AttributesTable from "./AttributesTable";
import CategoryField from "./modal/CategoryField";
import BrandField from "./modal/BrandField";
import ModelField from "./modal/ModelField";
import AttributesField from "./modal/AttributesField";
import PropertiesField from "./modal/PropertiesField";

import {
  cat_options,
  brand_options,
  defaultAttributes,
  booleanCheck,
  applyDefaults,
  filterOptions,
  onAfterInsertRow,
  populateBrand,
  populateModel,
  populateCategory,
  getAttributes,
  updateProperties
} from "./Utils";

import { selectValidator, textValidator } from "./Validators";

class DeviceTypes extends React.Component {
  constructor() {
    super();
    this.state = {
      devicetypes: [],
      category: "",
      brand: "",
      model: "",
      totalSize: 0,
      page: 1,
      sizePerPage: 10,
      filter: null,
      sortName: "",
      sortOrder: ""
    };
    this.onAddRow = this.onAddRow.bind(this);
    this.onAfterSaveCell = this.onAfterSaveCell.bind(this);
    this.onDeleteRow = this.onDeleteRow.bind(this);
    this.customCategory = this.customCategory.bind(this);
    this.customBrand = this.customBrand.bind(this);
    this.customModel = this.customModel.bind(this);
    this.customAttr = this.customAttr.bind(this);
    this.getCategory = this.getCategory.bind(this);
    this.getBrand = this.getBrand.bind(this);
    this.getModel = this.getModel.bind(this);
    this.customProps = this.customProps.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSizePerPageChange = this.handleSizePerPageChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  fetchData(
    page = this.state.page,
    size = this.state.sizePerPage,
    filter = this.state.filterField,
    sortName = this.state.sortName,
    sortOrder = this.state.sortOrder
  ) {
    console.log(sortOrder);
    fetch("https://34.229.145.29/devicetypes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "Read",
        pagination: { limit: size, offset: (page - 1) * size + 1 },
        filter: filter,
        sort: [{ [sortName]: sortOrder }]
      })
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
        this.setState({
          devicetypes: result.data.documents,
          totalSize: result.data.totalCount,
          page,
          size
        });
      });
  }

  handlePageChange(page, sizePerPage) {
    this.fetchData(page, sizePerPage);
  }

  handleSizePerPageChange(sizePerPage) {
    this.fetchData(1, sizePerPage);
  }

  componentWillMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log("Current: " + JSON.stringify(this.state.devicetypes));
    //console.log(this.state.totalSize);
  }

  /*-------------- Create -----------------*/
  onAddRow(row) {
    let docs = [];
    docs[0] = {};

    for (const prop in row) {
      if (row[prop] === undefined || row[prop] === "false") row[prop] = false;
      if (row[prop] === "true") row[prop] = true;
      docs[0][prop] = row[prop];
    }

    docs[0].attributes = row.attributes;

    //console.log("Docs passed to create: " + JSON.stringify(docs));

    fetch("https://34.229.145.29/devicetypes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
        row["_id"] = result.data.ids[0];
        alert(result.message);
        this.fetchData();
      });
  }

  /*-------------- Update -----------------*/
  onAfterSaveCell(row, cellName, cellValue, page) {
    alert(`Save cell ${cellName} with value ${cellValue}`);

    //to make supported a boolean rather than string
    if (cellName === "supported") {
      if (cellValue === "true") cellValue = true;
      else cellValue = false;
    }

    let props = {};
    props[cellName] = cellValue;

    //if model is changed, update attributes/properties
    if (cellName === "model") {
      let updatedAttributes = getAttributes(row, cellValue);
      props.attributes = updatedAttributes;
      let updatedProperties = updateProperties(row, cellValue);
      let updatedPropKeys = Object.keys(updatedProperties);
      for (var i = 0; i < updatedPropKeys.length; i++) {
        props[updatedPropKeys[i]] = updatedProperties[updatedPropKeys[i]];
      }
    }

    //console.log("props to update" + JSON.stringify(props));

    fetch("https://34.229.145.29/devicetypes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
        this.fetchData();
      });
  }

  /*-------------- Delete -----------------*/
  onDeleteRow(rows, fullrows) {
    console.log(fullrows);
    var deleted = [];

    for (var i = 0; i < fullrows.length; i++) {
      deleted.push(fullrows[i]["_id"]);
    }

    if (
      window.confirm("Are you sure you want to delete the following device types(s) " + deleted)
    ) {
      fetch("https://34.229.145.29/devicetypes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
          this.fetchData();
        });
    }
  }

  handleFilterChange(filterObj) {
    var filter = {};
    var filterFields = Object.keys(filterObj);
    if (filterFields === undefined) {
      this.fetchData(1, this.state.sizePerPage, null, null);
      return;
    }
    for (var i = 0; i < filterFields.length; i++) {
      filter[filterFields[i]] = filterObj[filterFields[i]].value;
    }

    this.setState({ filterField: filter });
    this.fetchData(1, this.state.sizePerPage, filter);
  }

  handleSortChange(sortName, sortOrder) {
    console.log(sortOrder);
    this.setState({ sortName: sortName, sortOrder: sortOrder });
    this.fetchData(1, this.state.sizePerPage, undefined, sortName, sortOrder);
  }

  getCategory(val) {
    this.setState({ category: val });
  }

  getBrand(val) {
    this.setState({ brand: val });
  }

  getModel(val) {
    this.setState({ model: val });
  }

  /*----------- Insert Modal Fields ---------------*/
  customCategory(column, attr, editorClass, ignoreEditable, defaultValue) {
    return <CategoryField sendCategory={this.getCategory} ref={attr.ref} />;
  }
  customBrand(column, attr, editorClass, ignoreEditable, defaultValue) {
    return <BrandField sendBrand={this.getBrand} data={this.state.category} ref={attr.ref} />;
  }
  customModel(column, attr, editorClass, ignoreEditable, defaultValue) {
    return (
      <ModelField
        sendModel={this.getModel}
        data={{ category: this.state.category, brand: this.state.brand }}
        ref={attr.ref}
      />
    );
  }
  customAttr(column, attr, editorClass, ignoreEditable, defaultValue) {
    return (
      <AttributesField
        data={{
          category: this.state.category,
          brandName: this.state.brand,
          model: this.state.model
        }}
        ref={attr.ref}
      />
    );
  }
  customProps(column, attr, editorClass, ignoreEditable, defaultValue) {
    return (
      <PropertiesField
        name={attr.placeholder}
        data={{
          category: this.state.category,
          brandName: this.state.brand,
          model: this.state.model
        }}
        ref={attr.ref}
      />
    );
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

  remote(remoteObj) {
    remoteObj.cellEdit = true;
    remoteObj.insertRow = true;
    remoteObj.dropRow = true;
    remoteObj.pagination = true;
    remoteObj.filter = true;
    remoteObj.sort = true;
    return remoteObj;
  }

  render() {
    const options = {
      expandRowBgColor: "#aa66cc",
      expandBy: "column",
      afterInsertRow: onAfterInsertRow,
      onAddRow: this.onAddRow,
      searchDelayTime: 1000,
      onDeleteRow: this.onDeleteRow,
      onFilterChange: this.handleFilterChange,
      onSortChange: this.handleSortChange,
      onPageChange: this.handlePageChange,
      onSizePerPageList: this.handleSizePerPageChange,
      clearSearch: true
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
          fetchInfo={{ dataTotalSize: this.state.totalSize }}
          remote={this.remote}
          keyBoardNav={keyBoardNav}
          hover
        >
          <TableHeaderColumn
            dataField="category"
            expandable={false}
            editable={{
              type: "select",
              options: { values: populateCategory },
              validator: selectValidator
            }}
            dataSort={true}
            customInsertEditor={{ getElement: this.customCategory }}
            filter={{
              type: "SelectFilter",
              options: filterOptions(cat_options())
            }}
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
            dataSort={true}
            customInsertEditor={{ getElement: this.customBrand }}
            filter={{
              type: "SelectFilter",
              options: filterOptions(brand_options())
            }}
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
            customInsertEditor={{ getElement: this.customModel }}
            dataSort={true}
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
            editable={{ type: "textarea", placeholder: "Type" }}
            customInsertEditor={{ getElement: this.customProps }}
          >
            Type
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="label"
            expandable={false}
            hidden
            editable={{ type: "textarea", validator: textValidator, placeholder: "Label" }}
            customInsertEditor={{ getElement: this.customProps }}
          >
            Label
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="ovrcPro"
            expandable={false}
            hidden
            editable={false}
            customInsertEditor={{ getElement: this.customProps }}
          >
            OvrC Pro
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="ovrcHome"
            expandable={false}
            hidden
            editable={false}
            customInsertEditor={{ getElement: this.customProps }}
          >
            OvrC Home
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="logTimeSeries"
            expandable={false}
            hidden
            editable={false}
            customInsertEditor={{ getElement: this.customProps }}
          >
            Log Time Series
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="attributes"
            expandable={false}
            hidden
            editable={false}
            customInsertEditor={{ getElement: this.customAttr }}
            isKey={true}
          >
            Attributes
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default DeviceTypes;
