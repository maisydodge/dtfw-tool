import React from "react";
import { Form, Input } from "semantic-ui-react";

/**
 * Summary: Class for the custom insert modal of both device types and firmware upgrades
 *    @return editable ID field
 */
class IdField extends React.Component {
  state = { value: "" };

  getFieldValue = () => {
    //console.log("ID getFieldValue: " + this.state.value);
    return this.state.value;
  };

  handleChange = (e, { value }) => this.setState({ value: value });

  render() {
    //console.log("ID value is: " + this.state.value);

    return (
      <Form>
        <Input
          type="text"
          value={this.state.value}
          placeholder="Enter ID"
          fluid={true}
          onChange={this.handleChange}
        />
      </Form>
    );
  }
}

export default IdField;
