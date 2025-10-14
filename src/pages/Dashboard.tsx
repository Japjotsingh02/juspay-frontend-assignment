import { Routes, Route } from "react-router-dom";
import DefaultDashboard from "./DefaultDashboard";

const Dashboard = () => {
  return (
    <div className="flex-1 flex overflow-hidden">
      <Routes>
        <Route path="/dashboards/default" element={<DefaultDashboard />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
