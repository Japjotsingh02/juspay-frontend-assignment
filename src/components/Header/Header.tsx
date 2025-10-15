import React, { useState } from "react";
import { useDashboardStore } from "../../store/dashboardStore";
import { Moon } from "lucide-react";
import SidebarIconLight from "../../assets/light/sidebar-icon.svg?react";
import SidebarIconDark from "../../assets/dark/sidebar-icon.svg?react";
import FavouritesIconLight from "../../assets/light/favourites-icon.svg?react";
import FavouritesIconDark from "../../assets/dark/favourites-icon.svg?react";
import ThemeIconLight from "../../assets/light/theme-icon.svg?react";
import ThemeIconDark from "../../assets/dark/theme-icon.svg?react";
import RefreshIconLight from "../../assets/light/refresh-icon.svg?react";
import RefreshIconDark from "../../assets/dark/refresh-icon.svg?react";
import NotificationIconLight from "../../assets/light/notification-icon.svg?react";
import NotificationIconDark from "../../assets/dark/notification-icon.svg?react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { Search } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
  onRightMenuClick: () => void;
}

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string;
}

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, label, ...props }) => (
  <button
    {...props}
    aria-label={label}
    className={`p-1.5 rounded-lg transition-all duration-200 hover:bg-app-10 hover:scale-105 active:scale-95 ${props.className || ""}`}
  >
    {icon}
  </button>
);

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => (
  <div className="relative">
    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-app-40 w-4 h-4" />
    <input
      type="text"
      placeholder="Search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-[160px] text-sm text-app bg-background-search px-7 py-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-background-app transition-all duration-200 placeholder:text-app-40`}
    />
    <div className="absolute text-xs right-3 top-1/2 -translate-y-1/2 text-app-40 bg-app-10 rounded px-1 py-[1px]">
      ⌘/
    </div>
  </div>
);

const Header: React.FC<HeaderProps> = ({ onMenuClick, onRightMenuClick }) => {
  const { theme, setTheme, refreshData } = useDashboardStore();
  const [searchQuery, setSearchQuery] = useState("");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const SidebarIcon = theme === "light" ? SidebarIconLight : SidebarIconDark;
  const FavouritesIcon = theme === "light" ? FavouritesIconLight : FavouritesIconDark;
  const ThemeIcon = theme === "light" ? ThemeIconLight : ThemeIconDark;
  const RefreshIcon = theme === "light" ? RefreshIconLight : RefreshIconDark;
  const NotificationIcon = theme === "light" ? NotificationIconLight : NotificationIconDark;

  return (
    <header className="border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <IconButton
            icon={<SidebarIcon className="w-4 h-4" />}
            label="Toggle sidebar"
            onClick={onMenuClick}
          />
          <IconButton
            icon={<FavouritesIcon className="w-4 h-4" />}
            label="Favourites"
          />
          <Breadcrumb />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-5">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />

          <div className="flex items-center space-x-2">
            <IconButton
              icon={
                theme === "dark" ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <ThemeIcon className="w-5 h-5" />
                )
              }
              label="Toggle theme"
              onClick={toggleTheme}
            />

            <IconButton
              icon={
                <RefreshIcon className="w-4 h-4 transition-transform duration-500" />
              }
              label="Refresh data"
              onClick={refreshData}
            />

            <IconButton
              icon={<NotificationIcon className="w-4 h-4" />}
              label="Notifications"
              onClick={onRightMenuClick}
            />

            <IconButton
              icon={<SidebarIcon className="w-4 h-4" />}
              label="Toggle right sidebar"
              onClick={onRightMenuClick}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
