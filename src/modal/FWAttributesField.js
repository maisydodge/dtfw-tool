import React from "react";
import { Form, TextArea } from "semantic-ui-react";

/**
 * Summary: Class for the firmware upgrade attributes
 *    @return text area
 */
class FWAttributesField extends React.Component {
  state = {
    attributes: {}
  };

  handleChange = (e, { value }) => {
    this.setState({ attributes: value });
  };

  getFieldValue = () => {
    if (
      Object.keys(this.state.attributes).length === 0 &&
      this.state.attributes.constructor === Object
    )
      return this.state.attributes;
    var myobject = {};
    var lines = this.state.attributes.split("\n");
    for (var i = 0; i < lines.length; i++) {
      let current = lines[i].split(":");
      myobject[current[0]] = current[1];
    }
    console.log(myobject);
    return myobject;
  };

  render() {
    return (
      <Form>
        <TextArea
          type="text"
          //value={this.state.attributes}
          placeholder="Enter Attributes -> ____:____"
          onChange={this.handleChange}
        />
      </Form>
    );
  }
}

export default FWAttributesField;
