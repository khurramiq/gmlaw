import { useState } from 'react';
import sideImg from '../../assets/images/side-img.jpg';
import CowLevelHeaderWithLinks from '../../components/CowLevelHeaderWithLinks';
import Step1 from './components/step1';
import Step2 from './components/step2';
import Step3 from './components/step3';
import Step4 from './components/step4';
import Step5 from './components/step5';
import Step6 from './components/step6';
import Step7 from './components/step7';
const Home = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    personalInfo: {
      yourInfo: {
        firstName: '',
        middleName: '',
        lastName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: '',
        email: '',
        gender: 'Male',
        stateOfResidency: 'Arizona',
        countyOfResidency: 'King',
        countryOfCitizenship: 'United States',
      },
    },
    documentMenu: {},
    preliminaryTrustInfo: {},
    familyInfo: {},
    successorTrustees: {},
    specialDistributions: {},
    remainingDistributions: {},
  });
  return (
    <div>
      <CowLevelHeaderWithLinks />
      <div className="flex h-screen">
        <div className="relative w-[30%] h-screen">
          <div className="absolute top-0 w-full h-full overflow-hidden">
            <img src={sideImg} alt="sideImg" />
          </div>
          <div className="absolute top-0 right-0 flex items-end">
            <ul className="w-[60px] mt-5">
              <li
                className="flex justify-center items-center w-[50px] h-[50px] rounded-full"
                style={{ border: '1px solid #6660AD' }}
              >
                <span className="flex justify-center items-center text-white w-[35px] h-[35px] rounded-full bg-[#6660AD] font-bold">
                  1
                </span>
              </li>
              <div
                className="w-[1px] ml-[24px]"
                style={
                  step >= 2
                    ? { border: '1px solid #6660AD', height: '30px' }
                    : { border: '1px solid #6660AD', height: '20px' }
                }
              />
              <li
                className="relative flex justify-center items-center w-[50px] h-[50px] rounded-full"
                style={
                  step >= 2
                    ? { border: '1px solid #6660AD' }
                    : { marginTop: '10px' }
                }
              >
                <div
                  className="absolute top-[-10px] left-0 h-[20px] w-[1px] ml-[24px]"
                  style={
                    step >= 2
                      ? { display: 'none' }
                      : { border: '1px solid #BCBDBD' }
                  }
                />
                <span
                  className="flex justify-center items-center text-white w-[35px] h-[35px] rounded-full font-bold"
                  style={
                    step >= 2
                      ? { background: '#6660AD' }
                      : { background: '#BCBDBD' }
                  }
                >
                  2
                </span>
                <div
                  className="absolute bottom-[-10px] left-0 h-[20px] w-[1px] ml-[24px]"
                  style={
                    step >= 2
                      ? { display: 'none' }
                      : { border: '1px solid #BCBDBD' }
                  }
                />
              </li>
              <div
                className="h-[20px] w-[1px] ml-[24px]"
                style={
                  step >= 2
                    ? { border: '1px solid #6660AD' }
                    : { display: 'none' }
                }
              />
              <li
                className="relative flex justify-center items-center w-[50px] h-[50px] rounded-full"
                style={
                  step >= 3
                    ? { border: '1px solid #6660AD' }
                    : { marginTop: '10px' }
                }
              >
                <div
                  className="absolute top-[-10px] left-0 h-[20px] w-[1px] ml-[24px]"
                  style={
                    step >= 3
                      ? { display: 'none' }
                      : { border: '1px solid #BCBDBD' }
                  }
                />
                <span
                  className="flex justify-center items-center text-white w-[35px] h-[35px] rounded-full font-bold"
                  style={
                    step >= 3
                      ? { background: '#6660AD' }
                      : { background: '#BCBDBD' }
                  }
                >
                  3
                </span>
                <div
                  className="absolute bottom-[-10px] left-0 h-[20px] w-[1px] ml-[24px]"
                  style={
                    step >= 3
                      ? { display: 'none' }
                      : { border: '1px solid #BCBDBD' }
                  }
                />
              </li>
              <div
                className="h-[20px] w-[1px] ml-[24px]"
                style={
                  step >= 3
                    ? { border: '1px solid #6660AD' }
                    : { display: 'none' }
                }
              />
              <li
                className="relative flex justify-center items-center w-[50px] h-[50px] rounded-full"
                style={
                  step >= 4
                    ? { border: '1px solid #6660AD' }
                    : { marginTop: '10px' }
                }
              >
                <div
                  className="absolute top-[-10px] left-0 h-[20px] w-[1px] ml-[24px]"
                  style={
                    step >= 4
                      ? { display: 'none' }
                      : { border: '1px solid #BCBDBD' }
                  }
                />
                <span
                  className="flex justify-center items-center text-white w-[35px] h-[35px] rounded-full font-bold"
                  style={
                    step >= 4
                      ? { background: '#6660AD' }
                      : { background: '#BCBDBD' }
                  }
                >
                  4
                </span>
                <div
                  className="absolute bottom-[-10px] left-0 h-[20px] w-[1px] ml-[24px]"
                  style={
                    step >= 4
                      ? { display: 'none' }
                      : { border: '1px solid #BCBDBD' }
                  }
                />
              </li>
              <div
                className="h-[20px] w-[1px] ml-[24px]"
                style={
                  step >= 4
                    ? { border: '1px solid #6660AD' }
                    : { display: 'none' }
                }
              />
              <li
                className="relative flex justify-center items-center w-[50px] h-[50px] rounded-full"
                style={
                  step >= 5
                    ? { border: '1px solid #6660AD' }
                    : { marginTop: '10px' }
                }
              >
                <div
                  className="absolute top-[-10px] left-0 h-[20px] w-[1px] ml-[24px]"
                  style={
                    step >= 5
                      ? { display: 'none' }
                      : { border: '1px solid #BCBDBD' }
                  }
                />
                <span
                  className="flex justify-center items-center text-white w-[35px] h-[35px] rounded-full font-bold"
                  style={
                    step >= 5
                      ? { background: '#6660AD' }
                      : { background: '#BCBDBD' }
                  }
                >
                  5
                </span>
                <div
                  className="absolute bottom-[-10px] left-0 h-[20px] w-[1px] ml-[24px]"
                  style={
                    step >= 5
                      ? { display: 'none' }
                      : { border: '1px solid #BCBDBD' }
                  }
                />
              </li>
              <div
                className="h-[20px] w-[1px] ml-[24px]"
                style={
                  step >= 5
                    ? { border: '1px solid #6660AD' }
                    : { display: 'none' }
                }
              />
              <li
                className="relative flex justify-center items-center w-[50px] h-[50px] rounded-full"
                style={
                  step >= 6
                    ? { border: '1px solid #6660AD' }
                    : { marginTop: '10px' }
                }
              >
                <div
                  className="absolute top-[-10px] left-0 h-[20px] w-[1px] ml-[24px]"
                  style={
                    step >= 6
                      ? { display: 'none' }
                      : { border: '1px solid #BCBDBD' }
                  }
                />
                <span
                  className="flex justify-center items-center text-white w-[35px] h-[35px] rounded-full font-bold"
                  style={
                    step >= 6
                      ? { background: '#6660AD' }
                      : { background: '#BCBDBD' }
                  }
                >
                  6
                </span>
                <div
                  className="absolute bottom-[-10px] left-0 h-[20px] w-[1px] ml-[24px]"
                  style={
                    step >= 6
                      ? { display: 'none' }
                      : { border: '1px solid #BCBDBD' }
                  }
                />
              </li>
              <div
                className="h-[20px] w-[1px] ml-[24px]"
                style={
                  step >= 6
                    ? { border: '1px solid #6660AD' }
                    : { display: 'none' }
                }
              />
              <li
                className="relative flex justify-center items-center w-[50px] h-[50px] rounded-full"
                style={
                  step >= 7
                    ? { border: '1px solid #6660AD' }
                    : { marginTop: '10px' }
                }
              >
                <div
                  className="absolute top-[-10px] left-0 h-[20px] w-[1px] ml-[24px]"
                  style={
                    step >= 7
                      ? { display: 'none' }
                      : { border: '1px solid #BCBDBD' }
                  }
                />
                <span
                  className="flex justify-center items-center text-white w-[35px] h-[35px] rounded-full font-bold"
                  style={
                    step >= 7
                      ? { background: '#6660AD' }
                      : { background: '#BCBDBD' }
                  }
                >
                  7
                </span>
              </li>
            </ul>
          </div>
        </div>
        <form
          className="w-full h-full overflow-scroll"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="">
            {step === 1 && (
              <Step1
                step={step}
                setStep={setStep}
                data={data}
                setData={setData}
              />
            )}
            {step === 2 && <Step2 step={step} setStep={setStep} />}
            {step === 3 && <Step3 step={step} setStep={setStep} />}
            {step === 4 && <Step4 step={step} setStep={setStep} />}
            {step === 5 && <Step5 step={step} setStep={setStep} />}
            {step === 6 && <Step6 step={step} setStep={setStep} />}
            {step === 7 && <Step7 step={step} setStep={setStep} />}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
