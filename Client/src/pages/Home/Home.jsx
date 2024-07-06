import React, { useEffect, useState } from "react";
import './home.css';
import SliderComponent from "./Slides";

const slides = [
  {
    backgroundImage:
      "url(https://themewagon.github.io/cozastore/images/slide-01.jpg)",
    text1: "Women Collection 2018",
    text2: "NEW SEASON",
    link: "product.html",
    animations: ["fadeInDown", "fadeInUp", "zoomIn"],
  },
  {
    backgroundImage:
      "url(https://themewagon.github.io/cozastore/images/slide-02.jpg)",
    text1: "Men New-Season",
    text2: "Jackets & Coats",
    link: "product.html",
    animations: ["rollIn", "lightSpeedIn", "slideInUp"],
  },
  {
    backgroundImage:
      "url(https://themewagon.github.io/cozastore/images/slide-03.jpg)",
    text1: "Men Collection 2018",
    text2: "New arrivals",
    link: "product.html",
    animations: ["rotateInDownLeft", "rotateInUpRight", "rotateIn"],
  },
];
const Home = () => {

  return (
 <>
 <SliderComponent slides={slides}/>
 </>
  );
};

export default Home;
