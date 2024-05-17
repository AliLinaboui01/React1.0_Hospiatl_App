import React, { useEffect, useState } from "react";

import { Alert } from "@material-tailwind/react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Specialite({ passvarToparent }) {
  const [displaySpecialite, setDsplaySpecialite] = useState(false);

  const [specialite, setSpecialite] = useState([]);

  const [childvarspe, setChildvarspe] = useState("");
  


  useEffect(() => {
    
      const fetchSpesialite = async () => {
        try {
          const response = await axios.get(
            'http://localhost:5299/api/Doctor/specialities'
          );
          // setPatientLogin(response.data);
          const extractedSpecialites = response.data.map(item => item.speciality);
        // Use a Set to filter out duplicate specialities
        const uniqueSpecialites = [...new Set(extractedSpecialites)];
        // Convert unique specialities back into array of objects
        const uniqueSpecialitesObjects = uniqueSpecialites.map(speciality => ({ speciality }));
        setSpecialite(uniqueSpecialitesObjects);
        } catch (error) {
          console.log("Error fetching doctor data:", error);
        }
      };
      fetchSpesialite();

      const specialites = document.querySelector("#specialites");
      specialites.style.display = "none";
  
     
  
      
  
      console.log(specialite);
    
  }, []);

 
  const handleClick = (e) => {
    const variableToSend = e.currentTarget.id;
    setChildvarspe(variableToSend);
    passvarToparent(variableToSend);
  };

  const getAllSpeialite = () => {
    const specialites = document.querySelector("#specialites");
    console.log("heeey");
    console.log(displaySpecialite);
    if (!displaySpecialite) {
      if (specialites) specialites.style.display = "none";
      passvarToparent("all");
    } else {
      specialites.style.display = "";
    }
    setDsplaySpecialite(!displaySpecialite);
  };

  const displayAllspecialte = () => {
    return specialite.map((specialite) => (
      <li
        key={specialite.key}
        onClick={handleClick}
        class=" text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
        id={specialite.speciality}
        role="option"
      >
        <div class="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            class="h-5 w-5 flex-shrink-0 rounded-full"
          />
          <span class="font-normal ml-3 block truncate">{specialite.speciality}</span>
        </div>

        <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
          <svg
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </li>
    ));
  };

  return (
    <div className="flex justify-center mt-12  ">
      <div className="w-96">
        <label
          id="listbox-label"
          class="block text-sm font-medium leading-6 text-gray-900"
        >
          Spéialites 
        </label>
        <div class="relative mt-2">
          <button
            type="button"
            class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
            onClick={getAllSpeialite}
          >
            <span class="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                class="h-5 w-5 flex-shrink-0 rounded-full"
              />
              <span class="ml-3 block truncate">Specialités</span>
            </span>
            <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <svg
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>

          <ul
            id="specialites"
            class="absolute z-30   mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            tabindex="-1"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-option-3"
          >
            {displayAllspecialte()}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Specialite;
