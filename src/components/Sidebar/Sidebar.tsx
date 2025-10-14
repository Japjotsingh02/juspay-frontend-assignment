import ProfileImage from "../../assets/profile-image.svg?react";
import { menuItems } from "../../constants/dashboard.d";
import MenuItem from "./MenuItem";

const Sidebar = () => {
  return (
    <aside
      className={`bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out w-53 px-4`}
    >
      <div className="flex items-center space-x-3 py-5.5">
        <button aria-label="Profile Image">
          <ProfileImage className="rounded-full" />
        </button>
        <div className="text-sm text-[#1c1c1d] animate-fadeIn">ByeWind</div>
      </div>

      <nav className="flex-1 overflow-y-auto">
        {menuItems.map((item) => (
          <MenuItem item={item} level={0} />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
