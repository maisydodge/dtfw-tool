import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

import { booleanCheck, displaySSH } from "./Utils";

/**
 * Summary: The Attributes Table class is used to display the attributes of each device type.
 *          The table is the expandable component of each row of the device types table.
 *          The attributes are currently read only.
 */
class AttributesTable extends React.Component {
  render() {
    if (this.props.data) {
      return (
        <BootstrapTable data={this.props.data} striped>
          <TableHeaderColumn dataField="type" isKey={true}>
            Type
          </TableHeaderColumn>
          <TableHeaderColumn dataField="label">Label</TableHeaderColumn>
          <TableHeaderColumn dataField="webconnect" dataFormat={booleanCheck}>
            webConnect
          </TableHeaderColumn>
          <TableHeaderColumn dataField="ovrcHome" dataFormat={booleanCheck}>
            OvrC Home
          </TableHeaderColumn>
          <TableHeaderColumn dataField="ovrcPro" dataFormat={booleanCheck}>
            OvrC Pro
          </TableHeaderColumn>
          <TableHeaderColumn dataField="logTimeSeries" dataFormat={booleanCheck}>
            Time Series
          </TableHeaderColumn>
          <TableHeaderColumn dataField="parentalControls" dataFormat={booleanCheck}>
            Parental Controls
          </TableHeaderColumn>
          <TableHeaderColumn dataField="sshtunnel" dataFormat={displaySSH}>
            SSH Tunnel
          </TableHeaderColumn>
        </BootstrapTable>
      );
    } else {
      return <p>No attributes to display.</p>;
    }
  }
}

export default AttributesTable;
