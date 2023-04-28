import React, { useEffect, useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { usePagination, useTable } from "react-table";
import { AiFillEye } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import TableSetting from "../components/TableSetting/TableSetting";
import MainTable from "../components/MainTable/MainTable";
import Pagination from "../components/Pagination/Pagination";
import ModalDialog from "../layout/ModalDialog";

const Currencies = () => {
  const [data, setData] = useState([]);
  const [quiery, setQuiery] = useState("");

  const [editId, setEditId] = useState("");
  const [editData, setEditiData] = useState({});

  const [deleteId, setDeleteId] = useState("");
  const [refresh, setRefresh] = useState(false);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    setEditId("");
    setEditiData({});
  }

  function openModal() {
    setIsOpen(true);
  }
  // modal funtion ends

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/comments?q=${quiery}&_limit=${100}`
    )
      .then((res) => res.json())
      .then((d) => setData(d));
  }, [quiery, refresh]);
  // table data get from DB

  useEffect(() => {
    if (editId) {
      fetch(`https://jsonplaceholder.typicode.com/comments/${editId}`)
        .then((res) => res.json())
        .then((d) => setEditiData(d));
    }
  }, [editId]);
  // get single data

  useEffect(() => {
    if (deleteId) {
      fetch(`https://jsonplaceholder.typicode.com/comments/${deleteId}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setRefresh(!refresh);
        });
    }
  }, []);
  // delete single data

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${editId}`, {
      method: "PUT",
      body: JSON.stringify({
        name: "foo",
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  // updateData

  const columns = React.useMemo(
    () => [
      {
        Header: `Name`,
        accessor: "name",
        Cell: (row) => {
          return (
            <div className="">
              <p className="text-black">{row.cell?.row?.original?.email}</p>
            </div>
          );
        },
      },
      {
        Header: "Code",
        accessor: "code",
        Cell: (row) => {
          return <span className="bg-[#ccebfe] px-2 py-1 text-[#0099fb] text-[13px] rounded-md">USD</span>;
        },
      },
      {
        Header: "Symbol",
        accessor: "symbol",
        Cell: (row) => {
          return <span className="bg-[#e0e3ff] px-2 py-1 text-[#6571ff] text-[13px] rounded-md">$</span>;
        },
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: (row) => (
          <div className="flex items-center justify-end space-x-3.5">
            <button
              onClick={() => {
                openModal(), setEditId(row.cell?.row?.original?.id);
              }}
            >
              <BiEdit className="text-primary" size={25} />
            </button>
            <button
              onClick={() => setDeleteId(row.cell?.row?.original?.id)}
              className="rounded-[50%] p-2"
            >
              <MdDelete className="text-meta-1" size={25} />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const mainUseTable = useTable({ columns, data }, usePagination);

  return (
    <>
      <DefaultLayout>
        <div className="py-10">
          <TableSetting setQuiery={setQuiery} />

          <MainTable mainUseTable={mainUseTable} />

          <Pagination mainUseTable={mainUseTable} data={data} />
        </div>
      </DefaultLayout>

      {isOpen && editId && editData && (
        <ModalDialog
          isOpen={isOpen}
          closeModal={closeModal}
          title="Edit Brand"
          width="500"
        >
          <input
            className="my-5 w-full rounded-md border border-brand2 px-3 py-1 outline-none"
            defaultValue={editData?.name}
          ></input>
          <span>Product ID: {editData?.id}</span>
          <div className="flex items-center justify-center">
            <button className="rounded-md bg-brand2 px-5 py-2 font-medium text-white">
              Update
            </button>
          </div>
        </ModalDialog>
      )}
    </>
  );
};

export default Currencies;
