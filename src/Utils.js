import React from "react";
import dt_data from "./data/device.types.mock.json";

/*------------ Validators ------------ */

/**
 * Summary: Validate the inputs at the following cells : URL, fileSize, TFTP URL
 *    @param cell, the value of the cell (row.dataField)
 *    @return the value at the cell if valid, error statement if not.
 */
export function urlValidator(cell) {
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (!regexp.test(cell)) {
    return alert("Not a valid URL");
  } else return cell;
}

export function fileSizeValidator(cell) {
  const nan = isNaN(parseInt(cell, 10));
  if (nan) {
    return alert("File Size must be a integer!");
  } else return cell;
}

export function tftpURLValidator(cell, row) {
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (row.tftpStatus === false || row.tftpStatus === undefined) {
    return "TFTP Status must be enabled to add URL.";
  }
  if (!regexp.test(cell) && cell !== undefined) {
    return alert("Not a valid URL");
  } else return cell;
}

/*------------ Dropdown Populators ------------ */

/**
 * Summary: Populate the dropdown menus based on prior dropdown selection.
 * Description: Category presents all options, Brand is filtered by selected category,
 *              and Model is filtered by selected category and brand.
 *    @param row
 *    @return categories, brands, models - arrays of dropdown selection options
 */
export function populateCategory(row) {
  let categories = [];
  for (var i = 0; i < dt_data.length; i++) {
    if (categories.indexOf(dt_data[i]["category"]) === -1) {
      categories.push(dt_data[i]["category"]);
    }
  }
  return categories;
}

export function populateBrand(row) {
  let brands = [];
  for (var i = 0; i < dt_data.length; i++) {
    if (brands.indexOf(dt_data[i]["brandName"]) === -1) {
      if (row === undefined || dt_data[i]["category"] === row.category) {
        brands.push(dt_data[i]["brandName"]);
      }
    }
  }
  return brands;
}

export function populateModel(row) {
  let models = [];
  for (var i = 0; i < dt_data.length; i++) {
    if (models.indexOf(dt_data[i]["model"]) === -1) {
      if (row === undefined) {
        models.push(dt_data[i]["model"]);
      } else if (
        dt_data[i]["category"] === row.category &&
        dt_data[i]["brandName"] === row.brandName
      ) {
        models.push(dt_data[i]["model"]);
      }
    }
  }
  return models;
}

/*------------ Data Formatters ------------ */

/**
 * Summary: Various export functions added to dataFormat of some cells
 * Description: booleanCheck replaces 'true' and 'false' with an icon
 *              displaySSH displays the three elements of SSH Tunnels in one cell
 *              formatModels lists the models associated with each firmware ugrade
 *                           with newlines rather than commas
 *    @param cell, the value at the cell
 *    @return an icon, the values stored in 'sshtunnels', and array of models
 */

export function booleanCheck(cell) {
  if (cell === true) return <i className="check circle outline icon" />;
  // when cell is false or undefined
  else return <i className="circle outline icon" />;
}

export function displaySSH(cell) {
  if (cell["supports"] === undefined) {
    return "Not supported";
  }
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

export function formatModels(cell) {
  let models = "";
  for (var i = 0; i < cell.length; i++) {
    models += cell[i] + "<br/>";
  }
  return models;
}

// export function calendar(row) {
//   //TODO: add handle change
//   return <DatePicker />
// };

/**
 * Summary: Give the undefined attributes the default values
 *          Used before populating the table
 *    @param data, specifically dt_data
 *    @return data, modified to have the default attributes included
 */
export function applyDefaults(data, defaultAttributes) {
  for (var i = 0; i < data.length; i++) {
    let default_array = ["webconnect", "ovrcHome", "ovrcPro", "logTimeSeries", "parentalControls"];
    let attributes = data[i]["attributes"][0];
    for (var j = 0; j < default_array.length; j++) {
      if (attributes[j] === undefined) attributes[j] = defaultAttributes[j];
    }
  }
  return data;
}

/*--------Custom Insert Modal---------*/

export function makeUnique(option) {
  var uniques = [];
  var itemsFound = {};
  for (var i = 0, l = option.length; i < l; i++) {
    var stringified = JSON.stringify(option[i]);
    if (itemsFound[stringified]) {
      continue;
    }
    uniques.push(option[i]);
    itemsFound[stringified] = true;
  }
  return uniques;
}

/**
 * Summary: filterOptions takes the dropdown options already created and makes it usable for the
 *          filter property in the table.
 *    @param options - unique array of objects with value and text used for dropdown menus
 *    @return filtered - object of key value pairs
 *            For example, filterOptions(cat_options) = {'Media':'Media', 'Networking':'Networking', 'Power':'Power', 'Surveillance':'Surveillance'}
 */
export function filterOptions(options) {
  let filtered = {};
  for (var i = 0; i < options.length; i++) {
    filtered[options[i].text] = options[i].text;
  }
  return filtered;
}
