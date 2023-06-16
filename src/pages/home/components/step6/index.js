import React from 'react';

const Step6 = ({ step, setStep }) => {
  return (
    <div className="m-5">
      <h1 className="font-bold text-2xl text-center">
        GUARDIAN FOR MINOR CHILDREN
      </h1>
      <h3 className="font-bold mt-5">
        Do you have any children under 18 years of age?
      </h3>
      <div class="flex space-x-4">
        <label class="flex items-center">
          <input
            type="radio"
            class="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="Yes"
          />
          <span class="ml-2 text-gray-700">Yes</span>
        </label>
        <label class="flex items-center">
          <input
            type="radio"
            class="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="NO"
          />
          <span class="ml-2 text-gray-700">No</span>
        </label>
      </div>
      <div className="flex justify-end">
        <button
          class={`bg-[#CCCCCC] text-white font-bold py-2 px-4 rounded disabled`}
          disabled={step === 1}
          onClick={() => setStep((prev) => prev - 1)}
        >
          Back
        </button>
        <button
          class="bg-[#6E66D4] ml-2 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            if (step <= 6) {
              setStep((prev) => prev + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step6;
