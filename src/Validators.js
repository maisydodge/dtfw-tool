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

//For firmware upgrade URL
export function urlValidator(cell) {
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  const response = { isValid: true, notification: { type: "success", msg: "", title: "" } };
  if (!regexp.test(cell)) {
    response.isValid = false;
    response.notification.type = "error";
    response.notification.msg = "Enter a valid URL!";
    response.notification.title = "Invalid URL";
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

//For firmware upgrade TFTP URL - TFTP Status must be enabled for TFTP URL to be valid
export function tftpURLValidator(cell, row) {
  let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  const response = { isValid: true, notification: { type: "success", msg: "", title: "" } };
  if (
    (row.tftpStatus === false || row.tftpStatus === "false" || row.tftpStatus === undefined) &&
    cell
  ) {
    response.isValid = false;
    response.notification.type = "error";
    response.notification.msg = "TFTP Status must be enabled to add URL!";
    response.notification.title = "Invalid entry";
  }
  if (!regexp.test(cell) && cell) {
    response.isValid = false;
    response.notification.type = "error";
    response.notification.msg = "Enter a valid URL";
    response.notification.title = "Invalid URL";
  }
  return response;
}
