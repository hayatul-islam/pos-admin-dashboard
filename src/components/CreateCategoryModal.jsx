import { useFormik } from "formik";
import React from "react";
import { BiPencil } from "react-icons/bi";

const CreateCategoryModal = ({ closeModal }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      file: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="space-y-4 py-12">
        <div className="space-y-2">
          <label className="block text-[18px]">
            Name:<span style={{ color: "red" }}>*</span>
          </label>
          <input
            className="w-full rounded border py-2 px-4 focus:outline-0"
            id="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            type="text"
            name="name"
            placeholder="Enter Name"
          />
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
                id="file"
                name="file"
                onChange={formik.handleChange}
                value={formik.values.file}
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
        <button
          type="submit"
          className="rounded bg-[#9ba3ff] px-6 py-2 text-[18px] text-white"
        >
          Save
        </button>
        <button
          onClick={closeModal}
          className="rounded bg-[#adb5bd] px-6 py-2 text-[18px]"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CreateCategoryModal;
