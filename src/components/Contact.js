import React, { useEffect, useState } from "react";

const Contact = () => {
  useEffect(() => {
    let timer= setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    return () =>{ clearTimeout(timer)}
  }, []);

  const [bgImg, setBgImg]= useState({
    backgroundImage:`url(${process.env.PUBLIC_URL}/assets/images/Contact.png)`
  });

  const color= localStorage.getItem("color");

  useEffect(()=>{  
    if(color === "color-1")
     setBgImg( {
      backgroundImage:`url(${process.env.PUBLIC_URL}/assets/images/Contact.png)`
    });
    else if(color === "color-2")
    setBgImg({ backgroundImage:`url(${process.env.PUBLIC_URL}/assets/images/color/color-2/contact.png)`
	})
    else 
    setBgImg({backgroundImage:`url(${process.env.PUBLIC_URL}/assets/images/color/color-3/contact.png)`
	})
  },[color]);

  return (
    <section id="contact" className="contact" style={bgImg}>
      <div className="contact-decor">
        <div className="contact-circle1">
          <img src="assets/images/main-banner12.png" alt="" />
        </div>
        <div className="contact-circle2">
          <img src="assets/images/main-banner1.png" alt="" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-8 col-sm-12">
            <div className="contact-us">
              <div className="w-100">
                <h2 className="title">
                  <span>contact </span>information
                </h2>
                <form className="theme-form">
                  <div className="form-group">
                    <div className="row">
                      <div className="col-sm-12 col-md-6 md-fgrup-margin">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="your name"
                          required="required"
                        />
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="phone"
                          required="required"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="email address"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="4"
                      placeholder="message"
                      required="required"
                    ></textarea>
                  </div>
                  <div className="form-button">
                    <button
                      type="submit"
                      className="btn btn-custom theme-color"
                    >
                      send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-medium-none-lg">
            <div className="contact-right">
              <img
                src="assets/images/Contact-info.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
