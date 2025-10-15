import React from 'react';
import KPICards from './KPICards';
import { useDashboardStore } from '../../store/dashboardStore';
import ProjectionsVsActualsChart from '../Charts/ProjectionsVsActualsChart';
import RevenueChart from '../Charts/RevenueChart';
import TotalSalesChart from '../Charts/TotalSalesChart';
import TopSellingProducts from '../Tables/TopSellingProductTable/TopSellingProductTable';
import RevenueByLocationMapChart from '../Charts/RevenueByLocationMapChart';

const DashboardContent: React.FC = () => {
  const { chartData } = useDashboardStore();

  return (
    <div className="flex flex-col gap-8 w-full min-w-0">
      <div className="flex flex-col xl:flex-row gap-7 w-full min-w-0">
        <div className="flex-1 min-w-0 animate-fadeInUp transition-shadow duration-200">
          <KPICards />
        </div>
        <div
          className="flex-1 min-w-0 animate-fadeInUp transition-shadow duration-200"
          style={{ animationDelay: '200ms' }}
        >
          <ProjectionsVsActualsChart projectionsData={chartData.projections} />
        </div>
      </div>

      {/* === Bottom Section: Revenue Chart + Location Map === */}
      <div className="flex flex-col xl:flex-row gap-7 w-full min-w-0">
        <div
          className="flex-[3] min-w-0 animate-fadeInUp transition-shadow duration-200"
          style={{ animationDelay: '300ms' }}
        >
          <RevenueChart revenueData={chartData.revenue} />
        </div>

        <div
          className="flex-[1] min-w-0 animate-fadeInUp transition-shadow duration-200"
          style={{ animationDelay: '400ms' }}
        >
          <RevenueByLocationMapChart locationData={chartData.locations} />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-7 w-full min-w-0">
        <div
          className="flex-[3] min-w-0 animate-fadeInUp transition-shadow duration-200"
          style={{ animationDelay: '500ms' }}
        >
          <TopSellingProducts />
        </div>

        <div
          className="flex-[1] min-w-0 animate-fadeInUp transition-shadow duration-200"
          style={{ animationDelay: '600ms' }}
        >
          <TotalSalesChart salesData={chartData.totalSales} />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
