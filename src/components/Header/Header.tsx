import React, { useState } from "react";
import { useDashboardStore } from "../../store/dashboardStore";
import { Search, Star, Moon } from "lucide-react";
import SidebarIcon from "../../assets/sidebar-icon.svg?react";
import FavouritesIcon from "../../assets/favourites-icon.svg?react";
import ThemeIcon from "../../assets/theme-icon.svg?react";
import RefreshIcon from "../../assets/refresh-icon.svg?react";
import NotificationIcon from "../../assets/notification-icon.svg?react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { theme, setTheme, refreshData } = useDashboardStore();
  const [searchQuery, setSearchQuery] = useState("");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button
            onClick={onMenuClick}
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label="Toggle sidebar"
          >
            <SidebarIcon className="w-4 h-4" />
          </button>

          <button
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label="Favourites"
          >
            <FavouritesIcon className="w-4 h-4 text-gray-600" />
          </button>

          <Breadcrumb />
        </div>

        <div className="flex items-center gap-5">
          <div className="relative">
            <Search className="absolute left-1.5 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[160px] text-sm bg-[#1C1C1C0D] px-7 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute text-sm right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-100 rounded">
              ⌘/
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button
              className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label="Favourites"
            >
              <Star className="w-5 h-5 text-gray-600" />
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Moon className="w-5 h-5 text-gray-600" />
              ) : (
                <ThemeIcon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            <button
              onClick={refreshData}
              className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 hover:rotate-180"
              aria-label="Refresh data"
            >
              <RefreshIcon className="w-5 h-5 text-gray-600 transition-transform duration-500" />
            </button>

            <button className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 relative group">
              <NotificationIcon className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center animate-pulse group-hover:animate-none">
                3
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
