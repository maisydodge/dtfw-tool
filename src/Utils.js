import React from "react";
import dt_data from "./data/device.types.mock.json";

/*----- Default Attributes -----*/
export const defaultAttributes = {
  webconnect: true,
  ovrcHome: true,
  ovrcPro: false,
  logTimeSeries: false,
  parentalControls: false
};

/*----- Constants for dropdowns -----*/
export const cat_options = makeUnique(
  dt_data.map(({ category }) => ({ value: category, text: category }))
);

export const brand_options = makeUnique(
  dt_data.map(({ brandName }) => ({ value: brandName, text: brandName }))
);

export const model_options = makeUnique(
  dt_data.map(({ model }) => ({ value: model, text: model }))
);

/*------------ Dropdown Populators ------------ */

/**
 * Summary: Populate the dropdown menus based on prior dropdown selection.
 * Description: Category presents all options, Brand is filtered by selected category,
 *              and Model is filtered by selected category and brand.
 *    @param cell
 *    @return categories, brands, models - arrays of dropdown selection options
 */
export function populateCategory(cell) {
  let categories = [];
  for (var i = 0; i < dt_data.length; i++) {
    if (categories.indexOf(dt_data[i]["category"]) === -1) {
      categories.push(dt_data[i]["category"]);
    }
  }
  return categories;
}

export function populateBrand(cell) {
  let brands = [];
  for (var i = 0; i < dt_data.length; i++) {
    if (brands.indexOf(dt_data[i]["brandName"]) === -1) {
      if (cell === undefined || dt_data[i]["category"] === cell.category) {
        brands.push(dt_data[i]["brandName"]);
      }
    }
  }
  return brands;
}

export function populateModel(cell) {
  let models = [];
  for (var i = 0; i < dt_data.length; i++) {
    if (models.indexOf(dt_data[i]["model"]) === -1) {
      if (cell === undefined) {
        models.push(dt_data[i]["model"]);
      } else if (
        dt_data[i]["category"] === cell.category &&
        dt_data[i]["brandName"] === cell.brandName
      ) {
        models.push(dt_data[i]["model"]);
      }
    }
  }
  return models;
}

/*------------ Data Formatters ------------ */

/**
 * Summary: Replaces 'true' and 'false' with an icon of a checked or unchecked circle
 *    @param cell, either 'true' or 'false'
 *    @return icon, a checked circle if true or an unchecked circle if false
 */
export function booleanCheck(cell) {
  if (cell === true || cell === "true") return <i className="check circle outline icon" />;
  else return <i className="circle outline icon" />;
}

/**
 * Summary: displays the SSH properties of device types with ssh tunnel enabled
 *    @param cell, either an empty array or an sshtunnel object with the properties supports, port, and protocol
 *    @return "Not supported" if undefined or the values of the ssh tunnel properties
 */
export function displaySSH(cell) {
  if (cell === undefined || cell["supports"] === undefined) return "Not supported";
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
  if (cell.includes("T00:00:00.000Z")) {
    return cell.slice(0, 10);
  } else {
    var formatted = cell;
    cell = cell + "T00:00:00.000Z";
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

/*------------ Misc ------------ */

/**
 * Summary: Gives the undefined attributes the default values
 *          Used before populating the table and when adding new device types
 *    @param data, specifically dt_data
 *    @return data, modified to have the default attributes included
 */
export function applyDefaults(data, defaultAttributes) {
  for (var i = 0; i < data.length; i++) {
    let attributes = data[i]["attributes"][0];
    for (var j = 0; j < Object.keys(defaultAttributes).length; j++) {
      let key = Object.keys(defaultAttributes)[j];
      if (attributes[key] === undefined) {
        attributes[key] = defaultAttributes[key];
      }
    }
  }
  return data;
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
export function filterOptions(options) {
  let pairs = {};
  for (var i = 0; i < options.length; i++) {
    pairs[options[i].text] = options[i].text;
  }
  return pairs;
}

/**
 * Summary: After the cell saves post editing, alert will display to confirm the changes
 *    @param row, the row that is being edited/saved
 *    @param cellName, the name of the cell that is being edited/saved
 *    @param cellValue, the new value of the cell after editing
 */
export function onAfterSaveCell(row, cellName, cellValue) {
  alert(`Save cell ${cellName} with value ${cellValue}`);
}

/**
 * Summary: After inserting a row, an alert confirming the properties of the new row is displayed
 *    @param row, the new row
 *    @return alert confirming the new row properties
 */
export function onAfterInsertRow(row) {
  let newRowStr = "";
  let newAttrStr = ""; //to displayed attributes

  for (const prop in row) {
    newRowStr += prop + ": " + row[prop] + " \n";
  }

  //apply default attributes
  row["attributes"] = [];
  row["attributes"][0] = {};
  for (var j = 0; j < Object.keys(defaultAttributes).length; j++) {
    let key = Object.keys(defaultAttributes)[j];
    if (row["attributes"][0][key] === undefined) {
      row["attributes"][0][key] = defaultAttributes[key];
    }
  }

  for (const prop in row["attributes"][0]) {
    newAttrStr += prop + ": " + row["attributes"][0][prop] + " \n";
  }

  alert("The new row is:\n " + newRowStr + "\nAttributes: \n" + newAttrStr);

  // //request create
  // fetch("https://34.229.145.29/", {
  //   method: "POST",
  //   body: {
  //     action: "Create",
  //     parent: "", //idk
  //     documents: ""
  //   },
  //   headers: "Content-Type: application/json"
  // })
  //   .then(result => {
  //     console.log(result);
  //     return result.json();
  //   })
  //   .then(data => {
  //     console.log(data);
  //     this.setState({ data });
  //   });
}
