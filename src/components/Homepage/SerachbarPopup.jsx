'use Client'
import { useState } from "react";
import Image from "next/image";

const SubTitle = ({ name }) => {
    return <p className='text-sm font-semibold'>{name}</p>;
};

const BHK_data = ['2BHK', '3BHK', '4BHK', '5BHK', '6BHK'];

const propertyTypesData = {
  residential: [
    {
      imgUrl: 'blob:https://www.canva.com/54f5945e-ff89-402f-b7ca-0f5979b39d86',
      desc: 'House / Villa',
    },
    {
      imgUrl: 'blob:https://www.canva.com/40276178-0e73-49b5-a9be-1ad2e3c9f023',
      desc: 'Flat / Floors',
    },
    {
      imgUrl: 'blob:https://www.canva.com/5ffddcc8-4b90-438e-bff9-7f651abfc204',
      desc: 'Plot / Land',
    },
  ],
  commercial: [
    {
      imgUrl: 'blob:https://www.canva.com/0b629edf-7856-405b-88d5-00c19ae65984',
      desc: 'Office Space',
    },
    {
      imgUrl: 'blob:https://www.canva.com/2266e3d9-ffec-4b28-8b2f-c80257e2eb11',
      desc: 'Showroom',
    },
    {
      imgUrl: 'blob:https://www.canva.com/db41bd9e-b5e5-43f0-be6a-83cd458e7dfd',
      desc: 'Other Commercial',
    },
  ],
};

const LabeledSearchbar = () => {
    return (
      <>
        <form className='flex flex-col gap-2'>
          <label className='text-sm font-semibold'>Select City/Location</label>
          {/* bages */}
          <div className='flex gap-3'>
            <Bage name={'New Delhi'} isActive={true} />
            <button className='text-[0.7rem] font-semibold'>+Location</button>
          </div>
          {/* searchbox */}
          <div className='flex justify-between gap-2 border-2 border-blue-500 rounded-md py-2 px-4'>
            <input
              type='text'
              className='text-center w-full text-[0.8rem]'
              placeholder='Search City, Location, project'
            ></input>
            <Image
              src='https://media-public.canva.com/zxJII/MADakDzxJII/2/t.png'
              width={17}
              height={5}
              alt='search-icon'
            />
          </div>
        </form>
      </>
    );
};

export const Bage = ({
    name,
    handleOnClick,
    isActive,
  }) => {
   
  
    return (
      <>
        <button
          onClick={() => {
            handleOnClick();
          }}
          className={`${
            isActive ? 'bg-blue-500 w-fit text-white' : ''
          }  text-[0.7rem] font-bold px-2 py-1 rounded-md`}
        >
          {name}
        </button>
      </>
    );
};

export const PropertyCard = ({ img, desc }) => {
    return (
      <>
        <div className='w-[5.4rem] flex flex-col justify-center items-center gap-2 p-2 bg-blue-300 rounded-md'>
          <Image src={img} width={15} height={15} alt='img' />
          <p className='text-[0.7rem] text-center font-semibold'>{desc}</p>
        </div>
      </>
    );
};

export const SearchBarPopup = ({ onClose }) => {
  const [isResidential, setIsResidential] = useState(true);
  const [isBuy, setIsBuy] = useState(true);
  const [bhk, setBhk] = useState('2BHK');

  const handleOnClick = (item) => {
      setBhk(item);
  };

  return (
      <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10'>
          <div className='w-[90%] max-h-[80vh] overflow-y-auto mx-auto px-4 py-2 border-2 border-salate-200 rounded-lg bg-white'>
              {/* tab */}
              <div className='flex justify-between border-b-2 border-blue-400 pb-3'>
                  <div className='btn-div flex gap-6'>
                      <button
                          onClick={() => setIsBuy(true)}
                          className={`${isBuy ? 'text-blue-600' : ''}`}
                      >
                          Buy
                      </button>
                      <button
                          onClick={() => setIsBuy(false)}
                          className={`${!isBuy ? 'text-blue-600' : ''}`}
                      >
                          Rent
                      </button>
                  </div>
                  {/* close btn */}
                  <button onClick={onClose}>x</button>
              </div>

              {/* main */}
              <div className='px-4 py-2 flex flex-col gap-2'>
                  <LabeledSearchbar />
                  <div className='border border-blue-400 mt-4'></div>
                  {/* property type  */}
                  <div className='flex flex-col gap-4'>
                      <p className='text-sm font-semibold'>Property Type</p>
                      {/* tabs */}
                      <div className='flex gap-4'>
                          <button
                              onClick={() => setIsResidential(true)}
                              className={`${isResidential ? 'bg-blue-500 px-2 py-1 rounded-lg text-white' : ''} text-[0.6rem]`}
                          >
                              Residential
                          </button>
                          <button
                              onClick={() => setIsResidential(false)}
                              className={`${!isResidential ? 'bg-blue-500 px-2 py-1 rounded-lg text-white' : ''} text-[0.6rem]`}
                          >
                              Commercial
                          </button>
                      </div>

                      <div className='flex flex-wrap gap-5'>
                          {isResidential
                              ? propertyTypesData.residential.map((item, index) => (
                                  <PropertyCard
                                      key={index}
                                      img={item.imgUrl}
                                      desc={item.desc}
                                  />
                              ))
                              : propertyTypesData.commercial.map((item, index) => (
                                  <PropertyCard
                                      key={index}
                                      img={item.imgUrl}
                                      desc={item.desc}
                                  />
                              ))}
                      </div>

                      {isResidential && (
                          <div className='flex flex-col gap-2'>
                              <SubTitle name='BHK' />
                              <div className='flex flex-wrap gap-4'>
                                  {BHK_data.map((item, index) => (
                                      <Bage
                                          key={index}
                                          name={item}
                                          handleOnClick={() => handleOnClick(item)}
                                          isActive={bhk === item}
                                      />
                                  ))}
                              </div>
                          </div>
                      )}

                      <div className='flex flex-col gap-2'>
                          <SubTitle name={'Budget'} />
                          <div className='flex items-center gap-2'>
                              <input
                                  type='text'
                                  className='w-[5rem] border-2 border-blue-400 p-1 rounded-md text-[0.7rem]'
                                  placeholder='Min'
                              />
                              <p className='text-sm'>to</p>
                              <input
                                  type='text'
                                  className='w-[5rem] border-2 border-blue-400 p-1 rounded-md text-[0.7rem]'
                                  placeholder='Max'
                              />
                          </div>
                      </div>
                      {/* search btn */}
                      <button className='text-center bg-blue-600 text-white p-1 rounded-md mb-1'>
                          Search
                      </button>
                  </div>
              </div>
          </div>
      </div>
  );
};

  