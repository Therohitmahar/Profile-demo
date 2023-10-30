import React from "react";
import Pen from "../assets/Pen.jsx";
import PersonalDetails from "./PersonalDetails.jsx";
import About from "./About.jsx";
import Work from "./Work.jsx";
import Education from "./Education.jsx";

export default function Left() {
  return (
    <div className="left">
      <PersonalDetails />
      <About />
      <Work />
      <Education />
    </div>
  );
}
