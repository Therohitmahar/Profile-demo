import React from "react";
import AssignIcon from "../assets/Assign";
import PenContainer from "./PenContainer";

export default function About() {
  return (
    <section className="card about">
      <span className="icon-wrap assign-icon">
        <AssignIcon />
      </span>
      <div>
        <h3>About Me</h3>
        <p>
          I am well-versed in frontend frameworks such as React and have a good
          grasp of backend technologies including Node.js and Express.js. I have
          also gained exposure to databases like MongoDB and MySQL, enabling me
          to design and implement efficient data models. I am constantly
          learning and exploring new technologies to stay updated with the
          latest trends in the industry.
        </p>
      </div>
      <PenContainer />
    </section>
  );
}
