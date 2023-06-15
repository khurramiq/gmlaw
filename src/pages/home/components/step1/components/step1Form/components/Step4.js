import React from 'react';

const Step4 = () => {
  return (
    <div>
      <h1 className="mb-1 font-bold text-center">LIVING TRUST PACKAGE</h1>
      <p>This set of documents includes the following:</p>
      <ul className="list-disc list-inside">
        <li>Living Trust Agreement;</li>
        <li>Certification of Trust;</li>
        <li>Assignment (transfer) of Personal Property to your Trust;</li>
        <li>Last Will and Testament;</li>
        <li>Durable Power of Attorney for finances;</li>
        <li>
          Health Care Power of Attorney and Living Will (sometimes called an
          Advance Health Care Directive); and
        </li>
        <li>HIPAA Confidentiality Waiver;</li>
      </ul>
      <h1 className="mb-1 font-bold text-center">DRAFTING YOUR DOCUMENTS</h1>
      <h1 className="mb-1 font-bold text-center">
        THERE ARE _____ SECTIONS, EACH CONTAINING A NUMBER OF QUESTIONS.
      </h1>
      <h1 className="mb-1 font-bold text-center">
        Anwer the questions accurately and completely and you will have a a well
        crafted document.
      </h1>
      <h1 className="mb-1 font-bold text-center">We promise!</h1>
      <p className="mb-1 text-center">
        YOU CAN TRACK YOUR PROGRESS ON THE PROGRSS BAR, AND YOU CAN STOP AND
        COME BACK AT ANY TIME WITHOUT LOSING YOUR PLACE.{' '}
      </p>
      <h1 className="mb-1 font-bold">SECTION ONE: TYPE OF TRUST</h1>
      <h3 className="mb-1 font-bold">
        First,what type of trust are you creating?
      </h3>
      <div className="space-y-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <span className="ml-2 text-gray-700">
            I am starting from scratch. I do not have an existing trust
          </span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <span className="ml-2 text-gray-700">
            I have an exising trust but I want to completely update it
          </span>
        </label>
      </div>
      <h1 className="mb-1 font-bold text-center">INITIAL TRUSTEE</h1>
      <h3 className="mb-1 font-bold">Select the initial Trustee</h3>
      <div className="space-y-4">
        <label className="flex items-center">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option1"
          />
          <span className="ml-2 text-gray-700">
            You will serve as the initial sole Trustee
          </span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option2"
          />
          <span className="ml-2 text-gray-700">
            You and one other person will serve as initial co-Trustees
          </span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option3"
          />
          <span className="ml-2 text-gray-700">
            You and more than one other person will serve as initial co-Trustees
          </span>
        </label>
      </div>
    </div>
  );
};

export default Step4;
