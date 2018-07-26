import React from "react";
import { Dropdown } from "semantic-ui-react";

import { dropdownHelper, fillDropModel } from "../Utils";
import { addNull } from "./ModalUtils";

/**
 * Summary: Class for the device types custom insert modal, allows for addition of new models
 *    @return select field, Semantic UI React dropdowns that allow additions
 */
class ModelField extends React.Component {
  state = {
    models: dropdownHelper(fillDropModel(this.props.data))
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ models: dropdownHelper(fillDropModel(nextProps.data)) });
  }

  getFieldValue = () => {
    let index = this.refs.selectedVal.state.selectedIndex;
    return this.state.models[index].value;
  };

  // handleAddition = (e, { value }) => {
  //   this.setState({
  //     options: [{ text: value, value }, ...this.state.cat_options]
  //   });
  // };

  handleChange = (e, { value }) => {
    this.setState({ value: value });
    this.props.sendModel(value);
  };

  render() {
    const { currentValue } = this.state.models;

    if (this.state.models[this.state.models.length - 1].value !== "") {
      addNull(this.state.models);
    }

    return (
      <Dropdown
        ref="selectedVal"
        options={this.state.models}
        placeholder="Choose Model"
        search
        selection
        fluid
        value={currentValue}
        //allowAdditions
        //onAddItem={this.handleAddition}
        onChange={this.handleChange}
      />
    );
  }
}

export default ModelField;
