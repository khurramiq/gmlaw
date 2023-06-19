import React from 'react';

const Step2 = ({ data, setData }) => {
  const estatePlanningPackages = (i) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        estatePlanningPackages: {
          ...data.personalInfo.estatePlanningPackages,
          options: data.personalInfo.estatePlanningPackages.options.map(
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
  const individualEstatePlanningDocuments = (i) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        individualEstatePlanningDocuments: {
          ...data.personalInfo.individualEstatePlanningDocuments,
          options:
            data.personalInfo.individualEstatePlanningDocuments.options.map(
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
  return (
    <div>
      <h1 className="mb-3 font-bold">
        FROM THE LIST BELOW, SELECT THE DOCMENT(S) OR THE PACKAGE THAT BEST FITS
        YOUR NEEDS.
      </h1>
      <p className="mb-3">
        {' '}
        The package or documents selected will dictate the questions that
        follow.{' '}
      </p>
      <h3 className="mb-1 font-bold">
        {/* ESTATE PLANNING PACKAGES (insert prices for each set of documents) */}
        {data.personalInfo.estatePlanningPackages.question}
      </h3>
      <div className="space-y-4">
        <div className="flex">
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.estatePlanningPackages.options[0].value
              }
              onChange={() => estatePlanningPackages(0)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {data.personalInfo.estatePlanningPackages.options[0].label}
            </span>
          </label>
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.estatePlanningPackages.options[1].value
              }
              onChange={() => estatePlanningPackages(1)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {data.personalInfo.estatePlanningPackages.options[1].label}
            </span>
          </label>
        </div>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={data.personalInfo.estatePlanningPackages.options[2].value}
            onChange={() => estatePlanningPackages(2)}
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <span className="ml-2 text-gray-700">
            {data.personalInfo.estatePlanningPackages.options[2].label}
          </span>
        </label>
      </div>
      <p>Only select one. The package will determine the documents created.</p>
      <h3 className="mb-1 font-bold">
        {/* INDIVIDUAL ESTATE PLANNING DOCUMENTS */}
        {data.personalInfo.individualEstatePlanningDocuments.question}
      </h3>
      <div className="space-y-4">
        <div className="flex">
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.individualEstatePlanningDocuments.options[0]
                  .value
              }
              onChange={() => individualEstatePlanningDocuments(0)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {
                data.personalInfo.individualEstatePlanningDocuments.options[0]
                  .label
              }
            </span>
          </label>
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.individualEstatePlanningDocuments.options[1]
                  .value
              }
              onChange={() => individualEstatePlanningDocuments(1)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {
                data.personalInfo.individualEstatePlanningDocuments.options[1]
                  .label
              }
            </span>
          </label>
        </div>
        <div className="flex">
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.individualEstatePlanningDocuments.options[2]
                  .value
              }
              onChange={() => individualEstatePlanningDocuments(2)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {
                data.personalInfo.individualEstatePlanningDocuments.options[2]
                  .label
              }
            </span>
          </label>
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.individualEstatePlanningDocuments.options[3]
                  .value
              }
              onChange={() => individualEstatePlanningDocuments(3)}
              className="form-checkbox h-5 w-[30px] text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {
                data.personalInfo.individualEstatePlanningDocuments.options[3]
                  .label
              }
            </span>
          </label>
        </div>
        <div className="flex">
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.individualEstatePlanningDocuments.options[4]
                  .value
              }
              onChange={() => individualEstatePlanningDocuments(4)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {
                data.personalInfo.individualEstatePlanningDocuments.options[4]
                  .label
              }
            </span>
          </label>
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.individualEstatePlanningDocuments.options[5]
                  .value
              }
              onChange={() => individualEstatePlanningDocuments(5)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {
                data.personalInfo.individualEstatePlanningDocuments.options[5]
                  .label
              }
            </span>
          </label>
        </div>
        <div className="flex">
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.individualEstatePlanningDocuments.options[6]
                  .value
              }
              onChange={() => individualEstatePlanningDocuments(6)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {
                data.personalInfo.individualEstatePlanningDocuments.options[6]
                  .label
              }
            </span>
          </label>
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.individualEstatePlanningDocuments.options[7]
                  .value
              }
              onChange={() => individualEstatePlanningDocuments(7)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {
                data.personalInfo.individualEstatePlanningDocuments.options[7]
                  .label
              }
            </span>
          </label>
        </div>
        <div className="flex">
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.individualEstatePlanningDocuments.options[8]
                  .value
              }
              onChange={() => individualEstatePlanningDocuments(8)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {
                data.personalInfo.individualEstatePlanningDocuments.options[8]
                  .label
              }
            </span>
          </label>
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.individualEstatePlanningDocuments.options[9]
                  .value
              }
              onChange={() => individualEstatePlanningDocuments(9)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {
                data.personalInfo.individualEstatePlanningDocuments.options[9]
                  .label
              }
            </span>
          </label>
        </div>
        <div className="flex">
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.individualEstatePlanningDocuments.options[10]
                  .value
              }
              onChange={() => individualEstatePlanningDocuments(10)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {
                data.personalInfo.individualEstatePlanningDocuments.options[10]
                  .label
              }
            </span>
          </label>
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.individualEstatePlanningDocuments.options[11]
                  .value
              }
              onChange={() => individualEstatePlanningDocuments(11)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {
                data.personalInfo.individualEstatePlanningDocuments.options[11]
                  .label
              }
            </span>
          </label>
        </div>
        <div className="flex">
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.individualEstatePlanningDocuments.options[12]
                  .value
              }
              onChange={() => individualEstatePlanningDocuments(12)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {
                data.personalInfo.individualEstatePlanningDocuments.options[12]
                  .label
              }
            </span>
          </label>
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.individualEstatePlanningDocuments.options[13]
                  .value
              }
              onChange={() => individualEstatePlanningDocuments(13)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {
                data.personalInfo.individualEstatePlanningDocuments.options[13]
                  .label
              }
            </span>
          </label>
        </div>
        <div className="flex">
          <label className="flex items-center w-[50%]">
            <input
              type="checkbox"
              checked={
                data.personalInfo.individualEstatePlanningDocuments.options[14]
                  .value
              }
              onChange={() => individualEstatePlanningDocuments(14)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-700">
              {
                data.personalInfo.individualEstatePlanningDocuments.options[14]
                  .label
              }
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Step2;
