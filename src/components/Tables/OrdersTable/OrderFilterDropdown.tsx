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
  <div className="absolute left-0 top-10 bg-background-app border border-app-20 shadow-md rounded-md p-2 z-10 text-sm w-32">
    <button
      className={`block w-full text-left text-app px-2 py-1 rounded ${!filterStatus ? "bg-app-10" : "hover:bg-app-10"}`}
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
        className={`block w-full text-left text-app px-2 py-1 rounded ${
          filterStatus === status ? "bg-app-10" : "hover:bg-app-10"
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
