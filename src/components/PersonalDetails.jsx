import React from "react";
import Pen from "../assets/Pen";
import PenContainer from "./PenContainer";

export default function PersonalDetails() {
  return (
    <section>
      <div className="card personal">
        <div>
          <section className="personal-details">
            <div className="img-container">
              <img
                src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png"
                alt=""
              />
            </div>
            <div>
              <h3 className="black">Arbaz Khan</h3>
              <p className="black">Frontend Developer Intern</p>
              <p className="black">at International Business Machines</p>
              <ul>
                <li>8765432198</li>
                <li>arbaz.khan@gmail.com</li>
                <li>Mumbai, India</li>
                <li>6 Months</li>
                <li>₹1.2 LPA</li>
              </ul>
            </div>
          </section>
          <section className="tech-stack">
            <ul>
              <li>angular</li>
              <li>node</li>
              <li>express.js</li>
              <li>mongoDB</li>
              <li>devOps</li>
              <li>kubernetes</li>
              <li>docker</li>
              <li>RESTful</li>
              <li>azure</li>
              <li>postgreSQL</li>
            </ul>
          </section>
          <p className="locations">
            Preferred Locations:{" "}
            <b>Mumbai, Bengaluru, Hyderabad, Delhi, Gurgaon, Noida</b>
          </p>
          <p className="locations">
            <span>
              Willing to Relocation: <b>Yes</b>
            </span>
            <span>
              Open for: <b>Internship, Full Time </b>
            </span>
          </p>
        </div>
        <PenContainer />
      </div>
    </section>
  );
}
