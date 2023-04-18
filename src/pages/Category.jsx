import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { HiChevronUpDown } from "react-icons/hi2";
import { usePagination, useTable } from "react-table";
import Table from "../components/Table";
import TableHeader from "../components/TableHeader";
import TablePagination from "../components/TablePagination";
import DefaultLayout from "../layout/DefaultLayout";

const Category = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [isAscending, setIsAscending] = useState(false);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?q=${query}&_limit=${200}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (isAscending) {
          const ascending = data.sort((a, b) => (a.itemM > b.itemM ? 1 : -1));
          setData(ascending);
        } else {
          setData(data);
        }
        // setData(data);
      });
  }, [query, isAscending]);

  const columns = React.useMemo(
    () => [
      {
        Header: () => {
          return (
            <div className="group flex items-center space-x-2">
              <h2>ID</h2>
              <button
                className="hidden opacity-80 group-hover:block"
                onClick={() => setIsAscending(!isAscending)}
              >
                <HiChevronUpDown size={16} />
              </button>
            </div>
          );
        },
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

  const useTableData = useTable({ columns, data }, usePagination);

  return (
    <DefaultLayout>
      <div className="bg-gray px-5 py-10">
        <TableHeader setQuery={setQuery} />
        <Table useTableData={useTableData} />
        <TablePagination data={data} useTableData={useTableData} />
      </div>
    </DefaultLayout>
  );
};

export default Category;
