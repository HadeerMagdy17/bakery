import React, { Fragment } from "react";
import logo from "../../imgs/logo.png";
import Styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <Fragment>
      <nav className={`${Styles.bg} navbar navbar-light`}>
        <div className="container">
          <div className="navbar-brand" href="#">
            <img
              src={logo}
              width="30"
              height="30"
              className={`${Styles.image} d-inline-block align-top mt-2 `}
              alt=""
            />
            <span className={`${Styles.content1} text-white`}>Peachy Pup</span>
            <span className={`${Styles.content2} text-white ml-5 pl-4`}>
              Bakery
            </span>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
