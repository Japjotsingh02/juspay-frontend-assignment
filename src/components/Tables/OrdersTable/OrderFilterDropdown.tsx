import React from "react";
import { statusColor } from "../../../constants/dashboard.d";

interface Props {
  filterStatus: string | null;
  setFilterStatus: (val: string | null) => void;
  onClose: () => void;
}

const OrderFilterDropdown: React.FC<Props> = ({
  filterStatus,
  setFilterStatus,
  onClose,
}) => (
  <div className="absolute left-0 top-10 bg-white border border-gray-200 shadow-md rounded-md p-2 z-10 text-sm w-32">
    <button
      className={`block w-full text-left px-2 py-1 rounded ${!filterStatus ? "bg-gray-100" : "hover:bg-gray-50"}`}
      onClick={() => {
        setFilterStatus(null);
        onClose();
      }}
    >
      All
    </button>
    {Object.keys(statusColor).map((status) => (
      <button
        key={status}
        className={`block w-full text-left px-2 py-1 rounded ${
          filterStatus === status ? "bg-gray-100" : "hover:bg-gray-50"
        }`}
        onClick={() => {
          setFilterStatus(status);
          onClose();
        }}
      >
        {status}
      </button>
    ))}
  </div>
);

export default OrderFilterDropdown;
