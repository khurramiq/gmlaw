import React from 'react';

const Step7 = ({ step, setStep }) => {
  return (
    <div className="m-5">
      <h1 className="font-bold text-2xl text-center">
        LAST WILL AND TESTAMENT
      </h1>
      <p className="text-center mt-3">
        A last will and testament would be in lieu of a Living Trust.. There are
        some fairly significant differences however.
      </p>
      <h3 className="text-center font-bold mt-3 mb-3">
        INSERT TABLE SHOWING DIFFERENCES
      </h3>
      <h2 className="text-center font-bold mt-5 mb-3">
        Personal Representatives
      </h2>
      <p className="mt-5 mb-3">
        Your Personal representative is the individual who will probate your
        estate upon your death. You can name as many as you want, each of whom
        will act in succession if the predecessor cannot serve.{' '}
      </p>
      <div className="bg-slate-200 p-5 rounded-lg">
        <div>
          <i className="far fa-times-circle"></i>
          <span className="font-bold ml-3">Personal Representative 1</span>
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
            <h3 className="mb-1 font-bold">Email</h3>
            <input
              type="Email"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
              placeholder="Email"
            />
          </div>
          <div className="w-[50%] ml-2">
            <h3 className="mb-1 font-bold">Phone</h3>
            <input
              type="text"
              className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
              placeholder="Phone"
            />
          </div>
        </div>
      </div>
      <div className="mt-2">
        <button className="border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded">
          Add Personal Representative
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
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step7;
