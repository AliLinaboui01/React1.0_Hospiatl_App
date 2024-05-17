import React, { useEffect, useState } from "react";
import Task from "./Task";

function AllTaskDoctor() {
  const [allTask, setAllTask] = useState([]);

  const fetchData = () => {
    let data = [
      {
        id: 1,
        rdvDate: "2024/05/02",
        rdvdescreption: "reson 1",
        rdvdetails: "rdvdetails",
        patientName: "hamda chroukat",
      },

      {
        id: 2,
        rdvDate: "2024/05/02",
        rdvdescreption: "reson 2",
        rdvdetails: "rdvdetails 2",
        patientName: "hamda chroukat",
      },

      {
        id: 3,
        rdvDate: "2024/05/02",
        rdvdescreption: "reson 3",
        rdvdetails: "rdvdetails 3",
        patientName: "hamda chroukat",
      },

      {
        id: 4,
        rdvDate: "2024/05/02",
        rdvdescreption: "reson 4",
        rdvdetails: "rdvdetails 4",
        patientName: "hamda chroukat",
      },
    ];

    // after we get responce from data base we set data in our state Rdv
    setAllTask(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

//   useEffect(() => {}, [allTask]);

  const displayRdv = () => {
    return allTask.map(() => {
      return <Task ></Task>;
    });
  };

  return (
    <div className="flex flex-wrap m-auto w-full">
      <div class="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        {/* this section is a rvd related to a doctor so we need to get info from 
      data base  */}

        {displayRdv()}

        {/* end for rdv patient  */}
      </div>
    </div>
  );
}

export default AllTaskDoctor;
