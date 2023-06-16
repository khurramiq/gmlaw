import React from 'react';

const Step2 = ({ data, setData }) => {
  console.log('data', data);
  return (
    <div>
      <h1 className="mb-3 font-bold">
        FROM THE LIST BELOW, SELECT THE DOCMENT(S) OR THE PACKAGE THAT BEST FITS
        YOUR NEEDS.
      </h1>
      <p className="mb-3">
        {' '}
        The package or documents selected will dictate the questions that
        follow.{' '}
      </p>
      <h3 className="mb-1 font-bold">
        ESTATE PLANNING PACKAGES (insert prices for each set of documents)
      </h3>
      <div className="space-y-4">
        <div className="flex">
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">Revocable Trust Package</span>
          </label>
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              Power of Attorney Package
            </span>
          </label>
        </div>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <span className="ml-2 text-gray-700">
            Last Will and Testament Package
          </span>
        </label>
      </div>
      <p>Only select one. The package will determine the documents created.</p>
      <h3 className="mb-1 font-bold">INDIVIDUAL ESTATE PLANNING DOCUMENTS</h3>
      <div className="space-y-4">
        <div className="flex">
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              Revocable Trust Agreement
            </span>
          </label>
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              Durable Power of Attorney for Property & Finances
            </span>
          </label>
        </div>
        <div className="flex">
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              Amendment to Revocable Trust
            </span>
          </label>
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-[30px] text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              Power of Attorney for Health Care and Living Will (aka Advance
              health care directive)
            </span>
          </label>
        </div>
        <div className="flex">
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">Schedule "A" to Trust</span>
          </label>
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              HIPAA Waiver of Confidentiality
            </span>
          </label>
        </div>
        <div className="flex">
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              Schedule of Gifts of Personal Property from Trust
            </span>
          </label>
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              Nomination of Guardian/​Conservator for Adults
            </span>
          </label>
        </div>
        <div className="flex">
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">Certification of Trust</span>
          </label>
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              Nomination of Guardian/​Conservator for Minor Children
            </span>
          </label>
        </div>
        <div className="flex">
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              Pour-Over-Will (only used in conjunction with a trust)
            </span>
          </label>
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              Appointment of Pet Caregiver
            </span>
          </label>
        </div>
        <div className="flex">
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              Will Codicil (amendment to a Will)
            </span>
          </label>
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              Last Will and Testament (used if no trust)
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Step2;
