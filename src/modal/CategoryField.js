import React from "react";
import { Dropdown } from "semantic-ui-react";

import { cat_options } from "../Utils";
import { addNull, findValue } from "./ModalUtils";

/**
 * Summary: Class for the custom insert modal of device types, allows for addition of new categories if desired
 *    @return select field, Semantic UI React dropdowns that allow additions
 */
class CategoryField extends React.Component {
  state = { cat_options };

  getFieldValue = () => {
    console.log("Category getFieldValue: ");
    let index = this.refs.selectedVal.state.selectedIndex;
    console.log(cat_options[index]);
    return cat_options[index].value;
  };

  // handleAddition = (e, { value }) => {
  //   this.setState({
  //     options: [{ text: value, value }, ...this.state.cat_options]
  //   });
  // };

  handleChange = (e, { value }) => this.setState({ currentValue: value });

  render() {
    const { currentValue } = this.state;

    console.log("Category current value: " + currentValue);
    console.log("Category current value index: " + findValue(cat_options, currentValue));

    addNull(cat_options);

    return (
      <Dropdown
        ref="selectedVal"
        options={this.state.cat_options}
        placeholder="Choose Category"
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

export default CategoryField;
