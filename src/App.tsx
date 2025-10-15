import { BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { useDashboardStore } from "./store/dashboardStore";
import Header from "./components/Header/Header";
import RightSidebar from "./components/RightSidebar/RightSidebar";

function App() {
  const { sidebarOpen, toggleSidebar, rightSidebarOpen, toggleRightSidebar } =
    useDashboardStore();

  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-background-app font-inter text-app">
        {sidebarOpen && <Sidebar />}
        
        <div className="flex flex-1 flex-col h-full min-w-0">
          <Header
            onMenuClick={toggleSidebar}
            onRightMenuClick={toggleRightSidebar}
          />
          <div className="flex-1 overflow-y-auto flex justify-center">
            <div className={`w-full transition-all duration-300 ${
              sidebarOpen && rightSidebarOpen 
                ? 'max-w-[1400px] px-6' 
                : sidebarOpen || rightSidebarOpen 
                  ? 'max-w-[1600px] px-6' 
                  : 'max-w-[1800px] px-8'
            } py-6 space-y-6`}>
              <Dashboard />
            </div>
          </div>
        </div>
        
        {rightSidebarOpen && <RightSidebar />}
      </div>
    </BrowserRouter>
  );
}

export default App;
