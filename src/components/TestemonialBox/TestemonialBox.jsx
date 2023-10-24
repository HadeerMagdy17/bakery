import React from "react";
import Styles from "./TestemonialBox.module.css";

export default function TestemonialBox() {
  return (
    <div className={`${Styles.card} mb-4 text-left`}>
      <div className="card-body text-left">
        <h5 className="font-weight-bold">Kathryn Murphy</h5>
        <p className={`${Styles.text} mb-1`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled
        </p>
        <ul className="list-unstyled d-flex justify-content-left">
          <li>
            <i className="fas fa-star fa-sm "></i>
          </li>
          <li>
            <i className="fas fa-star fa-sm "></i>
          </li>
          <li>
            <i className="fas fa-star fa-sm"></i>
          </li>
          <li>
            <i className="fas fa-star fa-sm "></i>
          </li>
          <li>
            <i className="fas fa-star fa-sm"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}
