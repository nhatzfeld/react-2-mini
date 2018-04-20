import React from "react";

export default function ColorChanger() {
  return (
    <select
      className="dropDownContainer"
      onChange={e => props.update(e.target.value)}
      disabled={props.AllowEdit === "false"}
    >
      <option value="black"> Black </option>
      <option value="blue"> Blue </option>
      <option value="green"> Green </option>
    </select>
  );
}
