import React from 'react';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const Step6 = ({ data, setData }) => {
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
            status: '',
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
  return (
    <div>
      <h1 className="m-y-2 text-2xl text-center font-bold">
        TRUST ADMINISTRATION ON YOUR DEATH
      </h1>
      <h3 className="m-y-2 text-lg text-center font-bold">
        Upon your death, three things will happen with your trust estate
      </h3>
      <ol className="list-decimal list-inside">
        <li>
          Your trust property will be marshaled, inventoried, and all remaining
          expenses and taxes will be paid.
        </li>
        <li>Special distributions (if any) will be made;</li>
        <li>
          Lastly, the remaineder of your trust property will be distributed.
        </li>
      </ol>
      <h3 className="mt-5 text-lg text-center font-bold">
        THE FOLLOWING SECTIONS PROVIDE INSTRUCTIONS REGARDING THE DISTRIBUTIONS
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
          special items that you want a particular person to have. If you do not
          have the item at the time of your death or if the person predeceases
          you, the gift lapses (it is revoked)
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
                      type="text"
                      name="cashGiftAmount"
                      value={item?.cashGiftAmount}
                      onChange={(e) =>
                        handleGifts(i, e.target.name, e.target.value)
                      }
                      class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                      placeholder="Amount"
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
                    value={item?.makeAnyCommentsRemarksOrYourReasonForTheGift}
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
          data.personalInfo.first_do_you_want_to_make_any_charitable_donations
            .question
        }
      </h3>
      <div className="flex space-x-4">
        <label className="flex items-center">
          <input
            type="radio"
            checked={
              data.personalInfo
                .first_do_you_want_to_make_any_charitable_donations.options[0]
                .value
            }
            onChange={() =>
              first_do_you_want_to_make_any_charitable_donations(0)
            }
            className="form-radio h-5 w-5 text-blue-500"
          />
          <span className="ml-2 text-gray-700">
            {
              data.personalInfo
                .first_do_you_want_to_make_any_charitable_donations.options[0]
                .label
            }
          </span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            checked={
              data.personalInfo
                .first_do_you_want_to_make_any_charitable_donations.options[1]
                .value
            }
            onChange={() =>
              first_do_you_want_to_make_any_charitable_donations(1)
            }
            className="form-radio h-5 w-5 text-blue-500"
          />
          <span className="ml-2 text-gray-700">
            {
              data.personalInfo
                .first_do_you_want_to_make_any_charitable_donations.options[1]
                .label
            }
          </span>
        </label>
      </div>
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
                value={data?.personalInfo?.beneficiaries?.firstName}
                onChange={(e) =>
                  handleBeneficiariesFields(i, e.target.name, e.target.value)
                }
                class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[50%]"
                placeholder="First"
              />
              <input
                type="text"
                name="lastName"
                value={data?.personalInfo?.beneficiaries?.lastName}
                onChange={(e) =>
                  handleBeneficiariesFields(i, e.target.name, e.target.value)
                }
                class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-[50%]"
                placeholder="Middle"
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
                  handleBeneficiariesFields(i, e.target.name, e.target.value)
                }
                class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[50%]"
                placeholder="City"
              />
              <input
                type="text"
                name="state"
                value={item?.state}
                onChange={(e) =>
                  handleBeneficiariesFields(i, e.target.name, e.target.value)
                }
                class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-[50%]"
                placeholder="State"
              />
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
                    handleBeneficiariesFields(i, e.target.name, e.target.value)
                  }
                  class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                />
              </div>
              <div className="w-[30%]">
                <h3 className="mb-1 font-bold">Percentage Share</h3>
                <input
                  type="text"
                  name="percentageShare"
                  value={item?.percentageShare}
                  onChange={(e) =>
                    handleBeneficiariesFields(i, e.target.name, e.target.value)
                  }
                  class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
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
                    handleBeneficiariesFields(i, e.target.name, e.target.value)
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
                  Will this beneficiary's share be given outright,distributed at
                  certain time intervals, or held in trust for his or her life
                </h3>
                <input
                  type="text"
                  name="will_this_beneficiarys_share_be_given_outright"
                  value={item?.will_this_beneficiarys_share_be_given_outright}
                  onChange={(e) =>
                    handleBeneficiariesFields(i, e.target.name, e.target.value)
                  }
                  class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
                />
              </div>
            </div>
            <i>
              If a beneficiary is going to receive a sizable amount of money,
              you may want to have their share held in trust.
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
                    handleBeneficiariesFields(i, e.target.name, e.target.value)
                  }
                  class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-full"
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
        Should there be no one to receive your trust residue, where would you
        like it to be distributed?{' '}
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
            checked={data.personalInfo.contingent_Residue_Distribution[0].value}
            onChange={() => contingent_Residue_Distribution(0)}
            className="form-radio h-5 w-5 text-blue-500"
          />
          <span className="ml-2 text-gray-700">My heirs at law</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            checked={data.personalInfo.contingent_Residue_Distribution[1].value}
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
            checked={data.personalInfo.contingent_Residue_Distribution[2].value}
            onChange={() => contingent_Residue_Distribution(2)}
            className="form-radio h-5 w-5 text-blue-500"
          />
          <span className="ml-2 text-gray-700">
            the charitable organization(s) named below
          </span>
        </label>
      </div>
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
                />
                <select
                  class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
                  name="state"
                  value={item?.state}
                  onChange={(e) =>
                    handleCharity(i, e.target.name, e.target.value)
                  }
                >
                  <option value="Armed Forces America">
                    Armed Forces America
                  </option>
                  <option value="Armed Forces">Armed Forces</option>
                  <option value="Armed Forces Pacific">
                    Armed Forces Pacific
                  </option>
                  <option value="Alabama">Alabama</option>
                </select>
                <input
                  type="text"
                  name="zipCode"
                  value={item?.zipCode}
                  onChange={(e) =>
                    handleCharity(i, e.target.name, e.target.value)
                  }
                  class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-[33%]"
                  placeholder="zipCode"
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
  );
};

export default Step6;
