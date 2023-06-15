import React from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const Step5 = () => {
  return (
    <div>
      <h1 className="mb-1 font-bold">FAMILY</h1>
      <h3 className="mb-1 font-bold">Your Marital Status</h3>
      <div className="space-y-4">
        <label className="flex items-center">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option1"
          />
          <span className="ml-2 text-gray-700">Unmarried</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option2"
          />
          <span className="ml-2 text-gray-700">
            Married. However, this trust is for me only and will hold my
            separate property (and my share of any jointly owned property) only
          </span>
        </label>
      </div>
      <div className="space-y-4">
        <div className="flex">
          <div className="w-[50%]">
            <h3 className="mb-1 font-bold">Do you have any living children?</h3>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2 text-gray-700">No.</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2 text-gray-700">
                Yes. I have one living child.
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2 text-gray-700">
                Yes. I have more than one living child.
              </span>
            </label>
          </div>
          <div className="w-[50%]">
            <h3 className="mb-1 font-bold">
              Do you have any deceased children?
            </h3>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2 text-gray-700">No.</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2 text-gray-700">
                Yes. I have one living child.
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2 text-gray-700">
                Yes. I have more than one living child.
              </span>
            </label>
          </div>
        </div>
      </div>
      <h3 className="mb-1 mt-3 font-bold">Living Children Information</h3>
      <div className="bg-slate-200 p-5 rounded-lg">
        <div>
          <i className="far fa-times-circle"></i>
          <span className="font-bold ml-3">Child 1</span>
        </div>
        <h3 className="mb-1 font-bold">Name</h3>
        <div className="mb-2 flex">
          <input
            type="text"
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
            placeholder="First"
          />
          <input
            type="text"
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
            placeholder="Middle"
          />
          <input
            type="text"
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-[33%]"
            placeholder="Last"
          />
        </div>
        <h3 className="mb-1 font-bold">Date of Birth</h3>
        <DatePicker
          className="border bg-white border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%] outline-none"
          value={new Date()}
          // onChange={(date) => {
          //   setFieldValue('birthDate', date);
          //   handleBirthDate(date);
          // }}
        />
      </div>
      <div className="mt-2">
        <button className="border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded">
          Add Another Living Children
        </button>
      </div>
      <h3 className="mb-1 mt-3 font-bold">Deceased Children Information</h3>
      <div className="bg-slate-200 p-5 rounded-lg">
        <div>
          <i className="far fa-times-circle"></i>
          <span className="font-bold ml-3">Child 1</span>
        </div>
        <h3 className="mb-1 font-bold">Name</h3>
        <div className="mb-2 flex">
          <input
            type="text"
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
            placeholder="First"
          />
          <input
            type="text"
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
            placeholder="Middle"
          />
          <input
            type="text"
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-[33%]"
            placeholder="Last"
          />
        </div>
        <div className="mb-2 flex">
          <div className="w-[50%]">
            <h3 className="mb-1 font-bold">Date of Birth</h3>
            <DatePicker
              className="border bg-white border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full outline-none"
              value={new Date()}
              // onChange={(date) => {
              //   setFieldValue('birthDate', date);
              //   handleBirthDate(date);
              // }}
            />
          </div>
          <div className="w-[50%] ml-2">
            <h3 className="mb-1 font-bold">Date of Death</h3>
            <DatePicker
              className="border bg-white border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full outline-none"
              value={new Date()}
              // onChange={(date) => {
              //   setFieldValue('birthDate', date);
              //   handleBirthDate(date);
              // }}
            />
          </div>
        </div>
        <h3 className="mb-1 mt-2 font-bold">
          Did this child die leaving any children or grandchildren?
        </h3>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-blue-500"
              name="radio-option"
              value="option1"
            />
            <span className="ml-2 text-gray-700">Yes</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-blue-500"
              name="radio-option"
              value="option2"
            />
            <span className="ml-2 text-gray-700">No</span>
          </label>
        </div>
      </div>
      <div className="mt-2">
        <button className="border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded">
          Add a Deceased Child
        </button>
      </div>
      <h1 className="mt-3 font-bold">SUCCESSOR TRUSTEES</h1>
      <h3 className="mt-2 font-bold text-center">
        These are the individuals that will act as your replacement Trustee,
        should you become unable to act for yourself
      </h3>
      <p className="mt-2 text-center">
        If you name more than one, you can have them act alone, in the order you
        name them, or you can have them act together as co-successor Trustees.
      </p>
      <h3 className="mb-1 mt-2 font-bold">
        How many successor Trustees do you want to name?{' '}
      </h3>
      <div className="space-y-4">
        <label className="flex items-center">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option1"
          />
          <span className="ml-2 text-gray-700">One</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option2"
          />
          <span className="ml-2 text-gray-700">More than one</span>
        </label>
      </div>
      <h3 className="mb-1 mt-2 font-bold">
        Is there anyone that you do not want serving as a successor Trustee?
      </h3>
      <div className="space-y-4">
        <label className="flex items-center">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option1"
          />
          <span className="ml-2 text-gray-700">Yes</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option2"
          />
          <span className="ml-2 text-gray-700">No</span>
        </label>
      </div>
      <h1 className="m-y-2 text-2xl text-center font-bold">
        TRUST ADMINISTRATION ON YOUR DEATH
      </h1>
      <h3 className="m-y-2 text-lg text-center font-bold">
        Upon your death, three things will happen with your trust estate
      </h3>
      <ol className="list-decimal list-inside">
        <li>
          Your trust property will be marshaled, inventoried, and all remaining
          expenses and taxes will be paid.
        </li>
        <li>Special distributions (if any) will be made;</li>
        <li>
          Lastly, the remaineder of your trust property will be distributed.
        </li>
      </ol>
      <h3 className="mt-5 text-lg text-center font-bold">
        THE FOLLOWING SECTIONS PROVIDE INSTRUCTIONS REGARDING THE DISTRIBUTIONS
      </h3>
      <h3 className="mt-5 text-lg text-center font-bold">
        SPECIFIC DISTRIBUTIONS
      </h3>
      <h3 className="mt-5 font-bold">
        Do you want to make any specific gifts?
      </h3>
      <div className="flex space-x-4">
        <label className="flex items-center">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option1"
          />
          <span className="ml-2 text-gray-700">Yes</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option2"
          />
          <span className="ml-2 text-gray-700">No</span>
        </label>
      </div>
      <i className="text-sm">
        This would include things like heirlooms, jewelry, tools, or other
        special items that you want a particular person to have. If you do not
        have the item at the time of your death or if the person predeceases
        you, the gift lapses (it is revoked)
      </i>
      <h3 className="mt-5 text-lg text-center font-bold">
        DISTRIBUTION OF THE RESIDUE
      </h3>
      <p>
        Any remaining assets will be distributed as you specifiy in this
        section.{' '}
      </p>
      <p>
        We advise you to use percentages (not specific dollar amounts). This
        will make things much easier to administer when the time comes.
      </p>
      <h3 className="mt-5 font-bold">
        First, do you want to make any charitable donations?
      </h3>
      <div className="flex space-x-4">
        <label className="flex items-center">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option1"
          />
          <span className="ml-2 text-gray-700">Yes</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option2"
          />
          <span className="ml-2 text-gray-700">No</span>
        </label>
      </div>
      <h1 className="mt-5 font-bold">REMAINDER BENEFICIARIES</h1>
      <i className="mt-2">Remember - the total must add up to 100%</i>
      <div className="mt-3">
        <button class="border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded">
          Add Beneficiary
        </button>
      </div>
      <h3 className="mt-5 font-bold">Contingent Residue Beneficiaries</h3>
      <p className="text-sm">
        Should there be no one to receive your trust residue, where would you
        like it to be distributed?{' '}
      </p>
      <p className="mt-3 text-sm">
        if you identify more than one contingent residue beneficiary, the
        allocation to each will be an equal share.
      </p>
      <h3 className="mt-5 font-bold">Contingent Residue Distribution</h3>
      <div className="space-y-4">
        <label className="flex items-center">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option1"
          />
          <span className="ml-2 text-gray-700">My heirs at law</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option2"
          />
          <span className="ml-2 text-gray-700">
            the individual(s) named below
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
            the charitable organization(s) named below
          </span>
        </label>
      </div>
      <div className="mt-3">
        <button class="border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded">
          Add Beneficiary
        </button>
      </div>
    </div>
  );
};

export default Step5;
