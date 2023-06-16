import React from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';

const Step1Form = ({ activeStep, setActiveStep, setStep, data, setData }) => {
  return (
    <div className="p-5">
      {activeStep === 0 && <Step1 data={data} setData={setData} />}
      {activeStep === 1 && <Step2 data={data} setData={setData} />}
      {activeStep === 2 && <Step3 />}
      {activeStep === 3 && <Step4 />}
      {activeStep === 4 && <Step5 />}
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
          onClick={() => {
            if (activeStep === 4) {
              setStep((prev) => prev + 1);
            } else {
              setActiveStep((prev) => prev + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1Form;
