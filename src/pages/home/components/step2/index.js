import React from 'react';

const Step2 = ({ step, setStep, data, setData }) => {
  const handlePersonalRepresentativeQ = (i) => {
    setData({
      ...data,
      documentMenu: {
        ...data.documentMenu,
        personalRepresentativeQ: {
          ...data.documentMenu.personalRepresentativeQ,
          options: data.documentMenu.personalRepresentativeQ.options.map(
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
  const handlePersonalRepresentative = (i, name, value) => {
    setData({
      ...data,
      documentMenu: {
        ...data.documentMenu,
        personalRepresentatives: data.documentMenu.personalRepresentatives.map(
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
      documentMenu: {
        ...data.documentMenu,
        personalRepresentatives: [
          ...data.documentMenu.personalRepresentatives,
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
      documentMenu: {
        ...data.documentMenu,
        personalRepresentatives:
          data.documentMenu.personalRepresentatives.filter(
            (item, index) => i !== index
          ),
      },
    });
  };
  return (
    <div className="m-5">
      <h1 className="font-bold text-2xl text-center">POUR-OVER-WILL</h1>
      <p className="text-center mt-3">
        When you have a living trust, your last will and testament serves as a
        safeguard just in case you forget to transfer an asset that you intended
        to be a trust asset but are in a position (incacitated or dead) where
        you can no longer transfer the asset yourself.
      </p>
      <h3 className="font-bold mt-3 text-center">Personal Representatives</h3>
      <p className="mt-3">
        Your Personal representative is the individual who will probate your
        estate upon your death. You can name as many personal representatives as
        you want, each of whom will act in succession if the predecessor cannot
        serve.{' '}
      </p>
      <p className="font-[300] mt-3">[HYPER LINK TO WHAT IS PROBATE]</p>
      <h3 className="font-bold mt-3">
        Do you want the personal representative(s) under your Pour-Over-Will to
        be the same as your successor trustee(s)
      </h3>
      <div class="flex space-x-4">
        <label class="flex items-center">
          <input
            type="radio"
            checked={data.documentMenu.personalRepresentativeQ.options[0].value}
            onChange={() => handlePersonalRepresentativeQ(0)}
            class="form-radio h-5 w-5 text-blue-500"
          />
          <span class="ml-2 text-gray-700">Yes</span>
        </label>
        <label class="flex items-center">
          <input
            type="radio"
            checked={data.documentMenu.personalRepresentativeQ.options[1].value}
            onChange={() => handlePersonalRepresentativeQ(1)}
            class="form-radio h-5 w-5 text-blue-500"
          />
          <span class="ml-2 text-gray-700">No</span>
        </label>
      </div>
      <p className="mt-2">
        Having the same personal representative and trustee makes logical sense
        and is rarely a different person.
      </p>
      <p>
        If you answer "No" and if you name more than one personal
        representative, they will act in the order listed below.
      </p>

      {data.documentMenu.personalRepresentativeQ.options[1].value && (
        <div>
          <h3 className="font-bold mb-3">Charitable Donations</h3>
          {data.documentMenu.personalRepresentatives.map((item, i) => (
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
                <span className="font-bold ml-3">Charity {i + 1}</span>
              </div>
              <h3 className="mb-1 mt-3 font-bold">Name</h3>
              <div className="mb-2 flex">
                <div className="w-[50%] mr-2">
                  <input
                    type="text"
                    name="firstName"
                    value={item?.firstName}
                    onChange={(e) =>
                      handlePersonalRepresentative(
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
                      handlePersonalRepresentative(
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
                      handlePersonalRepresentative(
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
                      handlePersonalRepresentative(
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
          onClick={() => {
            if (step <= 6) {
              setStep((prev) => prev + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
