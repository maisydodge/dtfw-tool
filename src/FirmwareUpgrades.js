import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { customID, customFWModel, customReleaseNotes, customPrereq } from "./modal/ModalUtils";

import {
  booleanCheck,
  formatModels,
  formatDate,
  HTML2text,
  allCaps,
  onAfterInsertRow,
  attrFormatter,
  prereqFormatter
} from "./Utils";

import {
  selectValidator,
  textValidator,
  urlValidator,
  fileSizeValidator,
  tftpURLValidator
} from "./Validators";

class FirmwareUpgrades extends React.Component {
  constructor() {
    super();
    this.state = {
      firmwareupgrades: []
    };
    this.onAddRow = this.onAddRow.bind(this);
    this.onAfterSaveCell = this.onAfterSaveCell;
  }

  componentWillMount() {
    fetch("https://34.229.145.29/firmware", {
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
        console.log(result);
        this.setState({ firmwareupgrades: result.data.documents });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log("Current: " + JSON.stringify(this.state.firmwareupgrades));
  }

  /*-------------- Create -----------------*/
  onAddRow(row) {
    let docs = [];
    docs[0] = {};

    for (const prop in row) {
      docs[0][prop] = row[prop];
    }

    fetch("https://34.229.145.29/firmware", {
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
        this.state.firmwareupgrades.push(row);
        console.log("Length should be + 1: " + this.state.firmwareupgrades.length);
        this.setState({
          firmware: this.state.firmwareupgrades
        });
      });
  }

  /*-------------- Update -----------------*/
  onAfterSaveCell(row, cellName, cellValue) {
    alert(`Save cell ${cellName} with value ${cellValue}`);
    let props = {};
    props[cellName] = cellValue;

    fetch("https://34.229.145.29/firmware", {
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

  render() {
    const options = {
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
          <TableHeaderColumn
            dataField="attributes"
            expandable={false}
            hidden
            editable={{ type: "textarea", placeholder: "Enter Attributes (separated by newline)" }}
            dataFormat={attrFormatter}
          >
            Attributes
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="deviceType"
            expandable={false}
            hidden
            editable={{ type: "textarea", placeholder: "Enter Device Type" }}
            dataFormat={allCaps}
          >
            Device Type
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="filename"
            expandable={false}
            hidden
            editable={{ type: "textarea", placeholder: "Enter File Name" }}
          >
            File Name
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="md5hash"
            expandable={false}
            hidden
            editable={{ type: "textarea", placeholder: "Enter MD5 Hash" }}
          >
            MD5 Hash
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="prerequisites"
            expandable={false}
            hidden
            editable={{
              type: "textarea",
              placeholder: "Enter Prerequisites (separated by newline)"
            }}
            dataFormat={prereqFormatter}
            customInsertEditor={{ getElement: customPrereq }}
          >
            Prerequisites
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default FirmwareUpgrades;
