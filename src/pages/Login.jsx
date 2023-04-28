import React, { useState } from "react";
import pos from "../assets/pos-login.png";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AiFillLock, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const [show, setShow] = useState(false);

  const loginSchema = Yup.object({
    email: Yup.string().email().required("Please write an email"),
    password: Yup.string().min(8).max(30).required("Please write a password"),
  });

  const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center md:px-0">
      <div className="mx-4 w-full items-center justify-evenly rounded-xl bg-white p-3 lg:py-12 md:py-10 py-8 lg:my-0 md:my-0 my-4 shadow-2xl md:flex lg:flex">
        <div className="w-[100%] md:w-[35%] lg:w-[40%] lg:mb-0 md:mb-0 mb-3">
          <img className="mx-auto lg:w-[50%] md:w-[100%] w-[70%] md:h-[300px] h-[250px]" src={pos} alt="pos-img" />
        </div>

        <div className="w-[100%] md:w-[45%] md:p-4">
          <h1 className="mb-8 md:text-3xl text-2xl font-extrabold text-black">Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="flex items-center border-b border-body py-1">
                <FaUserAlt className="text-black" size={20} />
                <input
                  className="w-full px-4 py-1 placeholder-body outline-none placeholder:font-medium"
                  type="email"
                  placeholder="Your Email"
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

            <div className="mt-6">
              <label className="flex items-center border-b border-body py-1">
                <AiFillLock className="text-black" size={25} />
                <input
                  className="w-full px-4 py-1 placeholder-body outline-none placeholder:font-medium"
                  type={`${show ? "text" : "password"}`}
                  placeholder="Password"
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                  name="password"
                ></input>

                {values.password.length !== 0 && (
                  <div>
                    {show ? (
                      <AiFillEyeInvisible
                        onClick={() => setShow(!show)}
                        className="cursor-pointer text-black"
                        size={25}
                      />
                    ) : (
                      <AiFillEye
                        onClick={() => setShow(!show)}
                        className="cursor-pointer text-black"
                        size={25}
                      />
                    )}
                  </div>
                )}
              </label>
              {errors.password && touched.password ? (
                <p className="my-1 font-medium text-meta-1">
                  {errors?.password}
                </p>
              ) : (
                ""
              )}
            </div>
            <p className="my-5 flex items-center justify-between text-center">
              <label className="flex cursor-pointer items-center">
                <input type="checkbox" className="checked:bg-brand2" />
                <span className="ml-1 font-semibold text-graydark">
                  Remember me
                </span>
              </label>
              <Link
                className="font-semibold text-strokedark"
                to="/forgetpassword"
              >
                Forget password?
              </Link>
            </p>

            <button
              type="submit"
              className="md:mt-4 mt-2 rounded-md duration-300 bg-[#5063ef] hover:bg-primary px-5 py-2 font-semibold text-white"
            >
              Sign In
            </button>
          </form>
          <div className="lg:mt-20 md:mt-18 mt-6 items-center justify-between md:block lg:flex">
            <h2 className="font-semibold text-strokedark lg:mb-0 md:mb-3 mb-3">Or login with</h2>
            <div className="flex w-full items-center justify-evenly lg:w-[75%]">
              <button className="rounded-md duration-300 bg-[#44adf3] hover:bg-meta-5 px-4 py-1 font-semibold text-white">
                Admin
              </button>
              <button className="rounded-md duration-300 bg-[#5063ef] hover:bg-primary px-4 py-1 font-semibold text-white">
                Sales
              </button>
              <button className="rounded-md duration-300 bg-[#3bb871] hover:bg-success px-4 py-1 font-semibold text-white">
                Purchases
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
