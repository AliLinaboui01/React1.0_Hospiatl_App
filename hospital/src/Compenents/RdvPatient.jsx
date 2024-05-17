import React from 'react'

function RdvPatient({rdvdate,rdvdescreption,rdvdetails}) {
  return (
    <div>
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
    <div class="p-8 flex">
        <div class="pr-4">
        <p class="text-2xl font-bold"> {rdvdate}</p>
        </div>
        <div>
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Event Name</div>
        <p class="mt-2 text-gray-500">{rdvdescreption}</p>
        <p class="mt-2 text-gray-500">{rdvdetails}</p>
        </div>
    </div>
    </div>
    </div>
  )
}

export default RdvPatient
