import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Styles from "./Contact.module.css";
export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
  });
  //Function to handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //Function to get data from user

  function getFormData({ target }) {
    formData[target.name] = target.value;
    console.log(formData);
  }
  //Function to submit the form data using Axios
  const sendData = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://upskilling-egypt.com:3000/contact",
        formData
      );
      console.log("success send", response.data);
    } catch (error) {
      console.error("Error send:", error);
    }
  };

  return (
    <Fragment>
      <div className="container">
        <h2 className={`${Styles.text} text-center w-100`}>CONTACT US</h2>
        <div className="row">
          <div className="col-md-6 ">
            <form className="text-center">
              <div className="form-group">
                <input
                  name="name"
                  type="text"
                  className={`${Styles.inputs} form-control`}
                  placeholder="Full name"
                  id="inputId"
                  value={formData.name}
                  onKeyUp={getFormData}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  name="email"
                  type="email"
                  className={`${Styles.inputs} form-control`}
                  id="exampleInputEmail1"
                  value={formData.email}
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  onKeyUp={getFormData}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  name="phone"
                  type="number"
                  className={`${Styles.inputs} form-control`}
                  id="inputPhone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onKeyUp={getFormData}
                  onChange={handleChange}
                />
              </div>
              <button
                onClick={sendData}
                type="submit"
                className={`${Styles.btn1} btn`}
              >
                SEND
              </button>
            </form>
          </div>
          <div className="col-md-6 ">
            <ul className={`${Styles.contactList}`}>
              <li className={`${Styles.listItem}`}>
                <i className="fa fa-envelope fa-2x"></i>
                <span className={`${Styles.gmail}`}>
                  upskilling.eg1@gmail.com
                </span>
              </li>
              <br />
              <li className={`${Styles.listItem}`}>
                <i className={`${Styles.phoneIcon} fa fa-phone fa-2x`}> </i>
                <span className={`${Styles.phone}`}>+20 115 493 2137</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
