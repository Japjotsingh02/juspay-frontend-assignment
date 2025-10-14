import React from "react";

interface BaseChartProps {
  title: string;
  children: React.ReactNode;
}

const BaseChart: React.FC<BaseChartProps> = ({ title, children }) => {
  return (
    <div className="rounded-2xl bg-[#F7F9FB] p-4 2xl:p-6">
      <h6 className="text-[#1c1c1c] mb-2">{title}</h6>
      {children}
    </div>
  );
};

export default BaseChart;
