import axios from "axios";
import React, { useEffect, useState } from "react";

const Feature = () => {
  const [category , setCategory]=useState(null)
  const [features , setsubFeatures]=useState([])
  useEffect(() => {
    axios.get(
      `http://localhost:3006/api/v1/category/66623d0d6d590127983bd98d`
    ).then((e)=>{
      setCategory(e.data.data);
    });
    axios.get(
      `http://localhost:3006/api/v1/subcategory/66623d0d6d590127983bd98d`
    ).then((e)=>{
      setsubFeatures(e.data.data);
    });
    let timer= setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    return () =>{ clearTimeout(timer)}
  }, []);
  let linksMarkup = features.map((link, i) => {
    return (
      <li key={i} className="m-2 p-2 " >
        <div className="features-img" key={i} >
          <img src={link.image} key={i} className="img-fluid" style={{borderRadius:"25px"}} alt="html5" />
          <h3 className="features-title">{link.title}</h3>
        </div>
      </li>
    );
  });

  return (
    <section className="features-bg mb-0">
      <div className="container-fluid m-width">
        <div className="row">
          <div className="col-md-12">
            <div className="margin-top-bottom">
              <h2 className="landing-title">{category ? category.title :"---"}</h2>
            </div>
            <div className="border-shape"></div>
            <div className="mt-50">
              <ul className="features m-0 p-0 fadeIn-features">
                {linksMarkup}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
