import React from "react";
import { Form, TextArea } from "semantic-ui-react";
import { text2HTML } from "../Utils";

/**
 * Summary: Class for the firmware upgrade custom insert modal, formats release notes to HTML list
 *    @return text area, Semantic UI React TextArea
 */
class ReleaseNotesField extends React.Component {
  state = { value: "" };

  handleChange = (e, { value }) => this.setState({ value: value });

  getFieldValue = () => {
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
