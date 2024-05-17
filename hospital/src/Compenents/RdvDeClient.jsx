import React, { useEffect, useState } from "react";
import RdvPatient from "./RdvPatient";

import imgPatient from "../assets/images/casual-senior-man-home.jpg"
import LodingPage from "./LodingPage";
import axios from "axios";
import Cookies from "js-cookie"; // Importing js-cookie library

function RdvDeClient() {
  const [Rdv, setRdv] = useState([]);
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = Cookies.get("idUser");
        if (userId) {
          const response = await axios.get(
            `http://localhost:5299/api/Rdv/patients/${userId}`
          );
          console.log(response.data)
          setRdv(response.data);
          console.log(Rdv)
          setIsRender(true);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();

    const timer = setTimeout(() => {
      setIsRender(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);


  const displayRdv = () => {
    return Rdv.map((rdv) => (
      <RdvPatient
        key={rdv.id}
        rdvdate={rdv.appointmentDateTime}
        rdvdescreption={rdv.reason}
        rdvdetails={rdv.details}
      />
    ));
  };

  return (
    <div>
        {isRender ? ( 
        <>

       
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <img
              class="h-48 w-full object-cover md:w-48"
              src={imgPatient}
              alt="Event image"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Event Name
            </div>
            <p class="block mt-1 text-lg leading-tight font-medium text-black">
              Event Description
            </p>
            <p class="mt-2 text-gray-500">Event Details...</p>
          </div>
        </div>
      </div>

      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            RDV
          </div>
          <p class="block mt-1 text-lg leading-tight font-medium text-black">
            RDV Date
          </p>
          <p class="mt-2 text-gray-500">RDV Description</p>
          <p class="mt-2 text-gray-500">RDV Details...</p>
        </div>
      </div>


      {displayRdv()}
      </> ):(
   <LodingPage></LodingPage>
)}
    </div>
  );
}

export default RdvDeClient;
