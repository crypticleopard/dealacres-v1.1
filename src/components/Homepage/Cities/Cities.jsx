"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Cities.css";
import Card from './Card'
import Link from 'next/link'

const Cities = (props) => {
  
  const citiesData = [
    { title: "Mumbai", content: "This is the content of City 1" },
    { title: "Pune", content: "This is the content of City 2" },
    { title: "gurgram", content: "This is the content of City 3" },
    { title: "HISAR", content: "This is the content of City 4" },
    { title: "LUCKNOW", content: "This is the content of City 5" },
    { title: "PUNJAB", content: "This is the content of City 6" },
    { title: "DELHI", content: "This is the content of City 7" },
    { title: "FARIDABAD", content: "This is the content of City 9" },
    { title: "City 10", content: "This is the content of City 10" },
    { title: "City 11", content: "This is the content of City 11" },
    { title: "City 12", content: "This is the content of City 12" },
    { title: "City 13", content: "This is the content of City 13" },
    { title: "City 14", content: "This is the content of City 14" },
    { title: "City 15", content: "This is the content of City 15" },
  ];

   const settings = {
    dots: true,
    infinite: true,
    speed: 150,
    centerPadding: "60px",
    slidesToShow: 4,
    className: "center",
    slidesToScroll: 2,
    autoplay:true,
    rows: 2,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows:false
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows:1,
          arrows:false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        }
      }
    ],
  };

  return (
    <div className="bg-white mb-5">
        {props.title && <div className="my-4 py-4 "><h2 className=" pb-4 text-sm sm:text-lg md:text-2xl lg:text-3xl text-center font-semibold font-[Poppins] text-gray-700"><span className="text-blue-600 block sm:inline"> Explore</span> Real Estate in Popular Indian Cities</h2></div>}
      <Slider {...settings} className="" >
        {citiesData.map((city, index) => (
          <Link href='#' key={index} className="mb-4"><Card  title={city.title} content={city.content} /></Link>
        ))}
      </Slider>
    </div>
  );
};

export default Cities;