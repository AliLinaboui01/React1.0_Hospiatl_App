import React from "react";
import NavBarAdmin from "./NavBarAdmin";
import FormAddDoctor from "./FormAddDoctor";

function CreateDoctor() {
  return (
    <div>
      <NavBarAdmin></NavBarAdmin>
      <div className="container mx-auto bg-stone-50">
        <div className="">
          <FormAddDoctor></FormAddDoctor>
        </div>
      </div>
    </div>
  );
}

export default CreateDoctor;
