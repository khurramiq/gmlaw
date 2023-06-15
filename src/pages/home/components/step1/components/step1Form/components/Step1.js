import React from 'react';

const Step1 = () => {
  return (
    <div>
      <h1 className="mb-3 font-bold">YOUR INFORMATION</h1>
      <h3 className="mb-1 font-bold">Your Name</h3>
      <div className="mb-2 flex">
        <input
          type="text"
          class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
          placeholder="First"
        />
        <input
          type="text"
          class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
          placeholder="Middle"
        />
        <input
          type="text"
          class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-[33%]"
          placeholder="Last"
        />
      </div>
      <h3 className="mb-1 font-bold">Mailing Address</h3>
      <div className="mb-2">
        <input
          type="text"
          class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
          placeholder="Address Line 1"
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
          placeholder="Address Line 2"
        />
      </div>
      <div className="mb-2 flex">
        <input
          type="text"
          class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
          placeholder="City"
        />
        <input
          type="text"
          class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
          placeholder="State"
        />
        <input
          type="text"
          class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-[33%]"
          placeholder="Zip Code"
        />
      </div>
      <div className="mb-2 flex">
        <div className="w-[50%]">
          <h3 className="mb-1 font-bold">Email</h3>
          <input
            type="text"
            class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
            placeholder="Email"
          />
        </div>
        <div className="w-[50%] ml-2">
          <h3 className="mb-1 font-bold">Your Gender</h3>
          <select class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
      <div className="mb-2 flex">
        <div className="w-[50%]">
          <h3 className="mb-1 font-bold">State of Residency</h3>
          <select class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full">
            <option value="Arizona">Arizona</option>
            <option value="Alaska">Alaska</option>
            <option value="Louisiana">Louisiana</option>
          </select>
        </div>
        <div className="w-[50%] ml-2">
          <h3 className="mb-1 font-bold">County of Residency</h3>
          <select class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full">
            <option value="King">King</option>
            <option value="Snohomish">Snohomish</option>
            <option value="Pierce">Pierce</option>
          </select>
        </div>
      </div>
      <div className="mb-2 flex">
        <div className="w-[50%]">
          <h3 className="mb-1 font-bold">Country of Citizenship</h3>
          <select class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full">
            <option value="United States">United States</option>
            <option value="Brazil">Brazil</option>
            <option value="Britain">Britain</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Step1;
