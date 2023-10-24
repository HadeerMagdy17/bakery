import React, { Fragment } from "react";
import Style from "./Testemonials.module.css";
import Button from "../Button/Button";
import TestemonialBox from "../TestemonialBox/TestemonialBox";
export default function Testemonials() {
  return (
    <Fragment>
      <div className={Style.test}>
        <div className="container">
          <h2 className={`${Style.testText} pt-2 text-white`}>TESTEMONIALS</h2>
          <div className="row">
            <div className="col-md-6">
              <TestemonialBox />
            </div>
            <div className="col-md-6">
              <TestemonialBox />
            </div>
            <div className="col-md-6">
              <TestemonialBox />
            </div>
            <div className="col-md-6">
              <TestemonialBox />
            </div>
          </div>

          <Button />
        </div>
      </div>
    </Fragment>
  );
}
