import { BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { useDashboardStore } from "./store/dashboardStore";
import Header from "./components/Header/Header";
import RightSidebar from "./components/RightSidebar/RightSidebar";

function App() {
  const { sidebarOpen, toggleSidebar } = useDashboardStore();

  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-white font-inter">
        {sidebarOpen && <Sidebar />}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header onMenuClick={toggleSidebar} />
          <Dashboard />
        </div>
        <div className="hidden xl:block">
          <RightSidebar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
