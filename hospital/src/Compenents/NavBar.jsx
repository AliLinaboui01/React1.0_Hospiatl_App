import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export default function NavBar() {

 const navigate = useNavigate()
  const logout = () =>{
    if(window.confirm("you want to logout ? ")){
      Cookies.remove('idUser');
      Cookies.remove('Token');
      Cookies.remove('userName');
      Cookies.remove('idUser');
     
      navigate('/')
    }
  }
  return (
    <nav className="bg-blue-100   bg-gradient-to-r from-red-400 via-gray-300 to-blue-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center ">
              <Link
                to="/profilePatient"
                className="m-1 inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium  text-purple-700 ring-1 ring-inset ring-purple-700/10"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-0"
              >
                Your Profile
              </Link>
              <Link
                to="/AddRdv"
                className="m-1 inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ing-yellow-600/20"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-0"
              >
                New Rdv
              </Link>
              <Link
                to="/dashboord"
                className="m-1 inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ing-yellow-600/20"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-0"
              >
                Home
              </Link>
              <Link
                to="/myRdv"
                className="m-1 inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ing-yellow-600/20"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-0"
              >
                Your Rende-vous
              </Link>
              <a
              onClick={logout}
                href="#"
                className="inline-flex bg-pink-500 items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10  text-white"
              >
                Logout
              </a>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5"></span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>

            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="absolute -inset-1.5"></span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
