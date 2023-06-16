import React from 'react';

const Step4 = ({ step, setStep }) => {
  return (
    <div className="m-5">
      <h1 className="font-bold text-2xl text-center">
        ADVANCE HEALTH CARE DIRECTIVE
      </h1>
      <p className="text-center mt-3">
        This is where you will nomiate a "health care agent" to make medical
        decisions on your behalf including decisions regarding medical consents,
        life support issues, and nursing home admission if you were unable to
        make these decisions yourself.
      </p>
      <p className="text-center mt-3 mb-3">
        It is not necessary to appoint the same person who is your successor
        trustee or personal representative as your health care agent.
      </p>
      <div className="bg-slate-200 p-5 rounded-lg">
        <div>
          <i className="far fa-times-circle"></i>
          <span className="font-bold ml-3">Health Care Agent 1</span>
        </div>
        <h3 className="mb-1 font-bold">Name</h3>
        <div className="mb-2 flex">
          <input
            type="text"
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[50%]"
            placeholder="First"
          />
          <input
            type="text"
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-[50%]"
            placeholder="Last"
          />
        </div>
        <div className="mb-2 flex">
          <div className="w-[50%]">
            <h3 className="mb-1 font-bold">Phone</h3>
            <input
              type="text"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
              placeholder="Phone"
            />
          </div>
          <div className="w-[50%] ml-2">
            <h3 className="mb-1 font-bold">Email</h3>
            <input
              type="text"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="mb-2 flex">
          <div className="w-[50%]">
            <h3 className="mb-1 font-bold">Relationship</h3>
            <input
              type="text"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
              placeholder="Relationship"
            />
          </div>
        </div>
      </div>
      <div className="mt-2">
        <button className="border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded">
          Add Health Care Agent
        </button>
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

export default Step4;
