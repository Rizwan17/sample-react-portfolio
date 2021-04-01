import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Button from "../UI/Button";
import Tile from "../UI/Tile";
import me from "../../assets/images/me-left.png";

import "./style.css";

/**
 * @author
 * @function Qualification
 **/

const Qualification = (props) => {
  return (
    <div className="container" style={{ padding: "50px 0" }}>
      <SmallHeading text="Qualifications" />
      <MediumHeading text={"My Education"} />
      <div
        className="flexRow flexCol align-center justify-sb"
        style={{ margin: "50px 0" }}
      >
        <div data-aos="fade-up-right">
          <img src={me} alt="" />
          <div
            style={{
              background: "#fff",
              padding: "10px 10px",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
              borderRadius: "20px",
            }}
          >
            <div className="mlr-10">
              <Button label="Hire Me" />
            </div>
            <div className="mlr-10">
              <Button label="Download CV" inverse={true} />
            </div>
          </div>
        </div>
        <div>
          <Tile
            title="MAKAUT"
            mediumTitle="Computer Science & Engg."
            desc="lorem ipsum text"
          />
          <Tile
            title="MAKAUT"
            mediumTitle="Computer Science & Engg."
            desc="lorem ipsum text"
          />
          <Tile
            title="MAKAUT"
            mediumTitle="Computer Science & Engg."
            desc="lorem ipsum text"
          />
        </div>
      </div>
    </div>
  );
};

export default Qualification;
