import React from "react";
import { Dropdown } from "semantic-ui-react";

import { makeUnique } from "../Utils";
import dt_data from "../data/device.types.mock.json";

const cat_options = makeUnique(
  dt_data.map(({ category }) => ({ value: category, text: category }))
);

/**
 * Summary: Class for the custom insert modal, allows for addition of new categories
 *    @return select field, Semantic UI React dropdowns that allow additions
 */
class CategoryField extends React.Component {
  state = { cat_options };

  addNull = cat_options => {
    cat_options.push({ value: "", text: "" });
  };

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

  findValue(array, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].text === value) return i;
    }
    return -1;
  }

  render() {
    const { currentValue } = this.state;

    console.log("Category current value: " + currentValue);
    console.log("Category current value index: " + this.findValue(cat_options, currentValue));

    this.addNull(cat_options);

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
