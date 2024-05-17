/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function CardDoctors({ doctor }) {

  const dateHiring = new Date(doctor.dateHiring).toISOString().split("T")[0];
  const navigate = useNavigate()

  const deleteDoctorById = async (e) =>{
    e.preventDefault()
     if(window.confirm("are you sure you want to delete this Doctor"))
      {

      
        try {
          await axios.delete(`http://localhost:5299/api/Doctor/${doctor.id}`);
          navigate('/allPatients')
        } catch (error) {
          console.log("Error deleting doctor:", error);
        }
      }
      
  }
  return (
    <tr className="">
      <td className="p-2 border-b border-blue-gray-50 ">
        <div className="flex items-center ">
          <img
            src={doctor.image}
            alt="John Michael"
            className="relative inline-block h-9 w-9 !rounded-full object-cover object-center"
          />
          <div className="flex flex-col">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              {doctor.firstName}
            </p>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
              {doctor.email}
            </p>
          </div>
        </div>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <div className="flex flex-col">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            doctor
          </p>
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
            {doctor.speciality}
          </p>
        </div>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <div className="w-max">
          <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
            <span className="">online</span>
          </div>
        </div>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
          {dateHiring}
        </p>
      </td>
      <td className="p-4 border-b border-blue-gray-50 flex">
        <Link
          to={`/doctor/update/${doctor.id}`}
          key={doctor.id}
          className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-4 h-4"
            >
              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
            </svg>
          </span>
        </Link>

        <button
      
          key={doctor.id}
           onClick={deleteDoctorById}
          className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M5 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-2 9a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1Zm13-6a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>
      </td>
    </tr>
  );
}

export default CardDoctors;

// {filteredDoctors.map((doctor) => (
//   <CardDoctors key={doctor.id} doctor={doctor} />
// ))}

// function AllDoctors() {
//   const [doctors, setDoctors] = useState([
//     {
//       id: 1,
//       name: 'hamza',
//       email: 'hamza@gmail.com',
//       created: '04/03/2024',
//       specialite: 'lm3da'
//     },
//     {
//       id: 2,
//       name: 'ali',
//       specialite: 'dmagh',
//       email: 'ali@gmail.com',
//       created: '04/03/2024',
//     },
//     {
//       id: 3,
//       name: 'abidar',
//       email: 'abidar@gmail.com',
//       created: '04/03/2024',
//       specialite: 'lm3da',
//     },
//   ]);

// const [searchQuery, setSearchQuery] = useState("");

// const filteredDoctors = doctors.filter((doctor) =>
//   doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
// );

// const handleSearchChange = (event) => {
//   setSearchQuery(event.target.value);
// };
