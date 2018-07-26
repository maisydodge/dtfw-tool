import React from "react";
import { Dropdown } from "semantic-ui-react";

import { fillDropBrand, dropdownHelper } from "../Utils";
import { addNull } from "./ModalUtils";

/**
 * Summary: Class for the custom insert modal of device types, allows for addition of new brands if desired
 *    @return select field, Semantic UI React dropdowns that allow additions
 */
class BrandField extends React.Component {
  state = {
    brands: dropdownHelper(fillDropBrand(this.props.data))
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ brands: dropdownHelper(fillDropBrand(nextProps.data)) });
  }

  getFieldValue = () => {
    let index = this.refs.selectedVal.state.selectedIndex;
    return this.state.brands[index].value;
  };

  // handleAddition = (e, { value }) => {
  //   this.setState({
  //     options: [{ text: value, value }, ...this.state.brand_options]
  //   });
  // };

  handleChange = (e, { value }) => {
    this.setState({ currentValue: value });
    this.props.sendBrand(value);
  };

  render() {
    const { currentValue } = this.state.brands;

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
        value={currentValue}
        //allowAdditions
        //onAddItem={this.handleAddition}
        onChange={this.handleChange}
      />
    );
  }
}

export default BrandField;
