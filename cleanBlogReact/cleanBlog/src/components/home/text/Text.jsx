import React from "react";
import "./text.scss";
import { Link } from "react-router-dom";
function Text() {
  return (
    <div>
      <div className="home">
        <div className="home__text">
          <div className="text__inside">
            <Link className="text__inside__header" to={"/samplePost"}>
              <p className="text__inside__headerlink">
                Man must explore,and this is exploration at its greatest
              </p>
              <p className="text__inside__contentlink">
                {" "}
                Problems looks mighty small from 150 miles up
              </p>
            </Link>
            <p className="text__inside__tail">
              Posted by{" "}
              <a href="" className="text__inside__tail__link">
                Start Bootstrap
              </a>{" "}
              on September 24, 2023
            </p>
          </div>
          <div className="text__inside">
            <Link className="text__inside__header" to={"/samplePost"}>
              <p className="text__inside__headerlink">
                I believe every human has a finite number of heartbeats.I don't
                intend to waste any of mine
              </p>
            </Link>
            <p className="text__inside__tail">
              Posted by{" "}
              <a href="" className="text__inside__tail__link">
                Start Bootstrap
              </a>{" "}
              on September 18, 2023
            </p>
          </div>
          <div className="text__inside">
            <Link className="text__inside__header" to={"/samplePost"}>
              <p className="text__inside__headerlink">
                Science has not yet mastered prophecy
              </p>
              <p className="text__inside__contentlink">
                {" "}
                We predict too much for the next year and yet far too little for
                the next ten
              </p>
            </Link>
            <p className="text__inside__tail">
              Posted by{" "}
              <a href="" className="text__inside__tail__link">
                Start Bootstrap
              </a>{" "}
              on August 24, 2023
            </p>
          </div>
          <div className="text__inside">
            <Link className="text__inside__header" to={"/samplePost"}>
              <p className="text__inside__headerlink">
                Failure is not an option
              </p>
              <p className="text__inside__contentlink">
                {" "}
                Many say exploration is part of our destinity,but it's actually
                our duty to future generations
              </p>
            </Link>
            <p className="text__inside__tail">
              Posted by{" "}
              <a href="" className="text__inside__tail__link">
                Start Bootstrap
              </a>{" "}
              on July 8, 2023
            </p>
          </div>
          <div className="home__button">
            <a href="" className="button__link">
              Older Posts →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Text;
