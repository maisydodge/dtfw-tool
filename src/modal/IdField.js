import React from "react";
import { Input } from "semantic-ui-react";

/**
 * Summary: Class for the custom insert modal of both device types and firmware upgrades
 *          Disables ID edit feature
 *    @return uneditable ID field
 */
class IdField extends React.Component {
  state = { value: "7" };

  getFieldValue = () => {
    console.log("ID getFieldValue: " + this.state);
    return this.state;
  };

  render() {
    console.log("ID value is: " + this.state.value);

    return <Input type="text" value={this.state.value} fluid={true} placeholder="ID" disabled />;
  }
}

export default IdField;
