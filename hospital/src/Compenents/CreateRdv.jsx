import React, { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import { useNavigate, useParams } from "react-router-dom";
import LodingPage from "./LodingPage";
import Cookies from "js-cookie";
import axios from "axios";

function CreateRdv() {
  const { idcorotr, idpatient } = useParams();
  const [isBlocked, setIsBlocked] = useState(false);

  const dateRdvz = useRef();
  const timeRdvz = useRef();
  const resson = useRef();

  // Calculate today's date and the date one week from today
  const today = new Date();
  const oneWeekFromToday = new Date(today);
  oneWeekFromToday.setDate(today.getDate() + 7);

  // Format dates to YYYY-MM-DD
  const minDate = today.toISOString().split("T")[0];
  const maxDate = oneWeekFromToday.toISOString().split("T")[0];

  useEffect(() => {
    console.log("patient : " + idpatient + " doctor id " + idcorotr);

    const timer = setTimeout(() => {
      setIsBlocked(true); // Lever le blocage après 30 secondes
    }, 1000); // 30 secondes en millisecondes

    return () => clearTimeout(timer); // Nettoyer le timer lorsque le composant est démonté
  }, [idpatient, idcorotr]);

  const userNameLogin = Cookies.get("userName");

  const handelSubmit = (e) => {
    e.preventDefault();
    const reson = resson.current.value;
    const date = dateRdvz.current.value;
    const time = timeRdvz.current.value;
    const appointmentDateTime = new Date(`${date}T${time}:00.000Z`).toISOString();

    const appointmentData = {
      appointmentDateTime,
      reason: reson,
      patientId: idpatient,
      doctorId: idcorotr,
    };

    // Validate time
    const hours = new Date(appointmentDateTime).getUTCHours();
    if (hours < 9 || hours > 16) {
      alert("Please choose a time between 9 AM and 4 PM.");
      return;
    }

    createRdv(appointmentData);
  };
const navigate = useNavigate()
  async function createRdv(appointmentData) {
    try {
      // Make a POST request to your backend API endpoint to create a rdv
      const response = await axios.post('http://localhost:5299/api/Rdv', appointmentData);
      
      // If the request is successful, return the response data
      console.log("Appointment created successfully", response.data);

      const descrp = "Appointment created successfully at "+appointmentData.appointmentDateTime 
      navigate(`/succesOperation/${descrp}`)
      
      return response.data;
    } catch (error) {
      // If there's an error, log it and return null or throw the error
      console.error('Error creating rdv:', error.response ? error.response.data : error.message);
      window.alert(error.response ? error.response.data : error.message)
      return null;
    }
  }

  return (
    <div>
      {isBlocked ? (
        <>
          <header className="absolute inset-x-0 top-0 z-50">
            <NavBar />
          </header>

          <div className="relative isolate px-6 pt-10 lg:px-6">
            <div
              className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-60"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div className="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
              <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                      <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                        Confirm Reservation 
                      </h1>
                      
                      <p className="text-normal text-lg font-medium text-gray-600 dark:text-gray-400 mt-2">
                        Hospital Info :
                      </p>
                      <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          className="w-8 h-8 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                        <div className="ml-4 text-md tracking-wide font-semibold w-90">
                        Mohammed V Hospital, Avenue des FAR, Rabat, 10000
                        </div>
                      </div>
                      <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          className="w-8 h-8 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          ></path>
                        </svg>
                        <div className="ml-4 text-md tracking-wide font-semibold w-40">
                          +44 1234567890
                        </div>
                      </div>
                      <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          className="w-8 h-8 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                        <div className="ml-4 text-md tracking-wide font-semibold w-40">
                          hospital.chifa2@acme.org
                        </div>
                      </div>
                    </div>

                    <form className="p-6 flex flex-col justify-center" onSubmit={handelSubmit}>
                      <div className="mb-4">
                        <label
                          htmlFor="dateRdv"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                        >
                          Select Date
                        </label>
                        <input
                          type="date"
                          id="dateRdv"
                          ref={dateRdvz}
                          className="mt-1 block w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          required
                          min={minDate}
                          max={maxDate}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="timeRdv"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                        >
                          Select Time
                        </label>
                        <input
                          type="time"
                          id="timeRdv"
                          ref={timeRdvz}
                          className="mt-1 block w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          min="09:00"
                          max="16:00"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="resson"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                        >
                          Reason
                        </label>
                        <input
                          type="text"
                          id="resson"
                          ref={resson}
                          className="mt-1 block w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="mt-6 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <LodingPage />
      )}
    </div>
  );
}

export default CreateRdv;
