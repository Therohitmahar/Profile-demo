import React from "react";
import MilitaryBadge from "../assets/MilitaryBadge";
import Pen from "../assets/Pen";
import LinkIcon from "../assets/LinkIcon";
import PlusContainer from "./PlusContainer";
export default function Certifications() {
  return (
    <section className="certifications card">
      <div>
        <h3>
          <span className="badge">
            <MilitaryBadge />
          </span>
          Certifications
        </h3>
        <h3>
          Coursera{" "}
          <span className="icon-wrap">
            <Pen />
          </span>
        </h3>
        <p>Web Development Bootcamp</p>
        <p>Jan 2023 - Jun 2023</p>
        <h4>
          <span className="icon-wrap">
            <LinkIcon />
          </span>
          Show Certificate
        </h4>
      </div>
      <PlusContainer />
    </section>
  );
}
