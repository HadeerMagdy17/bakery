import React, { Fragment } from "react";
import Style from "./Header.module.css";
import Navbar from "./../Navbar/Navbar";
import headerImg1 from "../../imgs/2.png";
import headerImg2 from "../../imgs/Star 1.png";
import headerImg3 from "../../imgs/lorem.png";
export default function Header() {
  return (
    <Fragment>
      <div className={Style.header}>
      <div className={Style.headerCorner}></div>
        <div className="container text-left">
          <Navbar />

          <div className="row mt-5">
            <div className="col-md-6 text-white ">
              <h3 className={Style.tasty}>TASTY PASTRIES</h3>
              <p className={`${Style.headerText} w-75 `}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </p>

              <button type="submit" className={`${Style.btn2} btn my-3 mb-3`}>
                SEE MORE
              </button>
            </div>
            <div className="col-md-6 position-relative">
            <img className={`${Style.imgPosition1} img-fluid position-absolute`}src={headerImg3}  />
              <img className={`${Style.imgHeader} img-fluid`} src={headerImg1} />
              <img className={`${Style.imgPosition} img-fluid position-absolute`}src={headerImg2}  />
            </div>
          </div>
          {/* social part */}
          <div className="row mt-5">
            <div className="col-md-6 ">
              <div className="row">
                <div className="col-md-6">
                  <div className={Style.social}>
                    <ul className="list-unstyled d-inline-block mr-3">
                      <li>
                        <i className={`${Style.iconColor} fab fa-vk fa-sm`}></i>
                      </li>
                      <li>
                        <i
                          className={`${Style.iconColor} fab fa-facebook fa-sm`}
                        ></i>
                      </li>
                   
                      <li>
                        <i
                          className={`${Style.iconColor} fab fa-instagram fa-sm `}
                        >
                         
                        </i>
                      </li>
                      <li>
                        <i
                          className={`${Style.iconColor} fab fa-twitter fa-sm `}
                        ></i>
                      </li>
                    </ul>
                  </div>
                  
                </div>
                <div className="col-md-6">
                  <p className=" text-white mt-5 pt-4">
                    <strong>Telephone: </strong> +7 700 000 00 00
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
