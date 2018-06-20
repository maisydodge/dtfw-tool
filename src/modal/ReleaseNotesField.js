import React from "react";
import { Form, TextArea } from "semantic-ui-react";
import { text2HTML } from "../Utils";

class ReleaseNotesField extends React.Component {
  state = { value: "" };

  handleChange = (e, { value }) => this.setState({ value: value });

  getFieldValue = () => {
    console.log("Release Notes getFieldValue: ");
    console.log(text2HTML(this.state.value));
    return text2HTML(this.state.value);
  };

  render() {
    return (
      <Form>
        <TextArea
          type="text"
          value={this.state.value}
          placeholder="Enter Release Notes"
          onChange={this.handleChange}
        />
      </Form>
    );
  }
}

export default ReleaseNotesField;
