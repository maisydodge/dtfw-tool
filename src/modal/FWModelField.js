import React from "react";
import { Input } from "semantic-ui-react";

/**
 * Summary: Class for the custom insert modal for firmware upgrades, disables Models edit feature
 *    @return uneditable Models field
 */
//Might be able to display models and keep uneditable?
class FWModelField extends React.Component {
  state = { value: "" };

  handleChange = (e, { value }) => this.setState({ value: value });

  getFieldValue = () => {
    console.log("Firmware Model getFieldValue :");
    console.log(this.state);
    return this.state;
  };

  render() {
    console.log(this.state.value);

    return (
      <Input
        type="text"
        value={this.state.value}
        fluid={true}
        placeholder="Models"
        disabled
        onChange={this.handleChange}
      />
    );
  }
}

export default FWModelField;
