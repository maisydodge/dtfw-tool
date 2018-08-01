import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { customReleaseNotes, customPrereq, customFWAttr } from "./modal/ModalUtils";
import FWModelField from "./modal/FWModelField";

import { formatModels, formatDate, HTML2text, allCaps, onAfterInsertRow, text2HTML } from "./Utils";

import { selectValidator, textValidator, modelValidator } from "./Validators";

class FirmwareUpgrades extends React.Component {
  constructor() {
    super();
    this.state = {
      firmwareupgrades: [],
      totalSize: 0,
      page: 1,
      sizePerPage: 10,
      sortName: "",
      sortOrder: ""
    };
    this.onAddRow = this.onAddRow.bind(this);
    this.onAfterSaveCell = this.onAfterSaveCell.bind(this);
    this.onDeleteRow = this.onDeleteRow.bind(this);
    this.customFWModel = this.customFWModel.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSizePerPageChange = this.handleSizePerPageChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  fetchData(
    page = this.state.page,
    size = this.state.sizePerPage,
    sortName = this.state.sortName,
    sortOrder = this.state.sortOrder
  ) {
    fetch("https://34.229.145.29/firmware", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "Read",
        pagination: { limit: size, offset: (page - 1) * size + 1 },
        sort: [{ [sortName]: sortOrder }]
      })
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
        this.setState({
          firmwareupgrades: result.data.documents,
          totalSize: result.data.totalCount,
          page,
          size
        });
      });
  }

  handleSortChange(sortName, sortOrder) {
    this.setState({ sortName: sortName, sortOrder: sortOrder });
    this.fetchData(1, this.state.sizePerPage, undefined, undefined, sortName, sortOrder);
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
    //console.log("Current: " + JSON.stringify(this.state.firmwareupgrades));
  }

  /*-------------- Create -----------------*/
  onAddRow(row) {
    let docs = [];
    docs[0] = {};

    for (const prop in row) {
      if (row["supported"] === undefined || row["supported"] === "false") {
        row["supported"] = false;
      } else row["supported"] = true;
      docs[0][prop] = row[prop];
    }

    fetch("https://34.229.145.29/firmware", {
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
        this.state.firmwareupgrades.push(row);
        alert(result.message);
        this.fetchData();
      });
  }

  /*-------------- Update -----------------*/
  onAfterSaveCell(row, cellName, cellValue) {
    if (cellName === "releaseNotes") {
      cellValue = text2HTML(cellValue);
      console.log(cellValue);
    }

    alert(`Save cell ${cellName} with value ${cellValue}`);

    let props = {};
    props[cellName] = cellValue;

    fetch("https://34.229.145.29/firmware", {
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
    var deleted = [];
    console.log(fullrows);

    for (var i = 0; i < fullrows.length; i++) {
      console.log(fullrows[i]);
      deleted.push(fullrows[i]["_id"]);
    }
    console.log("Deleted: " + deleted);

    if (
      window.confirm(
        "Are you sure you want to delete the following firmware upgrades(s) " + deleted
      )
    ) {
      fetch("https://34.229.145.29/firmware", {
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

  customFWModel(column, attr, editorClass, ignoreEditable, defaultValue) {
    return <FWModelField data={this.state.firmwareupgrades} ref={attr.ref} />;
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
      afterInsertRow: onAfterInsertRow,
      onAddRow: this.onAddRow,
      onDeleteRow: this.onDeleteRow,
      searchDelayTime: 1000,
      onPageChange: this.handlePageChange,
      onSizePerPageList: this.handleSizePerPageChange,
      onSortChange: this.handleSortChange,
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
          <h1>Firmware Upgrades</h1>
        </center>
        <BootstrapTable
          data={this.state.firmwareupgrades}
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
          fetchInfo={{ dataTotalSize: this.state.totalSize }}
          remote={this.remote}
        >
          <TableHeaderColumn
            dataField="url"
            editable={{
              type: "textarea",
              placeholder: "Enter URL",
              validator: textValidator
            }}
            tdStyle={{ whiteSpace: "normal" }}
            width={"250"}
            isKey={true}
          >
            URL
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="filesize"
            editable={{
              type: "number",
              validator: textValidator,
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
            width={"130"}
            dataSort={true}
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
            dataField="models"
            editable={{ validator: modelValidator }}
            tdStyle={{ whiteSpace: "normal" }}
            dataFormat={formatModels}
            customInsertEditor={{ getElement: this.customFWModel }}
            dataSort={true}
          >
            Models
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="attributes"
            expandable={false}
            hidden
            editable={{ type: "textarea", placeholder: "Enter Attributes" }}
            customInsertEditor={{ getElement: customFWAttr }}
          >
            Attributes
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="deviceType"
            expandable={false}
            hidden
            editable={{
              type: "textarea",
              validator: textValidator,
              placeholder: "Enter Device Type"
            }}
            dataFormat={allCaps}
          >
            Device Type
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="filename"
            expandable={false}
            hidden
            editable={{
              type: "textarea",
              validator: textValidator,
              placeholder: "Enter File Name"
            }}
          >
            File Name
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="firmwareVersion"
            expandable={false}
            hidden
            editable={{
              type: "textarea",
              validator: textValidator,
              placeholder: "Enter Firmware Version"
            }}
          >
            Firmware Version
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="prerequisites"
            expandable={false}
            hidden
            editable={{
              type: "textarea",
              placeholder: "Enter Prerequisites"
            }}
            customInsertEditor={{ getElement: customPrereq }}
          >
            Prerequisites
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="supported"
            expandable={false}
            hidden
            editable={{
              type: "checkbox",
              options: { values: "true:false" }
            }}
          >
            Supported
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default FirmwareUpgrades;
