import React from 'react'

function ShowRdvs({rdv}) {
  return (
    
      <div>
    <div class="w-full max-w-md bg-white shadow p-2 border-t-4 border-green-600 rounded">
        <header class="p-2 border-b flex"> 
            <div class="flex flex-col">
                <h4 class="text-xs font-semibold">Reson</h4>
                <h1 class="text-lg font-mono text-green-600">{rdv.name}</h1>
            </div>
        </header>
        <div class="flex flex-wrap p-2 w-full gap-4">
            <div class="flex flex-col w-full">
                <h4 class="text-xs">description</h4>
                <h1 class="text-lg">{rdv.description}</h1>
            </div>

            <div class="flex flex-col">
                <h4 class="text-xs">Date Quittance</h4>
                <h1 class="text-md">11/08/2022</h1>
            </div>

            <div class="flex flex-col">
                <h4 class="text-xs">N° Quittance</h4>
                <h1 class="text-md font-thin">QUITTANCE-22-2022-8-7488a</h1>
            </div>

        </div>

    </div>
    </div>
  )
}

export default ShowRdvs
