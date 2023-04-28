import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import ModalDialog from "../../layout/ModalDialog";
import CreateCategoryModal from "../CreateCategoryModal";

const TableSetting = ({ setQuiery, setFilter, filter }) => {
  const pathName = useLocation().pathname;
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="mb-10 block items-center justify-between gap-2 md:flex lg:flex">
        {pathName === "/brand" ||
        "/warehouse" ||
        "/currencies" ||
        "/languages" ? (
          <>
            <div>
              <label className="flex items-center rounded-md border border-[#818080] bg-white px-3 py-1">
                <AiOutlineSearch className="text-brand2" size={20} />
                <input
                  onChange={(e) => setQuiery(e.target.value)}
                  className="ml-1 bg-transparent outline-0"
                  type="text"
                  placeholder="Search"
                />
              </label>
            </div>

            {pathName === "/brand" && (
              <div className="items-center justify-between gap-2 md:flex">
                <button
                  onClick={openModal}
                  className="mt-5 rounded-md bg-primary px-4 py-2 font-medium capitalize text-white md:mt-0 lg:mt-0"
                >
                  create brand
                </button>
              </div>
            )}

            {pathName === "/warehouse" && (
              <div className="items-center justify-between gap-2 md:flex">
                <button
                  onClick={openModal}
                  className="mt-5 rounded-md bg-primary px-4 py-2 font-medium capitalize text-white md:mt-0 lg:mt-0"
                >
                  create warehouse
                </button>
              </div>
            )}

            {pathName === "/currencies" && (
              <div className="items-center justify-between gap-2 md:flex">
                <button
                  onClick={openModal}
                  className="mt-5 rounded-md bg-primary px-4 py-2 font-medium capitalize text-white md:mt-0 lg:mt-0"
                >
                  create currency
                </button>
              </div>
            )}

            {pathName === "/languages" && (
              <div className="items-center justify-between gap-2 md:flex">
                <button
                  onClick={openModal}
                  className="mt-5 rounded-md bg-primary px-4 py-2 font-medium capitalize text-white md:mt-0 lg:mt-0"
                >
                  create language
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <div>
              <label className="flex items-center rounded-md border border-brand bg-white px-3 py-1">
                <AiOutlineSearch className="text-brand2" size={20} />
                <input
                  onChange={(e) => setQuiery(e.target.value)}
                  className="ml-1 bg-transparent outline-0"
                  type="text"
                  placeholder="Search"
                />
              </label>
            </div>
            <div className="items-center justify-between gap-2 md:flex">
              <div className="relative mt-5 flex justify-between gap-2 md:mt-0 lg:mt-0">
                <button
                  onClick={() => setFilter(!filter)}
                  className="rounded-md bg-brand2 px-4 py-2 font-medium capitalize text-white"
                >
                  <FaFilter size={22} />
                </button>
                <button className="rounded-md bg-brand2 px-4 py-2 font-medium capitalize text-white">
                  expoet product
                </button>
                <div
                  className={`absolute top-[105%] right-[-75$] w-[200px] rounded-md bg-white px-7 py-4 shadow-lg md:right-[75%] ${
                    filter ? "block" : "hidden"
                  }`}
                >
                  <p className="font-medium capitalize">Product unit</p>
                  <select className="my-2 w-full rounded-md border border-gra2 px-2 py-1 outline-none">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                  <button className="mt-5 rounded-md bg-brand2 px-5 py-1 font-semibold text-white">
                    Reset
                  </button>
                </div>
              </div>
              <button className="mt-5 rounded-md bg-brand2 px-4 py-2 font-medium capitalize text-white md:mt-0 lg:mt-0">
                import product
              </button>
              <label htmlFor="main-modal" className="btn">
                open modal
              </label>
            </div>
          </>
        )}
      </div>

      {isOpen && (
        <ModalDialog
          isOpen={isOpen}
          closeModal={closeModal}
          title="Create Brand"
          width="500"
        >
          <CreateCategoryModal closeModal={closeModal} />
        </ModalDialog>
      )}
    </>
  );
};

export default TableSetting;
