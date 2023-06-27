import React from 'react';

const Step4 = ({ step, setStep, data, setData }) => {
  const handleHealthCareAgentFields = (i, name, value) => {
    setData({
      ...data,
      familyInfo: {
        ...data.familyInfo,
        healthCareAgents: data.familyInfo.healthCareAgents.map(
          (item, index) => {
            if (i === index) {
              return {
                ...item,
                [name]: value,
              };
            } else {
              return item;
            }
          }
        ),
      },
    });
  };
  const addHealthCareAgent = (i) => {
    setData({
      ...data,
      familyInfo: {
        ...data.familyInfo,
        healthCareAgents: [
          ...data.familyInfo.healthCareAgents,
          {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            relationship: '',
          },
        ],
      },
    });
  };
  const removeHealthCareAgent = (i) => {
    setData({
      ...data,
      familyInfo: {
        ...data.familyInfo,
        healthCareAgents: data.familyInfo.healthCareAgents.filter(
          (item, index) => i !== index
        ),
      },
    });
  };
  const validate = () => {
    let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (data.familyInfo.healthCareAgents.length > 0) {
      for (let i = 0; i < data.familyInfo.healthCareAgents.length; i++) {
        const element = data.familyInfo.healthCareAgents[i];
        if (
          element.firstName === '' ||
          element.lastName === '' ||
          !regex.test(element.email) ||
          element.phone === '' ||
          element.relationship === ''
        ) {
          return false;
        }
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
      <div>
        {data.familyInfo.healthCareAgents.map((item, i) => (
          <div
            key={i}
            className={`${
              i % 2 === 0 ? 'bg-slate-200' : ''
            } p-5 rounded-lg mb-3`}
          >
            <div>
              <i
                className="far fa-times-circle cursor-pointer"
                onClick={() => removeHealthCareAgent(i)}
              ></i>
              <span className="font-bold ml-3">Health Care Agent {i + 1}</span>
            </div>
            <h3 className="mb-1 mt-3 font-bold">Name</h3>
            <div className="mb-2 flex">
              <div className="w-[50%] mr-2">
                <input
                  type="text"
                  name="firstName"
                  value={item?.firstName}
                  onChange={(e) =>
                    handleHealthCareAgentFields(
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
                    handleHealthCareAgentFields(
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
            <div className="mb-2 flex">
              <div className="w-[50%] mr-2">
                <h3 className="mb-1 font-bold">Email</h3>
                <input
                  type="email"
                  name="email"
                  value={item?.email}
                  onChange={(e) =>
                    handleHealthCareAgentFields(
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
                    handleHealthCareAgentFields(
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
            <div className="mb-2 flex">
              <div className="w-[50%] mr-2">
                <h3 className="mb-1 font-bold">Relationship</h3>
                <input
                  type="text"
                  name="relationship"
                  value={item?.relationship}
                  onChange={(e) =>
                    handleHealthCareAgentFields(
                      i,
                      e.target.name,
                      e.target.value
                    )
                  }
                  class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
                  required
                />
              </div>
            </div>
          </div>
        ))}
        <div className="mt-2">
          <button
            className="border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded"
            onClick={() => addHealthCareAgent()}
          >
            Add Health Care Agent
          </button>
        </div>
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
          onClick={() => handleNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step4;
