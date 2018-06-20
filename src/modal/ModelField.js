import React from "react";
import { Input } from "semantic-ui-react";

/**
 * Summary: Class for the custom insert modal, allows for addition of new models
 *    @return input object, Semantic UI React input
 */
class ModelField extends React.Component {
  state = { value: "" };

  handleChange = (e, { value }) => this.setState({ value: value });

  getFieldValue = () => {
    console.log("Model getFieldValue: ");
    console.log(this.state);
    return this.state.value;
  };

  render() {
    console.log(this.state.value);

    return (
      <Input
        type="text"
        value={this.state.value}
        fluid={true}
        placeholder="Enter Model"
        onChange={this.handleChange}
      />
    );
  }
}

export default ModelField;
