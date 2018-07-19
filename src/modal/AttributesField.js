import React from "react";
import { Form, Input, Checkbox } from "semantic-ui-react";
import { allCaps } from "../Utils";

/**
 * Summary: Class for the firmware upgrade prerequisites
 *    @return 3 text areas for the 3 prerequisites
 */
class AttributesField extends React.Component {
  state = {
    webconnect: false,
    // ovrcHome: false,
    // ovrcPro: false,
    // logTimeSeries: false,
    parentalControls: false,
    hasWireless: false,
    sshtunnel: {
      supports: false,
      port: 80,
      protocol: "HTTP"
    }
  };

  handleChange = e => {
    var value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value });
  };

  handleChangeSSH = e => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    var sshtunnel = { ...this.state.sshtunnel };
    sshtunnel[e.target.name] = value;
    this.setState({ sshtunnel });
  };

  getFieldValue = () => {
    console.log(JSON.stringify(this.state));
    return this.state;
  };

  render() {
    return (
      // <Form>
      //   <Checkbox
      //     type="checkbox"
      //     name="webconnect"
      //     value={this.state.webconnect}
      //     label="WebConnect"
      //     onChange={this.handleChange}
      //   />
      //   <br />
      //   <Checkbox
      //     type="checkbox"
      //     name="ovrcHome"
      //     value={this.state.ovrcHome}
      //     label="OvrC Home"
      //     onChange={this.handleChange}
      //   />{" "}
      //   <br />
      //   <Checkbox
      //     type="checkbox"
      //     name="ovrcPro"
      //     value={this.state.ovrcPro}
      //     label="OvrC Pro"
      //     onChange={this.handleChange}
      //   />{" "}
      //   <br />
      //   <Checkbox
      //     type="checkbox"
      //     name="logTimeSeries"
      //     value={this.state.logTimeSeries}
      //     label="Log Time Series"
      //     onChange={this.handleChange}
      //   />{" "}
      //   <br />
      //   <Checkbox
      //     type="checkbox"
      //     name="parentalControls"
      //     value={this.state.parentalControls}
      //     label="Parental Controls"
      //     onChange={this.handleChange}
      //   />{" "}
      //   <br />
      //   <Checkbox
      //     type="checkbox"
      //     name="hasWireless"
      //     value={this.state.hasWireless}
      //     label="hasWireless"
      //     onChange={this.handleChange}
      //   />{" "}
      //   <br />
      //   <Checkbox
      //     type="checkbox"
      //     name="supports"
      //     value={this.state.sshtunnel.supports}
      //     label="SSH Tunnel: Supports"
      //     onChange={this.handleChangeSSH}
      //   />{" "}
      //   <br />
      //   <div>
      //     SSH Tunnel: Port
      //     <Input
      //       type="number"
      //       name="port"
      //       value={this.state.sshtunnel.port}
      //       placeholder="SSH Tunnel: Port"
      //       onChange={this.handleChangeSSH}
      //     />
      //   </div>
      //   <br />
      //   <div>
      //     SSH Tunnel: Protocol
      //     <Input
      //       type="text"
      //       name="protocol"
      //       value={this.state.sshtunnel.protocol}
      //       placeholder="SSH Tunnel: Protocol"
      //       onChange={this.handleChangeSSH}
      //     />
      //   </div>
      //   <br />
      // </Form>
      <form>
        <div>
          WebConnect &nbsp;
          <input
            type="checkbox"
            name="webconnect"
            checked={this.state.webconnect}
            label="WebConnect"
            onChange={this.handleChange}
          />
          <br />{" "}
        </div>
        {/* <div>
          OvrC Home &nbsp;
          <input
            type="checkbox"
            name="ovrcHome"
            checked={this.state.ovrcHome}
            label="OvrC Home"
            onChange={this.handleChange}
          />{" "}
          <br />{" "}
        </div> */}
        {/* <div>
          OvrC Pro &nbsp;
          <input
            type="checkbox"
            name="ovrcPro"
            checked={this.state.ovrcPro}
            label="OvrC Pro"
            onChange={this.handleChange}
          />{" "}
          <br />
        </div> */}
        {/* <div>
          Log Time Series &nbsp;
          <input
            type="checkbox"
            name="logTimeSeries"
            checked={this.state.logTimeSeries}
            label="Log Time Series"
            onChange={this.handleChange}
          />{" "}
          <br />
        </div> */}
        <div>
          Parental Controls &nbsp;
          <input
            type="checkbox"
            name="parentalControls"
            checked={this.state.parentalControls}
            label="Parental Controls"
            onChange={this.handleChange}
          />{" "}
          <br />
        </div>
        <div>
          Has Wireless &nbsp;
          <input
            type="checkbox"
            name="hasWireless"
            checked={this.state.hasWireless}
            label="hasWireless"
            onChange={this.handleChange}
          />{" "}
          <br />
        </div>
        <div>
          SSH Tunnel: Supports &nbsp;
          <input
            type="checkbox"
            name="supports"
            checked={this.state.sshtunnel.supports}
            onChange={this.handleChangeSSH}
          />{" "}
          <br />
        </div>
        <div>
          SSH Tunnel: Port &nbsp;
          <input
            type="number"
            name="port"
            value={this.state.sshtunnel.port}
            placeholder="SSH Tunnel: Port"
            onChange={this.handleChangeSSH}
          />
        </div>
        <br />
        <div>
          SSH Tunnel: Protocol &nbsp;
          <input
            type="text"
            name="protocol"
            value={this.state.sshtunnel.protocol}
            placeholder="SSH Tunnel: Protocol"
            onChange={this.handleChangeSSH}
          />
        </div>
        <br />
      </form>
    );
  }
}

export default AttributesField;
