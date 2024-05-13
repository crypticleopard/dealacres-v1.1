'use client'

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './slider.css'

import GuideCard from '../blog/guides/GuideCard';
import GuidesCustomArrow from './GuidesCustomArrow';
import { AiOutlineRight } from 'react-icons/ai';

const  GuidesSlider = ({
    allGuides,
    handleTabChange
}) => {


    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: <GuidesCustomArrow icon={AiOutlineRight} isNext/>,
        prevArrow: <></>,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                rows:1,
                arrows:false,
                dots: true,
                variableWidth: true,
                infinite: true,

              }
            },
            
          ],

    };
    return (
        <div className=''>
            <Slider {...settings}>
                {
                    allGuides.map((guide, index) => {
                        return (
                            <div key={index} className='mr-[2rem] ' onClick={() => handleTabChange(index)}>


                                <GuideCard  title={guide.title} bgColor={guide.bgColor} textColor={guide.textColor} borderColor={guide.borderColor} img={guide.img} />
                            </div>
                        )
                    })
                }
            </Slider>

        </div>
    )
}

export default GuidesSlider