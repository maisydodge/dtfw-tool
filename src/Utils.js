import React from "react";

/*----- Default Attributes -----*/
export const defaultAttributes = {
  webconnect: true,
  ovrcHome: true,
  ovrcPro: false,
  logTimeSeries: false,
  parentalControls: false
};

/*----- Constants for dropdowns -----*/

export function cat_options(data) {
  return makeUnique(data.map(({ category }) => ({ value: category, text: category })));
}

export function brand_options(data) {
  return makeUnique(data.map(({ brandName }) => ({ value: brandName, text: brandName })));
}

export function model_options(data) {
  return makeUnique(data.map(({ model }) => ({ value: model, text: model })));
}

export function fwmodel_options(data) {
  var options = [];
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].models.length; j++) {
      options.push(data[i].models[j]);
    }
  }
  options = makeUnique(options.map(model => ({ value: model, text: model })));
  return options;
}

/*------------ Dropdown Populators ------------ */

/**
 * Summary: Populate the dropdown menus based on prior dropdown selection.
 * Description: Category presents all options, Brand is filtered by selected category,
 *              and Model is filtered by selected category and brand.
 *    @param cell
 *    @return categories, brands, models - arrays of dropdown selection options
 */
// export function populateCategory(cell) {
//   let categories = [];
//   for (var i = 0; i < dt_data.length; i++) {
//     if (categories.indexOf(dt_data[i]["category"]) === -1) {
//       categories.push(dt_data[i]["category"]);
//     }
//   }
//   return categories;
// }

// export function populateBrand(cell) {
//   let brands = [];
//   for (var i = 0; i < dt_data.length; i++) {
//     if (brands.indexOf(dt_data[i]["brandName"]) === -1) {
//       if (cell === undefined || dt_data[i]["category"] === cell.category) {
//         brands.push(dt_data[i]["brandName"]);
//       }
//     }
//   }
//   return brands;
// }

// export function populateModel(cell) {
//   let models = [];
//   for (var i = 0; i < dt_data.length; i++) {
//     if (models.indexOf(dt_data[i]["model"]) === -1) {
//       if (cell === undefined) {
//         models.push(dt_data[i]["model"]);
//       } else if (
//         dt_data[i]["category"] === cell.category &&
//         dt_data[i]["brandName"] === cell.brandName
//       ) {
//         models.push(dt_data[i]["model"]);
//       }
//     }
//   }
//   return models;
// }

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

/**
 * Summary: Formats the firmware upgrades attributes property to an object
 *    @param cell, the value at the cell
 *    @return myobject, cell formatted as an object
 */
// export function attrFormatter(cell) {
//   if (cell !== null && cell instanceof Object) {
//     return cell;
//   }
//   var myobject = {};
//   if (cell === null) {
//     return myobject;
//   }
//   var lines = cell.split("\n");
//   for (var i = 0; i < lines.length; i++) {
//     let current = lines[i].split(":");
//     myobject[current[0]] = current[1];
//   }
//   console.log(myobject);
//   return myobject;
// }

/**
 * Summary: Formats the firmware upgrades prerequisites property to an array of an object
 *    @param cell, the value at the cell
 *    @return myarray, [{}]
 */
// export function prereqFormatter(cell) {
//   if (cell !== null && cell.constructor === Array) {
//     return cell;
//   }
//   var myarray = [];
//   myarray[0] = cell;
//   return myarray;
// }

/*------------ Misc ------------ */

/**
 * Summary: Gives the undefined attributes the default values
 *          Used before populating the table and when adding new device types
 *    @param data, specifically dt_data
 *    @return data, modified to have the default attributes included
 */
export function applyDefaults(data, defaultAttributes) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].attributes === undefined) {
      data[i].attributes = [];
    }
    let new_attrs = [];
    new_attrs.push(data[i].attributes);
    let attributes = new_attrs;
    for (var j = 0; j < Object.keys(defaultAttributes).length; j++) {
      let key = Object.keys(defaultAttributes)[j];
      if (attributes[0][key] === undefined) {
        attributes[0][key] = defaultAttributes[key];
      }
    }
    attributes[0].type = data[i].type; // add type to attributes to display in expandable
    attributes[0].label = data[i].label; // add label to attributes to display in expandable
    data[i].attributes = attributes;
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
