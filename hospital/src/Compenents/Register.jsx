import React, { useReducer, useRef } from "react";
import imgLogin from "../assets/images/doctor-checking-one-her-patients.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const initState = {
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    gender: "M",
    birthDate: new Date().toISOString().split("T")[0],
    telephone: "",
    address: "",
    image: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "input":
        return { ...state, [action.field]: action.payload };
      case "reset":
        return initState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const handelChange = (e) => {
    if (e.target.type === "file") {
      const fileName = e.target.files[0].name;
      const file = new File([e.target.files[0]], fileName, { type: e.target.files[0].type });
      dispatch({ type: "input", field: e.target.name, payload: file });
    } else {
      dispatch({ type: "input", field: e.target.name, payload: e.target.value });
    }
  };

  const handelReset = () => {
    dispatch({ type: "reset" });
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number
    if (!validatePhoneNumber(state.telephone)) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    // Validate password
    if (!validatePassword(state.password)) {
      alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
      return;
    }

    // Proceed with registration
    await registerInBackend(state);
  };

  const registerInBackend = async (patient) => {
    await registerPatient(patient);
  };

  const registerPatient = async (Patient) => {
    const formData = new FormData();
    for (const key in Patient) {
      formData.append(key, Patient[key]);
    }

    try {
      const response = await axios.post(
        "http://localhost:5299/api/account/register/patient",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      window.alert("Patient registered with success");
      navigate('/');
    } catch (error) {
      console.log("register 404:", error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-3 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <div className="flex flex-col justify-center p-8 md:p-5">
            <div className="isolate bg-white px-2 py-6 sm:py-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Register
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                  Aute magna irure deserunt veniam aliqua magna enim voluptate.
                </p>
              </div>
              <form
                action="#"
                onSubmit={handelSubmit}
                className="mx-auto mt-16 max-w-xl sm:mt-20"
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fname" className="block text-sm font-semibold leading-6 text-gray-900">
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="firstName"
                        value={state.firstName}
                        id="fname"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handelChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lname" className="block text-sm font-semibold leading-6 text-gray-900">
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="lastName"
                        value={state.lastName}
                        id="lname"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handelChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-2.5">
                    <label htmlFor="username" className="block text-sm font-semibold leading-6 text-gray-900">
                      UserName
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        value={state.userName}
                        name="userName"
                        id="username"
                        autoComplete="organization"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        onChange={handelChange}
                      />
                    </div>
                  </div>
                  <div className="mt-2.5">
                    <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                      Phone
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="number"
                        name="telephone"
                        value={state.telephone}
                        id="phone"
                        autoComplete="tel"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        onChange={handelChange}
                      />
                    </div>
                  </div>
                  <div className="mt-2.5">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        value={state.email}
                        id="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        onChange={handelChange}
                      />
                    </div>
                  </div>
                  <div className="mt-2.5">
                    <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
                      Password
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={state.password}
                        autoComplete="new-password"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        onChange={handelChange}
                      />
                    </div>
                  </div>
                  <div className="mt-2.5">
                    <label htmlFor="address" className="block text-sm font-semibold leading-6 text-gray-900">
                      Address
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="address"
                        value={state.address}
                        id="address"
                        autoComplete="street-address"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        onChange={handelChange}
                      />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex items-center mx-2 gap-x-3">
                      <input
                        id="gender-male"
                        name="gender"
                        checked={state.gender === "M"}
                        value="M"
                        type="radio"
                        onChange={handelChange}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label htmlFor="gender-male" className="block text-sm font-medium leading-6 text-gray-900">
                        Homme
                      </label>
                    </div>
                    <div className="flex items-center mx-2 gap-x-3">
                      <input
                        id="gender-female"
                        name="gender"
                        value="F"
                        checked={state.gender === "F"}
                        onChange={handelChange}
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label htmlFor="gender-female" className="block text-sm font-medium leading-6 text-gray-900">
                        Famme
                      </label>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="birthDate" className="block text-sm font-semibold leading-6 text-gray-900">
                      Date de naissance
                    </label>
                    <div className="mt-2.5">
                      <input
                        value={state.birthDate}
                        type="date"
                        name="birthDate"
                        id="birthDate"
                        onChange={handelChange}
                        autoComplete="bdate"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="image" className="block text-sm font-semibold leading-6 text-gray-900">
                      Image
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="file"
                        name="image"
                        id="image"
                        onChange={handelChange}
                        autoComplete="image"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Register
                  </button>
                  <button
                    type="button"
                    onClick={handelReset}
                    className="block w-full rounded-md mt-1 bg-stone-100 px-3.5 py-2.5 text-center text-sm font-semibold text-yellow-400 shadow-sm hover:bg-neutral-900 text-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
            <Link to="/">
              <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                Back to Login
              </span>
            </Link>
          </div>
          <div className="relative">
            <img
              src={imgLogin}
              alt="img"
              className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
