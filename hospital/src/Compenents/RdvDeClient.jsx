import React, { useEffect, useState } from "react";
import RdvPatient from "./RdvPatient";
import LodingPage from "./LodingPage";
import axios from "axios";
import Cookies from "js-cookie"; // Importing js-cookie library

function RdvDeClient() {
  const [Rdv, setRdv] = useState([]);
  const [isRender, setIsRender] = useState(false);
  const [doctorRdv, setDoctorRdv] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = Cookies.get("idUser");
        if (userId) {
          const response = await axios.get(
            `http://localhost:5299/api/Rdv/patients/${userId}`
          );
          setRdv(response.data);

          if (response.data.length > 0) {
            const doctorId = response.data[0].doctorId;
            const doctorResponse = await axios.get(
              `http://localhost:5299/api/doctor/${doctorId}`
            );
            setDoctorRdv(doctorResponse.data);
          }

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
        doctorName={doctorRdv ? doctorRdv.lastName : ""}
      />
    ));
  };

  return (
    <div>
      {isRender ? (
        <>
          {Rdv.length > 0 && (
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover md:w-48"
                    src={Rdv[0].patientImage}
                    alt="Event image"
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    RDV Name
                  </div>
                  <p className="block mt-1 text-lg leading-tight font-medium text-black">
                    RDV Description
                  </p>
                  <p className="mt-2 text-gray-500">RDV Details...</p>
                </div>
              </div>
            </div>
          )}

          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                RDV
              </div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black">
                RDV Date
              </p>
              <p className="mt-2 text-gray-500">RDV Description</p>
              <p className="mt-2 text-gray-500">RDV Details...</p>
            </div>
          </div>

          {displayRdv()}
        </>
      ) : (
        <LodingPage />
      )}
    </div>
  );
}

export default RdvDeClient;
