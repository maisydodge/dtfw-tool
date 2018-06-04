import React from "react";
import "./index.css";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};


export function makeData(len = 10) {
  return range(len).map(d => {
    return {
    };
  });
}
