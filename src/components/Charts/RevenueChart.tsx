import React from "react";
import ReactECharts from "echarts-for-react";
import type { Revenue } from "../../types/dashboard.type";
import BaseChart from "./BaseCharts";

interface RevenueProps { revenueData: Revenue }

const RevenueChart: React.FC<RevenueProps> = ({revenueData}) => {
  const { months, previousWeek, currentWeek } = revenueData;

  const option = {
    legend: {
      right: 15,
      top: 10,
      itemWidth: 8,
      itemHeight: 8,
      data: [
        { name: "Current Week $58,211", icon: "circle" },
        { name: "Previous Week $68,768", icon: "circle" },
      ],
    },
    grid: { left: "3%", right: "4%", bottom: "3%", top: "15%", containLabel: true },
    xAxis: {
      type: "category",
      data: months,
      boundaryGap: false,
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
      axisLabel: {
        color: "#6b7280",
        formatter: (v: number) => `${v}M`,
      },
      splitLine: { lineStyle: { color: "#e5e7eb" } },
    },
    series: [
      {
        name: "Current Week",
        type: "line",
        data: currentWeek,
        smooth: true,
        symbol: "none",
        lineStyle: { color: "#1c1c1c", width: 3 },
      },
      {
        name: "Previous Week",
        type: "line",
        data: previousWeek,
        smooth: true,
        symbol: "none",
        lineStyle: { color: "#A8C5DA", width: 3 },
      },
    ],
  };

  return (
    <BaseChart title="Revenue">
      <ReactECharts option={option} style={{ height: 270 }} />
    </BaseChart>
  );
};

export default RevenueChart;
