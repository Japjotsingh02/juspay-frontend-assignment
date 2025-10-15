import React from "react";
import DashboardContent from "../components/DashboardContent/DashboardContent";
import OrdersTable from "../components/Tables/OrdersTable/OrdersTable";
import { useDashboardStore } from "../store/dashboardStore";

const DefaultDashboard: React.FC = () => {
  const { currentView } = useDashboardStore();

  return (
    <>
      <div className="animate-fadeInUp">
        <h6>{currentView === 'orders' ? 'Orders List' : 'eCommerce'}</h6>
      </div>
      {currentView === 'orders' ? <OrdersTable /> : <DashboardContent /> }
    </>
  );
};

export default DefaultDashboard;
