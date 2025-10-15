import { Routes, Route, Navigate } from "react-router-dom";
import DefaultDashboard from "./DefaultDashboard";

const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboards/default" replace />} />
        <Route path="/dashboards/default" element={<DefaultDashboard />} />
        <Route path="*" element={<Navigate to="/dashboards/default" replace />} />
      </Routes>
    </>
  );
};

export default Dashboard;
