"use client";
import { useState } from "react";
import Chart from "../Chart";
import ChartActions from "../ChartActions";

export default function DataVisualizationContainer() {
  const [dropdownValue, setDropdownValue] = useState();
  const [chartType, setChartType] = useState();

  return (
    <div className="flex flex-col gap-3">
      <ChartActions
        onDropdownChange={setDropdownValue}
        onToggleChange={setChartType}
      />
      <Chart selectedOption={dropdownValue} selectedChartType={chartType} />
    </div>
  );
}
