'use client'

import React from 'react'
import { Pagination } from "swiper/modules";
import { similarProject } from './main';
import PropertyCard from './PropertyCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
const SimilarProject = () => {

    return (
        <div>
            <h2 className="text-xl sm:text-3xl lg:text-2xl font-bold pt-2 pb-5 px-4">
                Similar Project
            </h2>
           
            <Swiper
                spaceBetween={46}
                slidesPerView={1}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    798: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 25,
                    },
                }}
            >
                {similarProject.map((property) => (
                    <SwiperSlide className="pb-12" key={property.id}>
                        <PropertyCard
                            title={property.title}
                            description={property.description}
                            price={property.price}
                            imageSrc={property.imageSrc}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );

}

export default SimilarProject
