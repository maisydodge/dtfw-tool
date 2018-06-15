import React from "react";
import { Dropdown } from "semantic-ui-react";

import { makeUnique } from "./Utils";
import dt_data from "./data/device.types.mock.json";

//Might not need this - brand field might be uneditable

const brand_options = makeUnique(
  dt_data.map(({ brandName }) => ({ value: brandName, text: brandName }))
);

class BrandField extends React.Component {
  state = { brand_options };

  getFieldValue = () => {
    console.log("in brand getFieldValue");
    let index = this.refs.selectedVal.state.selectedIndex;
    console.log(brand_options[index]);
    return brand_options[index];
  };

  handleAddition = (e, { value }) => {
    this.setState({
      options: [{ text: value, value }, ...this.state.brand_options]
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
    console.log(this.findValue(brand_options, currentValue));

    return (
      <Dropdown
        ref="selectedVal"
        options={this.state.brand_options}
        placeholder="Choose Brand"
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

export default BrandField;
