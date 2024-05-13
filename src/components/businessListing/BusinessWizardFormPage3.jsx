import React from "react";
import TimePicker from "react-time-picker";

import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const paymentModes = [
  "GPay",
  "Paytm",
  "Credit Card",
  "Debit Card",
  "NEFT",
  "UPI",
  "Cash",
  "Cheque",
  "PayPal",
  "Apple Pay",
  "Amazon Pay",
  "Venmo",
  "Samsung Pay",
  "Square Cash",
  "Stripe",
  "Zelle",
  "Western Union",
  "Alipay",
  "WeChat Pay",
  "MasterCard",
  "VisaCard",
];

const BusinessWizardFormPage3 = ({ onSaveAndContinue, onPreviousClick }) => {
  return (
    <div className="p-5 flex items-center justify-start mt-2 max-lg:hidden">
      <div className="px-[8rem]">
        <h2 className="text-lg font-bold">Hours of Operation</h2>

        <div className="flex flex-row space-x-5 items-center mt-5">
          <div class="flex flex-row items-center justify-between">
            <p class="flex items-center space-x-1">
              <input type="checkbox" className="rounded-full mr-2 -mt-1" />
              Display hours of operation
            </p>
          </div>

          <div class="flex flex-row items-center justify-between">
            <p class="flex items-center space-x-1">
              <input type="checkbox" className="rounded-full mr-2 -mt-1" />
              Donot Display hours of operation
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-5 flex flex-col items-start justify-start w-fit">
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((day, index) => (
            <div
              className="flex flex-row items-center justify-start"
              key={index}
            >
              <p className="w-[80px]">{day}:</p>
              <div className="flex flex-row items-center ml-[5rem]">
                <TimePicker className="ml-2" openClockOnFocus={false} />
                <p className="ml-[2rem]">To</p>
                <TimePicker className="ml-2"  openClockOnFocus={false} />
                <div className="flex items-center ml-[2rem]">
                  <p className="flex items-center space-x-1">
                    <input
                      type="checkbox"
                      className="rounded-full mr-2 -mt-1"
                    />
                    Closed
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p class="text-lg  text-blue-600 mt-5">Copy time from Monday to Saturday </p>
        <p class="text-lg  text-blue-600 mt-5">Click Here For Dual Timings</p>

        <h2 className="text-lg font-bold mt-5 mb-5">
          Payment Modes Accepted By You
        </h2>

        <div className="grid grid-cols-3 gap-4">
          {paymentModes.map((mode, index) => (
            <div key={index} class="flex flex-row items-center justify-between">
              <p class="flex items-center space-x-1">
                <input type="checkbox" className="rounded-full mr-2 -mt-1" />
                {mode}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-between pr-[2rem] mt-10">
          <button
            className="font-semibold text-lg bg-blue-600 px-4 py-2 text-white rounded-md text-center"
            onClick={onPreviousClick}
          >
            Previous
          </button>

          <button
            className="font-semibold text-lg bg-blue-600 px-4 py-2 text-white rounded-md text-center"
            onClick={onSaveAndContinue}
          >
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessWizardFormPage3;
