import React, { Fragment } from "react";
import Styles from "./Button.module.css";
export default function Button() {
  return (
    <Fragment>
      <button
        type="submit"
        className={`${Styles.btn2} btn my-3 mb-3`}
      >
        CONTACT US
      </button>
    </Fragment>
  );
}
