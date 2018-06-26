import React from "react";
import { Dropdown } from "semantic-ui-react";

import { model_options } from "../Utils";
import { addNull, findValue } from "./ModalUtils";

/**
 * Summary: Class for the device types custom insert modal, allows for addition of new models
 *    @return select field, Semantic UI React dropdowns that allow additions
 */
class ModelField extends React.Component {
  state = { model_options };

  getFieldValue = () => {
    console.log("Model getFieldValue: ");
    let index = this.refs.selectedVal.state.selectedIndex;
    console.log(model_options[index]);
    return model_options[index].value;
  };

  // handleAddition = (e, { value }) => {
  //   this.setState({
  //     options: [{ text: value, value }, ...this.state.cat_options]
  //   });
  // };

  handleChange = (e, { value }) => this.setState({ value: value });

  render() {
    const { currentValue } = this.state;

    console.log("Model current value: " + currentValue);
    console.log("Model current value index: " + findValue(model_options, currentValue));

    addNull(model_options);

    return (
      <Dropdown
        ref="selectedVal"
        options={this.state.model_options}
        placeholder="Choose Model"
        search
        selection
        fluid
        //allowAdditions
        value={currentValue}
        //onAddItem={this.handleAddition}
        onChange={this.handleChange}
      />
    );
  }
}

export default ModelField;
