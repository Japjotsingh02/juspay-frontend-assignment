import React from "react";
import ReactECharts from "echarts-for-react";
import type { Revenue } from "../../types/dashboard.type";
import BaseChart from "./BaseCharts";

interface RevenueProps {
  revenueData: Revenue;
}

function findFirstIntersection(a: number[], b: number[]) {
  for (let i = 0; i < a.length - 1; i++) {
    const a1 = a[i],
      a2 = a[i + 1];
    const b1 = b[i],
      b2 = b[i + 1];

    if ((a1 <= b1 && a2 >= b2) || (a1 >= b1 && a2 <= b2)) {
      const da = a2 - a1;
      const db = b2 - b1;
      const denom = da - db;
      const t = Math.abs(denom) < 1e-9 ? 0.5 : (b1 - a1) / denom;
      const tClamped = Math.max(0, Math.min(1, t));
      const y = a1 + (a2 - a1) * tClamped;
      return { xIndex: i, t: tClamped, y };
    }
  }
  return null;
}

const RevenueChart: React.FC<RevenueProps> = ({ revenueData }) => {
  const { months, previousWeek, currentWeek } = revenueData;

  const inter = findFirstIntersection(currentWeek, previousWeek);

  const blackSolid = new Array(currentWeek.length).fill(null);
  const blackDotted = new Array(currentWeek.length).fill(null);

  if (inter) {
    const { xIndex, y } = inter;

    for (let i = 0; i <= xIndex; i++) {
      blackSolid[i] = currentWeek[i];
    }
    const insertIdx = xIndex + 1;
    blackSolid[insertIdx] = y;
    blackDotted[insertIdx] = y;

    for (let i = insertIdx + 1; i < currentWeek.length; i++) {
      blackDotted[i] = currentWeek[i];
    }
  } else {
    for (let i = 0; i < currentWeek.length; i++)
      blackDotted[i] = currentWeek[i];
  }

  const option = {
    legend: {
      right: 15,
      top: 10,
      itemWidth: 8,
      itemHeight: 8,
      data: [
        {
          name: "Current Week $58,211",
          icon: "circle",
          textStyle: { color: "#1c1c1c", fontSize: 12 },
        },
        {
          name: "Previous Week $68,768",
          icon: "circle",
          textStyle: { color: "#1c1c1c", fontSize: 12 },
        },
      ],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "15%",
      containLabel: true,
    },
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
        name: "Current Week (solid)",
        type: "line",
        data: blackSolid,
        smooth: true,
        symbol: "none",
        lineStyle: {
          color: "#1c1c1c",
          width: 3,
          type: "solid",
        },
        showSymbol: false,
        emphasis: { focus: "none" },
      },
      {
        name: "Current Week (dotted)",
        type: "line",
        data: blackDotted,
        smooth: true,
        symbol: "none",
        silent: true,
        lineStyle: {
          color: "#1c1c1c",
          width: 3,
          type: "dashed",
          dashOffset: 2,
        },
        showSymbol: false,
        emphasis: { focus: "none" },
      },
      {
        name: "Previous Week",
        type: "line",
        data: previousWeek,
        smooth: true,
        symbol: "none",
        lineStyle: {
          color: "#A8C5DA",
          width: 3,
          type: "solid",
        },
        showSymbol: false,
      },
    ],
    tooltip: {
      trigger: "axis",
      backgroundColor: "#ffffff",
      borderColor: "#e5e7eb",
      borderWidth: 1,
      textStyle: {
        color: "#111827",
        fontSize: 12,
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      formatter: (params: any[]) => {
        let tooltipHtml = `<div style="font-weight:600;margin-bottom:4px;">${params[0].axisValue}</div>`;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        params.forEach((p: any) => {
          if (p.data != null) {
            tooltipHtml += `
              <div style="display:flex;align-items:center;gap:6px;">
                <span style="display:inline-block;width:8px;height:8px;background:${p.color};border-radius:50%;"></span>
                ${p.seriesName}: <b>${p.data}M</b>
              </div>`;
          }
        });
        return tooltipHtml;
      },
    },
  };

  return (
    <BaseChart title="Revenue">
      <ReactECharts 
        option={option} 
        style={{ height: 270, width: "100%" }} 
        opts={{ renderer: "svg" }}
        notMerge={true}
        lazyUpdate={true}
      />
    </BaseChart>
  );
};

export default RevenueChart;
