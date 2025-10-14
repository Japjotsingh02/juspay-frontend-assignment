import React from "react";
import ReactECharts from "echarts-for-react";
import type { TotalSalesItem } from "../../types/dashboard.type";
import BaseChart from "./BaseCharts";

interface TotalSalesProps {
  salesData: TotalSalesItem[];
}

const TotalSalesChart: React.FC<TotalSalesProps> = ({ salesData }) => {
  const option = {
    tooltip: {
      trigger: "item",
      formatter: "{b}: ${c} ({d}%)",
    },
    series: [
      {
        name: "Sales",
        type: "pie",
        radius: ["60%", "80%"],
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#F7F9FB",
          borderWidth: 3,
        },
        label: { show: false },
        labelLine: { show: false },
        data: salesData.map(({ name, value, color }) => ({
          name,
          value,
          itemStyle: { color },
        })),
      },
    ],
  };

  return (
    <BaseChart title="Total Sales">
      <ReactECharts
        option={option}
        style={{ height: 220, width: "100%" }}
        opts={{ renderer: "canvas" }}
      />

      <div className="text-xs text-gray-600 space-y-2 w-full">
        {salesData.map((item) => (
          <div key={item.name} className="flex justify-between">
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              {item.name}
            </div>
            <span className="font-medium">${item.value}</span>
          </div>
        ))}
      </div>
    </BaseChart>
  );
};

export default TotalSalesChart;
