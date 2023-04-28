import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { TbArrowBarRight, TbArrowBarToLeft } from "react-icons/tb";

const Pagination = ({ mainUseTable, data }) => {
  const {
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
  } = mainUseTable;

  const { pageIndex } = state;

  return (
    <div className="max-w-full">
      {data.length !== 0 && (
        <div className="flex justify-between items-center mt-3 px-4 py-2">
          <div className="flex items-center gap-3">
            <p className="font-medium">
              Page {pageIndex + 1} of {pageOptions.length}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              <TbArrowBarRight size={25} />
            </button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              <MdKeyboardArrowRight size={25} />
            </button>

            <button onClick={() => nextPage()} disabled={!canNextPage}>
              <MdKeyboardArrowLeft size={25} />
            </button>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              <TbArrowBarToLeft size={25} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pagination;
