import React from 'react';

const Step3 = ({ step, setStep, data, setData }) => {
  const handlepreliminaryTrustInfoQ = (i) => {
    setData({
      ...data,
      preliminaryTrustInfo: {
        ...data.preliminaryTrustInfo,
        question: {
          ...data.preliminaryTrustInfo.question,
          options: data.preliminaryTrustInfo.question.options.map(
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
  const handleAttorneyInFactsFields = (i, name, value) => {
    setData({
      ...data,
      preliminaryTrustInfo: {
        ...data.preliminaryTrustInfo,
        attorneyInFacts: data.preliminaryTrustInfo.attorneyInFacts.map(
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
  const addAttorneyInFact = (i) => {
    setData({
      ...data,
      preliminaryTrustInfo: {
        ...data.preliminaryTrustInfo,
        attorneyInFacts: [
          ...data.preliminaryTrustInfo.attorneyInFacts,
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
  const removeAttorneyInFact = (i) => {
    setData({
      ...data,
      preliminaryTrustInfo: {
        ...data.preliminaryTrustInfo,
        attorneyInFacts: data.preliminaryTrustInfo.attorneyInFacts.filter(
          (item, index) => i !== index
        ),
      },
    });
  };
  const validate = () => {
    let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (data.preliminaryTrustInfo.question.options[1].value) {
      for (
        let i = 0;
        i < data.preliminaryTrustInfo.attorneyInFacts.length;
        i++
      ) {
        const element = data.preliminaryTrustInfo.attorneyInFacts[i];
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
        DURABLE POWER OF ATTORNEY
      </h1>
      <p className="text-center mt-3">
        If you become unavailable to make financial decisions for yourself, who
        would you want to make decisions for you with regard to your property.
        Frequently, the primary Agent (called your "attorney-in-fact") is the
        same person as your successor Trustee (the manager for your Trust) and
        your Personal Representative (the manager for your Will).
      </p>
      <h3 className="font-bold mt-5">
        Do you want the attorney(s)-in-fact under your Durable Power of Attorney
        to be the same as your successor trustee(s)
      </h3>
      <div class="flex space-x-4">
        <label class="flex items-center">
          <input
            type="radio"
            checked={data.preliminaryTrustInfo.question.options[0].value}
            onChange={() => handlepreliminaryTrustInfoQ(0)}
            class="form-radio h-5 w-5 text-blue-500"
          />
          <span class="ml-2 text-gray-700">Yes</span>
        </label>
        <label class="flex items-center">
          <input
            type="radio"
            checked={data.preliminaryTrustInfo.question.options[1].value}
            onChange={() => handlepreliminaryTrustInfoQ(1)}
            class="form-radio h-5 w-5 text-blue-500"
          />
          <span class="ml-2 text-gray-700">No</span>
        </label>
      </div>
      <p className="mt-2">
        Having the same attorney-in-fact and trustee makes logical sense and is
        rarely a different person.
      </p>
      {data.preliminaryTrustInfo.question.options[1].value && (
        <div>
          {data.preliminaryTrustInfo.attorneyInFacts.map((item, i) => (
            <div
              key={i}
              className={`${
                i % 2 === 0 ? 'bg-slate-200' : ''
              } p-5 rounded-lg mb-3`}
            >
              <div>
                <i
                  className="far fa-times-circle cursor-pointer"
                  onClick={() => removeAttorneyInFact(i)}
                ></i>
                <span className="font-bold ml-3">Attorney-in-Fact {i + 1}</span>
              </div>
              <h3 className="mb-1 mt-3 font-bold">Name</h3>
              <div className="mb-2 flex">
                <div className="w-[50%] mr-2">
                  <input
                    type="text"
                    name="firstName"
                    value={item?.firstName}
                    onChange={(e) =>
                      handleAttorneyInFactsFields(
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
                      handleAttorneyInFactsFields(
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
                      handleAttorneyInFactsFields(
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
                      handleAttorneyInFactsFields(
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
                      handleAttorneyInFactsFields(
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
              onClick={() => addAttorneyInFact()}
            >
              Add Attorney-in-Fact
            </button>
          </div>
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

export default Step3;
