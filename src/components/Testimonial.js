import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const Testimonial = () => {
  useEffect(() => {
    let timer= setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    return () =>{ clearTimeout(timer)}
  }, []);
  const [avtarBg, setAvtarBg]= useState({
    backgroundImage:`url(${process.env.PUBLIC_URL}/assets/images/Testimonial.png)`
  });
  
  const color= localStorage.getItem("color");

  const [bgImg, setBgImg]= useState({
    backgroundImage:`url(${process.env.PUBLIC_URL}/assets/images/testimonial-bg.png)`
  });

  useEffect(()=>{
    if(color === "color-1"){
     setBgImg( {
      backgroundImage:`url(${process.env.PUBLIC_URL}/assets/images/testimonial-bg.png)`
    });
    setAvtarBg( {
      backgroundImage:`url(${process.env.PUBLIC_URL}/assets/images/Testimonial.png)`
    });
  }
    else if(color === "color-2"){
    setBgImg({ backgroundImage:`url(${process.env.PUBLIC_URL}/assets/images/color/color-2/testimonial-bg.png)`
	})
  setAvtarBg({ backgroundImage:`url(${process.env.PUBLIC_URL}/assets/images/color/color-2/Testimonial.png)`
})
}
    else {
    setBgImg({backgroundImage:`url(${process.env.PUBLIC_URL}/assets/images/color/color-3/testimonial-bg.png)`
	})
  setAvtarBg({backgroundImage:`url(${process.env.PUBLIC_URL}/assets/images/color/color-3/Testimonial.png)`
})
}
  },[color]);

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <img className="owl-next" src={`${process.env.PUBLIC_URL}/assets/images/next.png`} alt="next-arrow" />
    </button>
  );

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <img className="owl-prev" src={process.env.PUBLIC_URL+"/assets/images/back.png"} alt="back-arrow"/>
    </button>
  );
  // Slick slider Option for Testimonial
  const options = {
    arrows: true,
    infinite: true,
    dots: true,
    appendDots: (dots) => (
      <span className=".blog-carousel.owl-theme .owl-dots .owl-dot.active span">
        {dots}
      </span>
    ),
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    marginRight: 30,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          margin: 0,
        },
      },

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  // Dynamic Testimonial Easy to Update
  let data = [
    {
      name: "mark jkcno",
      designation: "designer",
      photo: `${process.env.PUBLIC_URL}/assets/images/avtar/22.jpg`,
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      name: "John Shipmen",
      designation: "Lead Developer",
      photo: `${process.env.PUBLIC_URL}/assets/images/avtar/15.jpg`,
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      name: "Adegoke Yusuff",
      designation: "Content Writer",
      photo: `${process.env.PUBLIC_URL}/assets/images/avtar/1.jpg`,
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. ",
    },
  ];

  // Dynamic Testimonial Data Loop
  let DataList = data.map((val, i) => {
    return (
      <div className="testimonial-item" key={i}>
        <div className="testimonial-block">
          <div className="testimonial-avtar" style={avtarBg}>
            <img src={val.photo} alt="" />
          </div>
          <div className="testimonial-text">
            <p>{val.description}</p>
            <h3>{val.name}</h3>
            <h6>{val.designation}</h6>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section id="testimonial" className="testimonial"  style={bgImg}>
      <div className="testimonial-decor">
        <div className="testi-circle1">
          <img src={`${process.env.PUBLIC_URL}/assets/images/Testimonial2.png`} alt="" />
        </div>
        <div className="testi-circle2">
          <img src={`${process.env.PUBLIC_URL}/assets/images/Testimonial1.png`} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <Slider
              {...options}
              className="testimonial-carousel"
            >
              {DataList}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
