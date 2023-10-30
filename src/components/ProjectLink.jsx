import React from "react";
import { Github } from "lucide-react";
import PersonIcon from "../assets/PersonIcon";
import PenContainer from "./PenContainer";

export default function ProjectLink() {
  return (
    <section className="card person">
      <div>
        <h3 className="black">
          <span className="personIcon badge">
            <PersonIcon />
          </span>
          Personal Details{" "}
        </h3>
        <p>Date of birth</p>
        <p className="black">
          <b>08 May 1998</b>
        </p>
        <p>Address</p>
        <p className="black">
          <b>
            20, SPTBI, near Bhavans College,<br></br> Azad Nagar, Andheri West
          </b>
        </p>
        <p>Date of birth</p>
        <p className="black">
          <b>08 May 1998</b>
        </p>
        <p>Gender</p>
        <p className="black">
          <b>Male</b>
        </p>

        <p>Languages Known</p>
        <p className="black">
          <b>English, Hindi, Marathi, Tamil</b>
        </p>
        <p>State</p>
        <p className="black">
          <b>Maharashtra</b>
        </p>
        <p>State</p>
        <p className="black">
          <b>Maharashtra</b>
        </p>
        <p>Country</p>
        <p className="black">
          <b>India</b>
        </p>
      </div>
      <PenContainer />
    </section>
  );
}
