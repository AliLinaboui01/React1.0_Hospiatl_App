import React, { useEffect } from "react";
import NavBarAdmin from "./NavBarAdmin";
import FormUser from "./FormUser";
import { useParams } from "react-router-dom";
// bg-sky-50
function CreateUser() {
 

  return (
    <div>
      <NavBarAdmin></NavBarAdmin>
      <div className="container mx-auto bg-stone-50">
        <div className="">
          <FormUser></FormUser>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
