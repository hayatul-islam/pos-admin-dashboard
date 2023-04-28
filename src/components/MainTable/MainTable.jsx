import React from "react";
import { FaSort } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const MainTable = ({ mainUseTable }) => {
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } =
    mainUseTable;
  const pathName = useLocation().pathname;
  return (
    <div className="max-w-full overflow-x-auto rounded-xl bg-white shadow-md">
      <table className="w-full table-auto" {...getTableProps()}>
        <thead className="bg-[#f7f9fc]">
          {headerGroups.map((headerGroup) => (
            <tr
              className="my-table-header border-b border-gra2 text-center font-medium uppercase text-black"
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <th
                  className={`mx-5 p-4 text-[12px] text-black hover:text-primary ${
                    pathName === "/brand" ? "lg:min-w-[120px] md:min-w-[220px] min-w-[250px]" : "min-w-[130px]"
                  }`}
                  {...column.getHeaderProps()}
                >
                  <p
                    className={`${
                      column.render("Header") !== "Action"
                        ? "flex items-center justify-between"
                        : ""
                    }`}
                  >
                    {column.render("Header")}
                    {column.render("Header") !== "Action" && (
                      <button className="sort-icon opacity-0">
                        <FaSort size={18} />
                      </button>
                    )}
                  </p>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr className="border-b border-gra2" {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td className="px-4 py-2" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
