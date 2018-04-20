import React from "react";

export default function FamilyChanger() {
  return (
    <select
      className="dropDownContainer"
      onChange={e => this.props(e.target.value)}
      disabled={props.allowEdit === "false"}
    >
      <option value="monospace"> Monospace </option>
      <option value="arial"> Arial </option>
      <option value="courier"> Courier </option>
    </select>
  );
}
