import React from 'react';

const Step3 = ({ step, setStep }) => {
  return (
    <div className="m-5">
      <h1 className="font-bold text-2xl text-center">
        DURABLE POWER OF ATTORNEY
      </h1>
      <p className="text-center mt-3">
        If you become unavailable to make financial decisions for yourself, who
        would you want to make decisions for you with regard to your property.
        Frequently, the primary Agent (called your "attorney-in-fact") is the
        same person as your successor Trustee (the manager for your Trust) and
        your Personal Representative (the manager for your Will).
      </p>
      <h3 className="font-bold mt-5">
        Do you want the attorney(s)-in-fact under your Durable Power of Attorney
        to be the same as your successor trustee(s)
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
      <p className="mt-2">
        Having the same attorney-in-fact and trustee makes logical sense and is
        rarely a different person.
      </p>
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

export default Step3;
