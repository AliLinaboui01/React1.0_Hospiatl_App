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

  const [error, setError] = useState([]);

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
        navigate("/alldoctors");
      } else if (roleUser === "Admin") {
        navigate("/alldoctors");
      } else if (roleUser === "Doctor") {
        navigate("/profileDoctor");
      }
      return roleUser;
    } catch (error) {
      const diverror = document.querySelector("#password")
      diverror.classList = ""
      diverror.value = ""
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
      
      console.log("Login 404:");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <div className="flex flex-col justify-center p-8 md:p-14">
            <span className="mb-3 text-4xl font-bold">Welcome back</span>
            <span className="font-light text-gray-400 mb-8">
              Welcom back! Please enter your details
            </span>
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
