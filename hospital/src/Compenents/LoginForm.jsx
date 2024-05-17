import React, { useRef, useState } from "react";

import "../output.css";
import { Link, useNavigate } from "react-router-dom";
import imgLogin from "../assets/images/medical-banner-with-doctor-wearing-goggles.jpg";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie"; // Importing js-cookie library

export default function LoginForm() {
  const email = useRef();

  const password = useRef();
  const navigate = useNavigate();

  const [error, setError] = useState(false);

  const handelLoginForm = (e) => {
    e.preventDefault();
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    console.log(emailValue + " , " + passwordValue);
    loginOrDny(emailValue, passwordValue);
  };
  // here i will implement the login Api with JWT
  const loginOrDny = async (email, password) => {
    const formData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:5299/api/account/login",
        {
          email: email,
          password: password,
        }
      );
      console.log("Login successful:", response.data);
      const decodeToken = jwtDecode(response.data.token);
      console.log("decode token", decodeToken);
      const idUser = decodeToken.nameid;
      const userName = response.data.userName;
      const roleUser = decodeToken.role;
      Cookies.set("idUser", idUser, { expires: 7 }); // Expires in 7 days
      Cookies.set("roleUser", roleUser, { expires: 7 });
      Cookies.set("Token", response.data.token, { expires: 7 });
      Cookies.set("userName", userName, { expires: 7 });
      // Alternatively, store in local storage
      localStorage.setItem("idUser", idUser);
      localStorage.setItem("roleUser", roleUser);

      console.log("role", roleUser);
      if (roleUser === "Patient") {
        navigate("/dashboord");
      } else if (roleUser === "Admin") {
        navigate("/alldoctors");
      } else if (roleUser === "Doctor") {
        navigate("/profileDoctor");
      }
      return roleUser;
    } catch (error) {
      const diverror = document.querySelector("#password");
      diverror.classList = "";
      diverror.value = "";
      diverror.classList.add(
        "text-sm",
        "sm:text-base",
        "relative",
        "w-full",
        "border",
        "rounded",
        "placeholder-gray-400",
        "focus:border-indigo-400",
        "focus:outline-none",
        "py-2",
        "pr-2",
        "pl-12",
        "border-red-500"
      );
 setError(true)
      console.log("Login 404:");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <div className="flex flex-col justify-center p-8 md:p-14">
            
            <span className="mb-3 mt-2 text-4xl font-bold">Welcome back</span>
            <span className="font-light text-gray-400 mb-8">
              Welcom back! Please enter your details
            </span>

            {error? 
            <div class="bg-red-light-6 inline-flex rounded-lg px-[18px] py-4 shadow-[0px_2px_10px_0px_rgba(0,0,0,0.08)]">
              <p class="flex items-center text-sm font-medium text-[#BC1C21]">
                <span class="bg-red mr-3 flex h-5 w-5 items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <linearGradient
                      id="wRKXFJsqHCxLE9yyOYHkza_fYgQxDaH069W_gr1"
                      x1="9.858"
                      x2="38.142"
                      y1="9.858"
                      y2="38.142"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#f44f5a"></stop>
                      <stop offset=".443" stop-color="#ee3d4a"></stop>
                      <stop offset="1" stop-color="#e52030"></stop>
                    </linearGradient>
                    <path
                      fill="url(#wRKXFJsqHCxLE9yyOYHkza_fYgQxDaH069W_gr1)"
                      d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                    ></path>
                    <path
                      d="M33.192,28.95L28.243,24l4.95-4.95c0.781-0.781,0.781-2.047,0-2.828l-1.414-1.414	c-0.781-0.781-2.047-0.781-2.828,0L24,19.757l-4.95-4.95c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414	c-0.781,0.781-0.781,2.047,0,2.828l4.95,4.95l-4.95,4.95c-0.781,0.781-0.781,2.047,0,2.828l1.414,1.414	c0.781,0.781,2.047,0.781,2.828,0l4.95-4.95l4.95,4.95c0.781,0.781,2.047,0.781,2.828,0l1.414-1.414	C33.973,30.997,33.973,29.731,33.192,28.95z"
                      opacity=".05"
                    ></path>
                    <path
                      d="M32.839,29.303L27.536,24l5.303-5.303c0.586-0.586,0.586-1.536,0-2.121l-1.414-1.414	c-0.586-0.586-1.536-0.586-2.121,0L24,20.464l-5.303-5.303c-0.586-0.586-1.536-0.586-2.121,0l-1.414,1.414	c-0.586,0.586-0.586,1.536,0,2.121L20.464,24l-5.303,5.303c-0.586,0.586-0.586,1.536,0,2.121l1.414,1.414	c0.586,0.586,1.536,0.586,2.121,0L24,27.536l5.303,5.303c0.586,0.586,1.536,0.586,2.121,0l1.414-1.414	C33.425,30.839,33.425,29.889,32.839,29.303z"
                      opacity=".07"
                    ></path>
                    <path
                      fill="#fff"
                      d="M31.071,15.515l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414L18.343,32.485	c-0.391,0.391-1.024,0.391-1.414,0l-1.414-1.414c-0.391-0.391-0.391-1.024,0-1.414l14.142-14.142	C30.047,15.124,30.681,15.124,31.071,15.515z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M32.485,31.071l-1.414,1.414c-0.391,0.391-1.024,0.391-1.414,0L15.515,18.343	c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0l14.142,14.142	C32.876,30.047,32.876,30.681,32.485,31.071z"
                    ></path>
                  </svg>
                </span>
                check Passowrd or Email !!! 
              </p>
            </div>
            : ''}
            <form onSubmit={handelLoginForm}>
              <div className="py-4">
                <span className="mb-2 text-md">Email</span>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  name="email"
                  id="email"
                  required
                  ref={email}
                />
              </div>
              <div className="py-4">
                <span className="mb-2 text-md">Password</span>
                <input
                  type="password"
                  name="pass"
                  id="password"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  ref={password}
                />
              </div>
              <div className="flex justify-between w-full py-4">
                <div className="mr-24">
                  <input type="checkbox" name="ch" id="ch" className="mr-2" />
                  <span className="text-md">Remember for 30 days</span>
                </div>
                <span className="font-bold text-md">Forgot password</span>
              </div>
              <button className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                Sign in
              </button>
            </form>
            <div className="text-center text-gray-400">
              Dont'have an account?
              <span className="font-bold text-black">
                {" "}
                <Link to="/register">Sign up for free</Link>{" "}
              </span>
            </div>
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
