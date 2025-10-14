import React, { useState } from "react";
import { Search, Plus, ArrowUpDown } from "lucide-react";
import FilterIcon from "../../../assets/filter-icon.svg?react";
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

  return (
    <div className="flex items-center justify-between mb-3 bg-[#F7F9FB] p-2">
      <div className="flex items-center gap-2">
        <button
          aria-label="Add New"
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <Plus className="w-4 h-4 text-gray-700" />
        </button>

        <div className="relative">
          <button
            aria-label="Filter Orders"
            className="p-2 hover:bg-gray-100 rounded-lg"
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
          className="p-2 hover:bg-gray-100 rounded-lg"
          aria-label="Sort Orders"
          onClick={() => onSort("id")}
        >
          <ArrowUpDown className="w-4 h-4 text-gray-700" />
        </button>
      </div>

      <div className="relative ml-2">
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Orders"
          className="pl-8 pr-3 py-1 border border-[#1c1c1c1a] bg-[#FFFFFF66] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default OrdersTableHeader;
