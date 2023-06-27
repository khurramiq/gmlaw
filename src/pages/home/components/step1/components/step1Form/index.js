import React from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
// import Step5 from './components/Step5';
// import Step6 from './components/Step6';

const Step1Form = ({ activeStep, setActiveStep, setStep, data, setData }) => {
  return (
    <div className="p-5">
      {activeStep === 0 && (
        <Step1
          data={data}
          setData={setData}
          activeStep={activeStep}
          setStep={setStep}
          setActiveStep={setActiveStep}
        />
      )}
      {activeStep === 1 && (
        <Step2
          data={data}
          setData={setData}
          activeStep={activeStep}
          setStep={setStep}
          setActiveStep={setActiveStep}
        />
      )}
      {activeStep === 2 && (
        <Step3
          data={data}
          setData={setData}
          activeStep={activeStep}
          setStep={setStep}
          setActiveStep={setActiveStep}
        />
      )}
      {activeStep === 3 && (
        <Step4
          data={data}
          setData={setData}
          activeStep={activeStep}
          setStep={setStep}
          setActiveStep={setActiveStep}
        />
      )}
      {/* {activeStep === 4 && <Step5 data={data} setData={setData} />}
      {activeStep === 5 && <Step6 data={data} setData={setData} />} */}
    </div>
  );
};

export default Step1Form;
