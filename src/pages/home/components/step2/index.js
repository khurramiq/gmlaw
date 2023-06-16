import React from 'react';

const Step2 = ({ step, setStep }) => {
  return (
    <div className="m-5">
      <h1 className="font-bold text-2xl text-center">POUR-OVER-WILL</h1>
      <p className="text-center mt-3">
        When you have a living trust, your last will and testament serves as a
        safeguard just in case you forget to transfer an asset that you intended
        to be a trust asset but are in a position (incacitated or dead) where
        you can no longer transfer the asset yourself.
      </p>
      <h3 className="font-bold mt-3 text-center">Personal Representatives</h3>
      <p className="mt-3">
        Your Personal representative is the individual who will probate your
        estate upon your death. You can name as many personal representatives as
        you want, each of whom will act in succession if the predecessor cannot
        serve.{' '}
      </p>
      <p className="font-[300] mt-3">[HYPER LINK TO WHAT IS PROBATE]</p>
      <h3 className="font-bold mt-3">
        Do you want the personal representative(s) under your Pour-Over-Will to
        be the same as your successor trustee(s)
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
        Having the same personal representative and trustee makes logical sense
        and is rarely a different person.
      </p>
      <p>
        If you answer "No" and if you name more than one personal
        representative, they will act in the order listed below.
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

export default Step2;
