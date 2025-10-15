import React, { useState } from "react";
import { Search, Plus, ArrowUpDown } from "lucide-react";
import FilterIconLight from "../../../assets/light/filter-icon.svg?react";
import FilterIconDark from "../../../assets/dark/filter-icon.svg?react";
import { useDashboardStore } from "../../../store/dashboardStore";
import OrderFilterDropdown from "./OrderFilterDropdown";

interface Props {
  search: string;
  setSearch: (val: string) => void;
  filterStatus: string | null;
  setFilterStatus: (val: string | null) => void;
  onSort: (key: string) => void;
}

const OrdersTableHeader: React.FC<Props> = ({
  search,
  setSearch,
  filterStatus,
  setFilterStatus,
  onSort,
}) => {
  const [showFilter, setShowFilter] = useState(false);
  const { theme } = useDashboardStore();
  const FilterIcon = theme === "light" ? FilterIconLight : FilterIconDark;

  return (
    <div className="flex items-center justify-between mb-3 bg-background-card p-2">
      <div className="flex items-center gap-2">
        <button
          aria-label="Add New"
          className="p-2 hover:bg-app-10 rounded-lg"
        >
          <Plus className="w-4 h-4 text-app" />
        </button>

        <div className="relative">
          <button
            aria-label="Filter Orders"
            className="p-2 hover:bg-app-10 rounded-lg"
            onClick={() => setShowFilter((s) => !s)}
          >
            <FilterIcon className="w-4 h-4" />
          </button>

          {showFilter && (
            <OrderFilterDropdown
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
              onClose={() => setShowFilter(false)}
            />
          )}
        </div>

        <button
          className="p-2 hover:bg-app-10 rounded-lg"
          aria-label="Sort Orders"
          onClick={() => onSort("id")}
        >
          <ArrowUpDown className="w-4 h-4 text-app" />
        </button>
      </div>

      <div className="relative ml-2">
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-app-40" />
        <input
          type="text"
          placeholder="Search"
          className="pl-8 pr-3 py-1 border border-app-10 bg-background-app-40 rounded-lg text-sm text-app placeholder:text-app-40 focus:outline-none focus:ring-1 focus:ring-app-20"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default OrdersTableHeader;
