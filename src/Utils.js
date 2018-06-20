import React from "react";
import dt_data from "./data/device.types.mock.json";

/*----- Default Attributes -----*/
const defaultAttributes = {
  webconnect: true,
  ovrcHome: true,
  ovrcPro: false,
  logTimeSeries: false,
  parentalControls: false
};

/*------------ Validators ------------ */

/**
 * Summary: Validate the inputs at the following cells : URL, fileSize, TFTP URL
 *    @param cell, the value of the cell (row.dataField)
 *    @return the value at the cell if valid, error statement if not.
 */
export function urlValidator(cell) {
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (!regexp.test(cell)) return alert("Not a valid URL");
  else return cell;
}

export function fileSizeValidator(cell) {
  const nan = isNaN(parseInt(cell, 10));
  if (nan) return alert("File Size must be a integer!");
  else return cell;
}

export function tftpURLValidator(cell, row) {
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (row.tftpStatus === false || row.tftpStatus === "false" || row.tftpStatus === undefined) {
    return "TFTP Status must be enabled to add URL.";
  }
  if (!regexp.test(cell) && cell !== undefined) return alert("Not a valid TFTP URL");
  else return cell;
}

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
 * Summary: Various export functions added to dataFormat of some cells
 * Description: booleanCheck replaces 'true' and 'false' with an icon
 *              displaySSH displays the three elements of SSH Tunnels in one cell
 *              formatModels lists the models associated with each firmware ugrade
 *                           with newlines rather than commas
 *    @param cell, the value at the cell
 *    @return an icon, the values stored in 'sshtunnels', and array of models
 */

export function booleanCheck(cell, row, onStatusUpdate) {
  if (cell === true || cell === "true")
    return <i className="check circle outline icon" onToggle={onStatusUpdate} />;
  // when cell is false or undefined
  else return <i className="circle outline icon" onToggle={onStatusUpdate} />;
}

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

export function formatModels(cell) {
  let models = "";
  for (var i = 0; i < cell.length; i++) {
    models += cell[i] + "<br/>";
  }
  return models;
}

/**
 * Summary: Give the undefined attributes the default values
 *          Used before populating the table
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
 * Summary: After the cell saves post editing, alerts will display to confirm the changes
 *    @param row, the row that is being edited/saved
 *    @param cellName, the name of the cell that is being edited/saved
 *    @param cellValue, the new value of the cell after editing
 */
export function onAfterSaveCell(row, cellName, cellValue) {
  alert(`Save cell ${cellName} with value ${cellValue}`);

  let rowStr = "";
  for (const prop in row) {
    rowStr += prop + ": " + row[prop] + "\n";
  }

  alert("The whole row :\n" + rowStr);
}

//TODO: Update/fix this
/**
 * Summary: After inserting a row, an alert confirming the properties of the new row is displayed
 *    @param row, the new row
 */
//This will be used to set attributes from API - this could call another function getAttributes or something
export function onAfterInsertRow(row) {
  let newRowStr = "";
  let newAttrStr = ""; //to displayed attributes

  for (const prop in row) {
    newRowStr += prop + ": " + row[prop] + " \n";
  }

  //this will need to be looped because not all will be undefined
  row["attributes"] = [];
  if (row["attributes"][0] === undefined) {
    row["attributes"][0] = defaultAttributes;
  }

  for (const prop in row["attributes"][0]) {
    newAttrStr += prop + ": " + row["attributes"][0][prop] + " \n";
  }

  alert("The new row is:\n " + newRowStr + "\nAttributes: \n" + newAttrStr);
}

/**
 * Summary: Translates regular text to HTML unordered list for the firmware release notes
 *    @param cell, the value stored in the cell
 *    @return cell, the HTML unordered list of the original text
 */
export function text2HTML(cell) {
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
 * Summary: passed into dataFormat of release notes, makes string into object
 *          not very sure why cell is passed as an object, which is why this works
 * @param cell, the value of the cell (assuming it's passed as an object)
 *    @return cell, HTML that displays as bulleted list
 */
export function HTML2text(cell) {
  return cell;
}
