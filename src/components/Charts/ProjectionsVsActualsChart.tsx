import React from "react";
import ReactECharts from "echarts-for-react";
import BaseChart from "./BaseCharts";
import type { Projections } from "../../types/dashboard.type";

interface ProjectionsVsActualsProps {
  projectionsData: Projections;
}

const ProjectionsVsActualsChart: React.FC<ProjectionsVsActualsProps> = ({
  projectionsData,
}) => {
  const { months, projections: proj, actuals } = projectionsData;

  const option = {
    tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
    grid: { top: 50, left: 40, right: 20, bottom: 40 },
    xAxis: {
      type: "category",
      data: months,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: "#6b7280", fontWeight: 500 },
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 30,
      interval: 10,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: "#6b7280", formatter: (v: number) => `${v}M` },
      splitLine: { lineStyle: { color: "#e5e7eb" } },
    },
    series: [
      {
        name: "Projections",
        type: "bar",
        barWidth: 20,
        itemStyle: { color: "#A8C5DA80", borderRadius: [4, 4, 0, 0] },
        data: proj,
      },
      {
        name: "Actuals",
        type: "bar",
        barWidth: 20,
        itemStyle: { color: "#A8C5DA", borderRadius: [4, 4, 0, 0] },
        barGap: "-100%",
        data: actuals,
      },
    ],
  };

  return (
    <BaseChart title="Projections vs Actuals">
      <ReactECharts option={option} style={{ height: 204, width: "100%" }} />
    </BaseChart>
  );
};

export default ProjectionsVsActualsChart;
