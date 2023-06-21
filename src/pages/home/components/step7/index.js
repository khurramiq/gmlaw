import React from 'react';

const Step7 = ({ step, setStep, data, setData }) => {
  const handlePersonalRepresentatives = (i, name, value) => {
    setData({
      ...data,
      remainingDistributions: {
        ...data.remainingDistributions,
        personalRepresentatives:
          data.remainingDistributions.personalRepresentatives.map(
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
  const addPersonalRepresentative = (i) => {
    setData({
      ...data,
      remainingDistributions: {
        ...data.remainingDistributions,
        personalRepresentatives: [
          ...data.remainingDistributions.personalRepresentatives,
          {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
          },
        ],
      },
    });
  };
  const removePersonalRepresentative = (i) => {
    setData({
      ...data,
      remainingDistributions: {
        ...data.remainingDistributions,
        personalRepresentatives:
          data.remainingDistributions.personalRepresentatives.filter(
            (item, index) => i !== index
          ),
      },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('data', data);
  };
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
      <div>
        {data.remainingDistributions.personalRepresentatives.map((item, i) => (
          <div
            key={i}
            className={`${
              i % 2 === 0 ? 'bg-slate-200' : ''
            } p-5 rounded-lg mb-3`}
          >
            <div>
              <i
                className="far fa-times-circle cursor-pointer"
                onClick={() => removePersonalRepresentative(i)}
              ></i>
              <span className="font-bold ml-3">
                Personal Representative {i + 1}
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
                    handlePersonalRepresentatives(
                      i,
                      e.target.name,
                      e.target.value
                    )
                  }
                  class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                  placeholder="First"
                />
              </div>
              <div className="w-[50%]">
                <input
                  type="text"
                  name="lastName"
                  value={item?.lastName}
                  onChange={(e) =>
                    handlePersonalRepresentatives(
                      i,
                      e.target.name,
                      e.target.value
                    )
                  }
                  class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                  placeholder="Last"
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
                    handlePersonalRepresentatives(
                      i,
                      e.target.name,
                      e.target.value
                    )
                  }
                  class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                  placeholder="First"
                />
              </div>
              <div className="w-[50%]">
                <h3 className="mb-1 font-bold">Phone</h3>
                <input
                  type="text"
                  name="phone"
                  value={item?.phone}
                  onChange={(e) =>
                    handlePersonalRepresentatives(
                      i,
                      e.target.name,
                      e.target.value
                    )
                  }
                  class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                  placeholder="Last"
                />
              </div>
            </div>
          </div>
        ))}
        <div className="mt-2">
          <button
            className="border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded"
            onClick={() => addPersonalRepresentative()}
          >
            Add Personal Representative
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
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step7;
