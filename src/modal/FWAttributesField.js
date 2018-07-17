import React from "react";
import { Form, TextArea } from "semantic-ui-react";

/**
 * Summary: Class for the firmware upgrade prerequisites
 *    @return 3 text areas for the 3 prerequisites
 */
class FWAttributesField extends React.Component {
  state = {
    attributes: {}
  };

  handleChange = (e, { value }) => {
    this.setState({ attributes: value });
  };

  getFieldValue = () => {
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
          placeholder="Enter Attributes"
          onChange={this.handleChange}
        />
      </Form>
    );
  }
}

export default FWAttributesField;
