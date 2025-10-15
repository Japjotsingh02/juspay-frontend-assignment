import React from "react";

interface BaseChartProps {
  title: string;
  children: React.ReactNode;
}

const BaseChart: React.FC<BaseChartProps> = ({ title, children }) => {
  return (
    <div className="rounded-2xl bg-background-card p-4 2xl:p-6 w-full min-w-0 overflow-hidden">
      <h6 className="text-app mb-2">{title}</h6>
      {children}
    </div>
  );
};

export default BaseChart;
