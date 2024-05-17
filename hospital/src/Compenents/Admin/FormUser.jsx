import React, { useEffect, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import imgLogin from "../../assets/images/happy-mature-woman-wheelchair-holding-hands-with-her-female-doctor-hospital-hallway-looking-camera.jpg";
import axios from "axios";

function FormUser() {
  const navigate = useNavigate()
  const initState = {
    FirstName: "",
    LastName: "",
    Email: "",
    UserName: "",
    password: "",
    Gender: "M",
    BirthDate: new Date().toISOString().split("T")[0],
    Telephone: "",
    Address: "",
    Image: null,
  };

  const reducer = (state, action) => {
    // eslint-disable-next-line default-case
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
      // Extracting and renaming the file
      const fileName = e.target.files[0].name;
      const file = new File([e.target.files[0]], fileName, { type: e.target.files[0].type });
  console.log(file)
      dispatch({
        type: "input",
        field: e.target.name,
        payload: file,
      });
    } else {
      dispatch({
        type: "input",
        field: e.target.name,
        payload: e.target.value,
      });
    }
  };

  const handelReset = () => {
    dispatch({ type: "reset" });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    await registerInBackend(state);
  };

  const registerInBackend = async (patient) => {
    await registerPatient(patient);
  };

  const registerPatient = async (Patient) => {
    console.log(Patient)
    const formData = new FormData();
    formData.append("FirstName", Patient.FirstName);
    formData.append("LastName", Patient.LastName);
    formData.append("Email", Patient.Email);
    formData.append("UserName", Patient.UserName);
    formData.append("password", Patient.password);
    formData.append("Gender", Patient.Gender);
    formData.append("BirthDate", Patient.BirthDate);
    formData.append("Telephone", Patient.Telephone);
    formData.append("Address", Patient.Address);
    formData.append("Image", Patient.Image);
try{
      const response = await axios.post(
      "http://localhost:5299/api/account/register/patient",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    window.alert("patient registered with success");
    navigate('/allPatients')
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
              <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true"
              >
                <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
              </div>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Cretae New Patient 
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
                    <label
                      htmlFor="fname"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="FirstName"
                        value={state.FirstName}
                        id="fname"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handelChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="lname"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="LastName"
                        value={state.LastName}
                        id="lname"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handelChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-2.5">
                    <label
                      htmlFor="username"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      UserName
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        value={state.UserName}
                        name="UserName"
                        id="username"
                        autoComplete="organization"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        onChange={handelChange}
                      />
                    </div>
                  </div>
                  <div className="mt-2.5">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Phone
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="number"
                        name="Telephone"
                        value={state.Telephone}
                        id="phone"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        onChange={handelChange}
                      />
                    </div>
                  </div>
                  <div className="mt-2.5">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="Email"
                        value={state.Email}
                        id="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        onChange={handelChange}
                      />
                    </div>
                  </div>

                  <div className="mt-2.5">
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={state.password}
                        autoComplete="password"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        onChange={handelChange}
                      />
                    </div>
                  </div>

                  <div className="mt-2.5">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      address
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="Address"
                        value={state.Address}
                        id="attr"
                        autoComplete="attr"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        onChange={handelChange}
                      />
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex items-center mx-2 gap-x-3">
                      <input
                        id="push-everything"
                        name="Gender"
                        checked={state.Gender === "M"}
                        value="M"
                        type="radio"
                        onChange={handelChange}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="push-everything"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Homme
                      </label>
                    </div>
                    <div className="flex items-center  mx-2 gap-x-3">
                      <input
                        id="push-email"
                        name="Gender"
                        value="F"
                        checked={state.Gender === "F"}
                        onChange={handelChange}
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="push-email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Famme
                      </label>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      date naissance
                    </label>
                    <div className="mt-2.5">
                      <input
                        value={state.BirthDate}
                        type="date"
                        name="BirthDate"
                        id="datab"
                        onChange={handelChange}
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                    
                  </div>


                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Image
                    </label>
                    <div className="mt-2.5">
                      <input
                      
                        type="file"
                        name="Image"
                        id="databd"
                        onChange={handelChange}
                        autoComplete="email"
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
                    className="block w-full rounded-md mt-1 bg-stone-100 px-3.5 py-2.5 text-center text-sm font-semibold text-yellow-400 shadow-sm hover:bg-neutral-900 text-yellow-400focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>

            {/* end  */}

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
export default FormUser;
