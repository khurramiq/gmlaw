import { Autocomplete, TextField } from '@mui/material';
import React from 'react';
import stateList from '../../../../data/stateList';

const Step6 = ({ step, setStep, data, setData }) => {
  const handleSpecialDistributionsQ1 = (i) => {
    setData({
      ...data,
      specialDistributions: {
        ...data.specialDistributions,
        question1: {
          ...data.specialDistributions.question1,
          options: data.specialDistributions.question1.options.map(
            (item, index) => {
              if (i === index) {
                return {
                  ...item,
                  value: true,
                };
              } else {
                return {
                  ...item,
                  value: false,
                };
              }
            }
          ),
        },
      },
    });
  };
  const handleSpecialDistributionsQ2 = (i) => {
    setData({
      ...data,
      specialDistributions: {
        ...data.specialDistributions,
        question2: {
          ...data.specialDistributions.question2,
          options: data.specialDistributions.question2.options.map(
            (item, index) => {
              if (i === index) {
                return {
                  ...item,
                  value: true,
                };
              } else {
                return {
                  ...item,
                  value: false,
                };
              }
            }
          ),
        },
      },
    });
  };
  const handleSpecialDistributionsQ3 = (i) => {
    setData({
      ...data,
      specialDistributions: {
        ...data.specialDistributions,
        question3: {
          ...data.specialDistributions.question3,
          options: data.specialDistributions.question3.options.map(
            (item, index) => {
              if (i === index) {
                return {
                  ...item,
                  value: true,
                };
              } else {
                return {
                  ...item,
                  value: false,
                };
              }
            }
          ),
        },
      },
    });
  };
  const handleSpecialDistributionsQ4 = (i) => {
    setData({
      ...data,
      specialDistributions: {
        ...data.specialDistributions,
        question4: {
          ...data.specialDistributions.question4,
          options: data.specialDistributions.question4.options.map(
            (item, index) => {
              if (i === index) {
                return {
                  ...item,
                  value: true,
                };
              } else {
                return {
                  ...item,
                  value: false,
                };
              }
            }
          ),
        },
      },
    });
  };
  const handleGuardianFields = (i, name, value) => {
    setData({
      ...data,
      specialDistributions: {
        ...data.specialDistributions,
        guardians: data.specialDistributions.guardians.map((item, index) => {
          if (i === index) {
            return {
              ...item,
              [name]: value,
            };
          } else {
            return item;
          }
        }),
      },
    });
  };
  const addGuardian = (i) => {
    setData({
      ...data,
      specialDistributions: {
        ...data.specialDistributions,
        guardians: [
          ...data.specialDistributions.guardians,
          {
            firstName: '',
            lastName: '',
            relationship_of_Guardian_to_you: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: {
              label: 'Armed Forces America',
              value: 'Armed Forces America',
            },
            zipCode: '',
            email: '',
            phone: '',
          },
        ],
      },
    });
  };
  const removeGuardian = (i) => {
    setData({
      ...data,
      specialDistributions: {
        ...data.specialDistributions,
        guardians: data.specialDistributions.guardians.filter(
          (item, index) => i !== index
        ),
      },
    });
  };
  const handleCo_GuardianInformationFields = (name, value) => {
    setData({
      ...data,
      specialDistributions: {
        ...data.specialDistributions,
        co_GuardianInformation: {
          ...data.specialDistributions.co_GuardianInformation,
          [name]: value,
        },
      },
    });
  };
  const validate = () => {
    let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (
      data.specialDistributions.question1.options[0].value &&
      data.specialDistributions.question2.options[0].value &&
      data.specialDistributions.question3.options[0].value
    ) {
      for (let i = 0; i < data.specialDistributions.guardians.length; i++) {
        const element = data.specialDistributions.guardians[i];
        if (
          element.firstName === '' ||
          element.lastName === '' ||
          element.relationship_of_Guardian_to_you === '' ||
          element.addressLine1 === '' ||
          element.city === '' ||
          element.zipCode === '' ||
          !regex.test(element.email) ||
          element.phone === ''
        ) {
          return false;
        }
      }
    }
    if (
      data.specialDistributions.question1.options[0].value &&
      data.specialDistributions.question2.options[0].value &&
      data.specialDistributions.question3.options[1].value
    ) {
      if (
        data.specialDistributions.co_GuardianInformation
          ?.co_Guardian_One_First_Name === '' ||
        data.specialDistributions.co_GuardianInformation
          ?.co_Guardian_One_Last_Name === '' ||
        data.specialDistributions.co_GuardianInformation
          ?.relationship_of_co_Guardian_One_to_you === '' ||
        data.specialDistributions.co_GuardianInformation
          ?.co_Guardian_Two_First_Name === '' ||
        data.specialDistributions.co_GuardianInformation
          ?.co_Guardian_Two_Last_Name === '' ||
        data.specialDistributions.co_GuardianInformation
          ?.relationship_of_co_Guardian_Two_to_you === '' ||
        data.specialDistributions.co_GuardianInformation?.addressLine1 === '' ||
        data.specialDistributions.co_GuardianInformation?.city === '' ||
        data.specialDistributions.co_GuardianInformation?.zipCode === '' ||
        !regex.test(data.specialDistributions.co_GuardianInformation?.email) ||
        data.specialDistributions.co_GuardianInformation?.phone === ''
      ) {
        return false;
      }
    }
    return true;
  };
  const handleNext = () => {
    if (validate()) {
      if (step <= 7) {
        setStep((prev) => prev + 1);
      }
    }
  };
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
            checked={data.specialDistributions.question1.options[0].value}
            onChange={() => handleSpecialDistributionsQ1(0)}
            class="form-radio h-5 w-5 text-blue-500"
          />
          <span class="ml-2 text-gray-700">Yes</span>
        </label>
        <label class="flex items-center">
          <input
            type="radio"
            checked={data.specialDistributions.question1.options[1].value}
            onChange={() => handleSpecialDistributionsQ1(1)}
            class="form-radio h-5 w-5 text-blue-500"
          />
          <span class="ml-2 text-gray-700">No</span>
        </label>
      </div>
      {data.specialDistributions.question1.options[0].value && (
        <div>
          <h1 className="text-xl mt-5 font-bold text-center">
            If you have any children under the age of 18 you should name a
            guardian (or co-Guardians) to take care of them if you cannot.
            Failure to make arrangements in this regard will leave the decision
            up to the government.
          </h1>
          <h3 className="font-bold mt-5">
            Do you want to name a guardian for your minor child or minor
            children?
          </h3>
          <div class="flex space-x-4">
            <label class="flex items-center">
              <input
                type="radio"
                checked={data.specialDistributions.question2.options[0].value}
                onChange={() => handleSpecialDistributionsQ2(0)}
                class="form-radio h-5 w-5 text-blue-500"
              />
              <span class="ml-2 text-gray-700">Yes</span>
            </label>
            <label class="flex items-center">
              <input
                type="radio"
                checked={data.specialDistributions.question2.options[1].value}
                onChange={() => handleSpecialDistributionsQ2(1)}
                class="form-radio h-5 w-5 text-blue-500"
              />
              <span class="ml-2 text-gray-700">No</span>
            </label>
          </div>
          {data.specialDistributions.question2.options[0].value && (
            <div>
              <h3 className="font-bold mt-5">
                Do you want to nominate an individual or a couple as Guardian of
                your minor child or children?
              </h3>
              <div class="flex space-x-4">
                <label class="flex items-center">
                  <input
                    type="radio"
                    checked={
                      data.specialDistributions.question3.options[0].value
                    }
                    onChange={() => handleSpecialDistributionsQ3(0)}
                    class="form-radio h-5 w-5 text-blue-500"
                  />
                  <span class="ml-2 text-gray-700">Individual</span>
                </label>
                <label class="flex items-center">
                  <input
                    type="radio"
                    checked={
                      data.specialDistributions.question3.options[1].value
                    }
                    onChange={() => handleSpecialDistributionsQ3(1)}
                    class="form-radio h-5 w-5 text-blue-500"
                  />
                  <span class="ml-2 text-gray-700">Couple</span>
                </label>
              </div>
              {data.specialDistributions.question3.options[0].value && (
                <div>
                  <h1 className="text-xl text-center font-bold mt-5">
                    SINGLE GUARDIANS
                  </h1>
                  <p className="mt-3 mb-5">
                    Name as many guardians as you want. Each one named will act
                    in succession if the prior guardian cannot or will not
                    serve.
                  </p>
                  <div>
                    {data.specialDistributions.guardians.map((item, i) => (
                      <div
                        key={i}
                        className={`${
                          i % 2 === 0 ? 'bg-slate-200' : ''
                        } p-5 rounded-lg mb-3`}
                      >
                        <div>
                          <i
                            className="far fa-times-circle cursor-pointer"
                            onClick={() => removeGuardian(i)}
                          ></i>
                          <span className="font-bold ml-3">
                            Guardian {i + 1}
                          </span>
                        </div>
                        <h3 className="mb-1 mt-3 font-bold">Name</h3>
                        <div className="mb-2 flex">
                          <div className="w-[50%] mr-2">
                            <input
                              type="text"
                              name="firstName"
                              value={item?.firstName}
                              onChange={(e) =>
                                handleGuardianFields(
                                  i,
                                  e.target.name,
                                  e.target.value
                                )
                              }
                              class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                              placeholder="First"
                              required
                            />
                          </div>
                          <div className="w-[50%]">
                            <input
                              type="text"
                              name="lastName"
                              value={item?.lastName}
                              onChange={(e) =>
                                handleGuardianFields(
                                  i,
                                  e.target.name,
                                  e.target.value
                                )
                              }
                              class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                              placeholder="Last"
                              required
                            />
                          </div>
                        </div>
                        <h3 className="mb-1 mt-3 font-bold">
                          Relationship of Guardian to you
                        </h3>
                        <div className="mb-2">
                          <div className="w-full">
                            <input
                              type="text"
                              name="relationship_of_Guardian_to_you"
                              value={item?.relationship_of_Guardian_to_you}
                              onChange={(e) =>
                                handleGuardianFields(
                                  i,
                                  e.target.name,
                                  e.target.value
                                )
                              }
                              class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                              required
                            />
                          </div>
                        </div>
                        <h3 className="mb-1 mt-3 font-bold">
                          Guardian's Address
                        </h3>
                        <div className="mb-2">
                          <div className="w-full">
                            <input
                              type="text"
                              name="addressLine1"
                              value={item?.addressLine1}
                              onChange={(e) =>
                                handleGuardianFields(
                                  i,
                                  e.target.name,
                                  e.target.value
                                )
                              }
                              class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                              placeholder="Address Line 1"
                              required
                            />
                          </div>
                        </div>
                        <div className="mb-2">
                          <div className="w-full">
                            <input
                              type="text"
                              name="addressLine2"
                              value={item?.addressLine2}
                              onChange={(e) =>
                                handleGuardianFields(
                                  i,
                                  e.target.name,
                                  e.target.value
                                )
                              }
                              class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                              placeholder="Address Line 2"
                            />
                          </div>
                        </div>
                        <div className="mb-2 flex">
                          <input
                            type="text"
                            name="city"
                            value={item?.city}
                            onChange={(e) =>
                              handleGuardianFields(
                                i,
                                e.target.name,
                                e.target.value
                              )
                            }
                            class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
                            placeholder="City"
                            required
                          />
                          <div className="w-[33%] mr-2">
                            <Autocomplete
                              fullWidth
                              options={stateList}
                              value={item?.state}
                              getOptionLabel={(option) => option.label}
                              onChange={(_, value) =>
                                handleGuardianFields(i, 'state', value)
                              }
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
                            value={item?.zipCode}
                            onChange={(e) =>
                              handleGuardianFields(
                                i,
                                e.target.name,
                                e.target.value
                              )
                            }
                            class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-[33%]"
                            placeholder="Zip Code"
                            required
                          />
                        </div>
                        <div className="mb-2 flex">
                          <div className="w-[50%] mr-2">
                            <h3 className="mb-1 font-bold">Email</h3>
                            <input
                              type="email"
                              name="email"
                              value={item?.email}
                              onChange={(e) =>
                                handleGuardianFields(
                                  i,
                                  e.target.name,
                                  e.target.value
                                )
                              }
                              class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                              required
                            />
                          </div>
                          <div className="w-[50%]">
                            <h3 className="mb-1 font-bold">Phone</h3>
                            <input
                              type="text"
                              name="phone"
                              value={item?.phone}
                              onChange={(e) =>
                                handleGuardianFields(
                                  i,
                                  e.target.name,
                                  e.target.value
                                )
                              }
                              class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="mt-2">
                      <button
                        className="border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded"
                        onClick={() => addGuardian()}
                      >
                        Add Guardian
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {data.specialDistributions.question3.options[1].value && (
                <div>
                  <h3 className="font-bold mt-5">Co-Guardian Informations</h3>
                  <h3 className="mb-1 mt-3 font-bold">Co Guardian One</h3>
                  <div className="mb-2 flex">
                    <div className="w-[50%] mr-2">
                      <input
                        type="text"
                        name="co_Guardian_One_First_Name"
                        value={
                          data.specialDistributions.co_GuardianInformation
                            ?.co_Guardian_One_First_Name
                        }
                        onChange={(e) =>
                          handleCo_GuardianInformationFields(
                            e.target.name,
                            e.target.value
                          )
                        }
                        class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                        placeholder="First"
                        required
                      />
                    </div>
                    <div className="w-[50%]">
                      <input
                        type="text"
                        name="co_Guardian_One_Last_Name"
                        value={
                          data.specialDistributions.co_GuardianInformation
                            ?.co_Guardian_One_Last_Name
                        }
                        onChange={(e) =>
                          handleCo_GuardianInformationFields(
                            e.target.name,
                            e.target.value
                          )
                        }
                        class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                        placeholder="Last"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <h3 className="mb-1 font-bold">
                      Relationship of co-Guardian One to you
                    </h3>
                    <div className="w-full">
                      <input
                        type="text"
                        name="relationship_of_co_Guardian_One_to_you"
                        value={
                          data.specialDistributions.co_GuardianInformation
                            ?.relationship_of_co_Guardian_One_to_you
                        }
                        onChange={(e) =>
                          handleCo_GuardianInformationFields(
                            e.target.name,
                            e.target.value
                          )
                        }
                        class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                        required
                      />
                    </div>
                  </div>
                  <h3 className="mb-1 mt-3 font-bold">Co-Guardian Two</h3>
                  <div className="mb-2 flex">
                    <div className="w-[50%] mr-2">
                      <input
                        type="text"
                        name="co_Guardian_Two_First_Name"
                        value={
                          data.specialDistributions.co_GuardianInformation
                            ?.co_Guardian_Two_First_Name
                        }
                        onChange={(e) =>
                          handleCo_GuardianInformationFields(
                            e.target.name,
                            e.target.value
                          )
                        }
                        class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                        placeholder="First"
                        required
                      />
                    </div>
                    <div className="w-[50%]">
                      <input
                        type="text"
                        name="co_Guardian_Two_Last_Name"
                        value={
                          data.specialDistributions.co_GuardianInformation
                            ?.co_Guardian_Two_Last_Name
                        }
                        onChange={(e) =>
                          handleCo_GuardianInformationFields(
                            e.target.name,
                            e.target.value
                          )
                        }
                        class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                        placeholder="Last"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <h3 className="mb-1 font-bold">
                      Relationship of co-Guardian Two to you
                    </h3>
                    <div className="w-full">
                      <input
                        type="text"
                        name="relationship_of_co_Guardian_Two_to_you"
                        value={
                          data.specialDistributions.co_GuardianInformation
                            ?.relationship_of_co_Guardian_Two_to_you
                        }
                        onChange={(e) =>
                          handleCo_GuardianInformationFields(
                            e.target.name,
                            e.target.value
                          )
                        }
                        class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                        required
                      />
                    </div>
                  </div>
                  <h3 className="mb-1 mt-3 font-bold">Co Guardian's Address</h3>
                  <div className="mb-2">
                    <div className="w-full">
                      <input
                        type="text"
                        name="addressLine1"
                        value={
                          data.specialDistributions.co_GuardianInformation
                            ?.addressLine1
                        }
                        onChange={(e) =>
                          handleCo_GuardianInformationFields(
                            e.target.name,
                            e.target.value
                          )
                        }
                        class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                        placeholder="Address Line 1"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="w-full">
                      <input
                        type="text"
                        name="addressLine2"
                        value={
                          data.specialDistributions.co_GuardianInformation
                            ?.addressLine2
                        }
                        onChange={(e) =>
                          handleCo_GuardianInformationFields(
                            e.target.name,
                            e.target.value
                          )
                        }
                        class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                        placeholder="Address Line 2"
                      />
                    </div>
                  </div>
                  <div className="mb-2 flex">
                    <input
                      type="text"
                      name="city"
                      value={
                        data.specialDistributions.co_GuardianInformation?.city
                      }
                      onChange={(e) =>
                        handleCo_GuardianInformationFields(
                          e.target.name,
                          e.target.value
                        )
                      }
                      class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
                      placeholder="City"
                      required
                    />
                    <div className="w-[33%] mr-2">
                      <Autocomplete
                        fullWidth
                        options={stateList}
                        value={
                          data.specialDistributions.co_GuardianInformation
                            ?.state
                        }
                        getOptionLabel={(option) => option.label}
                        onChange={(_, value) =>
                          handleCo_GuardianInformationFields('state', value)
                        }
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
                      value={
                        data.specialDistributions.co_GuardianInformation
                          ?.zipCode
                      }
                      onChange={(e) =>
                        handleCo_GuardianInformationFields(
                          e.target.name,
                          e.target.value
                        )
                      }
                      class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-[33%]"
                      placeholder="Zip Code"
                      required
                    />
                  </div>
                  <div className="mb-2 flex">
                    <div className="w-[50%] mr-2">
                      <h3 className="mb-1 font-bold">Email</h3>
                      <input
                        type="email"
                        name="email"
                        value={
                          data.specialDistributions.co_GuardianInformation
                            ?.email
                        }
                        onChange={(e) =>
                          handleCo_GuardianInformationFields(
                            e.target.name,
                            e.target.value
                          )
                        }
                        class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                        required
                      />
                    </div>
                    <div className="w-[50%]">
                      <h3 className="mb-1 font-bold">Phone</h3>
                      <input
                        type="text"
                        name="phone"
                        value={
                          data.specialDistributions.co_GuardianInformation
                            ?.phone
                        }
                        onChange={(e) =>
                          handleCo_GuardianInformationFields(
                            e.target.name,
                            e.target.value
                          )
                        }
                        class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                        required
                      />
                    </div>
                  </div>
                  <h3 className="font-bold mt-5">
                    Which co Guardian has priority should the couple divorce or
                    otherwise split up?
                  </h3>
                  <div class="flex space-x-4">
                    <label class="flex items-center">
                      <input
                        type="radio"
                        checked={
                          data.specialDistributions.question4.options[0].value
                        }
                        onChange={() => handleSpecialDistributionsQ4(0)}
                        class="form-radio h-5 w-5 text-blue-500"
                      />
                      <span class="ml-2 text-gray-700">Co Guardian One</span>
                    </label>
                    <label class="flex items-center">
                      <input
                        type="radio"
                        checked={
                          data.specialDistributions.question4.options[1].value
                        }
                        onChange={() => handleSpecialDistributionsQ4(1)}
                        class="form-radio h-5 w-5 text-blue-500"
                      />
                      <span class="ml-2 text-gray-700">Co Guardian Two</span>
                    </label>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
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
          onClick={() => handleNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step6;
