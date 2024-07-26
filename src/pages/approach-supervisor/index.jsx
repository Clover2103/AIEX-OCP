import React from "react";
import { NavBar } from "../../components/NavBar";
import { ApproachSupervisorBody } from "../../components/ApproachSupervisorBody";
import { Footer } from "../../components/Footer";

const ApproachSupervisor = () => {
  return (
    <div>
      <NavBar />
      <ApproachSupervisorBody />
      <h1>APROACH SUPERVISOR</h1>
      <Footer />
    </div>
  );
};

export { ApproachSupervisor };