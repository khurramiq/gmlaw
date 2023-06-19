import React from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const Step5 = ({ data, setData }) => {
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
  const do_you_want_to_make_any_specific_gifts = (i) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        do_you_want_to_make_any_specific_gifts: {
          ...data.personalInfo.do_you_want_to_make_any_specific_gifts,
          options:
            data.personalInfo.do_you_want_to_make_any_specific_gifts.options.map(
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
  console.log('data', data);
  return (
    <div>
      <h1 className="mb-1 font-bold">FAMILY</h1>
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
                checked={data.personalInfo.deceasedChildren.options[0].value}
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
                checked={data.personalInfo.deceasedChildren.options[1].value}
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
                checked={data.personalInfo.deceasedChildren.options[2].value}
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
          <h3 className="mb-1 mt-3 font-bold">Living Children Information</h3>
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
              Add Another Living Children
            </button>
          </div>
        </div>
      )}
      {!data.personalInfo.deceasedChildren.options[0].value && (
        <div>
          <h3 className="mb-1 mt-3 font-bold">Deceased Children Information</h3>
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
                      handleDeceasedChildrenInformation(i, 'dateOfBirth', date)
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
                      handleDeceasedChildrenInformation(i, 'dateOfDeath', date)
                    }
                  />
                </div>
              </div>
              <h3 className="mb-1 mt-2 font-bold">
                {/* Did this child die leaving any children or grandchildren? */}
                {
                  item.did_this_child_die_leaving_any_children_or_grandchildren
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
        If you name more than one, you can have them act alone, in the order you
        name them, or you can have them act together as co-successor Trustees.
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
              data.personalInfo.how_many_successor_Trustees_do_you_want_to_name
                .options[0].value
            }
            onChange={() => how_many_successor_Trustees_do_you_want_to_name(0)}
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option1"
          />
          <span className="ml-2 text-gray-700">
            {
              data.personalInfo.how_many_successor_Trustees_do_you_want_to_name
                .options[0].label
            }
          </span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            checked={
              data.personalInfo.how_many_successor_Trustees_do_you_want_to_name
                .options[1].value
            }
            onChange={() => how_many_successor_Trustees_do_you_want_to_name(1)}
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option2"
          />
          <span className="ml-2 text-gray-700">
            {
              data.personalInfo.how_many_successor_Trustees_do_you_want_to_name
                .options[1].label
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
            <select
              class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
              name="state"
              value={data?.personalInfo?.successorTrustee?.state}
              onChange={handleSuccessorTrusteeChange}
            >
              <option value="Armed Forces America">Armed Forces America</option>
              <option value="Armed Forces">Armed Forces</option>
              <option value="Armed Forces Pacific">Armed Forces Pacific</option>
            </select>
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
                    handleSuccessorTrustees(i, e.target.name, e.target.value)
                  }
                  className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
                  placeholder="First"
                />
                <input
                  type="text"
                  value={item.middleName}
                  name={'middleName'}
                  onChange={(e) =>
                    handleSuccessorTrustees(i, e.target.name, e.target.value)
                  }
                  className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mr-2 w-[33%]"
                  placeholder="Middle"
                />
                <input
                  type="text"
                  value={item.lastName}
                  name={'lastName'}
                  onChange={(e) =>
                    handleSuccessorTrustees(i, e.target.name, e.target.value)
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
                      handleSuccessorTrustees(i, e.target.name, e.target.value)
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
                      handleSuccessorTrustees(i, e.target.name, e.target.value)
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
            name="radio-option"
            value="option1"
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
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option2"
          />
          <span className="ml-2 text-gray-700">No</span>
        </label>
      </div>
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
            name="radio-option"
            value="option1"
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
            name="radio-option"
            value="option2"
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
                  onClick={() => removeSuccessorTrustee(i)}
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
                        name="radio-option"
                        value="option1"
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
                        name="radio-option"
                        value="option2"
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
              onClick={() => addSuccessorTrustee()}
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
        First, do you want to make any charitable donations?
      </h3>
      <div className="flex space-x-4">
        <label className="flex items-center">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option1"
          />
          <span className="ml-2 text-gray-700">Yes</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option2"
          />
          <span className="ml-2 text-gray-700">No</span>
        </label>
      </div>
      <h1 className="mt-5 font-bold">REMAINDER BENEFICIARIES</h1>
      <i className="mt-2">Remember - the total must add up to 100%</i>
      <div className="mt-3">
        <button class="border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded">
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
      <div className="space-y-4">
        <label className="flex items-center">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option1"
          />
          <span className="ml-2 text-gray-700">My heirs at law</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option2"
          />
          <span className="ml-2 text-gray-700">
            the individual(s) named below
          </span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option3"
          />
          <span className="ml-2 text-gray-700">
            the charitable organization(s) named below
          </span>
        </label>
      </div>
      <div className="mt-3">
        <button class="border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded">
          Add Beneficiary
        </button>
      </div>
    </div>
  );
};

export default Step5;
