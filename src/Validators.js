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
  if (nan) {
    response.isValid = false;
    response.notification.type = "error";
    response.notification.msg = "File size must be an integer!";
    response.notification.title = "Invalid file size";
  }
  return response;
}
