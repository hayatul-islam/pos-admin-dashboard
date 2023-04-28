import { useFormik } from "formik";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const ForgetPassword = () => {
  const forgetSchema = Yup.object({
    email: Yup.string().email().required("Please write an email"),
  });

  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: forgetSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 md:px-0">
      <div className="w-[100%] rounded-xl bg-white px-6 py-8 shadow-2xl md:w-[45%] md:p-4 lg:w-[40%]">
        <h1 className="mb-4 text-center text-2xl font-bold text-black">
          Forgot Password?
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <p className="flex items-center justify-end">
              <Link
                className="font-semibold text-black
            "
                to="/login"
              >
                Back To Sign In
              </Link>
            </p>
            <div>
              <label className="flex items-center border-b border-body py-1">
                <FaUserAlt className="text-black" size={20} />
                <input
                  className="w-full px-4 py-1 outline-none placeholder:font-medium placeholder:text-body"
                  type="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                  name="email"
                ></input>
              </label>
              {errors.email && touched.email ? (
                <p className="my-1 font-medium text-meta-1">{errors?.email}</p>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className=" mt-5 w-full rounded-md bg-[#5063ef] px-4 py-1 font-semibold text-white duration-300 hover:bg-primary"
            >
              Send password reset link
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
