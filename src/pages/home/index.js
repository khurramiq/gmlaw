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
import Step11 from './components/step11';
import Preview from './components/Preview';
const Home = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
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
        state: {
          label: 'Armed Forces America',
          value: 'Armed Forces America',
        },
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
      what_do_you_want_to_name_your_trust: {
        question: 'What do you want to name your trust?',
        options: [
          {
            label: 'The [your last Name + signing year] Recovable Trust',
            value: false,
          },
          {
            label:
              'The [your first Name+Your middle Initial+Your Last Name] Revocable Trust',
            value: false,
          },
          {
            label: 'The [fill in yourself] Revocable Trust',
            value: false,
          },
        ],
      },
      first_we_need_to_collect_some_information_about_your_existing_trust: {
        what_is_the_name_of_your_existing_trust: '',
        what_is_the_date_you_signed_your_existing_trust: new Date(),
        after_you_signed_your_trust_did_you_ever_amend_it: [
          {
            label: 'Yes',
            value: false,
          },
          {
            label: 'No',
            value: true,
          },
        ],
        locate_the_paragraph_or_section_number_in_your_existing_trust_agreement_that_allows_you_to_make_amendments_to_your_trust_write_the_location_below:
          '',
        have_you_amended_your_Trust_before: [
          {
            label: 'Yes',
            value: false,
          },
          {
            label: 'No',
            value: true,
          },
        ],
        what_month_you_will_sign_the_document_you_are_creating: 'January',
        on_what_day_of_the_month_will_you_sign_your_documents: '1',
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
      coTrustee: {
        firstName: '',
        middleName: '',
        lastName: '',
      },
      coTrustees: [
        {
          firstName: '',
          middleName: '',
          lastName: '',
          relationship: '',
        },
      ],
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
        // {
        //   firstName: '',
        //   middleName: '',
        //   lastName: '',
        //   dateOfBirth: new Date(),
        // },
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
        // {
        //   firstName: '',
        //   middleName: '',
        //   lastName: '',
        //   dateOfBirth: new Date(),
        //   dateOfDeath: new Date(),
        //   did_this_child_die_leaving_any_children_or_grandchildren: {
        //     question: 'INDIVIDUAL ESTATE PLANNING DOCUMENTS',
        //     options: [
        //       {
        //         label: 'Yes',
        //         value: false,
        //       },
        //       {
        //         label: 'No',
        //         value: false,
        //       },
        //     ],
        //   },
        // },
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
        state: {
          label: 'Armed Forces America',
          value: 'Armed Forces America',
        },
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
            value: true,
          },
          {
            label: 'No',
            value: false,
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
            value: true,
          },
          {
            label: 'No',
            value: false,
          },
        ],
      },
      beneficiaries: [
        {
          firstName: '',
          lastName: '',
          city: '',
          state: {
            label: 'Armed Forces America',
            value: 'Armed Forces America',
          },
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
      beneficiaries1: [
        {
          firstName: '',
          lastName: '',
          city: '',
          state: {
            label: 'Armed Forces America',
            value: 'Armed Forces America',
          },
          Beneficiary_relationship_to_you: '',
          percentageShare: '',
          any_statements_that_you_wish_to_make: '',
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
      charitableDonations1: [
        {
          nameOfCharity: '',
          percentageOfResidue: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          state: {
            label: 'Armed Forces America',
            value: 'Armed Forces America',
          },
          zipCode: '',
          purposeForTheGift: '',
        },
      ],
      charitableDonations: [
        {
          nameOfCharity: '',
          percentageOfResidue: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          state: {
            label: 'Armed Forces America',
            value: 'Armed Forces America',
          },
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
    familyInfo: {
      healthCareAgents: [
        {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          relationship: '',
        },
      ],
    },
    successorTrustees: {
      question: {
        text: 'Are there individuals that you want to identify as your HIPAA agents?',
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
      hIPAAAgents: [
        {
          firstName: '',
          lastName: '',
        },
      ],
    },
    specialDistributions: {
      question1: {
        text: 'Do you have any children under 18 years of age?',
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
      question2: {
        text: 'Do you want to name a guardian for your minor child or minor children?',
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
      question3: {
        text: 'Do you want to nominate an individual or a couple as Guardian of your minor child or children?',
        options: [
          {
            label: 'Individual',
            value: false,
          },
          {
            label: 'Couple',
            value: false,
          },
        ],
      },
      guardians: [
        {
          firstName: '',
          lastName: '',
          relationship_of_Guardian_to_you: '',
          addressLine1: '',
          addressLine2: '',
          city: '',
          status: {
            label: 'Armed Forces America',
            value: 'Armed Forces America',
          },
          zipCode: '',
          email: '',
          phone: '',
        },
      ],
      co_GuardianInformation: {
        co_Guardian_One_First_Name: '',
        co_Guardian_One_Last_Name: '',
        relationship_of_co_Guardian_One_to_you: '',
        co_Guardian_Two_First_Name: '',
        co_Guardian_Two_Last_Name: '',
        relationship_of_co_Guardian_Two_to_you: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: {
          label: 'Armed Forces America',
          value: 'Armed Forces America',
        },
        zipCode: '',
        email: '',
        phone: '',
      },
      question4: {
        text: 'Which co Guardian has priority should the couple divorce or otherwise split up?',
        options: [
          {
            label: 'Co Guardian One',
            value: false,
          },
          {
            label: 'Co Guardian Two',
            value: false,
          },
        ],
      },
    },
    remainingDistributions: {
      personalRepresentatives: [
        {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
        },
      ],
    },
  });
  const validate = () => {
    let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    const { firstName, lastName, addressLine1, city, zipCode, email } =
      data?.personalInfo?.yourInfo;
    if (
      firstName !== '' &&
      lastName !== '' &&
      addressLine1 !== '' &&
      city !== '' &&
      zipCode !== '' &&
      regex.test(email)
    ) {
      return true;
    }
    return false;
  };
  const handleStep2 = () => {
    if (validate()) {
      setStep(2);
    } else {
      alert('Some fields are required in step 1.');
    }
  };
  const validate1 = () => {
    // let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (!data.personalInfo.livingChildren.options[0].value) {
      for (
        let i = 0;
        i < data.personalInfo.livingChildrenInformation.length;
        i++
      ) {
        const element = data.personalInfo.livingChildrenInformation[i];
        if (
          element.firstName === '' ||
          element.middleName === '' ||
          element.lastName === ''
        ) {
          return false;
        }
      }
    }
    if (!data.personalInfo.deceasedChildren.options[0].value) {
      for (
        let i = 0;
        i < data.personalInfo.deceasedChildrenInformation.length;
        i++
      ) {
        const element = data.personalInfo.deceasedChildrenInformation[i];
        if (
          element.firstName === '' ||
          element.middleName === '' ||
          element.lastName === ''
        ) {
          return false;
        }
      }
    }
    return true;
  };
  const validate2 = () => {
    // let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (
      data.personalInfo.do_you_want_to_make_any_specific_gifts.options[0].value
    ) {
      for (let i = 0; i < data.personalInfo.gifts.length; i++) {
        const element = data.personalInfo.gifts[i];
        if (element.nameOfIndividual === '') {
          return false;
        }
        if (element?.typeOfGift[0]?.value && element?.cashGiftAmount === '') {
          return false;
        }
        if (
          element.typeOfGift[1].value &&
          element.describeTheItemOfPersonalProperty === ''
        ) {
          return false;
        }
      }
    }
    if (
      data.personalInfo.first_do_you_want_to_make_any_charitable_donations
        .options[0].value
    ) {
      for (let i = 0; i < data.personalInfo.charitableDonations1.length; i++) {
        const element = data.personalInfo.charitableDonations1[i];

        if (
          element.nameOfCharity === '' ||
          element.percentageOfResidue === '' ||
          element.addressLine1 === '' ||
          element.city === '' ||
          element.zipCode === '' ||
          element.purposeForTheGift === ''
        ) {
          return false;
        }
      }
    }
    if (data.personalInfo.beneficiaries.length > 0) {
      for (let i = 0; i < data.personalInfo.beneficiaries.length; i++) {
        const element = data.personalInfo.beneficiaries[i];

        if (
          element.firstName === '' ||
          element.lastName === '' ||
          element.city === '' ||
          element.Beneficiary_relationship_to_you === '' ||
          element.percentageShare === '' ||
          element.will_this_beneficiarys_share_be_given_outright === '' ||
          element.pick_your_age_for_disbursement === ''
        ) {
          return false;
        }
      }
    }
    if (data.personalInfo.contingent_Residue_Distribution[1].value) {
      for (let i = 0; i < data.personalInfo.beneficiaries1.length; i++) {
        const element = data.personalInfo.beneficiaries1[i];

        if (
          element.firstName === '' ||
          element.lastName === '' ||
          element.city === '' ||
          element.Beneficiary_relationship_to_you === '' ||
          element.percentageShare === ''
        ) {
          return false;
        }
      }
    }
    if (data.personalInfo.contingent_Residue_Distribution[2].value) {
      for (let i = 0; i < data.personalInfo.charitableDonations.length; i++) {
        const element = data.personalInfo.charitableDonations[i];
        if (
          element.nameOfCharity === '' ||
          element.percentageOfResidue === '' ||
          element.addressLine1 === '' ||
          element.city === '' ||
          element.zipCode === '' ||
          element.purposeForTheGift === ''
        ) {
          return false;
        }
      }
    }
    return true;
  };
  const handleStep3 = () => {
    if (!validate()) {
      alert('Some fields are required in step 1.');
    } else if (!validate1() && !validate2()) {
      alert('Some fields are required in step 2.');
    } else {
      setStep(3);
    }
  };
  const validate3 = () => {
    let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (data.documentMenu.personalRepresentativeQ.options[1].value) {
      for (
        let i = 0;
        i < data.documentMenu.personalRepresentatives.length;
        i++
      ) {
        const element = data.documentMenu.personalRepresentatives[i];
        if (
          element.firstName === '' ||
          element.lastName === '' ||
          !regex.test(element.email) ||
          element.phone === ''
        ) {
          return false;
        }
      }
    }
    return true;
  };
  const handleStep4 = () => {
    if (!validate()) {
      alert('Some fields are required in step 1.');
    } else if (!validate1() && !validate2()) {
      alert('Some fields are required in step 2.');
    } else if (!validate3()) {
      alert('Some fields are required in step 3.');
    } else {
      setStep(4);
    }
  };
  const validate4 = () => {
    let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (data.preliminaryTrustInfo.question.options[1].value) {
      for (
        let i = 0;
        i < data.preliminaryTrustInfo.attorneyInFacts.length;
        i++
      ) {
        const element = data.preliminaryTrustInfo.attorneyInFacts[i];
        if (
          element.firstName === '' ||
          element.lastName === '' ||
          !regex.test(element.email) ||
          element.phone === '' ||
          element.relationship === ''
        ) {
          return false;
        }
      }
    }
    return true;
  };
  const handleStep5 = () => {
    if (!validate()) {
      alert('Some fields are required in step 1.');
    } else if (!validate1() && !validate2()) {
      alert('Some fields are required in step 2.');
    } else if (!validate3()) {
      alert('Some fields are required in step 3.');
    } else if (!validate4()) {
      alert('Some fields are required in step 4.');
    } else {
      setStep(5);
    }
  };
  const validate5 = () => {
    let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (data.familyInfo.healthCareAgents.length > 0) {
      for (let i = 0; i < data.familyInfo.healthCareAgents.length; i++) {
        const element = data.familyInfo.healthCareAgents[i];
        if (
          element.firstName === '' ||
          element.lastName === '' ||
          !regex.test(element.email) ||
          element.phone === '' ||
          element.relationship === ''
        ) {
          return false;
        }
      }
    }
    return true;
  };
  const handleStep6 = () => {
    if (!validate()) {
      alert('Some fields are required in step 1.');
    } else if (!validate1() && !validate2()) {
      alert('Some fields are required in step 2.');
    } else if (!validate3()) {
      alert('Some fields are required in step 3.');
    } else if (!validate4()) {
      alert('Some fields are required in step 4.');
    } else if (!validate5()) {
      alert('Some fields are required in step 5.');
    } else {
      setStep(6);
    }
  };
  const validate6 = () => {
    // let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (data.successorTrustees.question.options[0].value) {
      for (let i = 0; i < data.successorTrustees.hIPAAAgents.length; i++) {
        const element = data.successorTrustees.hIPAAAgents[i];
        if (element.firstName === '' || element.lastName === '') {
          return false;
        }
      }
    }
    return true;
  };
  const handleStep7 = () => {
    if (!validate()) {
      alert('Some fields are required in step 1.');
    } else if (!validate1() && !validate2()) {
      alert('Some fields are required in step 2.');
    } else if (!validate3()) {
      alert('Some fields are required in step 3.');
    } else if (!validate4()) {
      alert('Some fields are required in step 4.');
    } else if (!validate5()) {
      alert('Some fields are required in step 5.');
    } else if (!validate6()) {
      alert('Some fields are required in step 6.');
    } else {
      setStep(7);
    }
  };
  const validate7 = () => {
    let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    if (
      data.specialDistributions.question1.options[0].value &&
      data.specialDistributions.question2.options[0].value &&
      data.specialDistributions.question3.options[0].value
    ) {
      for (let i = 0; i < data.specialDistributions.guardians.length; i++) {
        const element = data.specialDistributions.guardians[i];
        if (
          element.firstName === '' ||
          element.lastName === '' ||
          element.relationship_of_Guardian_to_you === '' ||
          element.addressLine1 === '' ||
          element.city === '' ||
          element.zipCode === '' ||
          !regex.test(element.email) ||
          element.phone === ''
        ) {
          return false;
        }
      }
    }
    if (
      data.specialDistributions.question1.options[0].value &&
      data.specialDistributions.question2.options[0].value &&
      data.specialDistributions.question3.options[1].value
    ) {
      if (
        data.specialDistributions.co_GuardianInformation
          ?.co_Guardian_One_First_Name === '' ||
        data.specialDistributions.co_GuardianInformation
          ?.co_Guardian_One_Last_Name === '' ||
        data.specialDistributions.co_GuardianInformation
          ?.relationship_of_co_Guardian_One_to_you === '' ||
        data.specialDistributions.co_GuardianInformation
          ?.co_Guardian_Two_First_Name === '' ||
        data.specialDistributions.co_GuardianInformation
          ?.co_Guardian_Two_Last_Name === '' ||
        data.specialDistributions.co_GuardianInformation
          ?.relationship_of_co_Guardian_Two_to_you === '' ||
        data.specialDistributions.co_GuardianInformation?.addressLine1 === '' ||
        data.specialDistributions.co_GuardianInformation?.city === '' ||
        data.specialDistributions.co_GuardianInformation?.zipCode === '' ||
        !regex.test(data.specialDistributions.co_GuardianInformation?.email) ||
        data.specialDistributions.co_GuardianInformation?.phone === ''
      ) {
        return false;
      }
    }
    return true;
  };
  const handleStep8 = () => {
    if (!validate()) {
      alert('Some fields are required in step 1.');
    } else if (!validate1() && !validate2()) {
      alert('Some fields are required in step 2.');
    } else if (!validate3()) {
      alert('Some fields are required in step 3.');
    } else if (!validate4()) {
      alert('Some fields are required in step 4.');
    } else if (!validate5()) {
      alert('Some fields are required in step 5.');
    } else if (!validate6()) {
      alert('Some fields are required in step 6.');
    } else if (!validate7()) {
      alert('Some fields are required in step 7.');
    } else {
      setStep(8);
    }
  };
  return (
    <div>
      <CowLevelHeaderWithLinks />
      {previewOpen ? (
        <Preview
          data={data}
          setData={setData}
          // activeStep={activeStep}
          // setStep={setStep}
          // setActiveStep={setActiveStep}
          setPreviewOpen={setPreviewOpen}
        />
      ) : (
        <div className="flex h-screen">
          <div className="relative xs:w-[20%] w-[30%] h-screen">
            <div className="absolute xs:hidden sm:block top-0 w-full h-full overflow-hidden">
              <img className="h-full" src={sideImg} alt="sideImg" />
            </div>
            <div className="absolute top-0 right-0 flex items-end">
              <ul className="xs:w-[50px] sm:w-[60px] mt-5">
                <li
                  className="relative flex justify-center items-center w-[50px] h-[50px] rounded-full"
                  style={{ border: '1px solid #6660AD' }}
                  onClick={() => setStep(1)}
                >
                  <p
                    className="absolute xs:text-black sm:text-white xs:text-center sm:left-[-100px] xs:left-[0px] xs:top-[55px] sm:top-0 xs:text-[8px] sm:text-base text-white xs:w-full sm:w-auto"
                    style={{ lineHeight: 1, zIndex: 10 }}
                  >
                    Personal <br /> Information
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
                  className="relative flex justify-center items-center w-[50px] h-[50px] rounded-full cursor-pointer"
                  style={
                    step >= 2
                      ? { border: '1px solid #6660AD' }
                      : { marginTop: '10px' }
                  }
                  onClick={() => handleStep2()}
                >
                  <div
                    className="absolute top-[-10px] left-0 h-[30px] w-[1px] ml-[24px]"
                    style={
                      step >= 2
                        ? { display: 'none' }
                        : { border: '1px solid #BCBDBD' }
                    }
                  />
                  <p
                    className={`absolute xs:text-black sm:text-white xs:text-center sm:left-[-100px] xs:left-[0px] ${
                      step >= 2 ? 'xs:top-[55px]' : 'xs:top-[45px]'
                    } sm:top-0 xs:text-[8px] sm:text-base text-white xs:w-full sm:w-auto`}
                    style={{ lineHeight: 1, zIndex: 10 }}
                  >
                    Family & <br /> Beneficiary <br /> info
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
                  className="relative flex justify-center items-center w-[50px] h-[50px] rounded-full cursor-pointer"
                  style={
                    step >= 3
                      ? { border: '1px solid #6660AD' }
                      : { marginTop: '10px' }
                  }
                  onClick={() => handleStep3()}
                >
                  <div
                    className="absolute top-[-10px] left-0 h-[20px] w-[1px] ml-[24px]"
                    style={
                      step >= 3
                        ? { display: 'none' }
                        : { border: '1px solid #BCBDBD' }
                    }
                  />
                  <p
                    className={`absolute xs:text-black sm:text-white xs:text-center sm:left-[-100px] xs:left-[0px] ${
                      step >= 3 ? 'xs:top-[55px]' : 'xs:top-[45px]'
                    } sm:top-0 xs:text-[8px] sm:text-base text-white xs:w-full sm:w-auto`}
                    style={{ lineHeight: 1, zIndex: 10 }}
                  >
                    Document <br /> Menu
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
                  className="relative flex justify-center items-center w-[50px] h-[50px] rounded-full cursor-pointer"
                  style={
                    step >= 4
                      ? { border: '1px solid #6660AD' }
                      : { marginTop: '10px' }
                  }
                  onClick={() => handleStep4()}
                >
                  <div
                    className="absolute top-[-10px] left-0 h-[20px] w-[1px] ml-[24px]"
                    style={
                      step >= 4
                        ? { display: 'none' }
                        : { border: '1px solid #BCBDBD' }
                    }
                  />
                  <p
                    className={`absolute xs:text-black sm:text-white xs:text-center sm:left-[-100px] xs:left-[0px] ${
                      step >= 4 ? 'xs:top-[55px]' : 'xs:top-[45px]'
                    } sm:top-0 xs:text-[8px] sm:text-base text-white xs:w-full sm:w-auto`}
                    style={{ lineHeight: 1, zIndex: 10 }}
                  >
                    Preliminary <br /> Trust <br /> Information
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
                  className="relative flex justify-center items-center w-[50px] h-[50px] rounded-full cursor-pointer"
                  style={
                    step >= 5
                      ? { border: '1px solid #6660AD' }
                      : { marginTop: '10px' }
                  }
                  onClick={() => handleStep5()}
                >
                  <div
                    className="absolute top-[-10px] left-0 h-[20px] w-[1px] ml-[24px]"
                    style={
                      step >= 5
                        ? { display: 'none' }
                        : { border: '1px solid #BCBDBD' }
                    }
                  />
                  <p
                    className={`absolute xs:text-black sm:text-white xs:text-center sm:left-[-100px] xs:left-[0px] ${
                      step >= 5 ? 'xs:top-[55px]' : 'xs:top-[45px]'
                    } sm:top-0 xs:text-[8px] sm:text-base text-white xs:w-full sm:w-auto`}
                    style={{ lineHeight: 1, zIndex: 10 }}
                  >
                    Family <br /> Information
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
                  className="relative flex justify-center items-center w-[50px] h-[50px] rounded-full cursor-pointer"
                  style={
                    step >= 6
                      ? { border: '1px solid #6660AD' }
                      : { marginTop: '10px' }
                  }
                  onClick={() => handleStep6()}
                >
                  <div
                    className="absolute top-[-10px] left-0 h-[20px] w-[1px] ml-[24px]"
                    style={
                      step >= 6
                        ? { display: 'none' }
                        : { border: '1px solid #BCBDBD' }
                    }
                  />
                  <p
                    className={`absolute xs:text-black sm:text-white xs:text-center sm:left-[-100px] xs:left-[0px] ${
                      step >= 6 ? 'xs:top-[55px]' : 'xs:top-[45px]'
                    } sm:top-0 xs:text-[8px] sm:text-base text-white xs:w-full sm:w-auto`}
                    style={{ lineHeight: 1, zIndex: 10 }}
                  >
                    Successor <br /> Trustees
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
                  className="relative flex justify-center items-center w-[50px] h-[50px] rounded-full cursor-pointer"
                  style={
                    step >= 7
                      ? { border: '1px solid #6660AD' }
                      : { marginTop: '10px' }
                  }
                  onClick={() => handleStep7()}
                >
                  <div
                    className="absolute top-[-10px] left-0 h-[20px] w-[1px] ml-[24px]"
                    style={
                      step >= 7
                        ? { display: 'none' }
                        : { border: '1px solid #BCBDBD' }
                    }
                  />
                  <p
                    className={`absolute xs:text-black sm:text-white xs:text-center sm:left-[-100px] xs:left-[0px] ${
                      step >= 7 ? 'xs:top-[55px]' : 'xs:top-[45px]'
                    } sm:top-0 xs:text-[8px] sm:text-base text-white xs:w-full sm:w-auto`}
                    style={{ lineHeight: 1, zIndex: 10 }}
                  >
                    Special <br /> Distributions
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
                  <div
                    className="absolute bottom-[-10px] left-0 h-[20px] w-[1px] ml-[24px]"
                    style={
                      step >= 7
                        ? { display: 'none' }
                        : { border: '1px solid #BCBDBD' }
                    }
                  />
                </li>
                <div
                  className="h-[20px] w-[1px] ml-[24px]"
                  style={
                    step >= 7
                      ? { border: '1px solid #6660AD' }
                      : { display: 'none' }
                  }
                />
                <li
                  className="relative flex justify-center items-center w-[50px] h-[50px] rounded-full cursor-pointer"
                  style={
                    step >= 8
                      ? { border: '1px solid #6660AD' }
                      : { marginTop: '10px' }
                  }
                  onClick={() => handleStep8()}
                >
                  <div
                    className="absolute top-[-10px] left-0 h-[20px] w-[1px] ml-[24px]"
                    style={
                      step >= 8
                        ? { display: 'none' }
                        : { border: '1px solid #BCBDBD' }
                    }
                  />
                  <p
                    className={`absolute xs:text-black sm:text-white xs:text-center sm:left-[-100px] xs:left-[0px] ${
                      step >= 8 ? 'xs:top-[55px]' : 'xs:top-[45px]'
                    } sm:top-0 xs:text-[8px] sm:text-base text-white xs:w-full sm:w-auto`}
                    style={{ lineHeight: 1, zIndex: 10 }}
                  >
                    Remaining <br /> Distributions
                  </p>
                  <span
                    className="flex justify-center items-center text-white w-[35px] h-[35px] rounded-full font-bold"
                    style={
                      step >= 8
                        ? { background: '#6660AD' }
                        : { background: '#BCBDBD' }
                    }
                  >
                    8
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
                <Step11
                  step={step}
                  setStep={setStep}
                  data={data}
                  setData={setData}
                  notActionBtns={false}
                />
              )}
              {step === 3 && (
                <Step2
                  step={step}
                  setStep={setStep}
                  data={data}
                  setData={setData}
                  notActionBtns={false}
                />
              )}
              {step === 4 && (
                <Step3
                  step={step}
                  setStep={setStep}
                  data={data}
                  setData={setData}
                  notActionBtns={false}
                />
              )}
              {step === 5 && (
                <Step4
                  step={step}
                  setStep={setStep}
                  data={data}
                  setData={setData}
                  notActionBtns={false}
                />
              )}
              {step === 6 && (
                <Step5
                  step={step}
                  setStep={setStep}
                  data={data}
                  setData={setData}
                  notActionBtns={false}
                />
              )}
              {step === 7 && (
                <Step6
                  step={step}
                  setStep={setStep}
                  data={data}
                  setData={setData}
                  notActionBtns={false}
                />
              )}
              {step === 8 && (
                <Step7
                  step={step}
                  setStep={setStep}
                  data={data}
                  setData={setData}
                  setPreviewOpen={setPreviewOpen}
                  notActionBtns={false}
                />
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Home;
