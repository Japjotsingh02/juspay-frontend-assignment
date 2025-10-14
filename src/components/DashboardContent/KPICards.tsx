import React from "react";
import { useDashboardStore } from "../../store/dashboardStore";
import { TrendingUp, TrendingDown } from "lucide-react";

interface KPICardProps {
  title: string;
  value: number;
  change: number;
  changeType: "positive" | "negative";
  bgColor: string;
  color: string;
  onClick?: () => void;
}

const KPICard: React.FC<KPICardProps> = ({
  title,
  value,
  change,
  changeType,
  bgColor,
  onClick,
}) => {
  const isPositive = changeType === "positive";
  const formattedChange = `${isPositive ? "+" : "-"}${Math.abs(change).toFixed(2)}%`;

  const formattedValue =
    title === "revenue"
      ? `$${value.toLocaleString()}`
      : title === "growth"
        ? `${value.toFixed(1)}%`
        : value.toLocaleString();

  return (
    <div
      className={`rounded-2xl flex flex-col gap-2 p-6 text-[#1c1c1c] animate-fadeInUp hover:shadow-md transition-shadow duration-200 ${
        onClick ? 'cursor-pointer hover:scale-105' : ''
      }`}
      style={{ backgroundColor: bgColor }}
      onClick={onClick}
    >
      <h6 className="capitalize">{title}</h6>
      <div className="flex items-center justify-between">
        <div className="text-xl 2xl:text-2xl font-semibold">{formattedValue}</div>
        <div className="flex gap-1 items-center text-[10px] 2xl:text-xs">
          <div>{formattedChange}</div>
          {changeType === "positive" ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
        </div>
      </div>
    </div>
  );
};

const KPICards: React.FC = () => {
  const { kpiData, setCurrentView } = useDashboardStore();

  const handleOrdersClick = () => {
    setCurrentView('orders');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-7 flex-1">
      {Object.entries(kpiData).map(([title, kpiValue], index) => (
        <div
          key={title}
          className="animate-fadeInUp"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <KPICard 
            {...kpiValue} 
            title={title} 
            onClick={title === 'orders' ? handleOrdersClick : undefined}
          />
        </div>
      ))}
    </div>
  );
};

export default KPICards;
