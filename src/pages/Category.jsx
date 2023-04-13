import React, { useEffect, useState } from "react";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineSearch,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Table from "../components/Table";
import TablePagination from "../components/TablePagination";
import DefaultLayout from "../layout/DefaultLayout";

const Category = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?q=${query}&_limit=${200}`
    )
      .then((res) => res.json())
      .then((d) => setData(d));
  }, [query]);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: () => (
          <div className="flex items-center justify-end space-x-3.5">
            <button>
              <AiOutlineEdit size={20} />
            </button>
            <button>
              <AiOutlineDelete size={20} />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  return (
    <DefaultLayout>
      <div className="bg-gray px-5 py-10">
        <div className="mb-10 block items-center justify-between gap-2 md:flex lg:flex">
          <div>
            <label className="border-brand flex items-center rounded-md border bg-white px-3 py-1">
              <AiOutlineSearch className="text-brand2" size={20} />
              <input
                onChange={(e) => setQuery(e.target.value)}
                className="ml-1 w-full bg-transparent py-2 outline-0 md:w-[250px]"
                type="text"
                placeholder="Search"
              />
            </label>
          </div>
          <div className="flex justify-end">
            <Link
              to="#"
              className="inline-flex items-center justify-center rounded bg-primary px-10 py-2.5 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Create Product Category
            </Link>
          </div>
        </div>
        <Table columns={columns} data={data} />
        <TablePagination columns={columns} data={data} />
      </div>
    </DefaultLayout>
  );
};

export default Category;
