import React, { useMemo, useState } from "react";
import { useDashboardStore } from "../../../store/dashboardStore";
import OrdersTablePagination from "./OrderTablePagination";
import OrdersTableBody from "./OrdersTableBody";
import OrdersTableHeader from "./OrdersTableHeader";

const OrdersTable: React.FC = () => {
  const { ordersData } = useDashboardStore();
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    dir: "asc" | "desc";
  } | null>(null);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const toggleSelect = (id: string) => {
    setSelectedRows((prev) => {
      const newSelectedRows = new Set(prev);
      if (newSelectedRows.has(id)) {
        newSelectedRows.delete(id);
      } else {
        newSelectedRows.add(id);
      }
      return newSelectedRows;
    });
  };

  // Filter Data
  const filteredData = useMemo(() => {
    return ordersData.filter((d) => {
      const s = search.toLowerCase();
      const matchSearch =
        d.id.toLowerCase().includes(s) ||
        d.user.name.toLowerCase().includes(s) ||
        d.project.toLowerCase().includes(s) ||
        d.address.toLowerCase().includes(s) ||
        d.status.toLowerCase().includes(s);
      const matchStatus = filterStatus ? d.status === filterStatus : true;
      return matchSearch && matchStatus;
    });
  }, [ordersData, search, filterStatus]);

  // Sort Data
  const sortedData = useMemo(() => {
    if (!sortConfig) return filteredData;
    const sorted = [...filteredData].sort((a, b) => {
      const aVal = a[sortConfig.key as keyof typeof a];
      const bVal = b[sortConfig.key as keyof typeof b];
      return aVal < bVal
        ? sortConfig.dir === "asc"
          ? -1
          : 1
        : aVal > bVal
          ? sortConfig.dir === "asc"
            ? 1
            : -1
          : 0;
    });
    return sorted;
  }, [filteredData, sortConfig]);

  const paginated = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return sortedData.slice(start, start + itemsPerPage);
  }, [page, sortedData]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  return (
    <div className="rounded-xl">
      <OrdersTableHeader
        search={search}
        setSearch={setSearch}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        onSort={(key) =>
          setSortConfig((prev) =>
            prev?.key === key
              ? { key, dir: prev.dir === "asc" ? "desc" : "asc" }
              : { key, dir: "asc" }
          )
        }
      />

      <OrdersTableBody
        data={paginated}
        selectedRows={selectedRows}
        toggleSelect={toggleSelect}
        setSelectedRows={setSelectedRows}
      />

      <OrdersTablePagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  );
};

export default OrdersTable;
