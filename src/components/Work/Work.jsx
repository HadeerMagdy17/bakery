import React, { Fragment } from "react";
import rec1 from "../../imgs/work1.png";
import rec2 from "../../imgs/work2.png";
import rec3 from "../../imgs/work3.png";
import rec4 from "../../imgs/work4.png";
import Button from "../Button/Button";
import Styles from "./Work.module.css";
export default function Work() {
  return (
    <Fragment>
      <div className={Styles.work}>
        <div className="container">
          <div className="row py-3">
            <div className="col-md-4">
              <p className={`${Styles.workText} pl-5 pt-5 mt-5`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </p>
            </div>
            <div className="col-md-8 mb-4 pb-5">
              <h2 className={`${Styles.workHead} text-white  text-right`}>
                How we work
              </h2>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-3 mb-1">
              <img className="img-fluid" src={rec1} />
            </div>
            <div className="col-md-3 mb-1">
              <img className="img-fluid" src={rec2} />
            </div>
            <div className="col-md-3 mb-1">
              <img className="img-fluid" src={rec3} />
            </div>
            <div className="col-md-3 mb-1">
              <img className="img-fluid" src={rec4} />
            </div>
          </div>
          <div className="py-4">
            <Button />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
