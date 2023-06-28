import React, { useState } from 'react';
import FormStepper from '../../../../components/formStepper';
import Step1Form from './components/step1Form';

const Step1 = ({ step, setStep, data, setData }) => {
  const [activeStep, setActiveStep] = useState(3);
  const steps = [
    'Name & Address',
    'Package/Document selection',
    'Preliminary Trust Information',
    'Drafting',
  ];
  return (
    <div>
      <FormStepper activeStep={activeStep} steps={steps} />
      <Step1Form
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        setStep={setStep}
        data={data}
        setData={setData}
      />
    </div>
  );
};

export default Step1;
