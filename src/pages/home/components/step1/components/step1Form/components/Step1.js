import { Autocomplete, TextField } from '@mui/material';
import stateList from '../../../../../../../data/stateList';
import React from 'react';

const Step1 = ({ data, setData }) => {
  const handleYourInfoChange = (e) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        yourInfo: {
          ...data.personalInfo.yourInfo,
          [e.target.name]: e.target.value,
        },
      },
    });
  };
  const handleStateChange = (value) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        yourInfo: {
          ...data.personalInfo.yourInfo,
          state: value,
        },
      },
    });
  };
  return (
    <div>
      <h1 className="mb-3 font-bold">YOUR INFORMATION</h1>
      <h3 className="mb-1 font-bold">Your Name</h3>
      <div className="mb-2 flex">
        <input
          type="text"
          name="firstName"
          value={data?.personalInfo?.yourInfo?.firstName}
          onChange={handleYourInfoChange}
          class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
          placeholder="First"
        />
        <input
          type="text"
          name="middleName"
          value={data?.personalInfo?.yourInfo?.middleName}
          onChange={handleYourInfoChange}
          class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
          placeholder="Middle"
        />
        <input
          type="text"
          name="lastName"
          value={data?.personalInfo?.yourInfo?.lastName}
          onChange={handleYourInfoChange}
          class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-[33%]"
          placeholder="Last"
        />
      </div>
      <h3 className="mb-1 font-bold">Mailing Address</h3>
      <div className="mb-2">
        <input
          type="text"
          name="addressLine1"
          value={data?.personalInfo?.yourInfo?.addressLine1}
          onChange={handleYourInfoChange}
          class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
          placeholder="Address Line 1"
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          name="addressLine2"
          value={data?.personalInfo?.yourInfo?.addressLine2}
          onChange={handleYourInfoChange}
          class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
          placeholder="Address Line 2"
        />
      </div>
      <div className="mb-2 flex">
        <input
          type="text"
          name="city"
          value={data?.personalInfo?.yourInfo?.city}
          onChange={handleYourInfoChange}
          class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
          placeholder="City"
        />
        <div className="w-[33%] mr-2">
          <Autocomplete
            fullWidth
            options={stateList}
            value={data?.personalInfo?.yourInfo?.state}
            getOptionLabel={(option) => option.label}
            onChange={(_, value) => handleStateChange(value)}
            renderInput={(params) => (
              <TextField
                label="State"
                variant="outlined"
                placeholder="Select State"
                name="state"
                // error={
                //   !!touched?.billingAddress && !!errors?.billingAddress?.country
                // }
                // helperText={
                //   touched.billingAddress &&
                //   errors?.billingAddress?.country &&
                //   'required'
                // }
                {...params}
              />
            )}
          />
        </div>
        <input
          type="text"
          name="zipCode"
          value={data?.personalInfo?.yourInfo?.zipCode}
          onChange={handleYourInfoChange}
          class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-[33%]"
          placeholder="Zip Code"
        />
      </div>
      <div className="mb-2 flex">
        <div className="w-[50%]">
          <h3 className="mb-1 font-bold">Email</h3>
          <input
            type="email"
            name="email"
            value={data?.personalInfo?.yourInfo?.email}
            onChange={handleYourInfoChange}
            class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
            placeholder="Email"
          />
        </div>
        <div className="w-[50%] ml-2">
          <h3 className="mb-1 font-bold">Your Gender</h3>
          <select
            class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
            name="gender"
            value={data?.personalInfo?.yourInfo?.gender}
            onChange={handleYourInfoChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
      <div className="mb-2 flex">
        <div className="w-[50%]">
          <h3 className="mb-1 font-bold">State of Residency</h3>
          <select
            class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
            name="stateOfResidency"
            value={data?.personalInfo?.yourInfo?.stateOfResidency}
            onChange={handleYourInfoChange}
          >
            <option value="Arizona">Arizona</option>
            <option value="Alaska">Alaska</option>
            <option value="Louisiana">Louisiana</option>
          </select>
        </div>
        <div className="w-[50%] ml-2">
          <h3 className="mb-1 font-bold">County of Residency</h3>
          <select
            class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
            name="countyOfResidency"
            value={data?.personalInfo?.yourInfo?.countyOfResidency}
            onChange={handleYourInfoChange}
          >
            <option value="King">King</option>
            <option value="Snohomish">Snohomish</option>
            <option value="Pierce">Pierce</option>
          </select>
        </div>
      </div>
      <div className="mb-2 flex">
        <div className="w-[50%]">
          <h3 className="mb-1 font-bold">Country of Citizenship</h3>
          <select
            class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
            name="countryOfCitizenship"
            value={data?.personalInfo?.yourInfo?.countryOfCitizenship}
            onChange={handleYourInfoChange}
          >
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
