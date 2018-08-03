import React from "react";
import { Input } from "semantic-ui-react";
import { getType } from "../Utils";

class FirmwareType extends React.Component {
  state = {
    type: getType(this.props.data)
  };

  getFieldValue = () => {
    return this.state.type;
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ type: getType(nextProps.data) });
  }

  render() {
    return (
      <div>
        <Input type="text" name="type" value={this.state.type} disabled />
        <br />
      </div>
    );
  }
}

export default FirmwareType;
