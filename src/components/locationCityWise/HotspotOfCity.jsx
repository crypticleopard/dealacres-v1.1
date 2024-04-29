import React from "react";
import Image from "next/image";

import cityImage from "../../../public/locationCityWise/city.jpg";
import ourService from "../../../public/locationCityWise/Our_Service_our_pride.webp";

const HotspotOfCity = () => {
  return (
    <div className="w-full mb-8">
      <div className="w-fit mb-6">
        <h1 className="text-3xl font-semibold max-lg:text-2xl">
          Hotspot of Gurgaon
        </h1>
        <div className="w-[60%] mt-2 h-1 bg-yellow-500"></div>
      </div>

      <div className="flex flex-row items-center justify-between mb-6 max-lg:w-full max-lg:flex-wrap max-lg:items-center max-lg:justify-center max-lg:gap-6">
        <div className="flex flex-col items-center justify-center space-y-5 text-lg font-semibold text-gray-600 max-md:text-md">
          <Image
            src={cityImage}
            alt="gurgaon"
            className="rounded-full h-36 w-36"
          />
          <p>Dwarka Expressway</p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-5 text-lg font-semibold text-gray-600 max-md:text-md">
          <Image
            src={cityImage}
            alt="gurgaon"
            className="rounded-full h-36 w-36"
          />
          <p>Dwarka Expressway</p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-5 text-lg font-semibold text-gray-600 max-md:text-md">
          <Image
            src={cityImage}
            alt="gurgaon"
            className="rounded-full h-36 w-36"
          />
          <p>Dwarka Expressway</p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-5 text-lg font-semibold text-gray-600 max-md:text-md">
          <Image
            src={cityImage}
            alt="gurgaon"
            className="rounded-full h-36 w-36"
          />
          <p>Dwarka Expressway</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-10 border-b-[1px] border-black">
        <div className="md:col-span-1 bg-blue-50 w-full h-full py-10 px-3 rounded-lg flex flex-col items-start justify-center">
          <h2 className="text-2xl text-blue-700">Residential Properties</h2>
          <p className="text-lg font-semibold mt-2">for Sale in Gurgaon</p>
          <div className="w-[60%] mt-2 h-1 bg-yellow-500"></div>
        </div>

        <div className="md:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div class="rounded-lg bg-blue-50 p-4">
              <div class="h-[10rem] w-full overflow-hidden rounded-2xl">
                <img
                  src="https://cdn.britannica.com/48/116548-050-3DA31589/India-Gate-New-Delhi.jpg"
                  className="object-cover"
                />
              </div>
              <p class="mt-2 text-xl font-semibold font-mono tracking-widest">
                Villas
              </p>
              <p class="text-md text-gray-600">For Sale In Gurgaon</p>
            </div>
            <div class="rounded-lg bg-blue-50 p-4">
              <div class="h-[10rem] w-full overflow-hidden rounded-2xl">
                <img
                  src="https://cdn.britannica.com/48/116548-050-3DA31589/India-Gate-New-Delhi.jpg"
                  className="object-cover"
                />
              </div>
              <p class="mt-2 text-xl font-semibold font-mono tracking-widest">
                Flats
              </p>
              <p class="text-md text-gray-600">For Sale In Gurgaon</p>
            </div>
            <div class="rounded-lg bg-blue-50 p-4">
              <div class="h-[10rem] w-full overflow-hidden rounded-2xl">
                <img
                  src="https://cdn.britannica.com/48/116548-050-3DA31589/India-Gate-New-Delhi.jpg"
                  className="object-cover"
                />
              </div>
              <p class="mt-2 text-xl font-semibold font-mono tracking-widest">
                Pent House
              </p>
              <p class="text-md text-gray-600">For Sale In Gurgaon</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6 py-10">
        <div className="md:col-span-1 bg-blue-50 w-full h-full py-10 px-3 rounded-lg flex flex-col items-start justify-center">
          <h2 className="text-2xl text-blue-700">Commercial Properties</h2>
          <p className="text-lg font-semibold mt-2">for Sale in Gurgaon</p>
          <div className="w-[60%] mt-2 h-1 bg-yellow-500"></div>
        </div>

        <div className="md:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div class="rounded-lg bg-blue-50 p-4">
              <div class="h-[10rem] w-full overflow-hidden rounded-2xl">
                <img
                  src="https://cdn.britannica.com/48/116548-050-3DA31589/India-Gate-New-Delhi.jpg"
                  className="object-cover"
                />
              </div>
              <p class="mt-2 text-xl font-semibold font-mono tracking-widest">
                Shop
              </p>
              <p class="text-md text-gray-600">For Sale In Gurgaon</p>
            </div>
            <div class="rounded-lg bg-blue-50 p-4">
              <div class="h-[10rem] w-full overflow-hidden rounded-2xl">
                <img
                  src="https://cdn.britannica.com/48/116548-050-3DA31589/India-Gate-New-Delhi.jpg"
                  className="object-cover"
                />
              </div>
              <p class="mt-2 text-xl font-semibold font-mono tracking-widest">
                Retail Space
              </p>
              <p class="text-md text-gray-600">For Sale In Gurgaon</p>
            </div>
            <div class="rounded-lg bg-blue-50 p-4">
              <div class="h-[10rem] w-full overflow-hidden rounded-2xl">
                <img
                  src="https://cdn.britannica.com/48/116548-050-3DA31589/India-Gate-New-Delhi.jpg"
                  className="object-cover"
                />
              </div>
              <p class="mt-2 text-xl font-semibold font-mono tracking-widest">
                Office Space
              </p>
              <p class="text-md text-gray-600">For Sale In Gurgaon</p>
            </div>
          </div>
        </div>
      </div>

      <Image
        src={ourService}
        alt="deal acres services"
        className="h-full w-full mb-6"
      />
    </div>
  );
};

export default HotspotOfCity;
