import { useState } from "react";

export const Table = ({
  columns,
  data,
}: {
  columns: Array<{ Header: string; accessor: string; width?: number }>;
  data: any[];
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <table className="border border-black w-full min-h-[300px]">
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.Header}
              style={{ width: column.width ? `${column.width}px` : "auto" }}
            >
              {column.Header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {paginatedData.map((row, rowIndex) => (
          <tr key={row.id || rowIndex}>
            {columns.map((column) => (
              <td
                key={column.accessor}
                style={{ width: column.width ? `${column.width}px` : "auto" }}
                className="border border-gray-200"
              >
                {String(row[column.accessor])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={columns.length} className="text-center">
            <div className="flex items-center justify-center gap-3 mt-2">
              <select
                name="rowsPage"
                id="rowsPage"
                className="border p-1 bg-white"
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select>
              <button
                className="bg-white border px-2 py-1 disabled:opacity-50"
                disabled={currentPage === 1}
                onClick={handlePreviousPage}
              >
                Previous
              </button>
              <button
                className="bg-white border px-2 py-1 disabled:opacity-50"
                disabled={currentPage === totalPages}
                onClick={handleNextPage}
              >
                Next
              </button>
              <span>{`Page ${currentPage} of ${totalPages}`}</span>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
