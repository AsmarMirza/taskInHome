import React from "react";
import "./sampleHero.scss";
function SampleHero() {
  return (
    <div>
      <div className="sample__hero">
        <div className="sample__hero__text">
          <h1 className="sample__large">
            Man must explore,and this is exploration at its greatest{" "}
          </h1>
          <p className="sample__middle">
            Problems look mighty small from 150 miles up
          </p>
          <p className="sample__small">
            Posted by Start Bootstrap on August 24, 2023
          </p>
        </div>
      </div>
    </div>
  );
}

export default SampleHero;
