import React from 'react';

const Step3 = ({ data, setData, activeStep, setStep, setActiveStep }) => {
  const specialIrrevocableTrusts = (i) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        specialIrrevocableTrusts: {
          ...data.personalInfo.specialIrrevocableTrusts,
          options: data.personalInfo.specialIrrevocableTrusts.options.map(
            (item, index) => {
              if (index === i) {
                return {
                  label: item.label,
                  value: !item.value,
                };
              } else {
                return item;
              }
            }
          ),
        },
      },
    });
  };
  const trustTransferDocuments = (i) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        trustTransferDocuments: {
          ...data.personalInfo.trustTransferDocuments,
          options: data.personalInfo.trustTransferDocuments.options.map(
            (item, index) => {
              if (index === i) {
                return {
                  label: item.label,
                  value: !item.value,
                };
              } else {
                return item;
              }
            }
          ),
        },
      },
    });
  };
  const handleNext = () => {
    if (activeStep === 3) {
      setStep((prev) => prev + 1);
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };
  return (
    <div>
      <h3 className="mb-1 font-bold">
        {/* SPECIAL IRREVOCABLE TRUSTS */}
        {data.personalInfo.specialIrrevocableTrusts.question}
      </h3>
      <div className="space-y-4">
        <div className="flex">
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.specialIrrevocableTrusts.options[0].value
              }
              onChange={() => specialIrrevocableTrusts(0)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {data.personalInfo.specialIrrevocableTrusts.options[0].label}
            </span>
          </label>
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.specialIrrevocableTrusts.options[1].value
              }
              onChange={() => specialIrrevocableTrusts(1)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {data.personalInfo.specialIrrevocableTrusts.options[1].label}
            </span>
          </label>
        </div>
        <div className="flex">
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.specialIrrevocableTrusts.options[2].value
              }
              onChange={() => specialIrrevocableTrusts(2)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {data.personalInfo.specialIrrevocableTrusts.options[2].label}
            </span>
          </label>
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.specialIrrevocableTrusts.options[3].value
              }
              onChange={() => specialIrrevocableTrusts(3)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {data.personalInfo.specialIrrevocableTrusts.options[3].label}
            </span>
          </label>
        </div>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={
              data.personalInfo.specialIrrevocableTrusts.options[4].value
            }
            onChange={() => specialIrrevocableTrusts(4)}
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <span className="ml-2 text-gray-700">
            {data.personalInfo.specialIrrevocableTrusts.options[4].label}
          </span>
        </label>
      </div>
      <h3 className="mb-1 mt-2 font-bold">
        {/* TRUST TRANSFER DOCUMENTS */}
        {data.personalInfo.trustTransferDocuments.question}
      </h3>
      <div className="space-y-4">
        <div className="flex">
          <label className="flex items-center w-[33%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.trustTransferDocuments.options[0].value
              }
              onChange={() => trustTransferDocuments(0)}
              className="form-checkbox h-5 w-[30px] text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {data.personalInfo.trustTransferDocuments.options[0].label}
            </span>
          </label>
          <label className="flex items-center w-[33%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.trustTransferDocuments.options[1].value
              }
              onChange={() => trustTransferDocuments(1)}
              className="form-checkbox h-5 w-[30px] text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {data.personalInfo.trustTransferDocuments.options[1].label}
            </span>
          </label>
          <label className="flex items-center w-[33%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.trustTransferDocuments.options[2].value
              }
              onChange={() => trustTransferDocuments(2)}
              className="form-checkbox h-5 w-[30px] text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {data.personalInfo.trustTransferDocuments.options[2].label}
            </span>
          </label>
        </div>
        <div className="flex">
          <label className="flex items-center w-[33%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.trustTransferDocuments.options[3].value
              }
              onChange={() => trustTransferDocuments(3)}
              className="form-checkbox h-5 w-[30px] text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {data.personalInfo.trustTransferDocuments.options[3].label}
            </span>
          </label>
          <label className="flex items-center w-[33%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.trustTransferDocuments.options[4].value
              }
              onChange={() => trustTransferDocuments(4)}
              className="form-checkbox h-5 w-[30px] text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {data.personalInfo.trustTransferDocuments.options[4].label}
            </span>
          </label>
          <label className="flex items-center w-[33%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.trustTransferDocuments.options[5].value
              }
              onChange={() => trustTransferDocuments(5)}
              className="form-checkbox h-5 w-[30px] text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {data.personalInfo.trustTransferDocuments.options[5].label}
            </span>
          </label>
        </div>
        <div className="flex">
          <label className="flex items-center w-[33%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.trustTransferDocuments.options[6].value
              }
              onChange={() => trustTransferDocuments(6)}
              className="form-checkbox h-5 w-[30px] text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {data.personalInfo.trustTransferDocuments.options[6].label}
            </span>
          </label>
          <label className="flex items-center w-[33%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.trustTransferDocuments.options[7].value
              }
              onChange={() => trustTransferDocuments(7)}
              className="form-checkbox h-5 w-[30px] text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {data.personalInfo.trustTransferDocuments.options[7].label}
            </span>
          </label>
          <label className="flex items-center w-[33%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.trustTransferDocuments.options[8].value
              }
              onChange={() => trustTransferDocuments(8)}
              className="form-checkbox h-5 w-[30px] text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {data.personalInfo.trustTransferDocuments.options[8].label}
            </span>
          </label>
        </div>
        <div className="flex">
          <label className="flex items-center w-[33%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.trustTransferDocuments.options[9].value
              }
              onChange={() => trustTransferDocuments(9)}
              className="form-checkbox h-5 w-[30px] text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {data.personalInfo.trustTransferDocuments.options[9].label}
            </span>
          </label>
          <label className="flex items-center w-[33%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.trustTransferDocuments.options[10].value
              }
              onChange={() => trustTransferDocuments(10)}
              className="form-checkbox h-5 w-[30px] text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {data.personalInfo.trustTransferDocuments.options[10].label}
            </span>
          </label>
          <label className="flex items-center w-[33%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.trustTransferDocuments.options[11].value
              }
              onChange={() => trustTransferDocuments(11)}
              className="form-checkbox h-5 w-[30px] text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {data.personalInfo.trustTransferDocuments.options[11].label}
            </span>
          </label>
        </div>
        <div className="flex">
          <label className="flex items-center w-[33%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.trustTransferDocuments.options[12].value
              }
              onChange={() => trustTransferDocuments(12)}
              className="form-checkbox h-5 w-[30px] text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {data.personalInfo.trustTransferDocuments.options[12].label}
            </span>
          </label>
          <label className="flex items-center w-[33%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.trustTransferDocuments.options[13].value
              }
              onChange={() => trustTransferDocuments(13)}
              className="form-checkbox h-5 w-[30px] text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {data.personalInfo.trustTransferDocuments.options[13].label}
            </span>
          </label>
          <label className="flex items-center w-[33%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.trustTransferDocuments.options[14].value
              }
              onChange={() => trustTransferDocuments(14)}
              className="form-checkbox h-5 w-[35px] text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {data.personalInfo.trustTransferDocuments.options[14].label}
            </span>
          </label>
        </div>
        <div className="flex">
          <label className="flex items-center w-[33%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.trustTransferDocuments.options[15].value
              }
              onChange={() => trustTransferDocuments(15)}
              className="form-checkbox h-5 w-[30px] text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {data.personalInfo.trustTransferDocuments.options[15].label}
            </span>
          </label>
          <label className="flex items-center w-[33%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.trustTransferDocuments.options[16].value
              }
              onChange={() => trustTransferDocuments(16)}
              className="form-checkbox h-5 w-[30px] text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {data.personalInfo.trustTransferDocuments.options[16].label}
            </span>
          </label>
          <label className="flex items-center w-[33%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.trustTransferDocuments.options[17].value
              }
              onChange={() => trustTransferDocuments(17)}
              className="form-checkbox h-5 w-[30px] text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {data.personalInfo.trustTransferDocuments.options[17].label}
            </span>
          </label>
        </div>
        <div className="flex">
          <label className="flex items-center w-[33%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.trustTransferDocuments.options[18].value
              }
              onChange={() => trustTransferDocuments(18)}
              className="form-checkbox h-5 w-[30px] text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {data.personalInfo.trustTransferDocuments.options[18].label}
            </span>
          </label>
          <label className="flex items-center w-[33%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.trustTransferDocuments.options[19].value
              }
              onChange={() => trustTransferDocuments(19)}
              className="form-checkbox h-5 w-[30px] text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {data.personalInfo.trustTransferDocuments.options[19].label}
            </span>
          </label>
        </div>
        <p>
          Documents needed to transfer title of property you own to your Trust.{' '}
        </p>
      </div>
      <div className="flex justify-end">
        <button
          class={`bg-[#CCCCCC] text-white font-bold py-2 px-4 rounded disabled`}
          disabled={activeStep === 0}
          onClick={() => setActiveStep((prev) => prev - 1)}
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
