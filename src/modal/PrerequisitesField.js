import React from "react";
import { Form, TextArea } from "semantic-ui-react";
import { formatDate } from "../Utils";

/**
 * Summary: Class for the firmware upgrade prerequisites
 *    @return 3 text areas for the 3 prerequisites
 */
class Prerequisites extends React.Component {
  state = {
    value: {
      deviceType: "",
      firmwareVersion: "",
      releaseDate: ""
    }
  };

  handleChange = (e, { value }) => this.setState({ value: value });

  getFieldValue = () => {
    return this.state.value;
  };

  render() {
    return (
      <Form>
        <TextArea
          type="text"
          value={this.state.value.deviceType}
          placeholder="Enter Device Type"
          onChange={this.handleChange}
        />
        <TextArea
          type="text"
          value={this.state.value.firmwareVersion}
          placeholder="Enter Firmware Version"
          onChange={this.handleChange}
        />
        <TextArea
          type="text"
          value={formatDate(this.state.value.releaseDate)}
          placeholder="Enter Release Date (YYYY-MM-DD)"
          onChange={this.handleChange}
        />
      </Form>
    );
  }
}

export default Prerequisites;
