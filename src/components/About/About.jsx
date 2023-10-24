import React, { Fragment } from "react";
import Style from "./About.module.css";
import bakery from "../../imgs/about.png";
import Button from "../Button/Button";
export default function About() {
  return (
    <Fragment>
      <div className={`${Style.about}`}>
        <div className="container">
          <div className="row">
            <div className=" col-md-6 w-75">
              <h2 className={`${Style.aboutText} pt-3`}>
                ABOUT <br />
                US
              </h2>
              <p className="my-1 py-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <Button />
            </div>
            <div className=" col-md-6">
              <div className={`${Style.aboutPhoto}`}>
                <img
                  src={bakery}
                  className="img-fluid pt-5 pr-5 mr-5"
                  alt="bakery"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
