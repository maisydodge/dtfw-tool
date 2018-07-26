import React from "react";
import { Form, Input, Checkbox } from "semantic-ui-react";
import { getAttributes } from "../Utils";

/**
 * Summary: Class for the device types attributes
 *    @return checkboxes for webconnect, parental controls, has wireless, and ssh tunnel
 */
class AttributesField extends React.Component {
  state = getAttributes(this.props.data);

  getFieldValue = () => {
    console.log(JSON.stringify(this.state));
    return this.state;
  };

  componentWillReceiveProps(nextProps) {
    console.log("next props: " + nextProps.data);
    this.setState(getAttributes(nextProps.data));
  }

  //   handleChange = (e, { name, checked }) => {
  //     console.log(checked);
  //     this.setState({ [name]: checked });
  //   };

  //   handleChangeSSH = (e, { name, checked, type, value }) => {
  //     const newVal = type === "checkbox" ? checked : value;
  //     var sshtunnel = { ...this.state.sshtunnel };
  //     sshtunnel[name] = newVal;
  //     this.setState({ sshtunnel });
  //   };

  render() {
    return (
      <Form>
        <Checkbox
          type="checkbox"
          name="webconnect"
          checked={this.state.webconnect}
          label="WebConnect"
          disabled
        />
        <br />
        <Checkbox
          type="checkbox"
          name="parentalControls"
          checked={this.state.parentalControls}
          label="Parental Controls"
          disabled
        />
        <br />
        <Checkbox
          type="checkbox"
          name="hasWireless"
          checked={this.state.hasWireless}
          label="hasWireless"
          disabled
        />
        <br />
        <Checkbox
          type="checkbox"
          name="supports"
          checked={this.state.sshtunnel.supports}
          label="SSH Tunnel: Supports"
          disabled
        />
        <br />
        <div>
          SSH Tunnel: Port &nbsp;
          <Input
            type="number"
            name="port"
            value={this.state.sshtunnel.port}
            placeholder="SSH Tunnel: Port"
            disabled
          />
        </div>
        <div>
          SSH Tunnel: Protocol &nbsp;
          <Input
            type="text"
            name="protocol"
            value={this.state.sshtunnel.protocol}
            placeholder="SSH Tunnel: Protocol"
            disabled
          />
        </div>
        <br />
      </Form>
    );
  }
}

export default AttributesField;
