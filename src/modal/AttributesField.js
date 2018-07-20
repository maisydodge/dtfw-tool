import React from "react";
import { Form, Input, Checkbox } from "semantic-ui-react";

/**
 * Summary: Class for the device types attributes
 *    @return checkboxes for webconnect, parental controls, has wireless, and ssh tunnel
 */
class AttributesField extends React.Component {
  state = {
    webconnect: false,
    parentalControls: false,
    hasWireless: false,
    sshtunnel: {
      supports: false,
      port: 80,
      protocol: "HTTP"
    }
  };

  handleChange = (e, { name, checked }) => {
    console.log(checked);
    this.setState({ [name]: checked });
  };

  handleChangeSSH = (e, { name, checked, type, value }) => {
    const newVal = type === "checkbox" ? checked : value;
    var sshtunnel = { ...this.state.sshtunnel };
    sshtunnel[name] = newVal;
    this.setState({ sshtunnel });
  };

  getFieldValue = () => {
    console.log(JSON.stringify(this.state));
    return this.state;
  };

  render() {
    return (
      <Form>
        <Checkbox
          type="checkbox"
          name="webconnect"
          checked={this.state.webconnect}
          label="WebConnect"
          onChange={this.handleChange}
        />
        <br />
        <Checkbox
          type="checkbox"
          name="parentalControls"
          checked={this.state.parentalControls}
          label="Parental Controls"
          onChange={this.handleChange}
        />{" "}
        <br />
        <Checkbox
          type="checkbox"
          name="hasWireless"
          checked={this.state.hasWireless}
          label="hasWireless"
          onChange={this.handleChange}
        />{" "}
        <br />
        <Checkbox
          type="checkbox"
          name="supports"
          checked={this.state.sshtunnel.supports}
          label="SSH Tunnel: Supports"
          onChange={this.handleChangeSSH}
        />{" "}
        <br />
        <div>
          SSH Tunnel: Port &nbsp;
          <Input
            type="number"
            name="port"
            value={this.state.sshtunnel.port}
            placeholder="SSH Tunnel: Port"
            onChange={this.handleChangeSSH}
          />
        </div>
        <div>
          SSH Tunnel: Protocol &nbsp;
          <Input
            type="text"
            name="protocol"
            value={this.state.sshtunnel.protocol}
            placeholder="SSH Tunnel: Protocol"
            onChange={this.handleChangeSSH}
          />
        </div>
        <br />
      </Form>
    );
  }
}

export default AttributesField;
