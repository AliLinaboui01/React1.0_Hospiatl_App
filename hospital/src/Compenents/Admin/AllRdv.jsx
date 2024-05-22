import React, { useEffect, useState } from "react";
import CardPatient from "./CardPatient";
import NavBarAdmin from "./NavBarAdmin";
import { Link, useNavigate } from "react-router-dom";
import ShowRdvs from "./ShowRdvs";
import axios from "axios";
import Cookies from "js-cookie";

function AllRdv() {
  const [allRdv, setAllRdv] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate()
  useEffect(() => {
  
    const id = Cookies.get("idUser");
    const role = Cookies.get("roleUser")
    console.log(id);
    if (role !=="Admin") {
      navigate('/')
    }else {
      
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5299/api/medicalService");
        setAllRdv(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }
  }, []);

  const filterRdvPatient = allRdv.filter((rdv) => {
    return (
      rdv.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      searchQuery === ""
    );
  });

  const displayAllRdv = () => {
    const list = filterRdvPatient.map((rdv, key) => <ShowRdvs rdv={rdv} />);
    if (list.length > 0) return list;
    else
      return (
        <>
          <tr className="flex justify-center mx-auto text-center">
            <td colSpan={5}>
              <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Patient not found
              </h1>{" "}
            </td>
          </tr>
        </>
      );
  };

  const handelChnage = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <NavBarAdmin></NavBarAdmin>

      <div className="flex justify-center mt-3">
        <div class="flex flex-row bg-cyan-400 h-10 w-[400px] rounded-[30px]">
          <span class="flex flex-col justify-center text-white font-bold grow-[1] max-w-[90%] text-center">
            All Rendez-Vous In Our Service{" "}
          </span>
          <div class="w-[10%] bg-purple-500 rounded-r-2xl shadow-[0_0_2px_#00C85177]"></div>
        </div>
        <>
          <input
            className="rounded-[3px] mt-2 border border-blue-gray-200 border-t-transparent bg-transparent px-3  !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder="Search for Patient"
            value={searchQuery}
            onChange={handelChnage}
          />
        </>
      </div>
      <div class="flex flex-row justify-center flex-wrap gap-3 mt-5 px-8">
        {displayAllRdv()}
      </div>
    </>
  );
}

export default AllRdv;
