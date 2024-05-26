'use client';

import { useState } from 'react';
import NavigationBroker from '@/components/propertyListing/Navigation/NavigationBroker';
import Image from 'next/image';
import Link from 'next/link';
import { FaRupeeSign } from "react-icons/fa";

const Page = () => {

  const [expectedPrice, setExpectedPrice] = useState('');
  const [pricePerSqYd, setPricePerSqYd] = useState('');
  const [brokenCharge, setBrokenCharge] = useState('');

  const isContinueButtonDisabled =
    expectedPrice.trim() === '' ||
    pricePerSqYd.trim() === '' ||
    brokenCharge.trim() === '';

  return (
    <section className='mt-12 container mx-auto lg:w-4/5'>
      <NavigationBroker />
      <div className='flex flex-col md:flex-row px-4 items-start justify-center gap-10 md:gap-[2rem] container mx-auto my-10 '>

        <div className='h-full lg:w-[420px] rounded-xl p-5 border-2 border-blue-200 shadow-md'>
          <h1 className="font-medium md:font-bold md:text-2xl text-xl">
            Price Details
          </h1>
          <input
            type="text"
            className="custom-border-2 px-2 py-3 rounded-xl w-[80%] mt-2"
            placeholder="Expected Price"
            value={expectedPrice}
            onChange={(e) => setExpectedPrice(e.target.value)} />

          <input
            type="text"
            className="custom-border-2 px-2 py-3 rounded-xl w-[60%] mt-2"
            placeholder="Price per Sq.Yd"
            value={pricePerSqYd}
            onChange={(e) => setPricePerSqYd(e.target.value)} />

          <div className='flex flex-wrap gap-4 my-6'>
            <div className='flex flex-row items-center gap-2'>
              <input
                type="checkbox"
                width={12}
                height={24}
                className='input-checkbox-2'
              />
              <p>All Inclusive Price</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <input
                type="checkbox"
                width={12}
                height={24}
                className='input-checkbox-2'
              />
              <p>Price Negoiable</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <input
                type="checkbox"
                width={12}
                height={24}
                className='input-checkbox-2'
              />
              <p>Tax and Govt. Charges Excluded</p>
            </div>
          </div>
          <h1 className='text-lg font-bold'>Do You Charge Brokerage</h1>
          <div className='flex flex-col gap-4 my-4'>
            <div className='flex flex-row gap-8'>
              <div className='flex flex-row items-center gap-2'>
                <input
                  type="checkbox"
                  width={12}
                  height={24}
                  className='input-checkbox-2'
                />
                <p>Yes</p>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <input
                  type="checkbox"
                  width={12}
                  height={24}
                  className='input-checkbox-2'
                />
                <p>No</p>
              </div>
            </div>
            <div className='flex flex-row gap-4'>
              <div className='flex flex-row items-center gap-2'>
                <input
                  type="checkbox"
                  width={12}
                  height={24}
                  className='input-checkbox-2'
                />
                <p>Fixed Charges</p>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <input
                  type="checkbox"
                  width={12}
                  height={24}
                  className='input-checkbox-2'
                />
                <p>Percentage of Price</p>
              </div>
            </div>


          </div>
          <div className="relative ">
            <input
              type="text"
              className='custom-border-2 px-4 pt-5 pb-3 rounded-lg'
              value={brokenCharge}
              onChange={(e) => setBrokenCharge(e.target.value)} />
            <label className='absolute text-xs top-[20%] left-2 transform -translate-y-1/2'>Enter Brokrage Charges</label>
            <FaRupeeSign className='absolute top-[60%] left-1 transform -translate-y-1/2 text-base ' />
          </div>
          <div className='my-6'>
            <div className='flex flex-row items-center gap-2'>
              <input
                type="checkbox"
                width={12}
                height={24}
                className='input-checkbox-2'
              />
              <p>Brokerage Negotiable</p>
            </div>
          </div>
          <Link href={'amenities'}>
            <button
              className={`w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white mt-2 mb-2 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 ${isContinueButtonDisabled ? 'cursor-not-allowed opacity-50' : ''
                }`}
              disabled={isContinueButtonDisabled}
            >
              Continue
            </button>
          </Link>
        </div>

        <div className='h-fit sticky top-20 lg:w-[350px] xl:w-[400px] rounded-xl bg-[#e9f6fe] p-4 flex flex-col items-center mt-5 '>
          <h1 className="text-lg mb-4 text-center mt-8">Mention the Expected price of<br /> your property with your<br /> Brokerage Charges.</h1>
          <Image src={'/propertyListing/assets/home_coin.png'} alt='coin' height={120} width={120} className='mt-3 mb-5' />
          <h1 className='font-bold text-xl'>Need Help?</h1>
          <p className='text-lg'>You Can Email Us</p>
          <p className='text-lg text-blue-600 mb-10'>Contact@dealacres.com</p>
        </div>
      </div>
    </section>
  )
}

export default Page