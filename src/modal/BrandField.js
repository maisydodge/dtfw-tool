import React from "react";
import { Dropdown } from "semantic-ui-react";

import { brand_options } from "../Utils";
import { addNull, findValue } from "./ModalUtils";

/**
 * Summary: Class for the custom insert modal of device types, allows for addition of new brands if desired
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

  render() {
    const { currentValue } = this.state;

    console.log("Brand current value: " + currentValue);
    console.log("Brand current value index: " + findValue(brand_options, currentValue));

    addNull(brand_options);

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
