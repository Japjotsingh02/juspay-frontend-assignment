import React, { useEffect, useState } from "react";
import * as echarts from "echarts";
import ReactECharts from "echarts-for-react";
import BaseChart from "./BaseCharts";
import type { LocationType } from "../../types/dashboard.type";

interface LocationProps {
  locationData: LocationType[];
}

const RevenueByLocationMapChart: React.FC<LocationProps> = ({locationData}) => {
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    fetch("/maps/world.json")
      .then((res) => res.json())
      .then((geoJson) => {
        echarts.registerMap("world", geoJson);
        setMapReady(true);
      })
      .catch((err) => console.error("Failed to load world map:", err));
  }, []);

  if (!mapReady) return <div className="p-6 text-gray-500">Loading map...</div>;

  const option = {
    geo: {
      map: "world",
      roam: false,
      zoom: 1.1,
      label: { show: false },
      itemStyle: {
        areaColor: "#F7FAFC",
        borderColor: "#C5D7F0",
      },
      emphasis: {
        itemStyle: {
          areaColor: "#E2EDFA",
        },
      },
    },
    series: [
      {
        name: "Revenue",
        type: "scatter",
        coordinateSystem: "geo",
        data: locationData.map((l) => ({
          name: l.name,
          value: [...l.coords, l.value],
        })),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        symbolSize: (val: any) => Math.max(val[2] / 5, 8),
        itemStyle: {
          color: "#000",
          borderColor: "#fff",
          borderWidth: 1.5,
          shadowBlur: 4,
          shadowColor: "rgba(0,0,0,0.15)",
        },
        emphasis: { scale: 1.3 },
      },
    ],
    tooltip: {
      trigger: "item",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      formatter: (params: any) => `${params.name}: <b>${params.value[2]}K</b>`,
      backgroundColor: "#fff",
      borderColor: "#e5e7eb",
      borderWidth: 1,
      textStyle: { color: "#111" },
      padding: 8,
    },
  };

  return (
    <BaseChart title="Revenue by Location">
      <ReactECharts
        option={option}
        className="mt-4"
        style={{ height: 82, width: "100%" }}
        opts={{ renderer: "svg" }}
        notMerge={true}
        lazyUpdate={true}
      />
      <div className="mt-4 space-y-4">
        {locationData.map((loc) => (
          <div key={loc.name}>
            <div className="flex justify-between text-xs text-app">
              <span>{loc.name}</span>
              <span>{loc.value}K</span>
            </div>
            <div className="h-0.5 bg-gray-100 rounded-full mt-1">
              <div
                className="h-0.5 bg-[#A8C5DA] rounded-full transition-all duration-300"
                style={{ width: `${loc.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      </BaseChart>
  );
};

export default RevenueByLocationMapChart;
