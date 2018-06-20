import React from "react";
import { Dropdown } from "semantic-ui-react";

import { makeUnique } from "../Utils";
import dt_data from "../data/device.types.mock.json";

const brand_options = makeUnique(
  dt_data.map(({ brandName }) => ({ value: brandName, text: brandName }))
);

/**
 * Summary: Class for the custom insert modal, allows for addition of new brands
 *    @return select field, Semantic UI React dropdowns that allow additions
 */
class BrandField extends React.Component {
  state = { brand_options };

  getFieldValue = () => {
    console.log("Brand getFieldValue: ");
    let index = this.refs.selectedVal.state.selectedIndex;
    console.log(brand_options[index]);
    return brand_options[index].value;
  };

  // handleAddition = (e, { value }) => {
  //   this.setState({
  //     options: [{ text: value, value }, ...this.state.brand_options]
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

    console.log("Brand current value: " + currentValue);
    console.log("Brand current value index: " + this.findValue(brand_options, currentValue));

    return (
      <Dropdown
        ref="selectedVal"
        options={this.state.brand_options}
        placeholder="Choose Brand"
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

export default BrandField;
