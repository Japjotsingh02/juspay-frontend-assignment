import React from 'react';
import KPICards from './KPICards';
import { useDashboardStore } from '../../store/dashboardStore';
import ProjectionsVsActualsChart from '../Charts/ProjectionsVsActualsChart';
import RevenueChart from '../Charts/RevenueChart';
import RevenueByLocationMap from './RevenueByLocationMap';
import TotalSalesChart from '../Charts/TotalSalesChart';
import TopSellingProducts from '../Tables/TopSellingProductTable/TopSellingProductTable';

const DashboardContent: React.FC = () => {
  const { chartData } = useDashboardStore();

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-7">
        <div className="animate-fadeInUp transition-shadow duration-200">
          <KPICards />
        </div>
        <div
          className="animate-fadeInUp transition-shadow duration-200"
          style={{ animationDelay: '200ms' }}
        >
          <ProjectionsVsActualsChart projectionsData={chartData.projections} />
        </div>
      </div>

      {/* === Bottom Section: Revenue Chart + Location Map === */}
      <div className="grid grid-cols-1 xl:grid-cols-[74fr_26fr] gap-7">
        <div
          className="animate-fadeInUp transition-shadow duration-200"
          style={{ animationDelay: '300ms' }}
        >
          <RevenueChart revenueData={chartData.revenue} />
        </div>

        <div
          className="animate-fadeInUp transition-shadow duration-200"
          style={{ animationDelay: '400ms' }}
        >
          <RevenueByLocationMap locations={chartData.locations} />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[74fr_26fr] gap-7">
        <div
          className="animate-fadeInUp transition-shadow duration-200"
          style={{ animationDelay: '500ms' }}
        >
          <TopSellingProducts />
        </div>

        <div
          className="animate-fadeInUp transition-shadow duration-200"
          style={{ animationDelay: '600ms' }}
        >
          <TotalSalesChart salesData={chartData.totalSales} />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
