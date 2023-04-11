import React, { useState } from "react";
import { Link } from "react-router-dom";

const TableController = ({ setSearch, search }) => {
  const [inputValue, setInputValue] = useState(search);
  return (
    <div className="items-center justify-between space-y-4 pb-12 md:flex md:space-y-0">
      <div className="relative w-[300px]">
        <button
          onClick={() => setSearch(inputValue)}
          className="absolute left-[10px] top-1/2 -translate-y-1/2"
        >
          <svg
            className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
              fill=""
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
              fill=""
            />
          </svg>
        </button>
        <input
          type="search"
          defaultValue={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type to search..."
          className="w-full rounded border bg-transparent py-3 pl-9 focus:outline-none"
        />
      </div>
      <div className="flex justify-end">
        <Link
          to="#"
          className="inline-flex items-center justify-center rounded bg-primary px-10 py-2.5 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          Create Product
        </Link>
      </div>
    </div>
  );
};

export default TableController;
