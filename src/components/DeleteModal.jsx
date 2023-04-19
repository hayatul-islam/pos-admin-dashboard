import React from "react";
import { RiDeleteBin4Line } from "react-icons/ri";

const DeleteModal = ({ variant, closeModal }) => {
  return (
    <div className="space-y-4 text-center">
      <button className="text-center">
        <RiDeleteBin4Line size={40} color="red" />
      </button>
      <h2 className="text-[24px]">Are you sure?</h2>
      <p>Do you want to delete this '{variant}'!</p>
      <div className="flex justify-center gap-x-4 py-4">
        <button
          onClick={closeModal}
          className="rounded bg-[#adb5bd] px-6 py-2 text-[18px] text-white"
        >
          Cancel!
        </button>
        <button
          onClick={closeModal}
          type="submit"
          className="rounded bg-[#f62947] px-6 py-2 text-[18px] text-white"
        >
          Delete!
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
