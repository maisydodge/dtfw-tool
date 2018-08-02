import React from "react";
import catalog from "./catalog.js";

/*----- Default Attributes -----*/
export const defaultAttributes = {
  webconnect: true,
  ovrcHome: true,
  ovrcPro: false,
  logTimeSeries: false,
  parentalControls: false,
  hasWireless: false
};

/*----- Functions to populate dropdowns -----*/

/**
 * Summary: Modifies the arrays for each option to have value and text
 *    @param data, arrays of dropdown choices
 *    @return unique array of dropdown choice objects
 */
export function dropdownHelper(data) {
  return makeUnique(data.map(prop => ({ value: prop, text: prop })));
}

/**
 * Summary: Returns the filter options for the category and brand filters
 *    @return options, choices for the category and brand filters
 */
export function cat_options() {
  var categories = Object.keys(catalog);
  return dropdownHelper(categories);
}

export function brand_options() {
  var categories = Object.keys(catalog);
  var brand_options = [];
  for (let i = 0; i < categories.length; i++) {
    let brands = Object.keys(catalog[categories[i]]);
    for (let j = 0; j < brands.length; j++) {
      brand_options.push(brands[j]);
    }
  }
  return dropdownHelper(brand_options);
}

/**
 * Summary: Returns the options for the categories, brands, and models when editing the table
 *          Brand options are based on current category, and model options are based on current category and brand
 *    @param row, the current row being edited
 *    @return options, arrays of dropdown options of category, brand, and model
 */
export function populateCategory(row) {
  return Object.keys(catalog);
}

export function populateBrand(row) {
  return Object.keys(catalog[row.category]);
}

export function populateModel(row) {
  let category = row.category;
  let brand = row.brandName;
  let model_options = [];

  let types = Object.keys(catalog[category][brand]);
  console.log("types: " + types);
  for (var i = 0; i < types.length; i++) {
    let models = catalog[category][brand][types[i]].models;
    for (var j = 0; j < models.length; j++) {
      model_options.push(models[j]);
    }
  }
  return model_options;
}

/**
 * Summary: Returns the options for the device type brand dropdown for the insert modal
 *    @param category, the category selected in the insert modal
 *    @return brand_options, an array of the brands given the selected category
 *            If no category is selected, all brands are provided
 */
export function fillDropBrand(category) {
  let brand_options = [];

  let categories = Object.keys(catalog);
  for (var i = 0; i < categories.length; i++) {
    let brands = Object.keys(catalog[categories[i]]);
    if (category === "" || categories[i] === category) {
      for (var j = 0; j < brands.length; j++) {
        brand_options.push(brands[j]);
      }
    }
  }
  return brand_options;
}

/**
 * Summary: Returns the options for the device type model dropdown for the insert modal
 *    @param data, the category and brand selected in the modal
 *    @return model_options, an array of the models given the category and brand
 *            If no category or brand is selected, all models are provided
 */
export function fillDropModel(data) {
  let category = data.category;
  let brand = data.brand;
  let model_options = [];

  let categories = Object.keys(catalog);
  for (var i = 0; i < categories.length; i++) {
    if (categories[i] === category || category === "") {
      let brands = Object.keys(catalog[categories[i]]);
      for (var j = 0; j < brands.length; j++) {
        if (brands[j] === brand || brand === "") {
          let types = Object.keys(catalog[categories[i]][brands[j]]);
          for (var k = 0; k < types.length; k++) {
            let models = catalog[categories[i]][brands[j]][types[k]].models;
            for (var l = 0; l < models.length; l++) {
              if (models[l] !== "") model_options.push(models[l]);
            }
          }
        }
      }
    }
  }
  return model_options;
}

/**
 * Summary: Returns the options for the firmware model dropdown on the insert modal
 *    @param data, this.state.firmwareupgrades
 *    @return options
 */
export function fwmodel_options(data) {
  var options = [];
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].models.length; j++) {
      options.push(data[i].models[j]);
    }
  }
  return dropdownHelper(options);
}

/**
 * Summary: Gets the updated values of the attributes (hasWireless, parentalControls, webconnect, sshtunnel)
 *          when changing the model
 *    @param row, the row that is being updated
 *    @param cellValue, the new value of the model cell
 *    @return props, the updated properties of the edited device type
 */
export function getAttributes(data, cellValue) {
  let props = {};
  let category = data.category;
  let brand = data.brandName;
  let model = data.model;
  if (cellValue !== undefined) {
    model = cellValue;
  }

  props.hasWireless = defaultAttributes.hasWireless;
  props.parentalControls = defaultAttributes.parentalControls;
  props.webconnect = defaultAttributes.webconnect;
  props.sshtunnel = { supports: false, port: 80, protocol: "HTTP" };

  if (model === "") {
    return props;
  }
  if (catalog[category][brand] === undefined) {
    return props;
  }
  let types = Object.keys(catalog[category][brand]);
  for (let i = 0; i < types.length; i++) {
    let models = catalog[category][brand][types[i]].models;
    for (var j = 0; j < models.length; j++) {
      if (
        model === models[j] &&
        catalog[category][brand][types[i]].overrideAttributes !== undefined
      ) {
        let new_attributes = Object.keys(catalog[category][brand][types[i]].overrideAttributes);
        console.log("new attributes: " + new_attributes);
        let current_attributes = Object.keys(props);
        for (var k = 0; k < new_attributes.length; k++) {
          for (var m = 0; m < current_attributes.length; m++) {
            if (new_attributes[k] === current_attributes[m])
              props[new_attributes[k]] =
                catalog[category][brand][types[i]].overrideAttributes[new_attributes[k]];
          }
        }
      }
    }
  }
  return props;
}

/**
 * Summary: Gets the updated values of the properties (type, label, ovrcHome, ovrcPro, logTimeSeries)
 *          when changing the model
 *    @param row, the row that is being updated
 *    @param cellValue, the new value of the model cell
 *    @return props, the updated properties of the edited device type
 */
export function updateProperties(row, cellValue) {
  let props = {};
  let category = row.category;
  let brand = row.brandName;
  let model = cellValue;

  if (model === "") {
    return props;
  }
  let types = Object.keys(catalog[category][brand]);
  for (var i = 0; i < types.length; i++) {
    let models = catalog[category][brand][types[i]].models;
    for (var j = 0; j < models.length; j++) {
      let type = catalog[category][brand][types[i]];
      if (model === models[j]) {
        props.type = types[i];
        props.label = catalog[category][brand][types[i]].label;
        if (type.overrideAttributes !== undefined) {
          setAttr(type, props, "ovrcPro");
          setAttr(type, props, "ovrcHome");
          setAttr(type, props, "logTimeSeries");
        }
      }
    }
  }
  return props;
}

/**
 * Summary: Gets the values of the properties (type, label, ovrcHome, ovrcPro, logTimeSeries) of the insert modal
 *    @param data, the category, brandName, and model of the new device type
 *    @param name, the name of the property being retrieved
 *    @return prop, the value of the property 'name'
 */
export function getProperties(data, name) {
  let prop = {};
  let category = data.category;
  let brand = data.brandName;
  let model = data.model;

  if (model === "") {
    return prop;
  }
  if (catalog[category][brand] === undefined) {
    return prop;
  }
  let types = Object.keys(catalog[category][brand]);
  for (var i = 0; i < types.length; i++) {
    let models = catalog[category][brand][types[i]].models;
    for (var j = 0; j < models.length; j++) {
      let type = catalog[category][brand][types[i]];
      if (model === models[j]) {
        switch (name) {
          case "Type":
            prop.type = types[i];
            break;
          case "Label":
            prop.label = catalog[category][brand][types[i]].label;
            break;
          case "OvrC Pro":
            setAttr(type, prop, "ovrcPro");
            break;
          case "OvrC Home":
            setAttr(type, prop, "ovrcHome");
            break;
          case "Log Time Series":
            setAttr(type, prop, "logTimeSeries");
            break;
          default:
            break;
        }
      }
    }
  }
  return prop;
}

/**
 * Summary: Helper function to set the attribute/property to the default attribute or override attribute
 *          provided by the catalog
 *    @param type, the 'Type' property provided by the catalog
 *    @param prop, the object to be returned
 *    @param name, the name of the property being edited
 */
export function setAttr(type, prop, name) {
  type.overrideAttributes[name] === undefined
    ? (prop[name] = defaultAttributes[name])
    : (prop[name] = type.overrideAttributes[name]);
}

/*------------ Data Formatters ------------ */

/**
 * Summary: Replaces 'true' and 'false' with an icon of a checked or unchecked circle
 *    @param cell, either 'true' or 'false'
 *    @return icon, a checked circle if true or an unchecked circle if false
 */
export function booleanCheck(cell) {
  if (cell === "true" || cell === true) {
    cell = true;
    return <i className="check circle outline icon" />;
  } else {
    cell = false;
    return <i className="circle outline icon" />;
  }
}

/**
 * Summary: displays the SSH properties of device types with ssh tunnel enabled
 *    @param cell, either an empty array or an sshtunnel object with the properties supports, port, and protocol
 *    @return "Not supported" if undefined or the values of the ssh tunnel properties
 */
export function displaySSH(cell) {
  if (cell === undefined || cell["supports"] === undefined || cell["supports"] === false)
    return "Not supported";
  return (
    "Supports: " +
    cell["supports"] +
    "<br/>" +
    "Port: " +
    cell["port"] +
    "<br/>" +
    "Protocol: " +
    cell["protocol"]
  );
}

/**
 * Summary: Formats the models associated with each firmware upgrade
 *          Lists with newlines instead of commas
 *    @param cell, the array of models assocaited with the firmware upgrade
 *    @return models, the string of models separated with newlines
 */
export function formatModels(cell) {
  let models = "";
  for (var i = 0; i < cell.length; i++) {
    models += cell[i] + "<br/>";
  }
  return models;
}

/**
 * Summary: Formats the firmware upgrade Release Date column
 *          If received in full ISO 8601 format,
 * @param cell, the value of release date
 * @return If received in full ISO 8601 format, will display only YYYY/MM/DD
 *         If received in YYYY/MM/DD, will store full ISO 8601 but display YYYY/MM/DD
 */
export function formatDate(cell) {
  if (cell === undefined) {
    return cell;
  }
  if (cell.includes("T00:00:00Z")) {
    return cell.slice(0, 10);
  } else {
    var formatted = cell;
    cell = cell + "T00:00:00Z";
    return formatted;
  }
}

/**
 * Summary: Translates regular text to HTML unordered list for the firmware release notes
 *    @param cell, the value stored in the cell
 *    @return cell, the HTML unordered list of the original text
 */
export function text2HTML(cell) {
  if (!cell) return "";

  var text = "";
  var lines = cell.split("\n");

  for (var i = 0; i < lines.length; i++) {
    text += "<li>" + lines[i] + "</li>";
  }
  text = "<ul>" + text + "</ul>";
  cell = text;
  return cell;
}

/**
 * Summary: Formats the display of Release Notes
 *          If cell contains an HTML list, it will be displayed as a bulleted list
 *          If cell contains plain text, it is passed through text2HTML to make into HTML list
 *    @param cell, the value of release notes
 *    @return cell, HTML that displays as bulleted list
 */
export function HTML2text(cell) {
  if (!cell.includes("<ul>", "</ul>", "<li>", "</li>")) {
    return text2HTML(cell);
  }
  return cell;
}

/**
 * Summary: Formats the cell so device type property 'Type' and
 *          firmware upgrade property 'Device Type' are capitalized
 *    @param cell, the value of the cell
 *    @return upper, the modified cell value
 */
export function allCaps(cell) {
  var upper = cell.toUpperCase();
  return upper;
}

/*------------ Misc ------------ */

/**
 * Summary: Gives the undefined attributes the default values
 *          Used before populating the table and when adding new device types
 *    @param data, specifically device types
 *    @return data, modified to have the default attributes included
 */
export function applyDefaults(data, defaultAttributes) {
  for (var i = 0; i < data.length; i++) {
    // In order to display in the expandable attributes table
    fillAttributes(data[i], "type");
    fillAttributes(data[i], "label");
    fillAttributes(data[i], "ovrcPro");
    fillAttributes(data[i], "ovrcHome");
    fillAttributes(data[i], "logTimeSeries");

    let withDefaults = [];
    withDefaults.push(data[i].attributes);
    for (var j = 0; j < Object.keys(defaultAttributes).length; j++) {
      let key = Object.keys(defaultAttributes)[j];
      if (withDefaults[0][key] === undefined) {
        withDefaults[0][key] = defaultAttributes[key];
      }
    }
    data[i].attributes = withDefaults;
  }
  return data;
}

export function fillAttributes(dataRow, prop) {
  if (dataRow.attributes[prop] === undefined && dataRow[prop] !== undefined) {
    dataRow.attributes[prop] = dataRow[prop];
  }
}

/**
 * Summary: Removes duplicates from filter dropdown options
 *    @param options, array of filter options, with duplicates
 *    @return uniques, options without the duplicates
 */
export function makeUnique(options) {
  var uniques = [];
  var itemsFound = {};
  for (var i = 0; i < options.length; i++) {
    var stringified = JSON.stringify(options[i]);
    if (itemsFound[stringified]) continue;
    uniques.push(options[i]);
    itemsFound[stringified] = true;
  }
  return uniques;
}

/**
 * Summary: filterOptions takes the dropdown options already created and makes it usable for the
 *          filter property in the table.
 *    @param options - unique array of objects with value and text used for dropdown menus
 *    @return pairs - object of key value pairs
 *            For example, filterOptions(cat_options) = {'Media':'Media', 'Networking':'Networking', 'Power':'Power', 'Surveillance':'Surveillance'}
 */
export function filterOptions(options, row) {
  let pairs = {};
  for (var i = 0; i < options.length; i++) {
    if (options[i].text === undefined) continue;
    pairs[options[i].text] = options[i].text;
  }
  return pairs;
}

/**
 * Summary: Used by both device types and firmware upgrades to alert the user of a new row
 *    @param row, the newly inserted row
 */
export function onAfterInsertRow(row) {
  let newRowStr = "";
  for (const prop in row) {
    newRowStr += prop + ": " + row[prop] + " \n";
  }
  alert("The new row is:\n " + newRowStr);
}
