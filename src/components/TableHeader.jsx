import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import CreateCategoryModal from "../components/CreateCategoryModal";
import ModalDialog from "../layout/ModalDialog";

const TableHeader = ({ setQuery }) => {
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
          <button
            onClick={openModal}
            className="inline-flex items-center justify-center rounded bg-primary px-10 py-2.5 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            Create Product Category
          </button>
        </div>
      </div>
      {isOpen && (
        <ModalDialog
          isOpen={isOpen}
          closeModal={closeModal}
          title="Create Product Category"
          width="500"
        >
          <CreateCategoryModal closeModal={closeModal} />
        </ModalDialog>
      )}
    </>
  );
};

export default TableHeader;
