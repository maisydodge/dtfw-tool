import React from "react";
import { Dropdown } from "semantic-ui-react";

import { brand_options } from "../Utils";
import { addNull } from "./ModalUtils";

/**
 * Summary: Class for the custom insert modal of device types, allows for addition of new brands if desired
 *    @return select field, Semantic UI React dropdowns that allow additions
 */
class BrandField extends React.Component {
  state = {
    brands: brand_options(this.props.data)
  };

  getFieldValue = () => {
    //console.log("Brand getFieldValue: ");
    let index = this.refs.selectedVal.state.selectedIndex;
    //console.log(this.state.brands[index]);
    return this.state.brands[index].value;
  };

  // handleAddition = (e, { value }) => {
  //   this.setState({
  //     options: [{ text: value, value }, ...this.state.brand_options]
  //   });
  // };

  handleChange = (e, { value }) => this.setState({ currentValue: value });

  render() {
    const { currentValue } = this.state.brands;

    //console.log("Brand current value: " + currentValue);
    //console.log("Brand current value index: " + findValue(brand_options, currentValue));

    if (this.state.brands[this.state.brands.length - 1].value !== "") {
      addNull(this.state.brands);
    }

    return (
      <Dropdown
        ref="selectedVal"
        options={this.state.brands}
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
