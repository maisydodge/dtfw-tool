import React from "react";
import { Input } from "semantic-ui-react";

/**
 * Summary: Class for the custom insert modal for firmware upgrades, disables Models edit feature
 *    @return uneditable Models field
 */
class FWModelField extends React.Component {
  state = { value: "" };

  handleChange = (e, { value }) => this.setState({ value: value });

  getFieldValue = () => {
    //console.log("Firmware Model getFieldValue :");
    //console.log(this.state.value);
    return this.state.value;
  };

  render() {
    //console.log(this.state.value);

    return (
      <Input
        type="text"
        value={this.state.value}
        fluid={true}
        placeholder="Models"
        disabled //can enable if needed
        onChange={this.handleChange}
      />
    );
  }
}

export default FWModelField;
