import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { BiPencil } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";

const CreateCategoryModal = ({ isOpen, closeModal }) => {
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className="flex justify-between font-medium leading-6"
                  >
                    <h2 className="text-[18px]">Create Product Category</h2>
                    <button onClick={closeModal}>
                      <IoIosClose size={28} />
                    </button>
                  </Dialog.Title>
                  <div className="space-y-4 py-12">
                    <div className="space-y-2">
                      <label className="block text-[18px]">
                        Name:<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        className="w-full rounded border py-2 px-4 focus:outline-0"
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                      />
                      <span class="d-block fw-400 fs-small mt-2 text-danger"></span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-[18px]">Change Logo:</h3>
                      <div className="relative h-[75px] w-[75px] shadow-lg">
                        <div className="absolute right-0">
                          <input
                            className="absolute right-0 z-50 cursor-pointer opacity-0"
                            title="Change Logo"
                            type="file"
                            accept=".png, .jpg, .jpeg"
                          />
                          <span className="absolute right-0 z-10">
                            <BiPencil />
                          </span>
                        </div>
                        <img
                          className="h-full w-full"
                          src="https://infypos.infyom.com/images/productCategory_logo.jpeg?40b774756dfcc6539f1ec08e9d03b41d"
                          alt="img-uploader"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-x-4">
                    <button className="rounded bg-[#9ba3ff] px-6 py-2 text-[18px] text-white">
                      Save
                    </button>
                    <button className="rounded bg-[#adb5bd] px-6 py-2 text-[18px]">
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default CreateCategoryModal;
