import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

import { validate } from "./validate";
import { notify } from "./toast";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "login"));
  }, [data, touched]);

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const focusHanlder = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("شما وارد شدید!", "success");
    } else {
      notify("اطلاعات وارد شده نامعتبر است", "error");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <form onSubmit={submitHandler}>
        <h2 className="text-3xl">ورود</h2>
        <div className="mt-4 text-gray-500 grid">
          <label>ایمیل</label>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHanlder}
            className="border-2 border-gray-200 border-opacity-60 rounded mt-1 py-1.5 pr-2 pl-48"
          />
          {errors.email && touched.email && (
            <span className="text-red-300">{errors.email}</span>
          )}
        </div>
        <div className="mt-4 text-gray-500 grid">
          <label>رمز عبور</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHanlder}
            className="border-2 border-gray-200 border-opacity-60 rounded mt-1 py-1.5 pr-2 pl-48"
          />
          {errors.password && touched.password && (
            <span className="text-red-300">{errors.password}</span>
          )}
        </div>

        <div className="flex flex-col py-5">
          <button
            type="submit"
            className="bg-green-400 hover:bg-green-500 duration-300 text-white rounded py-2 px-4 rounded w-24"
          >
            ورود
          </button>
          <div className="flex mt-2">
            <p>هنوز ثبت نام نکرده اید؟</p>
            <Link
              to="/register"
              className="text-blue-400 hover:text-blue-600 underline"
            >
              همین الان ثبت نام کنید!
            </Link>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
