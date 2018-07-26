import React from "react";
import ReleaseNotesField from "./ReleaseNotesField";
import PrerequisitesField from "./PrerequisitesField";
import FWAttributesField from "./FWAttributesField";
import AttributesField from "./AttributesField";
// import CategoryField from "./CategoryField";
// import BrandField from "./BrandField";
// import ModelField from "./ModelField";

// export function customCategory(column, attr, editorClass, ignoreEditable, defaultValue) {
//   return <CategoryField ref={attr.ref} />;
// }

// export function customBrand(column, attr, editorClass, ignoreEditable, defaultValue) {
//   return <BrandField ref={attr.ref} />;
// }
// export function customModel(column, attr, editorClass, ignoreEditable, defaultValue) {
//   return <ModelField ref={attr.ref} />;
// }

export function customReleaseNotes(column, attr, editorClass, ignoreEditable, defaultValue) {
  return (
    <ReleaseNotesField ref={attr.ref} editorClass={editorClass} ignoreEditable={ignoreEditable} />
  );
}

export function customPrereq(column, attr, editorClass, ignoreEditable, defaultValue) {
  return (
    <PrerequisitesField ref={attr.ref} editorClass={editorClass} ignoreEditable={ignoreEditable} />
  );
}

// export function customAttr(column, attr, editorClass, ignoreEditable, defaultValue) {
//   return (
//     <AttributesField ref={attr.ref} editorClass={editorClass} ignoreEditable={ignoreEditable} />
//   );
// }
export function customAttr(column, attr, editorClass, ignoreEditable, defaultValue) {
  return (
    <AttributesField ref={attr.ref} editorClass={editorClass} ignoreEditable={ignoreEditable} />
  );
}

export function customFWAttr(column, attr, editorClass, ignoreEditable, defaultValue) {
  return (
    <FWAttributesField ref={attr.ref} editorClass={editorClass} ignoreEditable={ignoreEditable} />
  );
}

/**
 * Summary: addNull adds a null option to the category, brand, and model dropdowns when inserting
 *          in order to not default to the first option. This way, if no option is selected,
 *          the user is alerted to select an option.
 *    @param options, array of dropdown select options
 *    @return options, the original array with a null element added to it
 */
export function addNull(options) {
  options.push({ value: "", text: "" });
}

/**
 * Summary: Used for debugging purposes, finds the index of selected value of category and brand dropdowns
 *    @param array, the array we are searching
 *    @param value, the value we are searching for
 *    @return i, the index if found
 *           -1, if no index is found
 */
export function findValue(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].text === value) return i;
  }
  return -1;
}
