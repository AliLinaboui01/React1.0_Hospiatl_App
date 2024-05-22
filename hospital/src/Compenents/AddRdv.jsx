import { Link, useNavigate } from "react-router-dom";
import Doctor from "./Doctor";
import NavBar from "./NavBar";
import Specialite from "./Specialite";
import { useEffect, useState } from "react";
import LodingPage from "./LodingPage";
import axios from "axios";
import Cookies from "js-cookie";
import DataNotFound from "./DataNotFound";

function AddRdv() {
  const [PatientLogin, setPatientLogin] = useState({});
  const [idPatient, setIdPatient] = useState("");
  const navigate = useNavigate();
  

  useEffect(() => {
    const id = Cookies.get("idUser");
    const role = Cookies.get("roleUser");
    console.log(id);
    if (id && role==="Patient") {
      setIdPatient(id);
    }else {
      navigate('/')
    }
  }, []);
  const [allDoctords, setAllDoctords] = useState([{}]);
  useEffect(() => {
     fetchData()
    
    const timer = setTimeout(() => {
      setIsBlocked(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  const [filteredDoctors, setFilteredDoctors] = useState([{}]);

  useEffect(() => {
    setFilteredDoctors(allDoctords);
  }, [allDoctords]);

  const displayDoctors = () => {

    console.log("debyg",filteredDoctors)
    if (filteredDoctors.length === 0) {
      return <DataNotFound/>;
    }
    return filteredDoctors.map((doctor) => (
      <Doctor
        key={doctor.firstName}
        name={doctor.firstName}
        specialite={doctor.speciality}
        lastname={doctor.lastName}
        doctorId={doctor.id}
        PatientId={idPatient}
        img={doctor.image}
      />
    ));
  };

  const handleSpecialiteFilter = (specialite) => {
    const filtered = allDoctords.filter(
      (doctor) => doctor.speciality === specialite || specialite === "all"
    );
    setFilteredDoctors(filtered);
  };

  //loding
  const [isBlocked, setIsBlocked] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5299/api/Doctor");
      console.log("get doctors successful:", response.data);
      setAllDoctords(response.data)
      return response.data;
    } catch (error) {
      console.log("eroor data 404:");
    }
  };

  return (
    <>
      {isBlocked ? (
        <>
          <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
              <NavBar />
            </header>
            <div className="relative overflow-hidden mt-12 bg-white  isolate px-6 pt-10 lg:px-6">
              <div></div>
            </div>
            <Specialite passvarToparent={handleSpecialiteFilter} />
          </div>
          <div className="container  z-0 gap-5 place-content-center mx-auto m-2 py-3 sm:py-0 lg:py-10 flex  flex-wrap">
            {displayDoctors()}
          </div>
        </>
      ) : (
        <LodingPage></LodingPage>
      )}
    </>
  );
}

export default AddRdv;
