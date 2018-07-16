import React from "react";
import { Form, Input } from "semantic-ui-react";
import { formatDate } from "../Utils";

/**
 * Summary: Class for the firmware upgrade prerequisites
 *    @return 3 text areas for the 3 prerequisites
 */
class Prerequisites extends React.Component {
  state = {
    deviceType: "",
    firmwareVersion: "",
    releaseDate: ""
  };

  handleChange = (e, { value }) => {
    this.setState({ [e.target.name]: value });
  };

  getFieldValue = () => {
    var myarray = [];
    myarray[0] = this.state;
    return myarray;
  };

  render() {
    return (
      <Form>
        <Input
          type="text"
          value={this.state.deviceType}
          name="deviceType"
          placeholder="Enter Device Type"
          onChange={this.handleChange}
        />
        <Input
          type="text"
          name="firmwareVersion"
          value={this.state.firmwareVersion}
          placeholder="Enter Firmware Version"
          onChange={this.handleChange}
        />
        <Input
          type="date"
          name="releaseDate"
          value={formatDate(this.state.releaseDate)}
          placeholder="Enter Release Date (YYYY-MM-DD)"
          onChange={this.handleChange}
        />
      </Form>
    );
  }
}

export default Prerequisites;
