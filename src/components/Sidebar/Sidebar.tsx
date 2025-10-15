import ProfileImage from "../../assets/profile-image.svg?react";
import { getMenuItems } from "../../constants/dashboard.d";
import { useDashboardStore } from "../../store/dashboardStore";
import MenuItem from "./MenuItem";

const Sidebar = () => {
  const { theme } = useDashboardStore();
  const menuItems = getMenuItems(theme);

  return (
    <aside className="flex-shrink-0 w-[190px] xl:w-[212px] border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out px-4 animate-slideInLeft">
      <div className="flex items-center space-x-3 py-5.5 flex-shrink-0">
        <button aria-label="Profile Image">
          <ProfileImage className="rounded-full" />
        </button>
        <div className="text-xs 2xl:text-sm text-app animate-fadeIn">ByeWind</div>
      </div>

      <nav className="flex-1 overflow-y-auto">
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} level={0} />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
