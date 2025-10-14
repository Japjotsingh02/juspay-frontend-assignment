// import React from "react";
// import ReactECharts from "echarts-for-react";

// function findFirstIntersection(a: number[], b: number[]) {
//   for (let i = 0; i < a.length - 1; i++) {
//     const a1 = a[i],
//       a2 = a[i + 1];
//     const b1 = b[i],
//       b2 = b[i + 1];

//     if ((a1 <= b1 && a2 >= b2) || (a1 >= b1 && a2 <= b2)) {
//       const da = a2 - a1;
//       const db = b2 - b1;
//       const denom = da - db;
//       const t = Math.abs(denom) < 1e-9 ? 0.5 : (b1 - a1) / denom;
//       const tClamped = Math.max(0, Math.min(1, t));
//       const y = a1 + (a2 - a1) * tClamped;
//       return { xIndex: i, t: tClamped, y };
//     }
//   }
//   return null;
// }

// const RevenueChart: React.FC = () => {
//   const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

//   const previousWeek = [7, 16, 12, 10, 14, 22];
//   const currentWeek = [12, 8, 10, 15, 20, 19];

//   const inter = findFirstIntersection(currentWeek, previousWeek);

//   const blackSolid = new Array(currentWeek.length).fill(null);
//   const blackDotted = new Array(currentWeek.length).fill(null);

//   if (inter) {
//     const { xIndex, y } = inter;

//     for (let i = 0; i <= xIndex; i++) {
//       blackSolid[i] = currentWeek[i];
//     }
//     const insertIdx = xIndex + 1;
//     blackSolid[insertIdx] = y;
//     blackDotted[insertIdx] = y;

//     for (let i = insertIdx + 1; i < currentWeek.length; i++) {
//       blackDotted[i] = currentWeek[i];
//     }
//   } else {
//     for (let i = 0; i < currentWeek.length; i++)
//       blackDotted[i] = currentWeek[i];
//   }

//   const option = {
//     title: {
//       text: "Revenue",
//       left: "left",
//       top: "0",
//       textStyle: {
//         fontSize: 14,
//         fontWeight: 600,
//         color: "#1c1c1c",
//       },
//     },
//     legend: {
//       right: 15,
//       top: 10,
//       itemWidth: 8,
//       itemHeight: 8,
//       data: [
//         {
//           name: "Current Week $58,211",
//           icon: "circle",
//           textStyle: { color: "#1c1c1c", fontSize: 12 },
//         },
//         {
//           name: "Previous Week $68,768",
//           icon: "circle",
//           textStyle: { color: "#59A8D4", fontSize: 12 },
//         },
//       ],
//     },
//     grid: {
//       left: "3%",
//       right: "4%",
//       bottom: "3%",
//       top: "15%",
//       containLabel: true,
//     },
//     xAxis: {
//       type: "category",
//       boundaryGap: false,
//       data: months,
//       axisLine: { show: false },
//       axisTick: { show: false },
//       axisLabel: {
//         color: "#6b7280",
//         fontWeight: 500,
//       },
//       splitLine: {
//         show: true,
//         lineStyle: { color: "#f0f0f0", type: "dashed" },
//       },
//     },
//     yAxis: {
//       type: "value",
//       min: 0,
//       max: 30,
//       interval: 10,
//       axisLine: { show: false },
//       axisTick: { show: false },
//       axisLabel: {
//         color: "#6b7280",
//         fontWeight: 500,
//         formatter: (v: number) => `${v}M`,
//       },
//       splitLine: {
//         lineStyle: {
//           color: "#e5e7eb",
//         },
//       },
//     },
//     series: [
//       {
//         name: "Current Week (solid)",
//         type: "line",
//         data: blackSolid,
//         smooth: true,
//         symbol: "none",
//         lineStyle: {
//           color: "#1c1c1c",
//           width: 3,
//           type: "solid",
//         },
//         showSymbol: false,
//         emphasis: { focus: "none" },
//       },
//       {
//         name: "Current Week (dotted)",
//         type: "line",
//         data: blackDotted,
//         smooth: true,
//         symbol: "none",
//         silent: true,
//         lineStyle: {
//           color: "#1c1c1c",
//           width: 3,
//           type: "dashed",
//           dashOffset: 2,
//         },
//         showSymbol: false,
//         emphasis: { focus: "none" },
//       },
//       {
//         name: "Previous Week",
//         type: "line",
//         data: previousWeek,
//         smooth: true,
//         symbol: "none",
//         lineStyle: {
//           color: "#A8C5DA",
//           width: 3,
//           type: "solid",
//         },
//         showSymbol: false,
//       },
//     ],
//     tooltip: {
//       trigger: "axis",
//       backgroundColor: "transparent",
//       borderColor: "transparent",
//       padding: 0,
//       formatter: () => "",
//     },
//   };

//   return (
//     <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
//       <ReactECharts
//         option={option}
//         style={{ height: 340, width: "100%" }}
//         opts={{ renderer: "canvas" }}
//       />
//     </div>
//   );
// };

// export default RevenueChart;
