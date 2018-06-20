import React from "react";
import CategoryField from "./CategoryField";
import BrandField from "./BrandField";
import ModelField from "./ModelField";
import IdField from "./IdField";
import FWModelField from "./FWModelField";
import ReleaseNotesField from "./ReleaseNotesField";

export function customCategory(column, attr, editorClass, ignoreEditable, defaultValue) {
  return <CategoryField ref={attr.ref} editorClass={editorClass} ignoreEditable={ignoreEditable} />;
}

export function customBrand(column, attr, editorClass, ignoreEditable, defaultValue) {
  return <BrandField ref={attr.ref} editorClass={editorClass} ignoreEditable={ignoreEditable} />;
}

export function customModel(column, attr, editorClass, ignoreEditable, defaultValue) {
  return <ModelField ref={attr.ref} editorClass={editorClass} ignoreEditable={ignoreEditable} />;
}

export function customID(column, attr, editorClass, ignoreEditable, defaultValue) {
  return <IdField ref={attr.ref} editorClass={editorClass} ignoreEditable={ignoreEditable} />;
}

export function customFWModel(column, attr, editorClass, ignoreEditable, defaultValue) {
  return <FWModelField ref={attr.ref} editorClass={editorClass} ignoreEditable={ignoreEditable} />;
}

export function customReleaseNotes(column, attr, editorClass, ignoreEditable, defaultValue) {
  return (
    <ReleaseNotesField ref={attr.ref} editorClass={editorClass} ignoreEditable={ignoreEditable} />
  );
}
