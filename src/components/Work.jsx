import React from "react";
import WorkIcon from "../assets/WorkIcon";
import Pen from "../assets/Pen";
import PlusContainer from "./PlusContainer";

export default function Work() {
  return (
    <section className="card work">
      <span className="icon-wrap work-icon">
        <WorkIcon />
      </span>
      <div>
        <h3 className="black">Work Experience</h3>
        <h4>
          LineupX{" "}
          <span className="icon-wrap ">
            <Pen />
          </span>
        </h4>
        <p className="black">
          Frontend Developer <b>Internship</b>
        </p>
        <p>Feb 2023 - Present (6 Months)</p>
        <p>
          In this internship, I was part of the UI Design team. I got to work
          closely with stakeholders of the company in doing the user research &
          creating mockups. I was working on the design changes to be made for
          the website by coding in html, css and javascript. I learned and
          gained a lot of experience and knowledge about the core of UX and UI.
        </p>
      </div>
      <PlusContainer />
    </section>
  );
}
