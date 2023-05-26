"use client";

import { DATA } from "@/data";
import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";

const options = {
  xAxis: {
    type: "category",
    scale: true,
    data: DATA?.map((item) => item["Unix Timestamp"]),
  },
  yAxis: {
    type: "value",
    min: 255,
  },
};

export default function Chart({ selectedOption, selectedChartType }) {
  const [chartData, setChartData] = useState();
  useEffect(() => {
    if (selectedOption) {
      setChartData({
        ...options,
        series: [
          {
            data: DATA?.map((item) => item[selectedOption?.value]),
            type: selectedChartType?.value || "line",
            smooth: true,
          },
        ],
      });
    }
  }, [selectedOption, selectedChartType]);

  if (!chartData) {
    return <div>Loading...</div>;
  }
  return <ReactECharts option={chartData} />;
}
