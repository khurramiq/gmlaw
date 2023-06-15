import React, { useState } from 'react';
import FormStepper from '../../../../components/formStepper';
import Step1Form from './components/step1Form';

const Step1 = ({ step, setStep }) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];
  return (
    <div>
      <FormStepper activeStep={activeStep} steps={steps} />
      <Step1Form
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        setStep={setStep}
      />
    </div>
  );
};

export default Step1;
