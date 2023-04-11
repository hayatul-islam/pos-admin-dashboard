import React from "react";
import { CgPushChevronLeft, CgPushChevronRight } from "react-icons/cg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = ({ products, page, setPage, limit, setLimit }) => {
  const totalCount = 500;
  const totalPage = Math.ceil(totalCount / limit);
  const firstLimitData =
    page > 1 ? parseInt(limit * page) - parseInt(limit) + 1 : 1;
  const lastLimitData = page > 1 ? parseInt(limit * page) : parseInt(limit);
  const nextPage = () => {
    if (page >= 1 && page < totalPage) {
      setPage(page + 1);
    }
  };
  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const lastPage = () => {
    setPage(totalPage);
  };
  return (
    <nav className="flex items-center justify-center text-[#0000008a] dark:text-white md:justify-between">
      <div className="hidden items-center gap-x-6 md:flex">
        <span>Records per page</span>
        <div>
          <select
            className="text-black"
            onChange={(e) => setLimit(e.target.value)}
            aria-label="[object Object]"
          >
            <option value="10" defaultValue="10">
              10
            </option>
            <option value="15">15</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <span>
          {firstLimitData} - {lastLimitData} of {products?.length}
        </span>
      </div>
      <div className="flex gap-x-4">
        <button onClick={() => setPage(1)} type="button">
          <CgPushChevronLeft size={20} />
        </button>
        <button onClick={previousPage} type="button">
          <FiChevronLeft size={20} />
        </button>
        <select
          className="text-black md:hidden"
          onChange={(e) => setLimit(e.target.value)}
          aria-label="[object Object]"
        >
          <option value="10" defaultValue="10">
            10
          </option>
          <option value="15">15</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <button onClick={nextPage} type="button">
          <FiChevronRight size={20} />
        </button>
        <button onClick={lastPage} type="button">
          <CgPushChevronRight size={20} />
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
