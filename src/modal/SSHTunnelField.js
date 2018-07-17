import React from "react";
import { Form, Input } from "semantic-ui-react";

/**
 * Summary: Class for the device type ssh tunnel attribute
 *    @return =checkbox for supports and inputs for port and protocol
 */
class SSHTunnelField extends React.Component {
  state = {
    supports: false,
    port: null,
    protocol: ""
  };

  handleChange = e => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value });
  };

  getFieldValue = () => {
    console.log("in ssh tun " + this.state);
    return this.state;
  };

  render() {
    return (
      <Form>
        <Input
          type="checkbox"
          name="supports"
          checked={this.state.supports}
          label="SSH Tunnel: Supports"
          onChange={this.handleChange}
        />{" "}
        <br />
        <Input
          type="number"
          name="port"
          value={this.state.port}
          label="SSH Tunnel: Port"
          onChange={this.handleChange}
        />{" "}
        <br />
        <Input
          type="text"
          name="protocol"
          value={this.state.protocol}
          label="SSH Tunnel: Protocol"
          onChange={this.handleChange}
        />
      </Form>
    );
  }
}

export default SSHTunnelField;
