"use client";

import Dropdown from "../shared/Dropdown";
import Toggle from "../shared/Toggle";

const OPTIONS = [
  {
    name: "Open",
    value: "Open",
  },
  {
    name: "Close",
    value: "Close",
  },
  {
    name: "Low",
    value: "Low",
  },
  {
    name: "High",
    value: "High",
  },
  {
    name: "Volume",
    value: "Volume"
  }
];

const CHART_OPTIONS = [
  {
    name: "Line",
    value: "line",
  },
  {
    name: "Bar",
    value: "bar",
  },
];
export default function ChartActions({ onDropdownChange, onToggleChange }) {
  return (
    <div className="flex flex-row basis-1 justify-between flex-wrap gap-3 p-3">
      <Dropdown options={OPTIONS} onChange={onDropdownChange} />
      <Toggle  options={CHART_OPTIONS} onChange={onToggleChange} />
    </div>
  );
}
