import React from "react";
import { CgPushChevronLeft, CgPushChevronRight } from "react-icons/cg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const TablePagination = ({ data, useTableData }) => {
  const {
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
  } = useTableData;
  const { pageIndex } = state;
  return (
    <div className="pt-6">
      {data.length !== 0 && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <p className="font-medium">
              Page {pageIndex + 1} of {pageOptions.length}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              <CgPushChevronLeft size={20} />
            </button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              <FiChevronLeft size={20} />
            </button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              <FiChevronRight size={20} />
            </button>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              <CgPushChevronRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TablePagination;
