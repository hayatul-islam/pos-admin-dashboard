import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import TableController from "../components/TableController";
import TableData from "../components/TableData";
import DefaultLayout from "../layout/DefaultLayout";

const Tables = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/comments?q=${search}&_page=${page}&_limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [limit, page, search]);

  return (
    <DefaultLayout>
      <TableController setSearch={setSearch} search={search} />
      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white px-5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  <th className="min-w-[220px] px-4 py-4 font-medium uppercase text-black dark:text-white xl:pl-11">
                    Name
                  </th>
                  <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                    Email
                  </th>
                  <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                    Description
                  </th>
                  <th className="px-4 py-4 font-medium text-black dark:text-white">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {products?.map((product) => (
                  <TableData key={product?.id} product={product} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Pagination
          products={products}
          limit={limit}
          setLimit={setLimit}
          page={page}
          setPage={setPage}
        />
      </div>
    </DefaultLayout>
  );
};

export default Tables;
