import { Routes, Route } from "react-router-dom";
import DefaultDashboard from "./DefaultDashboard";

const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboards/default" element={<DefaultDashboard />} />
      </Routes>
    </>
  );
};

export default Dashboard;
