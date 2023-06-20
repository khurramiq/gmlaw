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
      estatePlanningPackages: {
        question:
          'ESTATE PLANNING PACKAGES (insert prices for each set of documents)',
        options: [
          {
            label: 'Revocable Trust Package',
            value: false,
          },
          {
            label: 'Power of Attorney Package',
            value: false,
          },
          {
            label: 'Last Will and Testament Package',
            value: false,
          },
        ],
      },
      individualEstatePlanningDocuments: {
        question: 'INDIVIDUAL ESTATE PLANNING DOCUMENTS',
        options: [
          {
            label: 'Revocable Trust Agreement',
            value: false,
          },
          {
            label: 'Durable Power of Attorney for Property & Finances',
            value: false,
          },
          {
            label: 'Amendment to Revocable Trust',
            value: false,
          },
          {
            label:
              'Power of Attorney for Health Care and Living Will (aka Advance health care directive)',
            value: false,
          },
          {
            label: 'Schedule "A" to Trust',
            value: false,
          },
          {
            label: 'HIPAA Waiver of Confidentiality',
            value: false,
          },
          {
            label: 'Schedule of Gifts of Personal Property from Trust',
            value: false,
          },
          {
            label: 'Nomination of Guardian/​Conservator for Adults',
            value: false,
          },
          {
            label: 'Certification of Trust',
            value: false,
          },
          {
            label: 'Nomination of Guardian/​Conservator for Minor Children',
            value: false,
          },
          {
            label: 'Pour-Over-Will (only used in conjunction with a trust)',
            value: false,
          },
          {
            label:
              'Appointment of Travel Guardian/​Conservator for Minor Children',
            value: false,
          },
          {
            label: 'Will Codicil (amendment to a Will)',
            value: false,
          },
          {
            label: 'Appointment of Pet Caregiver',
            value: false,
          },
          {
            label: 'Last Will and Testament (used if no trust)',
            value: false,
          },
        ],
      },
      specialIrrevocableTrusts: {
        question: 'SPECIAL IRREVOCABLE TRUSTS',
        options: [
          {
            label: 'Special Needs Trust',
            value: false,
          },
          {
            label: 'Gifting (education) Trust',
            value: false,
          },
          {
            label: 'Pet Trust',
            value: false,
          },
          {
            label: 'Family Vacation Property (e.g. cabin) Trust',
            value: false,
          },
          {
            label: 'Firearms Trust',
            value: false,
          },
        ],
      },
      trustTransferDocuments: {
        question: 'TRUST TRANSFER DOCUMENTS',
        options: [
          {
            label: 'Instructions for transferring property to your trust',
            value: false,
          },
          {
            label: 'Stock Brokerage Account',
            value: false,
          },
          {
            label: 'Residential and mulit family Rental Property',
            value: false,
          },
          {
            label: 'Real Estate',
            value: false,
          },
          {
            label: 'Savings Bonds',
            value: false,
          },
          {
            label: 'Airplanes',
            value: false,
          },
          {
            label: 'Time share',
            value: false,
          },
          {
            label: 'Limited Liability Company ownership',
            value: false,
          },
          {
            label: 'Boats',
            value: false,
          },
          {
            label: 'Mobile Home',
            value: false,
          },
          {
            label: 'Corporate Stock',
            value: false,
          },
          {
            label: 'Farming Equipment (Tractors, etc.)',
            value: false,
          },
          {
            label: 'Artwork',
            value: false,
          },
          {
            label: 'General and/​or Limited Partnership Interest',
            value: false,
          },
          {
            label:
              'Life Insurance or Annuity, Request to Change Beneficiary to Trust',
            value: false,
          },
          {
            label: 'Jewelry',
            value: false,
          },
          {
            label: 'Unicorporated business Interest',
            value: false,
          },
          {
            label: 'Retirement Account. Request to change beficiary to Trust',
            value: false,
          },
          {
            label: 'Bank Account',
            value: false,
          },
          {
            label: 'Promissory Note (money owed to you)',
            value: false,
          },
        ],
      },
      creatingTrustType: {
        question: 'First,what type of trust are you creating?',
        options: [
          {
            label:
              'I am starting from scratch. I do not have an existing trust',
            value: false,
          },
          {
            label: 'I have an exising trust but I want to completely update it',
            value: false,
          },
        ],
      },
      initialTrustee: {
        question: 'Select the initial Trustee',
        options: [
          {
            label: 'You will serve as the initial sole Trustee',
            value: false,
          },
          {
            label: 'You and one other person will serve as initial co-Trustees',
            value: false,
          },
          {
            label:
              'You and more than one other person will serve as initial co-Trustees',
            value: false,
          },
        ],
      },
      maritalStatus: {
        question: 'Your Marital Status',
        options: [
          {
            label: 'Unmarried',
            value: false,
          },
          {
            label:
              'Married. However, this trust is for me only and will hold my separate property (and my share of any jointly owned property) only',
            value: false,
          },
        ],
      },
      livingChildren: {
        question: 'Do you have any living children?',
        options: [
          {
            label: 'No.',
            value: false,
          },
          {
            label: 'Yes. I have one living child.',
            value: false,
          },
          {
            label: 'Yes. I have more than one living child.',
            value: false,
          },
        ],
      },
      livingChildrenInformation: [
        {
          firstName: '',
          middleName: '',
          lastName: '',
          dateOfBirth: new Date(),
        },
      ],
      deceasedChildren: {
        question: 'Do you have any deceased children?',
        options: [
          {
            label: 'No.',
            value: false,
          },
          {
            label: 'Yes. I have one deceased child.',
            value: false,
          },
          {
            label: 'Yes. I have more than one deceased child',
            value: false,
          },
        ],
      },
      deceasedChildrenInformation: [
        {
          firstName: '',
          middleName: '',
          lastName: '',
          dateOfBirth: new Date(),
          dateOfDeath: new Date(),
          did_this_child_die_leaving_any_children_or_grandchildren: {
            question: 'INDIVIDUAL ESTATE PLANNING DOCUMENTS',
            options: [
              {
                label: 'Yes',
                value: false,
              },
              {
                label: 'No',
                value: false,
              },
            ],
          },
        },
      ],
      how_many_successor_Trustees_do_you_want_to_name: {
        question: 'How many successor Trustees do you want to name?',
        options: [
          {
            label: 'One',
            value: false,
          },
          {
            label: 'More than one',
            value: false,
          },
        ],
      },
      successorTrustee: {
        firstName: '',
        middleName: '',
        lastName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: '',
        email: '',
        phone: '',
      },
      successorTrustees: [
        {
          firstName: '',
          middleName: '',
          lastName: '',
          email: '',
          phone: '',
        },
      ],
      is_there_anyone_that_you_do_not_want_serving_as_a_successor_Trustee: {
        question:
          'Is there anyone that you do not want serving as a successor Trustee?',
        options: [
          {
            label: 'Yes',
            value: false,
          },
          {
            label: 'No',
            value: false,
          },
        ],
      },
      do_you_want_to_make_any_specific_gifts: {
        question: 'Do you want to make any specific gifts?',
        options: [
          {
            label: 'Yes',
            value: false,
          },
          {
            label: 'No',
            value: true,
          },
        ],
      },
      gifts: [
        {
          giftType: '',
          nameOfIndividual: '',
          typeOfGift: [
            {
              label: 'Cash',
              value: false,
            },
            {
              label: 'Item of personal property',
              value: true,
            },
          ],
          cashGiftAmount: '',
          describeTheItemOfPersonalProperty: '',
          makeAnyCommentsRemarksOrYourReasonForTheGift: '',
        },
      ],
      first_do_you_want_to_make_any_charitable_donations: {
        question: 'First, do you want to make any charitable donations?',
        options: [
          {
            label: 'Yes',
            value: false,
          },
          {
            label: 'No',
            value: true,
          },
        ],
      },
      beneficiaries: [
        {
          firstName: '',
          lastName: '',
          city: '',
          state: '',
          Beneficiary_relationship_to_you: '',
          percentageShare: '',
          any_statements_that_you_wish_to_make: '',
          what_happens_if_this_person_predeceases_you: [
            {
              label:
                "The deceased beneficiary's share goes to his issue (by right of representation)",
              value: false,
            },
            {
              label:
                'The gift lapses and is divided equally among the remaining living beneficiaries',
              value: false,
            },
          ],
          will_this_beneficiarys_share_be_given_outright: '',
          pick_your_age_for_disbursement: '',
        },
      ],
      contingent_Residue_Distribution: [
        {
          label: 'My heirs at law',
          value: false,
        },
        {
          label: 'the individual(s) named below',
          value: false,
        },
        {
          label: 'the charitable organization(s) named below',
          value: false,
        },
      ],
      charitableDonations: [
        {
          nameOfCharity: '',
          percentageOfResidue: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          status: '',
          zipCode: '',
          purposeForTheGift: '',
        },
      ],
    },
    documentMenu: {
      personalRepresentativeQ: {
        question:
          'Do you want the personal representative(s) under your Pour-Over-Will to be the same as your successor trustee(s)',
        options: [
          {
            label: 'Yes',
            value: true,
          },
          {
            label: 'No',
            value: false,
          },
        ],
      },
      personalRepresentatives: [
        {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
        },
      ],
    },
    preliminaryTrustInfo: {
      question: {
        text: 'Do you want the attorney(s)-in-fact under your Durable Power of Attorney to be the same as your successor trustee(s)',
        options: [
          {
            label: 'Yes',
            value: true,
          },
          {
            label: 'No',
            value: false,
          },
        ],
      },
      attorneyInFacts: [
        {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          relationship: '',
        },
      ],
    },
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
                className="relative flex justify-center items-center w-[50px] h-[50px] rounded-full"
                style={{ border: '1px solid #6660AD' }}
              >
                <p className="absolute left-[-220px] text-white">
                  Personal Information
                </p>
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
                <p className="absolute left-[-220px] text-white">
                  Document Menu
                </p>
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
                <p className="absolute left-[-220px] text-white">
                  Preliminary Trust Information
                </p>
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
                <p className="absolute left-[-220px] text-white">
                  Family Information
                </p>
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
                <p className="absolute left-[-220px] text-white">
                  Successor Trustees
                </p>
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
                <p className="absolute left-[-220px] text-white">
                  Special Distributions
                </p>
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
                <p className="absolute left-[-220px] text-white">
                  Remaining Distributions
                </p>
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
            {step === 2 && (
              <Step2
                step={step}
                setStep={setStep}
                data={data}
                setData={setData}
              />
            )}
            {step === 3 && (
              <Step3
                step={step}
                setStep={setStep}
                data={data}
                setData={setData}
              />
            )}
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
