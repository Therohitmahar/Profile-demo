import React from "react";
import EducationIcon from "../assets/EducationIcon";
import Pen from "../assets/Pen";
import PlusContainer from "./PlusContainer";

export default function Education() {
  return (
    <section className="card education">
      <span className="icon-wrap education-icon">
        <EducationIcon />
      </span>
      <div>
        <h3>Education</h3>
        <h4>
          JaiHind College
          <span className="icon-wrap ">
            <Pen />
          </span>
        </h4>
        <p>
          <b>Bachelor of Science(BSc) </b> • <b>Computer Science</b> •{" "}
          <b>Full Time</b> • <b>CGPA: 9.5/10</b>
        </p>
        <p>Jun 2020 - Apr 2023</p>
      </div>
      <PlusContainer />
    </section>
  );
}
