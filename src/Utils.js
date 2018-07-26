import React from "react";

var catalog = {
  Audio: {
    /*"Episode": {
          "AMPLIFIER": {
              label: "Amplifier",
              models: [
                  "ESA-70V2CH-150W",
                  "ESA-70V2CH-300W",
                  "ESA-70V2CH-500W"
              ]
          }
      },*/
    Autonomic: {
      AMPLIFIER: {
        label: "Amplifier",
        overrideAttributes: { sshtunnel: { supports: true, port: 80.0, protocol: "HTTP" } },
        models: ["AU-M-120e", "AU-M-401e", "AU-M-801e"]
      }
    }
  },
  /*"Control System": {
      "URC": {
          "URC": {
              label: "URC",
              models: [
                  "MRX-8",
                  "MRX-10",
                  "MRX-10N",
                  "MRX-20",
                  "",
                  "CP-1",
                  "CP-2"
              ]
          }
      },
      "Control4": {
          "CONTROL4": {
              label: "Control4",
              models: [
                  "EA1",
                  "EA3",
                  "EA5",
                  "",
                  "HC250",
                  "HC800"
              ]
          }
      }
  },*/
  Media: {
    Binary: {
      MOIP: {
        label: "MOIP",
        overrideAttributes: {
          ovrcHome: false
        },
        models: [
          "B-900-MOIP-4K-CTRL",
          "",
          "B-900-AGENT",
          "B-900-DEC-RS",
          "B-900-ENC-RS",
          "",
          "MOIP-100-DIR"
        ]
      }
    },
    /*"Pioneer": {
          "PIONEER": {
              label: "Pioneer",
              models: [
                  "SC-LX101",
                  "SC-LX301",
                  "SC-LX501",
                  "SC-LX701",
                  "SX-LX801",
                  "SX-LX901",
                  "",
                  "VSX-831",
                  "VSX-1131"
              ]
          }
      },*/
    Autonomic: {
      STREAMING: {
        label: "Media Streaming Server",
        overrideAttributes: {
          sshtunnel: {
            supports: true,
            port: 80.0,
            protocol: "HTTP"
          }
        },
        models: ["MMS-1e", "MMS-3e", "MMS-5e"]
      }
    }
  },
  Networking: {
    "Araknis Networks": {
      WAP: {
        label: "Access Point",
        overrideAttributes: {
          logTimeSeries: true,
          parentalControls: true
        },
        models: [
          "AN100",
          "AN300",
          "",
          "AN-100-AP-I-N",
          "AN-300-AP-I-N",
          "AN-700-AP-I-N",
          "AN-100-AP-I-N-BETA",
          "AN-300-AP-I-N-BETA",
          "",
          "AN-500-AP-I-AC",
          "AN-700-AP-I-AC",
          "AN-700-AP-O-AC",
          "AN-500-AP-I-AC-BETA",
          "AN-700-AP-I-AC-BETA"
        ]
      },
      ROUTER: {
        label: "Router",
        models: ["AN-300-RT-4L2W", "AN-300-RT-4L2W-BETA"]
      },
      SWITCH: {
        label: "Switch",
        overrideAttributes: {
          logTimeSeries: true
        },
        models: [
          "AN-110-SW-5",
          "AN-110-SW-8",
          "AN-110-SW-16",
          "AN-110-SW-24",
          "",
          "AN-210-SW-8-POE",
          "AN-210-SW-16-POE",
          "AN-210-SW-24-POE",
          "AN-210-SW-48-POE",
          "",
          "AN-300-SW-8",
          "AN-300-SW-16",
          "AN-300-SW-24",
          "",
          "AN-300-SW-8-POE",
          "AN-300-SW-16-POE",
          "AN-300-SW-24-POE",
          "",
          "AN-300-SW-F-24",
          "AN-300-SW-R-24",
          "",
          "AN-310-SW-8",
          "AN-310-SW-16",
          "AN-310-SW-24",
          "AN-310-SW-48",
          "",
          "AN-310-SW-8-POE",
          "AN-310-SW-16-POE",
          "AN-310-SW-24-POE"
        ]
      }
    },
    OvrC: {
      HUB: {
        label: "Hub",
        ovrcPro: true,
        overrideAttributes: {
          logTimeSeries: true,
          ovrcHome: false,
          ovrcPro: true,
          sshtunnel: {
            supports: true,
            port: 80.0,
            protocol: "HTTP"
          }
        },
        models: ["HUB", "OVRC-100-HUB", "OVRC-300-HUB"]
      }
    }
  },
  Power: {
    WattBox: {
      WATTBOX: {
        label: "WattBox",
        overrideAttributes: { sshtunnel: { supports: true, port: 80.0, protocol: "HTTP" } },
        models: [
          "WB-800VS-IPVM-12",
          "WB-800VS-IPVM-18"
          /*"WB-200-IPCE-3",
                  "WB-200VB-IPCE-6",
                  "",
                  "WB-300-IP-3",
                  "WB-300VB-IP-5",
                  "",
                  "WB-400-IPCE-8",
                  "",
                  "WB-500-IP-8",
                  "",
                  "WB-600-IPVCE-12",
                  "WB-600CH-IPVCE-12",
                  "",
                  "WB-700-IPV-12",
                  "WB-700CH-IPV-12"*/
        ]
      }
    }
  },
  Surveillance: {
    Luma: {
      NVR: {
        label: "NVR",
        overrideAttributes: {
          webConnect: false
        },
        models: [
          "LUM-500-NVR-4CH",
          "LUM-500-NVR-8CH",
          "LUM-500-NVR-16CH",
          "",
          "LUM-501-NVR-8CH",
          "LUM-501-NVR-16CH",
          "",
          "LUM-510-NVR-4CH",
          "LUM-510-NVR-8CH",
          "LUM-510-NVR-16CH"
        ]
      },
      DVR: {
        label: "DVR",
        models: [
          "LUM-500-DVR-4CH",
          "LUM-500-DVR-8CH",
          "LUM-500-DVR-16CH",
          "",
          "LUM-501-DVR-4CH",
          "LUM-501-DVR-8CH",
          "LUM-501-DVR-16CH"
        ]
      },
      CAMERA: {
        label: "Camera",
        overrideAttributes: {
          webConnect: false
        },
        models: [
          "LUM-300-BUL-IP-GR",
          "LUM-300-BUL-IP-WH",
          "LUM-300-CUB-IPW-WH",
          "LUM-300-DOM-IP-BL",
          "LUM-300-DOM-IP-WH",
          "",
          "LUM-500-BUL-IP-GR",
          "LUM-500-BUL-IP-WH",
          "LUM-500-DOM-IP-BL",
          "LUM-500-DOM-IP-WH",
          "LUM-500-TUR-IP-BL",
          "LUM-500-TUR-IP-WH",
          "",
          "LUM-700-BUL-IPH-GR",
          "LUM-700-BUL-IPH-WH",
          "LUM-700-DOM-IPH-BL",
          "LUM-700-DOM-IPH-WH"
        ]
      }
    },
    "Wirepath Surveillance": {
      DVR: {
        label: "DVR",
        models: ["WPS-500-DVR-4CH", "WPS-500-DVR-8CH", "WPS-500-DVR-16CH"]
      },
      CAMERA: {
        label: "Camera",
        models: [
          "WPS-300-BUL-IP-(WH/GR)",
          "WPS-300-CUB-IP-WH",
          "WPS-300-DOM-IP-(BL/WH)",
          "WPS-500-PTZ-IP-WH",
          "WPS-550-BUL-IP-(WH/GR)",
          "WPS-550-DOM-IP-(BL/WH)",
          "WPS-750-BUL-IP-(WH/GR)",
          "WPS-750-BUL-IPH-(WH/GR)",
          "WPS-750-DOM-IP-(BL/WH)",
          "WPS-750-DOM-IPH-(BL/WH)"
        ]
      }
    }
  }
};
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

export function cat_options(data) {
  return makeUnique(data.map(({ category }) => ({ value: category, text: category })));
}

export function brand_options(data) {
  return makeUnique(data.map(({ brandName }) => ({ value: brandName, text: brandName })));
}

export function model_options(data) {
  return makeUnique(data.map(({ model }) => ({ value: model, text: model })));
}

export function dropdownHelper(data) {
  return makeUnique(data.map(prop => ({ value: prop, text: prop })));
}

export function populateCategory(cell) {
  let categories = Object.keys(catalog);
  return categories;
}

export function populateBrand(cell) {
  let brand_options = [];
  let categories = Object.keys(catalog);
  for (var i = 0; i < categories.length; i++) {
    if (cell === undefined || categories[i] === cell.category) {
      let brands = Object.keys(catalog[categories[i]]);
      brand_options = brands;
    }
  }
  return brand_options;
}

export function populateModel(cell) {
  let model_options = [];
  let categories = Object.keys(catalog);
  for (var i = 0; i < categories.length; i++) {
    let brands = Object.keys(catalog[categories[i]]);
    for (var j = 0; j < brands.length; j++) {
      if (cell === undefined || (categories[i] === cell.category && brands[j] === cell.brandName)) {
        let types = Object.keys(catalog[categories[i]][brands[j]]);
        for (var k = 0; k < types.length; k++) {
          let models = catalog[categories[i]][brands[j]][types[k]].models;
          for (var l = 0; l < models.length; l++) {
            model_options.push(models[l]);
          }
        }
      }
    }
  }
  return model_options;
}

// export function updateAttributes(cellName, cellValue, row) {
//   let category = row.category;
//   let brand = row.brandName;

//   let props = {};
//   props[cellName] = cellValue;
//   props.attributes = {};

//   let types = Object.keys(catalog[category][brand]);
//   for (var i = 0; i < types.length; i++) {
//     let models = catalog[category][brand][types[i]].models;
//     for (var k = 0; k < models.length; k++) {
//       if (cellValue === models[k]) {
//         let new_attributes = Object.keys(catalog[category][brand][types[i]].overrideAttributes);
//         for (var m = 0; m < new_attributes.length; m++) {
//           props.attributes[new_attributes[m]] =
//             catalog[category][brand][types[i]].overrideAttributes[new_attributes[m]];
//         }
//       }
//     }
//   }

//   return props;
// }

export function fillDropBrand(category) {
  let brand_options = [];
  let categories = Object.keys(catalog);

  for (var i = 0; i < categories.length; i++) {
    let brands = Object.keys(catalog[categories[i]]);
    if (category === "") {
      for (var j = 0; j < brands.length; j++) {
        brand_options.push(brands[j]);
      }
    }
    if (category === undefined || categories[i] === category) {
      brand_options = brands;
    }
  }
  return brand_options;
}

export function fillDropModel(brand) {
  let model_options = [];
  let categories = Object.keys(catalog);

  for (var i = 0; i < categories.length; i++) {
    let brands = Object.keys(catalog[categories[i]]);
    for (var j = 0; j < brands.length; j++) {
      if (brands[j] === brand || brand === "") {
        let types = Object.keys(catalog[categories[i]][brands[j]]);
        for (var k = 0; k < types.length; k++) {
          let models = catalog[categories[i]][brands[j]][types[k]].models;
          for (var l = 0; l < models.length; l++) {
            model_options.push(models[l]);
          }
        }
      }
    }
  }
  return model_options;
}

export function getAttributes(data) {
  let category = data.category;
  let brand = data.brandName;
  let model = data.model;
  let props = {};
  props.hasWireless = defaultAttributes.hasWireless;
  props.parentalControls = defaultAttributes.parentalControls;
  props.webconnect = defaultAttributes.webconnect;
  props.sshtunnel = { supports: false, port: 80, protocol: "HTTP" };

  if (model === "") {
    return props;
  }
  let types = Object.keys(catalog[category][brand]);
  for (let i = 0; i < types.length; i++) {
    let models = catalog[category][brand][types[i]].models;
    for (var j = 0; j < models.length; j++) {
      if (model === models[j]) {
        if (catalog[category][brand][types[i]].overrideAttributes !== undefined) {
          let new_attributes = Object.keys(catalog[category][brand][types[i]].overrideAttributes);
          let prop_attributes = Object.keys(props);
          for (var k = 0; k < new_attributes.length; k++) {
            for (var m = 0; m < prop_attributes.length; m++) {
              if (new_attributes[k] === prop_attributes[m])
                props[new_attributes[k]] =
                  catalog[category][brand][types[i]].overrideAttributes[new_attributes[k]];
            }
          }
        }
      }
    }
  }
  return props;
}

export function getProperties(data, name) {
  let prop = {};
  let category = data.category;
  let brand = data.brandName;
  let model = data.model;

  if (model === "") {
    return prop;
  }
  let types = Object.keys(catalog[category][brand]);
  for (var i = 0; i < types.length; i++) {
    let models = catalog[category][brand][types[i]].models;
    for (var j = 0; j < models.length; j++) {
      let type = catalog[category][brand][types[i]];
      if (model === models[j]) {
        if (name === "Type") {
          prop.type = types[i];
        }
        if (name === "Label") {
          prop.label = catalog[category][brand][types[i]].label;
        }
        if (name === "OvrC Pro") {
          type.overrideAttributes.ovrcPro === undefined
            ? (prop.ovrcPro = defaultAttributes.ovrcPro)
            : (prop.ovrcPro = type.overrideAttributes.ovrcPro);
        }
        if (name === "OvrC Home") {
          type.overrideAttributes.ovrcHome === undefined
            ? (prop.ovrcHome = defaultAttributes.ovrcHome)
            : (prop.ovrcHome = type.overrideAttributes.ovrcHome);
        }
        if (name === "Log Time Series") {
          type.overrideAttributes.logTimeSeries === undefined
            ? (prop.logTimeSeries = defaultAttributes.logTimeSeries)
            : (prop.logTimeSeries = type.overrideAttributes.logTimeSeries);
        }
      }
    }
  }
  return prop;
}

export function updateProperties(row) {
  let props = {};
  let category = row.category;
  let brand = row.brandName;
  let model = row.model;

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
          type.overrideAttributes.ovrcPro === undefined
            ? (props.ovrcPro = defaultAttributes.ovrcPro)
            : (props.ovrcPro = type.overrideAttributes.ovrcPro);
          type.overrideAttributes.ovrcHome === undefined
            ? (props.ovrcHome = defaultAttributes.ovrcHome)
            : (props.ovrcHome = type.overrideAttributes.ovrcHome);
          type.overrideAttributes.logTimeSeries === undefined
            ? (props.logTimeSeries = defaultAttributes.logTimeSeries)
            : (props.logTimeSeries = type.overrideAttributes.logTimeSeries);
        }
      }
    }
  }
  return props;
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
 *    @param data, specifically dt_data
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

    let new_attrs = [];
    new_attrs.push(data[i].attributes);
    let attributes = new_attrs;
    for (var j = 0; j < Object.keys(defaultAttributes).length; j++) {
      let key = Object.keys(defaultAttributes)[j];
      if (attributes[0][key] === undefined) {
        attributes[0][key] = defaultAttributes[key];
      }
    }
    data[i].attributes = attributes;
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
