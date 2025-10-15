import React from "react";
import { Calendar, MoreHorizontal } from "lucide-react";
import { statusColor } from "../../../constants/dashboard.d";
import type { OrdersData } from "../../../types/dashboard.type";

interface Props {
  data: OrdersData[];
  selectedRows: Set<string>;
  toggleSelect: (id: string) => void;
  setSelectedRows: React.Dispatch<React.SetStateAction<Set<string>>>;
}

const OrdersTableBody: React.FC<Props> = ({
  data,
  selectedRows,
  toggleSelect,
  setSelectedRows,
}) => {
  const toggleSelectAll = () => {
    if (selectedRows.size === data.length) setSelectedRows(new Set());
    else setSelectedRows(new Set(data.map((r) => r.id)));
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs 2xl:text-sm text-app">
        <thead>
          <tr className="border-b border-app-20 text-app-40 text-left">
            <th className="py-2 px-3">
              <input
                type="checkbox"
                checked={selectedRows.size === data.length}
                onChange={toggleSelectAll}
                aria-label="Select all"
              />
            </th>
            {["id", "user", "project", "address", "date", "status"].map(
              (col) => (
                <th key={col} className="py-2 px-3 font-normal">
                  {col.charAt(0).toUpperCase() + col.slice(1)}
                </th>
              )
            )}
            <th></th>
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className={`border-b border-app-5 hover:bg-app-10 transition ${
                selectedRows.has(row.id) ? "bg-app-10" : ""
              }`}
            >
              <td className="p-3">
                <input
                  type="checkbox"
                  checked={selectedRows.has(row.id)}
                  onChange={() => toggleSelect(row.id)}
                  aria-label={`Select order ${row.id}`}
                />
              </td>
              <td className="p-3">{row.id}</td>
              <td className="p-3 flex items-center gap-2">
                <row.user.avatar className="w-6 h-6" aria-label={row.user.name} />
                {row.user.name}
              </td>
              <td className="p-3">{row.project}</td>
              <td className="p-3">{row.address}</td>
              <td className="p-3 flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {row.date}
              </td>
              <td className={`p-3 font-medium ${statusColor[row.status]}`}>
                {row.status}
              </td>
              <td className="p-3 text-right">
                <MoreHorizontal className="w-4 h-4" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTableBody;
