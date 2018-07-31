import React from "react";
import { Input, Checkbox } from "semantic-ui-react";
import { getProperties } from "../Utils";

class PropertiesField extends React.Component {
  state = getProperties(this.props.data, this.props.name);

  getFieldValue = () => {
    //console.log("getFieldValue" + JSON.stringify(this.state));
    if (this.props.name === "OvrC Home") {
      return this.state.ovrcHome;
    }
    if (this.props.name === "OvrC Pro") {
      return this.state.ovrcPro;
    }
    if (this.props.name === "Log Time Series") {
      return this.state.logTimeSeries;
    }
    if (this.props.name === "Type") {
      return this.state.type;
    }
    if (this.props.name === "Label") {
      return this.state.label;
    }
  };

  componentWillReceiveProps(nextProps) {
    this.setState(getProperties(nextProps.data, this.props.name));
  }

  render() {
    if (this.props.name === "OvrC Home") {
      return (
        <div>
          <Checkbox
            type="checkbox"
            name="ovrcHome"
            checked={this.state.ovrcHome}
            label="OvrC Home"
            disabled
          />
          <br />
        </div>
      );
    }
    if (this.props.name === "OvrC Pro") {
      return (
        <div>
          <Checkbox
            type="checkbox"
            name="ovrcPro"
            checked={this.state.ovrcPro}
            label="OvrC Pro"
            disabled
          />
          <br />
        </div>
      );
    }
    if (this.props.name === "Log Time Series") {
      return (
        <div>
          <Checkbox
            type="checkbox"
            name="logTimeSeries"
            checked={this.state.logTimeSeries}
            label="Log Time Series"
            disabled
          />
          <br />
        </div>
      );
    }
    if (this.props.name === "Label") {
      return (
        <div>
          <Input type="text" name="label" value={this.state.label} disabled />
          <br />
        </div>
      );
    }
    if (this.props.name === "Type") {
      return (
        <div>
          <Input type="text" name="type" value={this.state.type} disabled />
          <br />
        </div>
      );
    }
  }
}

export default PropertiesField;
