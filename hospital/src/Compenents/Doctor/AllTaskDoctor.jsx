import React, { useEffect, useState } from "react";
import axios from "axios";
import Task from "./Task";
import Cookies from "js-cookie"; // Importing js-cookie library

function AllTaskDoctor() {
  const [allTask, setAllTask] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5299/api/Rdv/doctors/${Cookies.get("idUser")}`);
      // Format date and time before setting the data
      const formattedData = response.data.map(task => ({
        ...task,
        appointmentDateTime: formatDate(task.appointmentDateTime)
      }));
      setAllTask(formattedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to format date and time
  const formatDate = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const date = dateTime.toLocaleDateString(); // Format date as per locale
    const time = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Format time
    return `${date} AT ${time}`;
  };
  const displayRdv = () => {
    return allTask.map((task) => {
      return <Task key={task.id} task={task}></Task>;
    });
  };

  return (
    <div className="flex flex-wrap m-auto w-full">
      <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        {displayRdv()}
      </div>
    </div>
  );
}

export default AllTaskDoctor;
