"use client";

import Dropdown from "../shared/Dropdown";
import Toggle from "../shared/Toggle";

export default function ChartActions({ onDropdownChange, onToggleChange }) {
  return (
    <div className="flex flex-row basis-1 justify-between flex-wrap gap-3 p-3">
      <Dropdown onChange={onDropdownChange} />
      <Toggle onChange={onToggleChange} />
    </div>
  );
}
