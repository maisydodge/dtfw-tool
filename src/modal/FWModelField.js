import React from "react";
import { Dropdown } from "semantic-ui-react";

import { fillDropModel } from "../Utils";
import { addNull } from "./ModalUtils";

/**
 * Summary: Class for the device types custom insert modal, allows for addition of new models
 *    @return select field, Semantic UI React dropdowns that allow additions
 */
class FWModelField extends React.Component {
  state = {
    models: fillDropModel(),
    selected: []
  };

  getFieldValue = () => {
    return this.state.selected;
  };

  // handleAddition = (e, { value }) => {
  //   this.setState({
  //     options: [{ text: value, value }, ...]
  //   });
  // };

  handleChange = (e, { value }) => {
    this.setState({ selected: value });
  };

  render() {
    if (this.state.models[this.state.models.length - 1].value !== "") {
      addNull(this.state.models);
    }

    return (
      <Dropdown
        ref="selectedVal"
        options={this.state.models}
        placeholder="Choose Models"
        search
        selection
        fluid
        multiple
        value={this.state.selected}
        //allowAdditions
        //onAddItem={this.handleAddition}
        onChange={this.handleChange}
      />
    );
  }
}

export default FWModelField;
