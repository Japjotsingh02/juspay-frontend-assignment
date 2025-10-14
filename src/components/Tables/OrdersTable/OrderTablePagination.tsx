import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const OrdersTablePagination: React.FC<Props> = ({ page, totalPages, setPage }) => (
  <div className="flex justify-end items-center gap-2 mt-4">
    <button
      className="p-1.5 rounded-md hover:bg-gray-100 disabled:opacity-40"
      aria-label="Previous Page"
      disabled={page === 1}
      onClick={() => setPage(page - 1)}
    >
      <ChevronLeft className="w-4 h-4" />
    </button>

    {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
      <button
        key={num}
        onClick={() => setPage(num)}
        className={`px-3 py-1.5 text-sm rounded-md ${
          page === num ? "bg-gray-900 text-white" : "hover:bg-gray-100 text-gray-700"
        }`}
      >
        {num}
      </button>
    ))}

    <button
      className="p-1.5 rounded-md hover:bg-gray-100 disabled:opacity-40"
      aria-label="Next Page"
      disabled={page === totalPages}
      onClick={() => setPage(page + 1)}
    >
      <ChevronRight className="w-4 h-4" />
    </button>
  </div>
);

export default OrdersTablePagination;
