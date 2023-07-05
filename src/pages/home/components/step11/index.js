import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { Autocomplete, TextField } from '@mui/material';
import stateList from '../../../../data/stateList';
import { useState } from 'react';
import FormStepper from '../../../../components/formStepper';

const Step11 = ({ notActionBtns, step, setStep, data, setData }) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Family', 'Beneficiary info'];
  const maritalStatus = (i) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        maritalStatus: {
          ...data.personalInfo.maritalStatus,
          options: data.personalInfo.maritalStatus.options.map(
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
  const livingChildren = (i) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        livingChildren: {
          ...data.personalInfo.livingChildren,
          options: data.personalInfo.livingChildren.options.map(
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
  const deceasedChildren = (i) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        deceasedChildren: {
          ...data.personalInfo.deceasedChildren,
          options: data.personalInfo.deceasedChildren.options.map(
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
  const handleLivingChildrenInformation = (i, name, value) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        livingChildrenInformation:
          data.personalInfo.livingChildrenInformation.map((item, index) => {
            if (i === index) {
              return {
                ...item,
                [name]: value,
              };
            } else {
              return item;
            }
          }),
      },
    });
  };
  const addLivingChildrenInformation = () => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        livingChildrenInformation: [
          ...data.personalInfo.livingChildrenInformation,
          {
            firstName: '',
            middleName: '',
            lastName: '',
            dateOfBirth: new Date(),
          },
        ],
      },
    });
  };
  const removeLivingChildrenInformation = (i) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        livingChildrenInformation:
          data.personalInfo.livingChildrenInformation.filter(
            (item, index) => i !== index
          ),
      },
    });
  };
  const handleDeceasedChildrenInformation = (i, name, value) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        deceasedChildrenInformation:
          data.personalInfo.deceasedChildrenInformation.map((item, index) => {
            if (i === index) {
              return {
                ...item,
                [name]: value,
              };
            } else {
              return item;
            }
          }),
      },
    });
  };
  const addDeceasedChildrenInformation = () => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        deceasedChildrenInformation: [
          ...data.personalInfo.deceasedChildrenInformation,
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
      },
    });
  };
  const removeDeceasedChildrenInformation = (i) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        deceasedChildrenInformation:
          data.personalInfo.deceasedChildrenInformation.filter(
            (item, index) => i !== index
          ),
      },
    });
  };
  const handleDeceasedChildrenTrueFalse = (i, j) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        deceasedChildrenInformation:
          data.personalInfo.deceasedChildrenInformation.map((item, index) => {
            if (i === index) {
              return {
                ...item,
                did_this_child_die_leaving_any_children_or_grandchildren: {
                  ...item.did_this_child_die_leaving_any_children_or_grandchildren,
                  options:
                    item.did_this_child_die_leaving_any_children_or_grandchildren.options.map(
                      (item, ind) => {
                        if (ind === j) {
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
              };
            } else {
              return item;
            }
          }),
      },
    });
  };
  const how_many_successor_Trustees_do_you_want_to_name = (i) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        how_many_successor_Trustees_do_you_want_to_name: {
          ...data.personalInfo.how_many_successor_Trustees_do_you_want_to_name,
          options:
            data.personalInfo.how_many_successor_Trustees_do_you_want_to_name.options.map(
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
  const handleSuccessorTrusteeChange = (e) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        successorTrustee: {
          ...data.personalInfo.successorTrustee,
          [e.target.name]: e.target.value,
        },
      },
    });
  };
  const handleSuccessorTrustees = (i, name, value) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        successorTrustees: data.personalInfo.successorTrustees.map(
          (item, index) => {
            if (i === index) {
              return {
                ...item,
                [name]: value,
              };
            } else {
              return item;
            }
          }
        ),
      },
    });
  };
  const addSuccessorTrustee = () => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        successorTrustees: [
          ...data.personalInfo.successorTrustees,
          {
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            phone: '',
          },
        ],
      },
    });
  };
  const removeSuccessorTrustee = (i) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        successorTrustees: data.personalInfo.successorTrustees.filter(
          (item, index) => i !== index
        ),
      },
    });
  };
  const is_there_anyone_that_you_do_not_want_serving_as_a_successor_Trustee = (
    i
  ) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        is_there_anyone_that_you_do_not_want_serving_as_a_successor_Trustee: {
          ...data.personalInfo
            .is_there_anyone_that_you_do_not_want_serving_as_a_successor_Trustee,
          options:
            data.personalInfo.is_there_anyone_that_you_do_not_want_serving_as_a_successor_Trustee.options.map(
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
  const handleStateChange = (value) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        successorTrustee: {
          ...data.personalInfo.successorTrustee,
          state: value,
        },
      },
    });
  };
  //
  const do_you_want_to_make_any_specific_gifts = (i) => {
    setData((prev) => {
      return {
        ...prev,
        personalInfo: {
          ...prev.personalInfo,
          do_you_want_to_make_any_specific_gifts: {
            ...prev.personalInfo.do_you_want_to_make_any_specific_gifts,
            options:
              prev.personalInfo.do_you_want_to_make_any_specific_gifts.options.map(
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
      };
    });
  };
  const handleGifts = (i, name, value) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        gifts: data.personalInfo.gifts.map((item, index) => {
          if (i === index) {
            return {
              ...item,
              [name]: value,
            };
          } else {
            return item;
          }
        }),
      },
    });
  };
  const removeGift = (i) => {
    if (i > 0) {
      setData({
        ...data,
        personalInfo: {
          ...data.personalInfo,
          gifts: data.personalInfo.gifts.filter((item, index) => i !== index),
        },
      });
    }
  };
  const addGift = () => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        gifts: [
          ...data.personalInfo.gifts,
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
      },
    });
  };
  const handleTypeOfGifts = (i, j) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        gifts: data.personalInfo.gifts.map((item, index) => {
          if (i === index) {
            return {
              ...item,
              typeOfGift: item.typeOfGift.map((itm, ind) => {
                if (j === ind) {
                  return {
                    ...itm,
                    value: true,
                  };
                } else {
                  return {
                    ...itm,
                    value: false,
                  };
                }
              }),
            };
          } else {
            return item;
          }
        }),
      },
    });
  };
  const first_do_you_want_to_make_any_charitable_donations = (i) => {
    setData((prev) => {
      return {
        ...prev,
        personalInfo: {
          ...prev.personalInfo,
          first_do_you_want_to_make_any_charitable_donations: {
            ...prev.personalInfo
              .first_do_you_want_to_make_any_charitable_donations,
            options:
              prev.personalInfo.first_do_you_want_to_make_any_charitable_donations.options.map(
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
      };
    });
  };
  const handleBeneficiariesFields = (i, name, value) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        beneficiaries: data.personalInfo.beneficiaries.map((item, index) => {
          if (i === index) {
            return {
              ...item,
              [name]: value,
            };
          } else {
            return item;
          }
        }),
      },
    });
  };
  const handleBeneficiariesFields1 = (i, name, value) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        beneficiaries1: data.personalInfo.beneficiaries1.map((item, index) => {
          if (i === index) {
            return {
              ...item,
              [name]: value,
            };
          } else {
            return item;
          }
        }),
      },
    });
  };
  const addBeneficiary = () => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        beneficiaries: [
          ...data.personalInfo.beneficiaries,
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
      },
    });
  };
  const addBeneficiary1 = () => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        beneficiaries1: [
          ...data.personalInfo.beneficiaries1,
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
      },
    });
  };
  const removeBeneficiary = (i) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        beneficiaries: data.personalInfo.beneficiaries.filter(
          (item, index) => i !== index
        ),
      },
    });
  };
  const removeBeneficiary1 = (i) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        beneficiaries1: data.personalInfo.beneficiaries1.filter(
          (item, index) => i !== index
        ),
      },
    });
  };
  const what_happens_if_this_person_predeceases_you = (i, j) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        beneficiaries: data.personalInfo.beneficiaries.map((item, index) => {
          if (i === index) {
            return {
              ...item,
              what_happens_if_this_person_predeceases_you:
                item.what_happens_if_this_person_predeceases_you.map(
                  (itm, ind) => {
                    if (j === ind) {
                      return {
                        ...itm,
                        value: true,
                      };
                    } else {
                      return {
                        ...itm,
                        value: false,
                      };
                    }
                  }
                ),
            };
          } else {
            return item;
          }
        }),
      },
    });
  };
  const contingent_Residue_Distribution = (i) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        contingent_Residue_Distribution:
          data.personalInfo.contingent_Residue_Distribution.map(
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
    });
  };
  const addCharity = () => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        charitableDonations: [
          ...data.personalInfo.charitableDonations,
          {
            nameOfCharity: '',
            percentageOfResidue: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            status: {
              label: 'Armed Forces America',
              value: 'Armed Forces America',
            },
            zipCode: '',
            purposeForTheGift: '',
          },
        ],
      },
    });
  };
  const removeCharity = (i) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        charitableDonations: data.personalInfo.charitableDonations.filter(
          (item, index) => i !== index
        ),
      },
    });
  };
  const handleCharity = (i, name, value) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        charitableDonations: data.personalInfo.charitableDonations.map(
          (item, index) => {
            if (i === index) {
              return {
                ...item,
                [name]: value,
              };
            } else {
              return item;
            }
          }
        ),
      },
    });
  };
  const addCharity1 = () => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        charitableDonations1: [
          ...data.personalInfo.charitableDonations1,
          {
            nameOfCharity: '',
            percentageOfResidue: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            status: {
              label: 'Armed Forces America',
              value: 'Armed Forces America',
            },
            zipCode: '',
            purposeForTheGift: '',
          },
        ],
      },
    });
  };
  const removeCharity1 = (i) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        charitableDonations1: data.personalInfo.charitableDonations1.filter(
          (item, index) => i !== index
        ),
      },
    });
  };
  const handleCharity1 = (i, name, value) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        charitableDonations1: data.personalInfo.charitableDonations1.map(
          (item, index) => {
            if (i === index) {
              return {
                ...item,
                [name]: value,
              };
            } else {
              return item;
            }
          }
        ),
      },
    });
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
  const handleNext = () => {
    if (activeStep === 0) {
      if (validate1()) {
        setActiveStep((prev) => prev + 1);
      }
    } else if (activeStep === 1) {
      if (validate2()) {
        if (step <= 7) {
          setStep((prev) => prev + 1);
        }
      }
    }
  };
  return (
    <div className="p-5">
      {!notActionBtns && <FormStepper activeStep={activeStep} steps={steps} />}
      {(activeStep === 0 || notActionBtns) && (
        <div>
          <h1 className="mb-1 text-3xl font-bold">FAMILY</h1>
          <h3 className="mb-1 font-bold">
            {/* Your Marital Status */}
            {data.personalInfo.maritalStatus.question}
          </h3>
          <div className="space-y-4">
            <label className="flex items-center">
              <input
                type="radio"
                checked={data.personalInfo.maritalStatus.options[0].value}
                onChange={() => maritalStatus(0)}
                className="form-radio h-5 w-5 text-blue-500"
                name="radio-option"
                value="option1"
              />
              <span className="ml-2 text-gray-700">
                {data.personalInfo.maritalStatus.options[0].label}
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={data.personalInfo.maritalStatus.options[1].value}
                onChange={() => maritalStatus(1)}
                className="form-radio h-5 w-5 text-blue-500"
                name="radio-option"
                value="option2"
              />
              <span className="ml-2 text-gray-700">
                {data.personalInfo.maritalStatus.options[1].label}
              </span>
            </label>
          </div>
          <div className="space-y-4">
            <div className="flex">
              <div className="w-[50%]">
                <h3 className="mb-1 font-bold">
                  {/* Do you have any living children? */}
                  {data.personalInfo.livingChildren.question}
                </h3>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={data.personalInfo.livingChildren.options[0].value}
                    onChange={() => livingChildren(0)}
                    className="form-checkbox h-5 w-5 text-blue-500"
                  />
                  <span className="ml-2 text-gray-700">
                    {data.personalInfo.livingChildren.options[0].label}
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={data.personalInfo.livingChildren.options[1].value}
                    onChange={() => livingChildren(1)}
                    className="form-checkbox h-5 w-5 text-blue-500"
                  />
                  <span className="ml-2 text-gray-700">
                    {data.personalInfo.livingChildren.options[1].label}
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={data.personalInfo.livingChildren.options[2].value}
                    onChange={() => livingChildren(2)}
                    className="form-checkbox h-5 w-5 text-blue-500"
                  />
                  <span className="ml-2 text-gray-700">
                    {data.personalInfo.livingChildren.options[2].label}
                  </span>
                </label>
              </div>
              <div className="w-[50%]">
                <h3 className="mb-1 font-bold">
                  {/* Do you have any deceased children? */}
                  {data.personalInfo.deceasedChildren.question}
                </h3>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={
                      data.personalInfo.deceasedChildren.options[0].value
                    }
                    onChange={() => deceasedChildren(0)}
                    className="form-checkbox h-5 w-5 text-blue-500"
                  />
                  <span className="ml-2 text-gray-700">
                    {data.personalInfo.deceasedChildren.options[0].label}
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={
                      data.personalInfo.deceasedChildren.options[1].value
                    }
                    onChange={() => deceasedChildren(1)}
                    className="form-checkbox h-5 w-5 text-blue-500"
                  />
                  <span className="ml-2 text-gray-700">
                    {data.personalInfo.deceasedChildren.options[1].label}
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={
                      data.personalInfo.deceasedChildren.options[2].value
                    }
                    onChange={() => deceasedChildren(2)}
                    className="form-checkbox h-5 w-5 text-blue-500"
                  />
                  <span className="ml-2 text-gray-700">
                    {data.personalInfo.deceasedChildren.options[2].label}
                  </span>
                </label>
              </div>
            </div>
          </div>
          {!data.personalInfo.livingChildren.options[0].value && (
            <div>
              <h3 className="mb-1 mt-3 font-bold">
                Living Children Information
              </h3>
              {data.personalInfo.livingChildrenInformation.map((item, i) => (
                <div
                  key={i}
                  className={`${
                    i % 2 === 0 ? 'bg-slate-200' : ''
                  } p-5 rounded-lg mb-3`}
                >
                  <div>
                    <i
                      className="far fa-times-circle cursor-pointer"
                      onClick={() => removeLivingChildrenInformation(i)}
                    ></i>
                    <span className="font-bold ml-3">Child {i + 1}</span>
                  </div>
                  <h3 className="mb-1 font-bold">Name</h3>
                  <div className="mb-2 flex">
                    <input
                      type="text"
                      value={item.firstName}
                      name={'firstName'}
                      onChange={(e) =>
                        handleLivingChildrenInformation(
                          i,
                          e.target.name,
                          e.target.value
                        )
                      }
                      className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
                      placeholder="First"
                      required
                    />
                    <input
                      type="text"
                      value={item.middleName}
                      name={'middleName'}
                      onChange={(e) =>
                        handleLivingChildrenInformation(
                          i,
                          e.target.name,
                          e.target.value
                        )
                      }
                      className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
                      placeholder="Middle"
                      required
                    />
                    <input
                      type="text"
                      value={item.lastName}
                      name={'lastName'}
                      onChange={(e) =>
                        handleLivingChildrenInformation(
                          i,
                          e.target.name,
                          e.target.value
                        )
                      }
                      className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-[33%]"
                      placeholder="Last"
                      required
                    />
                  </div>
                  <h3 className="mb-1 font-bold">Date of Birth</h3>
                  <DatePicker
                    className="border bg-white border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%] outline-none"
                    value={item.dateOfBirth}
                    name={'dateOfBirth'}
                    onChange={(date) =>
                      handleLivingChildrenInformation(i, 'dateOfBirth', date)
                    }
                  />
                </div>
              ))}
              <div className="mt-2">
                <button
                  className="border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded"
                  onClick={() => addLivingChildrenInformation()}
                >
                  Add Living Child
                </button>
              </div>
            </div>
          )}
          {!data.personalInfo.deceasedChildren.options[0].value && (
            <div>
              <h3 className="mb-1 mt-3 font-bold">
                Deceased Children Information
              </h3>
              {data.personalInfo.deceasedChildrenInformation.map((item, i) => (
                <div
                  key={i}
                  className={`${
                    i % 2 === 0 ? 'bg-slate-200' : ''
                  } p-5 rounded-lg mb-3`}
                >
                  <div>
                    <i
                      className="far fa-times-circle cursor-pointer"
                      onClick={() => removeDeceasedChildrenInformation(i)}
                    ></i>
                    <span className="font-bold ml-3">Child {i + 1}</span>
                  </div>
                  <h3 className="mb-1 font-bold">Name</h3>
                  <div className="mb-2 flex">
                    <input
                      type="text"
                      value={item.firstName}
                      name={'firstName'}
                      onChange={(e) =>
                        handleDeceasedChildrenInformation(
                          i,
                          e.target.name,
                          e.target.value
                        )
                      }
                      className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
                      placeholder="First"
                      required
                    />
                    <input
                      type="text"
                      value={item.middleName}
                      name={'middleName'}
                      onChange={(e) =>
                        handleDeceasedChildrenInformation(
                          i,
                          e.target.name,
                          e.target.value
                        )
                      }
                      className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
                      placeholder="Middle"
                      required
                    />
                    <input
                      type="text"
                      value={item.lastName}
                      name={'lastName'}
                      onChange={(e) =>
                        handleDeceasedChildrenInformation(
                          i,
                          e.target.name,
                          e.target.value
                        )
                      }
                      className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-[33%]"
                      placeholder="Last"
                      required
                    />
                  </div>
                  <div className="mb-2 flex">
                    <div className="w-[50%]">
                      <h3 className="mb-1 font-bold">Date of Birth</h3>
                      <DatePicker
                        className="border bg-white border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full outline-none"
                        value={item.dateOfBirth}
                        name={'dateOfBirth'}
                        onChange={(date) =>
                          handleDeceasedChildrenInformation(
                            i,
                            'dateOfBirth',
                            date
                          )
                        }
                      />
                    </div>
                    <div className="w-[50%] ml-2">
                      <h3 className="mb-1 font-bold">Date of Death</h3>
                      <DatePicker
                        className="border bg-white border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full outline-none"
                        value={item.dateOfDeath}
                        name={'dateOfDeath'}
                        onChange={(date) =>
                          handleDeceasedChildrenInformation(
                            i,
                            'dateOfDeath',
                            date
                          )
                        }
                      />
                    </div>
                  </div>
                  <h3 className="mb-1 mt-2 font-bold">
                    {/* Did this child die leaving any children or grandchildren? */}
                    {
                      item
                        .did_this_child_die_leaving_any_children_or_grandchildren
                        .question
                    }
                  </h3>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        checked={
                          item
                            .did_this_child_die_leaving_any_children_or_grandchildren
                            .options[0].value
                        }
                        onChange={() => handleDeceasedChildrenTrueFalse(i, 0)}
                        className="form-radio h-5 w-5 text-blue-500"
                        name="radio-option"
                        value="option1"
                      />
                      <span className="ml-2 text-gray-700">
                        {
                          item
                            .did_this_child_die_leaving_any_children_or_grandchildren
                            .options[0].label
                        }
                      </span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        checked={
                          item
                            .did_this_child_die_leaving_any_children_or_grandchildren
                            .options[1].value
                        }
                        onChange={() => handleDeceasedChildrenTrueFalse(i, 1)}
                        className="form-radio h-5 w-5 text-blue-500"
                        name="radio-option"
                        value="option2"
                      />
                      <span className="ml-2 text-gray-700">
                        {
                          item
                            .did_this_child_die_leaving_any_children_or_grandchildren
                            .options[1].label
                        }
                      </span>
                    </label>
                  </div>
                </div>
              ))}
              <div className="mt-2">
                <button
                  className="border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded"
                  onClick={() => addDeceasedChildrenInformation()}
                >
                  Add a Deceased Child
                </button>
              </div>
            </div>
          )}
          <h1 className="mt-3 font-bold">SUCCESSOR TRUSTEES</h1>
          <h3 className="mt-2 font-bold text-center">
            These are the individuals that will act as your replacement Trustee,
            should you become unable to act for yourself
          </h3>
          <p className="mt-2 text-center">
            If you name more than one, you can have them act alone, in the order
            you name them, or you can have them act together as co-successor
            Trustees.
          </p>
          <h3 className="mb-1 mt-2 font-bold">
            {/* How many successor Trustees do you want to name? */}
            {
              data.personalInfo.how_many_successor_Trustees_do_you_want_to_name
                .question
            }
          </h3>
          <div className="space-y-4">
            <label className="flex items-center">
              <input
                type="radio"
                checked={
                  data.personalInfo
                    .how_many_successor_Trustees_do_you_want_to_name.options[0]
                    .value
                }
                onChange={() =>
                  how_many_successor_Trustees_do_you_want_to_name(0)
                }
                className="form-radio h-5 w-5 text-blue-500"
              />
              <span className="ml-2 text-gray-700">
                {
                  data.personalInfo
                    .how_many_successor_Trustees_do_you_want_to_name.options[0]
                    .label
                }
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={
                  data.personalInfo
                    .how_many_successor_Trustees_do_you_want_to_name.options[1]
                    .value
                }
                onChange={() =>
                  how_many_successor_Trustees_do_you_want_to_name(1)
                }
                className="form-radio h-5 w-5 text-blue-500"
              />
              <span className="ml-2 text-gray-700">
                {
                  data.personalInfo
                    .how_many_successor_Trustees_do_you_want_to_name.options[1]
                    .label
                }
              </span>
            </label>
          </div>
          {data.personalInfo.how_many_successor_Trustees_do_you_want_to_name
            .options[0].value && (
            <div>
              <h3 className="mb-1 mt-2 font-bold">Successor Trustee</h3>
              <div className="mb-2 flex">
                <input
                  type="text"
                  name="firstName"
                  value={data?.personalInfo?.successorTrustee?.firstName}
                  onChange={handleSuccessorTrusteeChange}
                  class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
                  placeholder="First"
                />
                <input
                  type="text"
                  name="middleName"
                  value={data?.personalInfo?.successorTrustee?.middleName}
                  onChange={handleSuccessorTrusteeChange}
                  class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
                  placeholder="Middle"
                />
                <input
                  type="text"
                  name="lastName"
                  value={data?.personalInfo?.successorTrustee?.lastName}
                  onChange={handleSuccessorTrusteeChange}
                  class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-[33%]"
                  placeholder="Last"
                />
              </div>
              <h3 className="mb-1 mt-2 font-bold">Address</h3>
              <div className="mb-2 flex">
                <input
                  type="text"
                  name="addressLine1"
                  value={data?.personalInfo?.successorTrustee?.addressLine1}
                  onChange={handleSuccessorTrusteeChange}
                  class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
                  placeholder="Address Line 1"
                />
              </div>
              <div className="mb-2 flex">
                <input
                  type="text"
                  name="addressLine2"
                  value={data?.personalInfo?.successorTrustee?.addressLine2}
                  onChange={handleSuccessorTrusteeChange}
                  class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
                  placeholder="Address Line 2"
                />
              </div>
              <div className="mb-2 flex">
                <input
                  type="text"
                  name="city"
                  value={data?.personalInfo?.successorTrustee?.city}
                  onChange={handleSuccessorTrusteeChange}
                  class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
                  placeholder="City"
                />
                <div className="w-[33%] mr-2">
                  <Autocomplete
                    fullWidth
                    options={stateList}
                    value={data?.personalInfo?.successorTrustee?.state}
                    getOptionLabel={(option) => option.label}
                    onChange={(_, value) => handleStateChange(value)}
                    renderInput={(params) => (
                      <TextField
                        label="State"
                        variant="outlined"
                        placeholder="Select State"
                        name="state"
                        // error={
                        //   !!touched?.billingAddress && !!errors?.billingAddress?.country
                        // }
                        // helperText={
                        //   touched.billingAddress &&
                        //   errors?.billingAddress?.country &&
                        //   'required'
                        // }
                        {...params}
                      />
                    )}
                  />
                </div>
                {/* <select
              class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
              name="state"
              value={data?.personalInfo?.successorTrustee?.state}
              onChange={handleSuccessorTrusteeChange}
            >
              <option value="Armed Forces America">Armed Forces America</option>
              <option value="Armed Forces">Armed Forces</option>
              <option value="Armed Forces Pacific">Armed Forces Pacific</option>
            </select> */}
                <input
                  type="text"
                  name="zipCode"
                  value={data?.personalInfo?.successorTrustee?.zipCode}
                  onChange={handleSuccessorTrusteeChange}
                  class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-[33%]"
                  placeholder="Zip Code"
                />
              </div>
              <div className="mb-2 flex">
                <div className="w-[50%]">
                  <h3 className="mb-1 font-bold">Email</h3>
                  <input
                    type="email"
                    name="email"
                    value={data?.personalInfo?.successorTrustee?.email}
                    onChange={handleSuccessorTrusteeChange}
                    class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                    placeholder="Email"
                  />
                </div>
                <div className="w-[50%] ml-2">
                  <h3 className="mb-1 font-bold">Phone</h3>
                  <input
                    type="phone"
                    name="phone"
                    value={data?.personalInfo?.successorTrustee?.phone}
                    onChange={handleSuccessorTrusteeChange}
                    class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                    placeholder="Phone"
                  />
                </div>
              </div>
            </div>
          )}
          {data.personalInfo.how_many_successor_Trustees_do_you_want_to_name
            .options[1].value && (
            <div>
              <h3 className="mb-1 mt-3 font-bold">Successor Trustees</h3>
              {data.personalInfo.successorTrustees.map((item, i) => (
                <div
                  key={i}
                  className={`${
                    i % 2 === 0 ? 'bg-slate-200' : ''
                  } p-5 rounded-lg mb-3`}
                >
                  <div>
                    <i
                      className="far fa-times-circle cursor-pointer"
                      onClick={() => removeSuccessorTrustee(i)}
                    ></i>
                    <span className="font-bold ml-3">
                      Successor Trustee {i + 1}
                    </span>
                  </div>
                  <h3 className="mb-1 font-bold">Name</h3>
                  <div className="mb-2 flex">
                    <input
                      type="text"
                      value={item.firstName}
                      name={'firstName'}
                      onChange={(e) =>
                        handleSuccessorTrustees(
                          i,
                          e.target.name,
                          e.target.value
                        )
                      }
                      className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
                      placeholder="First"
                    />
                    <input
                      type="text"
                      value={item.middleName}
                      name={'middleName'}
                      onChange={(e) =>
                        handleSuccessorTrustees(
                          i,
                          e.target.name,
                          e.target.value
                        )
                      }
                      className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
                      placeholder="Middle"
                    />
                    <input
                      type="text"
                      value={item.lastName}
                      name={'lastName'}
                      onChange={(e) =>
                        handleSuccessorTrustees(
                          i,
                          e.target.name,
                          e.target.value
                        )
                      }
                      className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-[33%]"
                      placeholder="Last"
                    />
                  </div>
                  <div className="mb-2 flex">
                    <div className="w-[50%]">
                      <h3 className="mb-1 font-bold">Email</h3>
                      <input
                        type="email"
                        name="email"
                        value={item?.email}
                        onChange={(e) =>
                          handleSuccessorTrustees(
                            i,
                            e.target.name,
                            e.target.value
                          )
                        }
                        class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                        placeholder="Email"
                      />
                    </div>
                    <div className="w-[50%] ml-2">
                      <h3 className="mb-1 font-bold">Phone</h3>
                      <input
                        type="phone"
                        name="phone"
                        value={item?.phone}
                        onChange={(e) =>
                          handleSuccessorTrustees(
                            i,
                            e.target.name,
                            e.target.value
                          )
                        }
                        class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-2">
                <button
                  className="border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded"
                  onClick={() => addSuccessorTrustee()}
                >
                  Add Successor Trustee
                </button>
              </div>
            </div>
          )}
          <h3 className="mb-1 mt-2 font-bold">
            {/* Is there anyone that you do not want serving as a successor Trustee? */}
            {
              data.personalInfo
                .is_there_anyone_that_you_do_not_want_serving_as_a_successor_Trustee
                .question
            }
          </h3>
          <div className="space-y-4">
            <label className="flex items-center">
              <input
                type="radio"
                checked={
                  data.personalInfo
                    .is_there_anyone_that_you_do_not_want_serving_as_a_successor_Trustee
                    .options[0].value
                }
                onChange={() =>
                  is_there_anyone_that_you_do_not_want_serving_as_a_successor_Trustee(
                    0
                  )
                }
                className="form-radio h-5 w-5 text-blue-500"
              />
              <span className="ml-2 text-gray-700">
                {
                  data.personalInfo
                    .is_there_anyone_that_you_do_not_want_serving_as_a_successor_Trustee
                    .options[0].label
                }
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={
                  data.personalInfo
                    .is_there_anyone_that_you_do_not_want_serving_as_a_successor_Trustee
                    .options[1].value
                }
                onChange={() =>
                  is_there_anyone_that_you_do_not_want_serving_as_a_successor_Trustee(
                    1
                  )
                }
                className="form-radio h-5 w-5 text-blue-500"
              />
              <span className="ml-2 text-gray-700">No</span>
            </label>
          </div>
        </div>
      )}
      {(activeStep === 1 || notActionBtns) && (
        <div>
          <h1 className="m-y-2 text-3xl text-center font-bold">
            TRUST ADMINISTRATION ON YOUR DEATH
          </h1>
          <h3 className="m-y-2 text-lg text-center font-bold">
            Upon your death, three things will happen with your trust estate
          </h3>
          <ol className="list-decimal list-inside">
            <li>
              Your trust property will be marshaled, inventoried, and all
              remaining expenses and taxes will be paid.
            </li>
            <li>Special distributions (if any) will be made;</li>
            <li>
              Lastly, the remaineder of your trust property will be distributed.
            </li>
          </ol>
          <h3 className="mt-5 text-lg text-center font-bold">
            THE FOLLOWING SECTIONS PROVIDE INSTRUCTIONS REGARDING THE
            DISTRIBUTIONS
          </h3>
          <h3 className="mt-5 text-lg text-center font-bold">
            SPECIFIC DISTRIBUTIONS
          </h3>
          <h3 className="mt-5 font-bold">
            {/* Do you want to make any specific gifts? */}
            {data.personalInfo.do_you_want_to_make_any_specific_gifts.question}
          </h3>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                checked={
                  data.personalInfo.do_you_want_to_make_any_specific_gifts
                    .options[0].value
                }
                onChange={() => do_you_want_to_make_any_specific_gifts(0)}
                className="form-radio h-5 w-5 text-blue-500"
              />
              <span className="ml-2 text-gray-700">
                {
                  data.personalInfo.do_you_want_to_make_any_specific_gifts
                    .options[0].label
                }
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={
                  data.personalInfo.do_you_want_to_make_any_specific_gifts
                    .options[1].value
                }
                onChange={() => do_you_want_to_make_any_specific_gifts(1)}
                className="form-radio h-5 w-5 text-blue-500"
              />
              <span className="ml-2 text-gray-700">
                {
                  data.personalInfo.do_you_want_to_make_any_specific_gifts
                    .options[1].label
                }
              </span>
            </label>
          </div>
          <p class="mb-5">
            <i className="text-sm">
              This would include things like heirlooms, jewelry, tools, or other
              special items that you want a particular person to have. If you do
              not have the item at the time of your death or if the person
              predeceases you, the gift lapses (it is revoked)
            </i>
          </p>

          {data.personalInfo.do_you_want_to_make_any_specific_gifts.options[0]
            .value && (
            <div>
              {data.personalInfo.gifts.map((item, i) => (
                <div
                  key={i}
                  className={`${
                    i % 2 === 0 ? 'bg-slate-200' : ''
                  } p-5 rounded-lg mb-3`}
                >
                  <div>
                    <i
                      className="far fa-times-circle cursor-pointer"
                      onClick={() => removeGift(i)}
                    ></i>
                    <span className="font-bold ml-3">Gift {i + 1}</span>
                  </div>
                  <div className="mb-2 flex">
                    <div className="w-[50%]">
                      <h3 className="mb-1 font-bold">Type of Gift</h3>
                      <select
                        class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
                        name="giftType"
                        value={item?.giftType}
                        onChange={(e) =>
                          handleGifts(i, e.target.name, e.target.value)
                        }
                      >
                        <option value="Cash gift">Cash gift</option>
                        <option value="Gift of personal property">
                          Gift of personal property
                        </option>
                        <option value="Gift of real property">
                          Gift of real property
                        </option>
                        <option value="Gift of">Gift of</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-2 flex">
                    <div className="w-full">
                      <h3 className="mb-1 font-bold">Name of Individual</h3>
                      <input
                        type="text"
                        name="nameOfIndividual"
                        value={item?.nameOfIndividual}
                        onChange={(e) =>
                          handleGifts(i, e.target.name, e.target.value)
                        }
                        class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                        placeholder="Name of Individual"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-2 flex">
                    <div className="w-[50%]">
                      <h3 className="mb-1 font-bold">Type of Gift</h3>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            checked={item.typeOfGift[0].value}
                            onChange={() => handleTypeOfGifts(i, 0)}
                            className="form-radio h-5 w-5 text-blue-500"
                          />
                          <span className="ml-2 text-gray-700">
                            {/* Cash */}
                            {item.typeOfGift[0].label}
                          </span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            checked={item.typeOfGift[1].value}
                            onChange={() => handleTypeOfGifts(i, 1)}
                            className="form-radio h-5 w-5 text-blue-500"
                          />
                          <span className="ml-2 text-gray-700">
                            {/* Item of personal property */}
                            {item.typeOfGift[1].label}
                          </span>
                        </label>
                      </div>
                    </div>
                    {item.typeOfGift[0].value && (
                      <div className="w-[50%]">
                        <h3 className="mb-1 font-bold">Cash Gift Amount</h3>
                        <input
                          type="number"
                          name="cashGiftAmount"
                          value={item?.cashGiftAmount}
                          onChange={(e) =>
                            handleGifts(i, e.target.name, e.target.value)
                          }
                          class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                          placeholder="Amount"
                          required
                        />
                      </div>
                    )}
                  </div>
                  {item.typeOfGift[1].value && (
                    <div className="mb-2 flex">
                      <div className="w-full">
                        <h3 className="mb-1 font-bold">
                          Describe the item of personal property
                        </h3>
                        <input
                          type="text"
                          name="describeTheItemOfPersonalProperty"
                          value={item?.describeTheItemOfPersonalProperty}
                          onChange={(e) =>
                            handleGifts(i, e.target.name, e.target.value)
                          }
                          class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                          placeholder="Describe the item of personal property"
                          required
                        />
                      </div>
                    </div>
                  )}
                  <div className="mb-2 flex">
                    <div className="w-full">
                      <h3 className="mb-1 font-bold">
                        Make any comments, remarks or your reason for the gift
                        (Optional)
                      </h3>
                      <input
                        type="text"
                        name="makeAnyCommentsRemarksOrYourReasonForTheGift"
                        value={
                          item?.makeAnyCommentsRemarksOrYourReasonForTheGift
                        }
                        onChange={(e) =>
                          handleGifts(i, e.target.name, e.target.value)
                        }
                        class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                        placeholder="Comment"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-2">
                <button
                  className="border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded"
                  onClick={() => addGift()}
                >
                  Add Gift
                </button>
              </div>
            </div>
          )}
          <h3 className="mt-5 text-lg text-center font-bold">
            DISTRIBUTION OF THE RESIDUE
          </h3>
          <p>
            Any remaining assets will be distributed as you specifiy in this
            section.{' '}
          </p>
          <p>
            We advise you to use percentages (not specific dollar amounts). This
            will make things much easier to administer when the time comes.
          </p>
          <h3 className="mt-5 font-bold">
            {/* First, do you want to make any charitable donations? */}
            {
              data.personalInfo
                .first_do_you_want_to_make_any_charitable_donations.question
            }
          </h3>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                checked={
                  data.personalInfo
                    .first_do_you_want_to_make_any_charitable_donations
                    .options[0].value
                }
                onChange={() =>
                  first_do_you_want_to_make_any_charitable_donations(0)
                }
                className="form-radio h-5 w-5 text-blue-500"
              />
              <span className="ml-2 text-gray-700">
                {
                  data.personalInfo
                    .first_do_you_want_to_make_any_charitable_donations
                    .options[0].label
                }
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={
                  data.personalInfo
                    .first_do_you_want_to_make_any_charitable_donations
                    .options[1].value
                }
                onChange={() =>
                  first_do_you_want_to_make_any_charitable_donations(1)
                }
                className="form-radio h-5 w-5 text-blue-500"
              />
              <span className="ml-2 text-gray-700">
                {
                  data.personalInfo
                    .first_do_you_want_to_make_any_charitable_donations
                    .options[1].label
                }
              </span>
            </label>
          </div>
          {data.personalInfo.first_do_you_want_to_make_any_charitable_donations
            .options[0].value && (
            <>
              <div>
                <h3 className="font-bold mb-3">Charitable Donations</h3>
                {data.personalInfo.charitableDonations1.map((item, i) => (
                  <div
                    key={i}
                    className={`${
                      i % 2 === 0 ? 'bg-slate-200' : ''
                    } p-5 rounded-lg mb-3`}
                  >
                    <div>
                      <i
                        className="far fa-times-circle cursor-pointer"
                        onClick={() => removeCharity1(i)}
                      ></i>
                      <span className="font-bold ml-3">Charity {i + 1}</span>
                    </div>
                    <div className="mb-2 flex">
                      <div className="w-[50%] mr-2">
                        <h3 className="mb-1 font-bold">Name of Charity</h3>
                        <input
                          type="text"
                          name="nameOfCharity"
                          value={item?.nameOfCharity}
                          onChange={(e) =>
                            handleCharity1(i, e.target.name, e.target.value)
                          }
                          class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                          required
                        />
                      </div>
                      <div className="w-[50%]">
                        <h3 className="mb-1 font-bold">
                          Percentage of Residue
                        </h3>
                        <input
                          type="text"
                          name="percentageOfResidue"
                          value={item?.percentageOfResidue}
                          onChange={(e) =>
                            handleCharity1(i, e.target.name, e.target.value)
                          }
                          class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-2">
                      <h3 className="mb-1 font-bold">Charity's Address</h3>
                      <input
                        type="text"
                        name="addressLine1"
                        value={item?.addressLine1}
                        onChange={(e) =>
                          handleCharity1(i, e.target.name, e.target.value)
                        }
                        class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
                        placeholder="Address Line 1"
                        required
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="addressLine2"
                        value={item?.addressLine2}
                        onChange={(e) =>
                          handleCharity1(i, e.target.name, e.target.value)
                        }
                        class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
                        placeholder="Address Line 2"
                      />
                    </div>
                    <div className="mb-2 flex">
                      <input
                        type="text"
                        name="city"
                        value={item?.city}
                        onChange={(e) =>
                          handleCharity1(i, e.target.name, e.target.value)
                        }
                        class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
                        placeholder="City"
                        required
                      />
                      <div className="w-[33%] mr-2">
                        <Autocomplete
                          fullWidth
                          options={stateList}
                          value={item?.state}
                          getOptionLabel={(option) => option.label}
                          onChange={(_, value) =>
                            handleCharity1(i, 'state', value)
                          }
                          renderInput={(params) => (
                            <TextField
                              label="State"
                              variant="outlined"
                              placeholder="Select State"
                              name="state"
                              // error={
                              //   !!touched?.billingAddress && !!errors?.billingAddress?.country
                              // }
                              // helperText={
                              //   touched.billingAddress &&
                              //   errors?.billingAddress?.country &&
                              //   'required'
                              // }
                              {...params}
                            />
                          )}
                        />
                      </div>
                      <input
                        type="text"
                        name="zipCode"
                        value={item?.zipCode}
                        onChange={(e) =>
                          handleCharity1(i, e.target.name, e.target.value)
                        }
                        class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-[33%]"
                        placeholder="zipCode"
                        required
                      />
                    </div>
                    <div className="mb-2 flex">
                      <div className="w-full">
                        <h3 className="mb-1 font-bold">Purpose for the gift</h3>
                        <input
                          type="text"
                          name="purposeForTheGift"
                          value={item?.purposeForTheGift}
                          onChange={(e) =>
                            handleCharity1(i, e.target.name, e.target.value)
                          }
                          class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                          required
                        />
                        <i className="text-sm">
                          If left blank, the gift will be used for the charity's
                          general charitable purposes
                        </i>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="mt-2">
                  <button
                    className="border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded"
                    onClick={() => addCharity1()}
                  >
                    Add Charity
                  </button>
                </div>
              </div>
            </>
          )}
          <h1 className="mt-5 font-bold">REMAINDER BENEFICIARIES</h1>
          <i className="mt-2">Remember - the total must add up to 100%</i>
          <div className="mt-3">
            {data.personalInfo.beneficiaries.map((item, i) => (
              <div
                key={i}
                className={`${
                  i % 2 === 0 ? 'bg-slate-200' : ''
                } p-5 rounded-lg mb-3`}
              >
                <div>
                  <i
                    className="far fa-times-circle cursor-pointer"
                    onClick={() => removeBeneficiary(i)}
                  ></i>
                  <span className="font-bold ml-3">Beneficiary {i + 1}</span>
                </div>
                <h3 className="mb-1 font-bold">Name</h3>
                <div className="mb-2 flex">
                  <input
                    type="text"
                    name="firstName"
                    value={item?.firstName}
                    onChange={(e) =>
                      handleBeneficiariesFields(
                        i,
                        e.target.name,
                        e.target.value
                      )
                    }
                    class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[50%]"
                    placeholder="First"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={item?.lastName}
                    onChange={(e) =>
                      handleBeneficiariesFields(
                        i,
                        e.target.name,
                        e.target.value
                      )
                    }
                    class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-[50%]"
                    placeholder="Last"
                    required
                  />
                </div>
                <h3 className="mb-1 font-bold">
                  City and State where beneficiary lives
                </h3>
                <div className="mb-2 flex">
                  <input
                    type="text"
                    name="city"
                    value={item?.city}
                    onChange={(e) =>
                      handleBeneficiariesFields(
                        i,
                        e.target.name,
                        e.target.value
                      )
                    }
                    class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[50%]"
                    placeholder="City"
                    required
                  />
                  <div className="w-[50%]">
                    <Autocomplete
                      fullWidth
                      options={stateList}
                      value={item?.state}
                      getOptionLabel={(option) => option.label}
                      onChange={(_, value) =>
                        handleBeneficiariesFields(i, 'state', value)
                      }
                      renderInput={(params) => (
                        <TextField
                          label="State"
                          variant="outlined"
                          placeholder="Select State"
                          name="state"
                          // error={
                          //   !!touched?.billingAddress && !!errors?.billingAddress?.country
                          // }
                          // helperText={
                          //   touched.billingAddress &&
                          //   errors?.billingAddress?.country &&
                          //   'required'
                          // }
                          {...params}
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="mb-2 flex">
                  <div className="w-[70%] mr-2">
                    <h3 className="mb-1 font-bold">
                      Beneficiary's relationship to you
                    </h3>
                    <input
                      type="text"
                      name="Beneficiary_relationship_to_you"
                      value={item?.Beneficiary_relationship_to_you}
                      onChange={(e) =>
                        handleBeneficiariesFields(
                          i,
                          e.target.name,
                          e.target.value
                        )
                      }
                      class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                      required
                    />
                  </div>
                  <div className="w-[30%]">
                    <h3 className="mb-1 font-bold">Percentage Share</h3>
                    <input
                      type="text"
                      name="percentageShare"
                      value={item?.percentageShare}
                      onChange={(e) =>
                        handleBeneficiariesFields(
                          i,
                          e.target.name,
                          e.target.value
                        )
                      }
                      class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                      required
                    />
                  </div>
                </div>
                <div className="mb-2 flex">
                  <div className="w-full">
                    <h3 className="mb-1 font-bold">
                      Any statements that you wish to make (optional)
                    </h3>
                    <input
                      type="text"
                      name="any_statements_that_you_wish_to_make"
                      value={item?.any_statements_that_you_wish_to_make}
                      onChange={(e) =>
                        handleBeneficiariesFields(
                          i,
                          e.target.name,
                          e.target.value
                        )
                      }
                      class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                    />
                  </div>
                </div>
                <div className="mb-2 flex">
                  <div className="w-full">
                    <h3 className="mb-1 mt-3 font-bold">Gift Structure</h3>
                    <h3 className="mb-1 mt-3 font-bold">
                      What happens if this person predeceases you?
                    </h3>
                    <div className="space-y-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          checked={
                            item.what_happens_if_this_person_predeceases_you[0]
                              .value
                          }
                          onChange={() =>
                            what_happens_if_this_person_predeceases_you(i, 0)
                          }
                          className="form-radio h-5 w-5 text-blue-500"
                        />
                        <span className="ml-2 text-gray-700">
                          {/* The deceased beneficiary's share goes to his issue (by
                      right of representation) */}
                          {
                            item.what_happens_if_this_person_predeceases_you[0]
                              .label
                          }
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          checked={
                            item.what_happens_if_this_person_predeceases_you[1]
                              .value
                          }
                          onChange={() =>
                            what_happens_if_this_person_predeceases_you(i, 1)
                          }
                          className="form-radio h-5 w-5 text-blue-500"
                        />
                        <span className="ml-2 text-gray-700">
                          {/* The gift lapses and is divided equally among the remaining
                      living beneficiaries */}
                          {
                            item.what_happens_if_this_person_predeceases_you[1]
                              .label
                          }
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-1 flex">
                  <div className="w-full">
                    <h3 className="mb-1 font-bold">
                      Will this beneficiary's share be given
                      outright,distributed at certain time intervals, or held in
                      trust for his or her life
                    </h3>
                    <input
                      type="text"
                      name="will_this_beneficiarys_share_be_given_outright"
                      value={
                        item?.will_this_beneficiarys_share_be_given_outright
                      }
                      onChange={(e) =>
                        handleBeneficiariesFields(
                          i,
                          e.target.name,
                          e.target.value
                        )
                      }
                      class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                      required
                    />
                  </div>
                </div>
                <i>
                  If a beneficiary is going to receive a sizable amount of
                  money, you may want to have their share held in trust.
                </i>
                <p>
                  Doing this will protect the gift (asset protection) and guard
                  against judgement creditors, or possible divorce attachment)
                </p>

                <div className="mb-1 mt-3 flex">
                  <div className="w-full">
                    <h3 className="mb-1 font-bold">
                      Pick your age for disbursement
                    </h3>
                    <input
                      type="text"
                      name="pick_your_age_for_disbursement"
                      value={item?.pick_your_age_for_disbursement}
                      onChange={(e) =>
                        handleBeneficiariesFields(
                          i,
                          e.target.name,
                          e.target.value
                        )
                      }
                      class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                      required
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              class="border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded"
              onClick={() => addBeneficiary()}
            >
              Add Beneficiary
            </button>
          </div>
          <h3 className="mt-5 font-bold">Contingent Residue Beneficiaries</h3>
          <p className="text-sm">
            Should there be no one to receive your trust residue, where would
            you like it to be distributed?{' '}
          </p>
          <p className="mt-3 text-sm">
            if you identify more than one contingent residue beneficiary, the
            allocation to each will be an equal share.
          </p>
          <h3 className="mt-5 font-bold">Contingent Residue Distribution</h3>
          <div className="space-y-4 mb-3">
            <label className="flex items-center">
              <input
                type="radio"
                checked={
                  data.personalInfo.contingent_Residue_Distribution[0].value
                }
                onChange={() => contingent_Residue_Distribution(0)}
                className="form-radio h-5 w-5 text-blue-500"
              />
              <span className="ml-2 text-gray-700">My heirs at law</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={
                  data.personalInfo.contingent_Residue_Distribution[1].value
                }
                onChange={() => contingent_Residue_Distribution(1)}
                className="form-radio h-5 w-5 text-blue-500"
              />
              <span className="ml-2 text-gray-700">
                the individual(s) named below
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={
                  data.personalInfo.contingent_Residue_Distribution[2].value
                }
                onChange={() => contingent_Residue_Distribution(2)}
                className="form-radio h-5 w-5 text-blue-500"
              />
              <span className="ml-2 text-gray-700">
                the charitable organization(s) named below
              </span>
            </label>
          </div>
          {data.personalInfo.contingent_Residue_Distribution[1].value && (
            <div className="mt-3">
              {data.personalInfo.beneficiaries1.map((item, i) => (
                <div
                  key={i}
                  className={`${
                    i % 2 === 0 ? 'bg-slate-200' : ''
                  } p-5 rounded-lg mb-3`}
                >
                  <div>
                    <i
                      className="far fa-times-circle cursor-pointer"
                      onClick={() => removeBeneficiary1(i)}
                    ></i>
                    <span className="font-bold ml-3">Beneficiary {i + 1}</span>
                  </div>
                  <h3 className="mb-1 font-bold">Name</h3>
                  <div className="mb-2 flex">
                    <input
                      type="text"
                      name="firstName"
                      value={item?.firstName}
                      onChange={(e) =>
                        handleBeneficiariesFields1(
                          i,
                          e.target.name,
                          e.target.value
                        )
                      }
                      class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[50%]"
                      placeholder="First"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={item?.lastName}
                      onChange={(e) =>
                        handleBeneficiariesFields1(
                          i,
                          e.target.name,
                          e.target.value
                        )
                      }
                      class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-[50%]"
                      placeholder="Last"
                      required
                    />
                  </div>
                  <h3 className="mb-1 font-bold">
                    City and State where beneficiary lives
                  </h3>
                  <div className="mb-2 flex">
                    <input
                      type="text"
                      name="city"
                      value={item?.city}
                      onChange={(e) =>
                        handleBeneficiariesFields1(
                          i,
                          e.target.name,
                          e.target.value
                        )
                      }
                      class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[50%]"
                      placeholder="City"
                      required
                    />
                    <div className="w-[50%]">
                      <Autocomplete
                        fullWidth
                        options={stateList}
                        value={item?.state}
                        getOptionLabel={(option) => option.label}
                        onChange={(_, value) =>
                          handleBeneficiariesFields1(i, 'state', value)
                        }
                        renderInput={(params) => (
                          <TextField
                            label="State"
                            variant="outlined"
                            placeholder="Select State"
                            name="state"
                            // error={
                            //   !!touched?.billingAddress && !!errors?.billingAddress?.country
                            // }
                            // helperText={
                            //   touched.billingAddress &&
                            //   errors?.billingAddress?.country &&
                            //   'required'
                            // }
                            {...params}
                          />
                        )}
                      />
                    </div>
                  </div>
                  <div className="mb-2 flex">
                    <div className="w-[70%] mr-2">
                      <h3 className="mb-1 font-bold">
                        Beneficiary's relationship to you
                      </h3>
                      <input
                        type="text"
                        name="Beneficiary_relationship_to_you"
                        value={item?.Beneficiary_relationship_to_you}
                        onChange={(e) =>
                          handleBeneficiariesFields1(
                            i,
                            e.target.name,
                            e.target.value
                          )
                        }
                        class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                        required
                      />
                    </div>
                    <div className="w-[30%]">
                      <h3 className="mb-1 font-bold">Percentage Share</h3>
                      <input
                        type="text"
                        name="percentageShare"
                        value={item?.percentageShare}
                        onChange={(e) =>
                          handleBeneficiariesFields1(
                            i,
                            e.target.name,
                            e.target.value
                          )
                        }
                        class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-2 flex">
                    <div className="w-full">
                      <h3 className="mb-1 font-bold">
                        Any statements that you wish to make (optional)
                      </h3>
                      <input
                        type="text"
                        name="any_statements_that_you_wish_to_make"
                        value={item?.any_statements_that_you_wish_to_make}
                        onChange={(e) =>
                          handleBeneficiariesFields1(
                            i,
                            e.target.name,
                            e.target.value
                          )
                        }
                        class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button
                class="border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded"
                onClick={() => addBeneficiary1()}
              >
                Add Beneficiary
              </button>
            </div>
          )}
          {data.personalInfo.contingent_Residue_Distribution[2].value && (
            <div>
              <h3 className="font-bold mb-3">Charitable Donations</h3>
              {data.personalInfo.charitableDonations.map((item, i) => (
                <div
                  key={i}
                  className={`${
                    i % 2 === 0 ? 'bg-slate-200' : ''
                  } p-5 rounded-lg mb-3`}
                >
                  <div>
                    <i
                      className="far fa-times-circle cursor-pointer"
                      onClick={() => removeCharity(i)}
                    ></i>
                    <span className="font-bold ml-3">Charity {i + 1}</span>
                  </div>
                  <div className="mb-2 flex">
                    <div className="w-[50%] mr-2">
                      <h3 className="mb-1 font-bold">Name of Charity</h3>
                      <input
                        type="text"
                        name="nameOfCharity"
                        value={item?.nameOfCharity}
                        onChange={(e) =>
                          handleCharity(i, e.target.name, e.target.value)
                        }
                        class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                        required
                      />
                    </div>
                    <div className="w-[50%]">
                      <h3 className="mb-1 font-bold">Percentage of Residue</h3>
                      <input
                        type="text"
                        name="percentageOfResidue"
                        value={item?.percentageOfResidue}
                        onChange={(e) =>
                          handleCharity(i, e.target.name, e.target.value)
                        }
                        class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <h3 className="mb-1 font-bold">Charity's Address</h3>
                    <input
                      type="text"
                      name="addressLine1"
                      value={item?.addressLine1}
                      onChange={(e) =>
                        handleCharity(i, e.target.name, e.target.value)
                      }
                      class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
                      placeholder="Address Line 1"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      name="addressLine2"
                      value={item?.addressLine2}
                      onChange={(e) =>
                        handleCharity(i, e.target.name, e.target.value)
                      }
                      class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
                      placeholder="Address Line 2"
                    />
                  </div>
                  <div className="mb-2 flex">
                    <input
                      type="text"
                      name="city"
                      value={item?.city}
                      onChange={(e) =>
                        handleCharity(i, e.target.name, e.target.value)
                      }
                      class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
                      placeholder="City"
                      required
                    />
                    <div className="w-[33%] mr-2">
                      <Autocomplete
                        fullWidth
                        options={stateList}
                        value={item?.state}
                        getOptionLabel={(option) => option.label}
                        onChange={(_, value) =>
                          handleCharity(i, 'state', value)
                        }
                        renderInput={(params) => (
                          <TextField
                            label="State"
                            variant="outlined"
                            placeholder="Select State"
                            name="state"
                            // error={
                            //   !!touched?.billingAddress && !!errors?.billingAddress?.country
                            // }
                            // helperText={
                            //   touched.billingAddress &&
                            //   errors?.billingAddress?.country &&
                            //   'required'
                            // }
                            {...params}
                          />
                        )}
                      />
                    </div>
                    <input
                      type="text"
                      name="zipCode"
                      value={item?.zipCode}
                      onChange={(e) =>
                        handleCharity(i, e.target.name, e.target.value)
                      }
                      class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-[33%]"
                      placeholder="zipCode"
                      required
                    />
                  </div>
                  <div className="mb-2 flex">
                    <div className="w-full">
                      <h3 className="mb-1 font-bold">Purpose for the gift</h3>
                      <input
                        type="text"
                        name="purposeForTheGift"
                        value={item?.purposeForTheGift}
                        onChange={(e) =>
                          handleCharity(i, e.target.name, e.target.value)
                        }
                        class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                        required
                      />
                      <i className="text-sm">
                        If left blank, the gift will be used for the charity's
                        general charitable purposes
                      </i>
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-2">
                <button
                  className="border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded"
                  onClick={() => addCharity()}
                >
                  Add Charity
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      {!notActionBtns && (
        <div className="flex justify-end">
          <button
            class={`bg-[#CCCCCC] text-white font-bold py-2 px-4 rounded disabled`}
            disabled={step === 1}
            onClick={() => {
              if (activeStep === 0) {
                setStep((prev) => prev - 1);
              } else {
                setActiveStep((prev) => prev - 1);
              }
            }}
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
      )}
    </div>
  );
};

export default Step11;
