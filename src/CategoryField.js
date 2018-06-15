import React from "react";
import { Dropdown } from "semantic-ui-react";

import { makeUnique } from "./Utils";
import dt_data from "./data/device.types.mock.json";

//Might not need this class - category may be uneditable

const cat_options = makeUnique(
  dt_data.map(({ category }) => ({ value: category, text: category }))
);

/**
 * Summary: Classes for the custom insert modal, allows for addition of new categories, brands, and models
 *          Can probably refactor into one class?
 *    @return Dropdowns, Semantic UI React dropdowns that allow additions
 */
class CategoryField extends React.Component {
  state = { cat_options };

  getFieldValue = () => {
    console.log("in category getFieldValue");
    let index = this.refs.selectedVal.state.selectedIndex;
    console.log(cat_options[index]);
    return cat_options[index];
  };

  handleAddition = (e, { value }) => {
    this.setState({
      options: [{ text: value, value }, ...this.state.cat_options]
    });
  };

  handleChange = (e, { value }) => this.setState({ currentValue: value });

  findValue(array, nameWeAreLookingFor) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].text === nameWeAreLookingFor) return i;
    }
    return -1;
  }

  render() {
    const { currentValue } = this.state;

    console.log(currentValue);
    console.log(this.findValue(cat_options, currentValue));

    return (
      <Dropdown
        ref="selectedVal"
        options={this.state.cat_options}
        placeholder="Choose Category"
        search
        selection
        fluid
        allowAdditions
        value={currentValue}
        onAddItem={this.handleAddition}
        onChange={this.handleChange}
      />
    );
  }
}

export default CategoryField;
