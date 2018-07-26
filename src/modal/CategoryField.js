import React from "react";
import { Dropdown } from "semantic-ui-react";

import { populateCategory, dropdownHelper } from "../Utils";
import { addNull } from "./ModalUtils";

/**
 * Summary: Class for the custom insert modal of device types, allows for addition of new categories if desired
 *    @return select field, Semantic UI React dropdowns that allow additions
 */
class CategoryField extends React.Component {
  state = {
    categories: dropdownHelper(populateCategory())
  };

  getFieldValue = () => {
    let index = this.refs.selectedVal.state.selectedIndex;
    return this.state.categories[index].value;
  };

  // handleAddition = (e, { value }) => {
  //   this.setState({
  //     options: [{ text: value, value }, ...this.state.cat_options]
  //   });
  // };

  handleChange = (e, { value }) => {
    this.setState({ currentValue: value });
    this.props.sendCategory(value);
  };

  render() {
    const { currentValue } = this.state.categories;

    if (this.state.categories[this.state.categories.length - 1].value !== "") {
      addNull(this.state.categories);
    }

    return (
      <Dropdown
        ref="selectedVal"
        options={this.state.categories}
        placeholder="Choose Category"
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

export default CategoryField;
