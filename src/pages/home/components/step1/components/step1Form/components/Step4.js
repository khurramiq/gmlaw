import React from 'react';

const Step4 = ({ data, setData, activeStep, setStep, setActiveStep }) => {
  const creatingTrustType = (i) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        creatingTrustType: {
          ...data.personalInfo.creatingTrustType,
          options: data.personalInfo.creatingTrustType.options.map(
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
  const initialTrustee = (i) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        initialTrustee: {
          ...data.personalInfo.initialTrustee,
          options: data.personalInfo.initialTrustee.options.map(
            (item, index) => {
              if (index === i) {
                return {
                  label: item.label,
                  value: true,
                };
              } else {
                return {
                  label: item.label,
                  value: false,
                };
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
      <h1 className="mb-1 font-bold text-center">LIVING TRUST PACKAGE</h1>
      <p>This set of documents includes the following:</p>
      <ul className="list-disc list-inside">
        <li>Living Trust Agreement;</li>
        <li>Certification of Trust;</li>
        <li>Assignment (transfer) of Personal Property to your Trust;</li>
        <li>Last Will and Testament;</li>
        <li>Durable Power of Attorney for finances;</li>
        <li>
          Health Care Power of Attorney and Living Will (sometimes called an
          Advance Health Care Directive); and
        </li>
        <li>HIPAA Confidentiality Waiver;</li>
      </ul>
      <h1 className="mb-1 font-bold text-center">DRAFTING YOUR DOCUMENTS</h1>
      <h1 className="mb-1 font-bold text-center">
        THERE ARE _____ SECTIONS, EACH CONTAINING A NUMBER OF QUESTIONS.
      </h1>
      <h1 className="mb-1 font-bold text-center">
        Anwer the questions accurately and completely and you will have a a well
        crafted document.
      </h1>
      <h1 className="mb-1 font-bold text-center">We promise!</h1>
      <p className="mb-1 text-center">
        YOU CAN TRACK YOUR PROGRESS ON THE PROGRSS BAR, AND YOU CAN STOP AND
        COME BACK AT ANY TIME WITHOUT LOSING YOUR PLACE.{' '}
      </p>
      <h1 className="mb-1 font-bold">SECTION ONE: TYPE OF TRUST</h1>
      <h3 className="mb-1 font-bold">
        {/* First,what type of trust are you creating? */}
        {data.personalInfo.creatingTrustType.question}
      </h3>
      <div className="space-y-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={data.personalInfo.creatingTrustType.options[0].value}
            onChange={() => creatingTrustType(0)}
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <span className="ml-2 text-gray-700">
            {data.personalInfo.creatingTrustType.options[0].label}
          </span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={data.personalInfo.creatingTrustType.options[1].value}
            onChange={() => creatingTrustType(1)}
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <span className="ml-2 text-gray-700">
            {data.personalInfo.creatingTrustType.options[1].label}
          </span>
        </label>
      </div>
      <h1 className="mb-1 font-bold text-center">INITIAL TRUSTEE</h1>
      <h3 className="mb-1 font-bold">
        {data.personalInfo.initialTrustee.question}
      </h3>
      <div className="space-y-4">
        <label className="flex items-center">
          <input
            type="radio"
            checked={data.personalInfo.initialTrustee.options[0].value}
            onChange={() => initialTrustee(0)}
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option1"
          />
          <span className="ml-2 text-gray-700">
            {data.personalInfo.initialTrustee.options[0].label}
          </span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            checked={data.personalInfo.initialTrustee.options[1].value}
            onChange={() => initialTrustee(1)}
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option2"
          />
          <span className="ml-2 text-gray-700">
            {data.personalInfo.initialTrustee.options[1].label}
          </span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            checked={data.personalInfo.initialTrustee.options[2].value}
            onChange={() => initialTrustee(2)}
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option3"
          />
          <span className="ml-2 text-gray-700">
            {data.personalInfo.initialTrustee.options[2].label}
          </span>
        </label>
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

export default Step4;
