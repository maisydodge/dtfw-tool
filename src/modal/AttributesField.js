import React from "react";
import { Form, Input } from "semantic-ui-react";
import { allCaps } from "../Utils";
import SSHTunnelField from "./SSHTunnelField";

/**
 * Summary: Class for the firmware upgrade prerequisites
 *    @return 3 text areas for the 3 prerequisites
 */
class AttributesField extends React.Component {
  state = {
    type: "",
    label: "",
    webconnect: false,
    ovrcHome: false,
    ovrcPro: false,
    logTimeSeries: false,
    parentalControls: false,
    sshtunnel: {
      //   supports: false,
      //   port: null,
      //   protocol: ""
    }
  };

  handleChange = e => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value });
  };

  getFieldValue = () => {
    console.log(this.state);
    return this.state;
  };

  render() {
    return (
      <Form>
        <Input
          type="text"
          value={allCaps(this.state.type)}
          name="type"
          placeholder="Enter Type"
          onChange={this.handleChange}
        />{" "}
        <br />
        <Input
          type="text"
          name="label"
          value={this.state.label}
          placeholder="Enter label"
          onChange={this.handleChange}
        />{" "}
        <br />
        <Input
          type="checkbox"
          name="webconnect"
          checked={this.state.webconnect}
          label="WebConnect"
          onChange={this.handleChange}
        />{" "}
        <br />
        <Input
          type="checkbox"
          name="ovrcHome"
          checked={this.state.ovrcHome}
          label="OvrC Home"
          onChange={this.handleChange}
        />{" "}
        <br />
        <Input
          type="checkbox"
          name="ovrcPro"
          checked={this.state.ovrcPro}
          label="OvrC Pro"
          onChange={this.handleChange}
        />{" "}
        <br />
        <Input
          type="checkbox"
          name="logTimeSeries"
          checked={this.state.logTimeSeries}
          label="Log Time Series"
          onChange={this.handleChange}
        />{" "}
        <br />
        <Input
          type="checkbox"
          name="parentalControls"
          checked={this.state.parentalControls}
          label="Parental Controls"
          onChange={this.handleChange}
        />{" "}
        <br />
        <Input
          type="checkbox"
          name="hasWireless"
          checked={this.state.hasWirelness}
          label="hasWireless"
          onChange={this.handleChange}
        />{" "}
        <br />
        <SSHTunnelField /> <br />
      </Form>
    );
  }
}

export default AttributesField;
