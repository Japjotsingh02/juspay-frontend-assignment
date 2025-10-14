import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { MenuItem as MenuItemType } from "../../types/dashboard.type";

interface MenuItemProps {
  item: MenuItemType;
  level: number;
}

function MenuItem({ item, level }: MenuItemProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [expandedItems, setExpandedItems] = useState<string[]>([
    "favorites",
    "dashboards",
    "pages",
  ]);
  const [selectedToggle, setSelectedToggle] = useState("Favorites");

  const toggleExpanded = (itemId: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };
  const hasChildren = item.children && item.children.length > 0;
  const isExpanded = level === 0 || expandedItems.includes(item.id);
  const isActive = item.path && location.pathname === item.path;

  const handleClick = () => {
    if (hasChildren) {
      toggleExpanded(item.id);
    } else if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <div key={item.id} className="mb-1">
      <div
        className={`flex items-center justify-between ${level !== 0 ? 'text-[#1c1c1c]' : 'text-[#1c1c1c66]'} py-1 px-3 rounded-lg cursor-pointer transition-colors ${
          isActive
            ? "bg-[#1c1c1c0D]" :
            level !==0 ? "hover:bg-gray-100 hover:text-gray-900" : ''
        }`}
        onClick={handleClick}
        style={{ paddingLeft: `${12 + level * 20}px` }}
      >
        <div className="flex items-center space-x-1">
          {item.id === "favorites" ? (
            <div className="flex justify-between gap-6">
              <span
                className={`text-sm text-[#1c1c1c33] ${
                  selectedToggle === "Favorites" ? "text-[#1c1c1c66]" : ""
                }`}
                onClick={() => setSelectedToggle("Favorites")}
              >
                Favorites
              </span>
              <span
                className={`text-sm text-[#1c1c1c33] ${
                  selectedToggle === "Recently" ? "text-[#1c1c1c66]" : ""
                }`}
                onClick={() => setSelectedToggle("Recently")}
              >
                Recently
              </span>
            </div>
          ) : (
            <>
              {hasChildren && level !==0 && (
                <span className="text-gray-400">
                  {(isExpanded && level !== 0) ? (
                    <ChevronDown className="w-4 h-4 text-[#1c1c1c33]" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-[#1c1c1c33]" />
                  )}
                </span>
              )}
              {item.icon && (
                <span>
                  {item.icon}
                </span>
              )}
              <span className="text-sm">{item.label}</span>
            </>
          )}
        </div>
      </div>

      {hasChildren && (
        <div
          className={`overflow-hidden transition-all duration-200 ease-in-out ${
            isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-1">
            {item.children!.map((child) => (
              <MenuItem key={child.id} item={child} level={level + 1} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuItem;
