import React from "react";
import { Input } from "semantic-ui-react";

/**
 * Summary: Class for the custom insert modal, disables ID edit feature
 *    @return uneditable ID field
 */
//Might be able to display ID and keep uneditable?
class IdField extends React.Component {
  state = { value: "" };

  handleChange = (e, { value }) => this.setState({ value: value });

  getFieldValue = () => {
    console.log("ID getFieldValue: ");
    console.log(this.state);
    return this.state;
  };

  render() {
    console.log(this.state.value);

    return (
      <Input
        type="text"
        value={this.state.value} //get this value from API?
        fluid={true}
        placeholder="ID"
        disabled
        onChange={this.handleChange}
      />
    );
  }
}

export default IdField;
