import catalog from "./catalog.js";

/*------------ Validators ------------ */

/**
 * Summary: Validate the inputs of the insert modals
 *    @param cell, the value of the cell
 *    @return response, nothing if valid, error message is invalid
 */

//For Category, Brand, Model, and Release Date
export function selectValidator(cell) {
  const response = { isValid: true, notification: { type: "success", msg: "Success!", title: "" } };
  if (!cell) {
    response.isValid = false;
    response.notification.type = "error";
    response.notification.msg = "Value must be selected!";
    response.notification.title = "Requested Value";
  }
  return response;
}

//For Firmware Version and Release Notes
export function textValidator(cell) {
  const response = {
    isValid: true,
    notification: { type: "success", msg: "", title: "" }
  };
  if (!cell) {
    response.isValid = false;
    response.notification.type = "error";
    response.notification.msg = "Value must be entered!";
    response.notification.title = "Requested Value";
  }
  return response;
}

//For firmware upgrade filesize
export function fileSizeValidator(cell) {
  const nan = isNaN(parseInt(cell, 10));
  const response = { isValid: true, notification: { type: "success", msg: "", title: "" } };
  if (!cell) {
    response.isValid = false;
    response.notification.type = "error";
    response.notification.msg = "Value must be entered!";
    response.notification.title = "Requested Value";
  }
  if (nan) {
    response.isValid = false;
    response.notification.type = "error";
    response.notification.msg = "File size must be an integer!";
    response.notification.title = "Invalid file size";
  }
  return response;
}

//For firmware upgrade models - makes sure types are the same
export function modelValidator(modelArray) {
  const response = {
    isValid: true,
    notification: { type: "success", msg: "", title: "" }
  };
  if (modelArray[0] === undefined) {
    response.isValid = false;
    response.notification.type = "error";
    response.notification.msg = "Value must be selected!";
    response.notification.title = "Requested Value";
  } else {
    let categories = Object.keys(catalog);
    for (let i = 0; i < categories.length; i++) {
      let brands = Object.keys(catalog[categories[i]]);
      for (let j = 0; j < brands.length; j++) {
        let types = Object.keys(catalog[categories[i]][brands[j]]);
        for (let k = 0; k < types.length; k++) {
          let models = catalog[categories[i]][brands[j]][types[k]].models;
          for (let m = 0; m < models.length; m++) {
            for (let n = 0; n < modelArray.length; n++) {
              if (models[m] === modelArray[n]) {
                var currentModels = models;
              }
            }
          }
        }
      }
    }
    for (let z = 0; z < modelArray.length; z++) {
      if (currentModels.includes(modelArray[z]) === false) {
        response.isValid = false;
        response.notification.type = "error";
        response.notification.msg = "Model types must be the same!";
        response.notification.title = "Invalid Models";
        return response;
      }
    }
  }
  return response;
}
