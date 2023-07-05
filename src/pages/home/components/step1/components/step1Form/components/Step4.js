import React from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const Step4 = ({
  notActionBtns,
  data,
  setData,
  activeStep,
  setStep,
  setActiveStep,
}) => {
  const creatingTrustType = (i) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        creatingTrustType: {
          ...data.personalInfo.creatingTrustType,
          options: data.personalInfo.creatingTrustType.options.map(
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
  const initialTrustee = (i) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        initialTrustee: {
          ...data.personalInfo.initialTrustee,
          options: data.personalInfo.initialTrustee.options.map(
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
  const what_do_you_want_to_name_your_trust = (i) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        what_do_you_want_to_name_your_trust: {
          ...data.personalInfo.what_do_you_want_to_name_your_trust,
          options:
            data.personalInfo.what_do_you_want_to_name_your_trust.options.map(
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
  const handleFirst_we_need_Change = (e) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        first_we_need_to_collect_some_information_about_your_existing_trust: {
          ...data.personalInfo
            .first_we_need_to_collect_some_information_about_your_existing_trust,
          [e.target.name]: e.target.value,
        },
      },
    });
  };
  const handleDate_Change = (value) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        first_we_need_to_collect_some_information_about_your_existing_trust: {
          ...data.personalInfo
            .first_we_need_to_collect_some_information_about_your_existing_trust,
          what_is_the_date_you_signed_your_existing_trust: value,
        },
      },
    });
  };
  const handleTrueFalse1 = (i) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        first_we_need_to_collect_some_information_about_your_existing_trust: {
          ...data.personalInfo
            .first_we_need_to_collect_some_information_about_your_existing_trust,
          after_you_signed_your_trust_did_you_ever_amend_it:
            data.personalInfo.first_we_need_to_collect_some_information_about_your_existing_trust.after_you_signed_your_trust_did_you_ever_amend_it.map(
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
  const handleTrueFalse2 = (i) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        first_we_need_to_collect_some_information_about_your_existing_trust: {
          ...data.personalInfo
            .first_we_need_to_collect_some_information_about_your_existing_trust,
          have_you_amended_your_Trust_before:
            data.personalInfo.first_we_need_to_collect_some_information_about_your_existing_trust.have_you_amended_your_Trust_before.map(
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
  const handleCoTrustee = (e) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        coTrustee: {
          ...data.personalInfo.coTrustee,
          [e.target.name]: e.target.value,
        },
      },
    });
  };
  const handleCoTrustees = (i, name, value) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        coTrustees: data.personalInfo.coTrustees.map((item, index) => {
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
  const addCoTrustee = () => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        coTrustees: [
          ...data.personalInfo.coTrustees,
          {
            firstName: '',
            middleName: '',
            lastName: '',
            relationship: '',
          },
        ],
      },
    });
  };
  const removeCoTrustee = (i) => {
    setData({
      ...data,
      personalInfo: {
        ...data.personalInfo,
        coTrustees: data.personalInfo.coTrustees.filter(
          (item, index) => i !== index
        ),
      },
    });
  };
  const handleNext = () => {
    if (activeStep === 3) {
      setStep((prev) => prev + 1);
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };
  return (
    <div>
      <h1 className="mb-1 font-bold text-center">LIVING TRUST PACKAGE</h1>
      <p>This set of documents includes the following:</p>
      <ul className="list-disc list-inside">
        <li>Living Trust Agreement;</li>
        <li>Certification of Trust;</li>
        <li>Assignment (transfer) of Personal Property to your Trust;</li>
        <li>Last Will and Testament;</li>
        <li>Durable Power of Attorney for finances;</li>
        <li>
          Health Care Power of Attorney and Living Will (sometimes called an
          Advance Health Care Directive); and
        </li>
        <li>HIPAA Confidentiality Waiver;</li>
      </ul>
      <h1 className="mb-1 font-bold text-center">DRAFTING YOUR DOCUMENTS</h1>
      <h1 className="mb-1 font-bold text-center">
        THERE ARE _____ SECTIONS, EACH CONTAINING A NUMBER OF QUESTIONS.
      </h1>
      <h1 className="mb-1 font-bold text-center">
        Anwer the questions accurately and completely and you will have a a well
        crafted document.
      </h1>
      <h1 className="mb-1 font-bold text-center">We promise!</h1>
      <p className="mb-1 text-center">
        YOU CAN TRACK YOUR PROGRESS ON THE PROGRSS BAR, AND YOU CAN STOP AND
        COME BACK AT ANY TIME WITHOUT LOSING YOUR PLACE.{' '}
      </p>
      <h1 className="mb-1 font-bold">SECTION ONE: TYPE OF TRUST</h1>
      <h3 className="mb-1 font-bold">
        {/* First,what type of trust are you creating? */}
        {data.personalInfo.creatingTrustType.question}
      </h3>
      <div className="space-y-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={data.personalInfo.creatingTrustType.options[0].value}
            onChange={() => creatingTrustType(0)}
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <span className="ml-2 text-gray-700">
            {data.personalInfo.creatingTrustType.options[0].label}
          </span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={data.personalInfo.creatingTrustType.options[1].value}
            onChange={() => creatingTrustType(1)}
            className="form-checkbox h-5 w-5 text-blue-500"
          />
          <span className="ml-2 text-gray-700">
            {data.personalInfo.creatingTrustType.options[1].label}
          </span>
        </label>
      </div>
      {data.personalInfo.creatingTrustType.options[1].value && (
        <>
          <h1 className="text-center font-bold mt-5">
            First, we need to collect some information about your existing trust
          </h1>
          <h3 className="mb-1 mt-5 font-bold">
            What is the name of your existing trust?
          </h3>
          <div className="w-[100%]">
            <input
              type="text"
              name="what_is_the_name_of_your_existing_trust"
              value={
                data?.personalInfo
                  ?.first_we_need_to_collect_some_information_about_your_existing_trust
                  ?.what_is_the_name_of_your_existing_trust
              }
              onChange={handleFirst_we_need_Change}
              class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
              placeholder='Make sure to include "The" (e.g. The George and Martha WashingtonLiving Trust.) or the Benjamin Franklin Revocable Trust.")'
              required
            />
            <p className="text-xs mt-1">
              Remember, you cannot make changes to an "irrevocable" trust absent
              certain permission in the trust. For example, if you created a
              trust with your spouse and he or she died. Look for language in
              the trust that allows you, as the surviving spouse (sometimes
              called the trustmaker, settlor, grantor, or trustor) to make
              changes to the trust. Sometimes you can make all the changes you
              want, sometimes you cannot, and sometimes you can, but only to a
              portion of the trust.{' '}
            </p>
          </div>
          <div className="mb-2 mt-3 flex">
            <div className="mr-3 w-[50%]">
              <h3 className="mb-1 font-bold">
                What is the date you signed your existing trust?
              </h3>
              <DatePicker
                className="border bg-white border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full outline-none"
                value={
                  data?.personalInfo
                    ?.first_we_need_to_collect_some_information_about_your_existing_trust
                    .what_is_the_date_you_signed_your_existing_trust
                }
                name={'what_is_the_date_you_signed_your_existing_trust'}
                onChange={(date) => handleDate_Change(date)}
              />
              <p className="text-xs mt-1">
                If the date is not shown as part of the name of the trust, then
                it will be the date that you signed the trust.
              </p>
            </div>
            <div className="w-[50%]">
              <h3 className="mb-1 mt-2 font-bold">
                After you signed your trust, did you ever amend it?
              </h3>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    checked={
                      data?.personalInfo
                        ?.first_we_need_to_collect_some_information_about_your_existing_trust
                        .after_you_signed_your_trust_did_you_ever_amend_it[0]
                        .value
                    }
                    onChange={() => handleTrueFalse1(0)}
                    className="form-radio h-5 w-5 text-blue-500"
                  />
                  <span className="ml-2 text-gray-700">
                    {
                      data?.personalInfo
                        ?.first_we_need_to_collect_some_information_about_your_existing_trust
                        .after_you_signed_your_trust_did_you_ever_amend_it[0]
                        .label
                    }
                  </span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    checked={
                      data?.personalInfo
                        ?.first_we_need_to_collect_some_information_about_your_existing_trust
                        .after_you_signed_your_trust_did_you_ever_amend_it[1]
                        .value
                    }
                    onChange={() => handleTrueFalse1(1)}
                    className="form-radio h-5 w-5 text-blue-500"
                  />
                  <span className="ml-2 text-gray-700">
                    {
                      data?.personalInfo
                        ?.first_we_need_to_collect_some_information_about_your_existing_trust
                        .after_you_signed_your_trust_did_you_ever_amend_it[1]
                        .label
                    }
                  </span>
                </label>
              </div>
            </div>
          </div>
          <h3 className="mb-1 mt-3 font-bold">
            Locate the paragraph or section number in your existing trust
            agreement that allows you to make amendments to your trust write the
            location below.
          </h3>
          <div className="w-[100%]">
            <input
              type="text"
              name="locate_the_paragraph_or_section_number_in_your_existing_trust_agreement_that_allows_you_to_make_amendments_to_your_trust_write_the_location_below"
              value={
                data?.personalInfo
                  ?.first_we_need_to_collect_some_information_about_your_existing_trust
                  ?.locate_the_paragraph_or_section_number_in_your_existing_trust_agreement_that_allows_you_to_make_amendments_to_your_trust_write_the_location_below
              }
              onChange={handleFirst_we_need_Change}
              class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
              placeholder=""
              required
            />
            <p className="text-xs mt-1">
              Make sure to include "Section" or Paragraph" before the number.
              E.g., "Section 2.1"
            </p>
          </div>
          <div className="w-full">
            <h3 className="mb-1 mt-2 font-bold">
              Have you amended your Trust before?
            </h3>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={
                    data?.personalInfo
                      ?.first_we_need_to_collect_some_information_about_your_existing_trust
                      .have_you_amended_your_Trust_before[0].value
                  }
                  onChange={() => handleTrueFalse2(0)}
                  className="form-radio h-5 w-5 text-blue-500"
                />
                <span className="ml-2 text-gray-700">
                  {
                    data?.personalInfo
                      ?.first_we_need_to_collect_some_information_about_your_existing_trust
                      .have_you_amended_your_Trust_before[0].label
                  }
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={
                    data?.personalInfo
                      ?.first_we_need_to_collect_some_information_about_your_existing_trust
                      .have_you_amended_your_Trust_before[1].value
                  }
                  onChange={() => handleTrueFalse2(1)}
                  className="form-radio h-5 w-5 text-blue-500"
                />
                <span className="ml-2 text-gray-700">
                  {
                    data?.personalInfo
                      ?.first_we_need_to_collect_some_information_about_your_existing_trust
                      .have_you_amended_your_Trust_before[1].label
                  }
                </span>
              </label>
            </div>
          </div>
          <div className="mb-5 mt-3 flex">
            <div className="mr-3 w-[50%]">
              <h3 className="mb-1 font-bold">
                What month you will sign the document(s) you are creating?
              </h3>
              <div class="w-full relative inline-flex">
                <select
                  class="w-full appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="what_month_you_will_sign_the_document_you_are_creating"
                  value={
                    data?.personalInfo
                      ?.first_we_need_to_collect_some_information_about_your_existing_trust
                      .what_month_you_will_sign_the_document_you_are_creating
                  }
                  onChange={handleFirst_we_need_Change}
                >
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12.586l4.293-4.293a1 1 0 011.414 0l.707.707a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l.707-.707a1 1 0 011.414 0L10 12.586z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-[50%]">
              <h3 className="mb-1 font-bold">
                On what day of the month will you sign your documents
              </h3>
              <div class="w-full relative inline-flex">
                <select
                  class="w-full appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="on_what_day_of_the_month_will_you_sign_your_documents"
                  value={
                    data?.personalInfo
                      ?.first_we_need_to_collect_some_information_about_your_existing_trust
                      .on_what_day_of_the_month_will_you_sign_your_documents
                  }
                  onChange={handleFirst_we_need_Change}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12.586l4.293-4.293a1 1 0 011.414 0l.707.707a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l.707-.707a1 1 0 011.414 0L10 12.586z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {data.personalInfo.creatingTrustType.options[0].value && (
        <>
          <h1 className="mt-3 font-bold text-lg">
            Creating your new revocable living trust.
          </h1>
          <h3 className="mb-1 font-bold">
            {/* What do you want to name your trust? */}
            {data.personalInfo.what_do_you_want_to_name_your_trust.question}
          </h3>
          <div className="space-y-4">
            <label className="flex items-center">
              <input
                type="radio"
                checked={
                  data.personalInfo.what_do_you_want_to_name_your_trust
                    .options[0].value
                }
                onChange={() => what_do_you_want_to_name_your_trust(0)}
                className="form-radio h-5 w-5 text-blue-500"
                name="radio-option"
                value="option1"
              />
              <span className="ml-2 text-gray-700">
                {
                  data.personalInfo.what_do_you_want_to_name_your_trust
                    .options[0].label
                }
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={
                  data.personalInfo.what_do_you_want_to_name_your_trust
                    .options[1].value
                }
                onChange={() => what_do_you_want_to_name_your_trust(1)}
                className="form-radio h-5 w-5 text-blue-500"
                name="radio-option"
                value="option2"
              />
              <span className="ml-2 text-gray-700">
                {
                  data.personalInfo.what_do_you_want_to_name_your_trust
                    .options[1].label
                }
              </span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={
                  data.personalInfo.what_do_you_want_to_name_your_trust
                    .options[2].value
                }
                onChange={() => what_do_you_want_to_name_your_trust(2)}
                className="form-radio h-5 w-5 text-blue-500"
                name="radio-option"
                value="option3"
              />
              <span className="ml-2 text-gray-700">
                {
                  data.personalInfo.what_do_you_want_to_name_your_trust
                    .options[2].label
                }
              </span>
            </label>
          </div>
        </>
      )}
      <h1 className="mb-1 mt-5 text-2xl font-bold text-center">
        INITIAL TRUSTEE
      </h1>
      <h3 className="mb-1 font-bold">
        {data.personalInfo.initialTrustee.question}
      </h3>
      <div className="space-y-4 mb-5">
        <label className="flex items-center">
          <input
            type="radio"
            checked={data.personalInfo.initialTrustee.options[0].value}
            onChange={() => initialTrustee(0)}
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option1"
          />
          <span className="ml-2 text-gray-700">
            {data.personalInfo.initialTrustee.options[0].label}
          </span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            checked={data.personalInfo.initialTrustee.options[1].value}
            onChange={() => initialTrustee(1)}
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option2"
          />
          <span className="ml-2 text-gray-700">
            {data.personalInfo.initialTrustee.options[1].label}
          </span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            checked={data.personalInfo.initialTrustee.options[2].value}
            onChange={() => initialTrustee(2)}
            className="form-radio h-5 w-5 text-blue-500"
            name="radio-option"
            value="option3"
          />
          <span className="ml-2 text-gray-700">
            {data.personalInfo.initialTrustee.options[2].label}
          </span>
        </label>
      </div>
      {data.personalInfo.initialTrustee.options[1].value && (
        <>
          <h1 className="text-lg font-bold mt-5">Co-Trustee</h1>
          <div className="mb-2 flex">
            <div className="mr-2 w-[33%]">
              <input
                type="text"
                name="firstName"
                value={data?.personalInfo?.coTrustee?.firstName}
                onChange={handleCoTrustee}
                class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
                placeholder="First Name"
                required
              />
            </div>
            <div className="mr-2 w-[33%]">
              <input
                type="text"
                name="middleName"
                value={data?.personalInfo?.coTrustee?.middleName}
                onChange={handleCoTrustee}
                class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
                placeholder="Middle Name"
                required
              />
            </div>
            <div className="w-[33%]">
              <input
                type="text"
                name="lastName"
                value={data?.personalInfo?.coTrustee?.lastName}
                onChange={handleCoTrustee}
                class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
        </>
      )}
      {data.personalInfo.initialTrustee.options[2].value && (
        <div>
          {data.personalInfo.coTrustees.map((item, i) => (
            <div
              key={i}
              className={`${
                i % 2 === 0 ? 'bg-slate-200' : ''
              } p-5 rounded-lg mb-3`}
            >
              <div>
                <i
                  className="far fa-times-circle cursor-pointer"
                  onClick={() => removeCoTrustee(i)}
                ></i>
                <span className="font-bold ml-3">Co-Trustee {i + 1}</span>
              </div>
              <h3 className="mb-1 font-bold">Name</h3>
              <div className="mb-2 flex">
                <input
                  type="text"
                  value={item.firstName}
                  name={'firstName'}
                  onChange={(e) =>
                    handleCoTrustees(i, e.target.name, e.target.value)
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
                    handleCoTrustees(i, e.target.name, e.target.value)
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
                    handleCoTrustees(i, e.target.name, e.target.value)
                  }
                  className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-[33%]"
                  placeholder="Last"
                  required
                />
              </div>
              <div>
                <h3 className="mb-1 font-bold">Relationship</h3>
                <input
                  type="text"
                  value={item.relationship}
                  name={'relationship'}
                  onChange={(e) =>
                    handleCoTrustees(i, e.target.name, e.target.value)
                  }
                  className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
                  placeholder="brother, friend, sister, mom, uncle, etc."
                  required
                />
              </div>
            </div>
          ))}
          <div className="mt-2">
            <button
              className="border border-gray-500 text-gray-500 font-bold py-2 px-4 rounded"
              onClick={() => addCoTrustee()}
            >
              Add Co-Trustee
            </button>
          </div>
        </div>
      )}
      {!notActionBtns && (
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
            onClick={() => handleNext()}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Step4;
