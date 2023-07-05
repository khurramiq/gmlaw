import React from 'react';

const Step5 = ({ notActionBtns, step, setStep, data, setData }) => {
  const handleSuccessorTrusteesQ = (i) => {
    setData({
      ...data,
      successorTrustees: {
        ...data.successorTrustees,
        question: {
          ...data.successorTrustees.question,
          options: data.successorTrustees.question.options.map(
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
  const handleHIPAAAgentsFields = (i, name, value) => {
    setData({
      ...data,
      successorTrustees: {
        ...data.successorTrustees,
        hIPAAAgents: data.successorTrustees.hIPAAAgents.map((item, index) => {
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
  const addHIPAAAgent = (i) => {
    setData({
      ...data,
      successorTrustees: {
        ...data.successorTrustees,
        hIPAAAgents: [
          ...data.successorTrustees.hIPAAAgents,
          {
            firstName: '',
            lastName: '',
          },
        ],
      },
    });
  };
  const removeHIPAAAgent = (i) => {
    setData({
      ...data,
      successorTrustees: {
        ...data.successorTrustees,
        hIPAAAgents: data.successorTrustees.hIPAAAgents.filter(
          (item, index) => i !== index
        ),
      },
    });
  };
  const validate = () => {
    // let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (data.successorTrustees.question.options[0].value) {
      for (let i = 0; i < data.successorTrustees.hIPAAAgents.length; i++) {
        const element = data.successorTrustees.hIPAAAgents[i];
        if (element.firstName === '' || element.lastName === '') {
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
        HIPAA AUTHORIZATION AND WAIVER
      </h1>
      <p className="text-center mt-3">
        The individuals that you identify in this document (called HIPAA
        Agents), will be able to receive what is otherwise federally protected
        health care information about you. This can be as simple as what your
        prognosis is, or what room you are in at the hospital, etc.
      </p>
      <h3 className="font-bold mt-5">
        Are there individuals that you want to identify as your HIPAA agents?
      </h3>
      <div class="flex space-x-4">
        <label class="flex items-center">
          <input
            type="radio"
            checked={data.successorTrustees.question.options[0].value}
            onChange={() => handleSuccessorTrusteesQ(0)}
            class="form-radio h-5 w-5 text-blue-500"
          />
          <span class="ml-2 text-gray-700">Yes</span>
        </label>
        <label class="flex items-center">
          <input
            type="radio"
            checked={data.successorTrustees.question.options[1].value}
            onChange={() => handleSuccessorTrusteesQ(1)}
            class="form-radio h-5 w-5 text-blue-500"
          />
          <span class="ml-2 text-gray-700">No</span>
        </label>
      </div>
      {data.successorTrustees.question.options[0].value && (
        <div>
          <h3 className="font-bold mt-5 mb-3">HIPAA Agents</h3>
          {data.successorTrustees.hIPAAAgents.map((item, i) => (
            <div
              key={i}
              className={`${
                i % 2 === 0 ? 'bg-slate-200' : ''
              } p-5 rounded-lg mb-3`}
            >
              <div>
                <i
                  className="far fa-times-circle cursor-pointer"
                  onClick={() => removeHIPAAAgent(i)}
                ></i>
                <span className="font-bold ml-3">HIPAA Agent {i + 1}</span>
              </div>
              <h3 className="mb-1 mt-3 font-bold">Name</h3>
              <div className="mb-2 flex">
                <div className="w-[50%] mr-2">
                  <input
                    type="text"
                    name="firstName"
                    value={item?.firstName}
                    onChange={(e) =>
                      handleHIPAAAgentsFields(i, e.target.name, e.target.value)
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
                      handleHIPAAAgentsFields(i, e.target.name, e.target.value)
                    }
                    class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                    placeholder="Last"
                    required
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="mt-2">
            <button
              className="border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded"
              onClick={() => addHIPAAAgent()}
            >
              Add HIPAA Agent
            </button>
          </div>
        </div>
      )}
      {!notActionBtns && (
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
      )}
    </div>
  );
};

export default Step5;
