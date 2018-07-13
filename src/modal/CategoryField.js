import React from "react";
import { Dropdown } from "semantic-ui-react";

import { cat_options } from "../Utils";
import { addNull } from "./ModalUtils";

/**
 * Summary: Class for the custom insert modal of device types, allows for addition of new categories if desired
 *    @return select field, Semantic UI React dropdowns that allow additions
 */
class CategoryField extends React.Component {
  state = {
    categories: cat_options(this.props.data)
  };

  getFieldValue = () => {
    //console.log("Category getFieldValue: ");
    let index = this.refs.selectedVal.state.selectedIndex;
    //console.log(this.state.categories[index]);
    return this.state.categories[index].value;
  };

  // handleAddition = (e, { value }) => {
  //   this.setState({
  //     options: [{ text: value, value }, ...this.state.cat_options]
  //   });
  // };

  handleChange = (e, { value }) => this.setState({ currentValue: value });

  render() {
    const { currentValue } = this.state.categories;

    //console.log("Category current value: " + currentValue);
    //console.log("Category current value index: " + findValue(cat_options, currentValue));

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
        //allowAdditions
        value={currentValue}
        //onAddItem={this.handleAddition}
        onChange={this.handleChange}
      />
    );
  }
}

export default CategoryField;
