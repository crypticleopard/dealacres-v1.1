import React, { useState } from 'react';

const DynamicRadio = () => {
  const [showMonthlyRate, setShowMonthlyRate] = useState(false);
  const [showAssuredReturn, setShowAssuredReturn] = useState(false);
  const [monthlyRate, setMonthlyRate] = useState('');
  const [assuredReturn, setAssuredReturn] = useState('');

  const handleYesClick = (option) => {
    if (option === 'monthlyRate') {
      setShowMonthlyRate(true);
     
    } else if (option === 'assuredReturn') {
      setShowAssuredReturn(true);
     
    }
  };

  const handleNoClick = (option) => {
    if (option === 'monthlyRate') {
      setShowMonthlyRate(false);
    } else if (option === 'assuredReturn') {
      setShowAssuredReturn(false);
    }
  };

  return (
    <div className='mt-6'>
      <div className='flex flex-row gap-4 mt-3 items-center'>
        <label className='text-base font-bold mb-2  '>
          Currently Leased Out?
        </label>
        <div className='flex flex-row items-center gap-4 flex-1 justify-center'>
        <input
          type="radio"
          name="monthlyRateOption"
          value="yes"
          onChange={() => handleYesClick('monthlyRate')}
        />
        Yes
        <input
          type="radio"
          name="monthlyRateOption"
          value="no"
          onChange={() => handleNoClick('monthlyRate')}
        />
        No
        </div>
      </div>

      {showMonthlyRate && (
        <> <p className='text-xs'><span className='font-bold'>To whom has the property been leased</span>

        <br />Please specify whether your property has  be leased to a company or an individual</p>
        <div className='flex flex-row gap-6 mt-5'>
           
          <label className='text-sm text-gray-500 mb-2'>
            Monthly Rate:
            <input
              type="text"
              value={monthlyRate}
              onChange={(e) => setMonthlyRate(e.target.value)}
              className='border-b-2'
            />
          </label>
          <label className='text-sm text-gray-500 mb-2'>
            Lease End Date:
            <input type="date" />
          </label>
        </div>
        </>
      )}

      <div className='flex flex-row gap-4 mt-3 items-center '>
       
        <label className='text-md font-bold mb-2 w-[42.5%]'>
          Assured Returns
        </label>
        <div className='flex flex-row items-center gap-4 flex-1 justify-center'>
        <input
          type="radio"
          name="assuredReturnOption"
          value="yes"
          onChange={() => handleYesClick('assuredReturn')}
        />
        Yes
        <input
          type="radio"
          name="assuredReturnOption"
          value="no"
          onChange={() => handleNoClick('assuredReturn')}
        />
        No
</div>
      </div>

      {showAssuredReturn && (
        <div className='mt-3 flex flex-col gap-1'>
          <label className='text-sm mb-2'>
            Rate of Returns:</label>
            <input
              type="text"
              value={assuredReturn}
              onChange={(e) => setAssuredReturn(e.target.value)}
              className='border-b-2'
              placeholder='Rate 5%'
            />
          
        </div>
      )}
    </div>
  );
};

export default DynamicRadio;
