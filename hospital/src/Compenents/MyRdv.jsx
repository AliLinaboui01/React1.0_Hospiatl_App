import React from "react";
import NavBar from "./NavBar";
import RdvDeClient from "./RdvDeClient";

function MyRdv() {
  return (
    <>
      <div>
        <NavBar></NavBar>
      </div>
      <div className=" flex justify-center mt-3">
        <div class="flex flex-row  bg-cyan-400 h-10 w-[400px] rounded-[30px]">
          <span class="flex flex-col justify-center text-white font-bold grow-[1] max-w-[90%] text-center">
            All Your Rende-Vous In Our Service{" "}
          </span>
          <div class="w-[10%] bg-purple-500 rounded-r-2xl shadow-[0_0_2px_#00C85177]"></div>
        </div>
      </div>
      <RdvDeClient></RdvDeClient>
    </>
  );
}

export default MyRdv;
